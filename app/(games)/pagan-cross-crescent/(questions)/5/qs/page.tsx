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
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  FaLightbulb,
  FaLock,
  FaLockOpen,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
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
    "Let the stopped water show you the writing. What are the two things that used to be on in the past";

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
      answers.includes("rolling mill") ||
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
      router.push("/hippodrome/5/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
            Question 5
          </h1>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mb-4"></div>
        </header>

        {/* Question Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-6">
              {question}
            </p>

            {/* Answer Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                            className="bg-primary-700 border-primary-500 text-white placeholder-primary-300 text-base md:text-lg py-4 px-4 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-400"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300 text-base" />
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
                            className="bg-primary-700 border-primary-500 text-white placeholder-primary-300 text-base md:text-lg py-4 px-4 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-400"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage className="text-red-300 text-base" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
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
          </CardContent>
        </Card>

        {/* Hints Section */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <FaLightbulb className="mr-3 text-secondary-400" />
              HINTS
            </h3>

            <div className="space-y-4">
              {hintData.map((hint, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    hints[index]
                      ? "bg-primary-700 border-secondary-400"
                      : "bg-primary-900 border-primary-500 hover:bg-primary-700"
                  } ${
                    index > 0 && !hints[index - 1]
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => !hints[index] && openHint(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {hints[index] ? (
                        <span className="text-primary-100 text-base md:text-lg">
                          {hint}
                        </span>
                      ) : (
                        <span className="text-primary-400 text-base md:text-lg">
                          Hint {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="text-primary-400">
                      {hints[index] ? (
                        <FaLockOpen className="text-secondary-400" />
                      ) : (
                        <FaLock
                          className={
                            index > 0 && !hints[index - 1]
                              ? "text-primary-600"
                              : "text-primary-400"
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-primary-400 text-sm mt-4 italic">
              Hints unlock sequentially. You cannot open the next hint without
              seeing the previous one.
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/hippodrome/5/location")}
            variant="outline"
            className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900 font-semibold py-3 px-6 transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Location
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-secondary-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  Correct answer! &quot;Hamam&quot; and &quot;Haddehane&quot;.
                </p>
                <Card className="bg-primary-700 border-primary-500">
                  <CardContent className="p-4">
                    <p className="text-lg font-semibold text-center">
                      Redirecting in {countdown}...
                    </p>
                    <div className="w-full bg-primary-600 rounded-full h-2 mt-3">
                      <div
                        className="bg-secondary-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((4 - countdown) / 4) * 100}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
