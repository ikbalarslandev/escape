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
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaLightbulb, FaLock, FaLockOpen, FaCheckCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

// Form validation schema
const formSchema = z.object({
  answer: z.string().min(1, "Answer cannot be empty"),
});

export default function QuestionPage() {
  const router = useRouter();
  const [hints, setHints] = useState([false, false, false]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [showSpinaInfo, setShowSpinaInfo] = useState(false);

  const question =
    "The spina is my home. I am getting light from three different directions at night. I sit on the heads of three animals. What am I?";

  const hintData = [
    "These 3 animals are all snakes.",
    "The snakes are no longer there",
    "I am 5.5 meters tall",
  ];

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: "",
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

    // Normalize the answer: lowercase and trim
    const normalizedAnswer = values.answer.toLowerCase().trim();

    // Check if answer is correct
    if (normalizedAnswer === "gold boiler") {
      setIsSuccess(true);
      setCountdown(4);
    } else {
      form.setError("answer", {
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
      router.push("/hipodrom/1/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Question 1
          </h1>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
            {question}
          </p>

          {/* Spina Info Button */}
          <div className="mb-6">
            <Button
              onClick={() => setShowSpinaInfo(true)}
              className="bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/30 text-white font-bold py-3 px-6 transition-all duration-300"
            >
              What is Spina?
            </Button>
          </div>

          {/* Answer Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-white">
                      Your Answer:
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Input
                          {...field}
                          placeholder="Write your answer here..."
                          className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6 px-4 focus:border-white/40"
                          disabled={isSubmitting}
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-6 px-8 transition-all duration-300"
                        >
                          {isSubmitting ? "Checking..." : <IoIosSend />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-300 text-lg" />
                  </FormItem>
                )}
              />
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
              Hints open in order. You cannot open the next hint without seeing
              the previous one.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/hipodrom/1/location")}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Back to Location
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 border-white/20 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Congratulations!
              </DialogTitle>
              <DialogDescription asChild>
                <div className="text-gray-200 text-lg mt-4 text-center">
                  <p>
                    Correct answer! You found the &quot;Serpent Column&quot;.
                  </p>
                  <div className="mt-4 p-4 bg-white/10 rounded-lg">
                    <p className="text-lg font-semibold">
                      Redirecting in {countdown} seconds...
                    </p>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                      <div
                        className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(countdown / 4) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Spina Info Dialog */}
        <Dialog open={showSpinaInfo} onOpenChange={setShowSpinaInfo}>
          <DialogContent className="bg-gray-800 border-white/20 text-white ">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-blue-400 justify-center">
                What is Spina?
              </DialogTitle>
              <DialogDescription asChild>
                <div className="text-gray-200 text-lg mt-4 space-y-4">
                  <p>
                    Spina is a line which has towers on it. It is located in the
                    middle of the hippodrome.
                  </p>
                  <p>
                    In horse races, horses were running around it. There used to
                    be many things on the spina, but only 3 of them lasted until
                    today.
                  </p>
                  <div className="bg-white/10 p-4 rounded-lg mt-4">
                    <img
                      src="/q_imgs/1/spina.png"
                      alt="Spina with towers"
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-gray-400 text-sm mt-2 text-center">
                      The spina with its towers in the middle of hippodrome
                    </p>
                  </div>
                  <p>
                    If you look at the area today, you can still see these 3
                    towers on the spina. In the question, it says &quot;spina is
                    my home&quot; - this means the answer is on one of these 3
                    towers.
                  </p>
                  <p className="font-semibold text-blue-300">
                    Check each of the 3 towers carefully to find the correct
                    one!
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
