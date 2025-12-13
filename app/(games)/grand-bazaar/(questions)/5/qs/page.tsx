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
import { Card, CardContent } from "@/components/ui/card";
import {
  FaLightbulb,
  FaLock,
  FaLockOpen,
  FaCheckCircle,
  FaArrowLeft,
  FaGolfBall,
  FaStore,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";

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

  const question = "What is the number of the store has this shelf on it?";

  const hintData = [
    "It's not in a jewelery Store",
    "Its in the top shelf not the bottom",
    "You can see it from outside of the store",
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
    if (normalizedAnswer === "42") {
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
      router.push("/grand-bazaar/5/info");
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

            {/* Golf Ball Image */}
            <div className="mb-6 rounded-lg overflow-hidden border border-primary-500 bg-primary-900">
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/qs-imgs/grand-bazaar/qs/5.png"
                  alt="Golf ball inside the store - look for the store number"
                  fill
                  className="object-contain p-4 z-10"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-10"></div>
              </div>
              <div className="bg-primary-800 p-3 text-center border-t border-primary-600">
                <p className="text-primary-300 text-sm flex items-center justify-center">
                  <FaGolfBall className="mr-2 text-secondary-400" />
                  Look for the store number where this shelf is displayed
                </p>
              </div>
            </div>

            {/* Location Context */}
            <Card className="bg-primary-700 border-primary-500 mb-6">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-secondary-400 mb-2 flex items-center">
                  <FaStore className="mr-2" />
                  Inside Cevahir Bedesteni
                </h3>
                <p className="text-primary-100 text-sm">
                  Explore the stores inside Cevahir Bedesteni. The shelf is
                  visible in one of the store displays.
                </p>
              </CardContent>
            </Card>

            {/* Answer Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="answer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-white">
                        Store Number:
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Input
                            {...field}
                            placeholder="Enter the store number..."
                            className="flex-1 bg-primary-700 border-primary-500 text-white placeholder-primary-300 text-base md:text-lg py-4 px-4 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-400"
                            disabled={isSubmitting}
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-6 md:px-8 text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-w-[140px]"
                          >
                            {isSubmitting ? (
                              "Checking..."
                            ) : (
                              <>
                                Submit
                                <IoIosSend className="ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-300 text-base" />
                    </FormItem>
                  )}
                />
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
              Hints open in order. You cannot open the next hint without seeing
              the previous one.
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/grand-bazaar/5/location")}
            variant="outline"
            className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900 font-semibold py-3 px-6 transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Location
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-secondary-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Correct!
              </DialogTitle>
              <DialogDescription asChild>
                <div className="text-primary-200 text-lg mt-4 text-center space-y-4">
                  <p>
                    Well done! You found Store Number 42 with the golf ball
                    display.
                  </p>
                  <Card className="bg-primary-700 border-primary-500">
                    <CardContent className="p-4">
                      <p className="text-lg font-semibold text-center">
                        Moving to next location in {countdown} seconds...
                      </p>
                      <div className="w-full bg-primary-600 rounded-full h-2 mt-3">
                        <div
                          className="bg-secondary-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${((4 - countdown) / 4) * 100}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
