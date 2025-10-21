"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaLightbulb, FaLock, FaLockOpen, FaCheckCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

// Form validation schema
const formSchema = z.object({
  answer1: z.string().min(1, "First answer cannot be empty"),
  answer2: z.string().min(1, "Second answer cannot be empty"),
});

export default function QuestionPage() {
  const router = useRouter();
  const [hints, setHints] = useState([false, false, false]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(4);

  const question =
    "Let the cut-off water show you the inscription. What were the 2 things that used to be on me in the past?";

  const hintData = [
    "Carefully follow the stone wall of this ancient hippodrome. During your search, you'll encounter a structure where water should normally flow but is now silent and dry. This is your first stop.",
    "Stop at this point where the water has been cut off. Right beside it, you'll see an official explanatory text that sheds light on the past. This text will give you the information you need to trace the lost pieces.",
    "Read the information panel next to you carefully. The text mentions two large buildings that no longer exist but were once located here. The answer you're looking for is written there.",
  ];

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer1: "",
      answer2: "",
    },
  });

  const openHint = (index: number) => {
    if (index === 0 || hints[index - 1]) {
      const newHints = [...hints];
      newHints[index] = true;
      setHints(newHints);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Normalize the answers: lowercase and trim
    const normalizedAnswer1 = values.answer1.toLowerCase().trim();
    const normalizedAnswer2 = values.answer2.toLowerCase().trim();

    // Check if answers are correct (accepts different order)
    const answers = [normalizedAnswer1, normalizedAnswer2];
    const hasHamam =
      answers.includes("hamam") ||
      answers.includes("bath") ||
      answers.includes("bathhouse");
    const hasHaddehane =
      answers.includes("haddehane") ||
      answers.includes("forge") ||
      answers.includes("ironworks");

    if (hasHamam && hasHaddehane) {
      setIsSuccess(true);
      setCountdown(4);
    } else {
      form.setError("answer1", {
        type: "manual",
        message: "Wrong answer! Please try again or use the hints.",
      });
      form.setError("answer2", {
        type: "manual",
        message: "Wrong answer! Please try again or use the hints.",
      });
    }

    setIsSubmitting(false);
  };

  // Countdown effect
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      router.push("/5/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Question 5
          </h1>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
            {question}
          </p>

          {/* Answer Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Answer Input */}
                <FormField
                  control={form.control}
                  name="answer1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-white">
                        1. Answer:
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter first answer..."
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6 px-4 focus:border-white/40"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-lg" />
                    </FormItem>
                  )}
                />

                {/* Second Answer Input */}
                <FormField
                  control={form.control}
                  name="answer2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-white">
                        2. Answer:
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter second answer..."
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6 px-4 focus:border-white/40"
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-lg" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-12 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  {isSubmitting ? (
                    "Checking..."
                  ) : (
                    <>
                      <IoIosSend className="text-xl" />
                      Submit
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <hr className="mt-12" />
          {/* Hints Section */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/20 mt-8">
            <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center">
              <FaLightbulb className="mr-3 text-yellow-400" />
              HINTS
            </h3>

            <div className="space-y-4">
              {hintData.map((hint, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    hints[index]
                      ? "bg-white/10 border-white/40"
                      : "bg-white/5 border-white/20 cursor-pointer hover:bg-white/10"
                  }`}
                  onClick={() => !hints[index] && openHint(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {hints[index] ? (
                        <span className="text-gray-200 text-lg">{hint}</span>
                      ) : (
                        <span className="text-gray-400 text-lg">
                          Hint {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-400">
                      {hints[index] ? (
                        <FaLockOpen className="text-green-400" />
                      ) : (
                        <FaLock
                          className={
                            index > 0 && !hints[index - 1] ? "text-red-400" : ""
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm mt-4 italic">
              Hints unlock sequentially. You cannot open the next hint without
              seeing the previous one.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/5/location")}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Back to Location
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={() => {}}>
          <DialogContent className="bg-gray-800 border-white/20 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Congratulations!
              </DialogTitle>
              <div className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  Correct answer! &quot;Hamam&quot; and &quot;Haddehane&quot;.
                </p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <p className="text-lg font-semibold">
                    Redirecting in {countdown}...
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(countdown / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
