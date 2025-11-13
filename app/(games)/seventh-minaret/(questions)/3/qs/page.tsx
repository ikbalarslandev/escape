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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
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
  const [isMinaretInfoOpen, setIsMinaretInfoOpen] = useState(false);

  const question =
    "The Blue Mosque has a perfect and balanced design. What is the ratio between all the minarets on the main building and the ones next to the main entrance gate?";

  const hintData = [
    "First count all the minarets, then count the ones by the main gate. The ones near the gate are part of the whole.",
    "The main building has 4 minarets at its corners.",
    "There are 2 minarets in the courtyard.",
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

    // Accept various forms of "2" answer
    const correctAnswers = ["2", "two", "2/1", "2:1", "2/1", "2 units"];

    if (correctAnswers.includes(normalizedAnswer)) {
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
      router.push("/seventh-minaret/3/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
              Question 3
            </h1>
            <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          </div>
          <p className="text-lg md:text-xl text-primary-200 font-light max-w-2xl mx-auto">
            Solve the architectural puzzle
          </p>
        </header>

        {/* Question Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Question */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 mr-3"></div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Question
                </h2>
              </div>
              <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                {question}
              </p>
            </div>

            {/* Minaret Information Dropdown */}
            <Collapsible
              open={isMinaretInfoOpen}
              onOpenChange={setIsMinaretInfoOpen}
              className="mb-6"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-primary-700 hover:bg-primary-600 border-primary-500 text-white flex justify-between items-center py-3 px-4"
                >
                  <span className="font-semibold">What is a Minaret?</span>
                  {isMinaretInfoOpen ? <FaChevronUp /> : <FaChevronDown />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 bg-primary-700/50 rounded-lg p-4 border border-primary-500">
                <div className="space-y-3 text-primary-200">
                  <p>
                    <strong className="text-white">Minaret</strong> is a tall
                    tower located next to mosques.
                  </p>

                  <p>
                    It typically has one or more balconies. People climb up to
                    these balconies to announce the prayer times to the public.
                  </p>

                  <div className="bg-primary-600/50 rounded-lg p-3 mt-2">
                    <p className="text-sm text-white">
                      <strong>How does it work?</strong>
                    </p>
                    <ul className="text-sm mt-2 space-y-1 list-disc list-inside text-primary-200">
                      <li>
                        When prayer time arrives, someone climbs to the minarets
                        balcony
                      </li>
                      <li>
                        They sing a special song which is call to prayer (adhan)
                        loudly
                      </li>
                      <li>
                        This call informs people that the prayer time has come
                      </li>
                    </ul>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

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
                        Your Answer:
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-4">
                          <Input
                            {...field}
                            placeholder="Write your answer here..."
                            className="flex-1 bg-primary-700 border-primary-500 text-white placeholder-primary-300 text-lg py-6 px-4 focus:border-secondary-400 focus:ring-secondary-400"
                            disabled={isSubmitting}
                          />
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-6 px-8 transition-all duration-300 shadow-lg"
                          >
                            {isSubmitting ? (
                              "Checking..."
                            ) : (
                              <IoIosSend className="text-xl" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-300 text-lg" />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Hints Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 mr-3"></div>
              <h3 className="text-xl font-semibold text-white flex items-center">
                <FaLightbulb className="mr-2 text-secondary-400" />
                HINTS
              </h3>
            </div>

            <div className="space-y-4">
              {hintData.map((hint, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    hints[index]
                      ? "bg-primary-700/50 border-secondary-400"
                      : "bg-primary-700 border-primary-500 hover:bg-primary-600"
                  } ${
                    index > 0 && !hints[index - 1]
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() =>
                    (index === 0 || hints[index - 1]) &&
                    !hints[index] &&
                    openHint(index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {hints[index] ? (
                        <span className="text-primary-200 text-lg">{hint}</span>
                      ) : (
                        <span className="text-primary-300 text-lg">
                          Hint {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="text-primary-300">
                      {hints[index] ? (
                        <FaLockOpen className="text-green-400" />
                      ) : (
                        <FaLock
                          className={
                            index > 0 && !hints[index - 1]
                              ? "text-red-400"
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
              Hints open sequentially. You cannot open the next hint without
              seeing the previous one.
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/8/location")}
            variant="outline"
            className="border-primary-500 text-primary-200 hover:bg-primary-700 hover:text-white font-semibold py-3 px-6 transition-all duration-300"
          >
            ← Back to Location
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Unlock the secrets of architecture...
          </p>
        </footer>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center">
                <p>
                  Correct answer! The ratio is 2. (Ratio of 4 minarets to 2)
                </p>
                <div className="mt-4 p-4 bg-primary-700/50 rounded-lg">
                  <p className="text-lg font-semibold text-white">
                    You will be redirected in {countdown} seconds...
                  </p>
                  <div className="w-full bg-primary-600 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((4 - countdown) / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
