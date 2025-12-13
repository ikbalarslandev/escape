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
  FaVolumeUp,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

// Form validation schema
const formSchema = z.object({
  answer: z.string().min(1, "Answer cannot be empty"),
});

export default function FinalQuestionPage() {
  const router = useRouter();
  const [hints, setHints] = useState([false, false, false]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (audioFile: string) => {
    if (isPlaying) return;

    setIsPlaying(true);
    const audio = new Audio(audioFile);

    audio.play().catch((error) => {
      console.log("Audio file could not be played:", error);
      setIsPlaying(false);
    });

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  const question =
    "Let the king guide you. The first audio file taught you the code for the letter 'R'. Now listen to the second audio file and find the encrypted word.";

  const hintData = [
    "The German King left a message on a metal sign. This message will help you find the secret word.",
    "Listen carefully to the first audio file. It shows you the position of the 'R' letter and the confirmation sound that appears when you find the letter.",
    "After finding each letter, a specific sound is made. Focus on this to determine how many letters are in the word.",
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

    // Normalize the answer: uppercase and trim
    const normalizedAnswer = values.answer.toUpperCase().trim();

    // Accept various forms of "BIR" answer
    const correctAnswers = ["BIR", "BİR", "BIR ", "BİR "];

    if (correctAnswers.includes(normalizedAnswer)) {
      setIsSuccess(true);
      setCountdown(5);
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
      router.push("/seventh-minaret/7/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
              Final Question
            </h1>
            <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          </div>
          <p className="text-lg md:text-xl text-primary-200 font-light max-w-2xl mx-auto">
            Almost done
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
                  Audio Challenge
                </h2>
              </div>
              <p className="text-primary-200 leading-relaxed text-base md:text-lg">
                {question}
              </p>
            </div>

            {/* Audio Files Section */}
            <Card className="bg-primary-700/50 border-primary-500 mb-6">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-4">
                  <FaVolumeUp className="text-secondary-400 mr-2" />
                  <h3 className="text-lg font-semibold text-white">
                    AUDIO FILES
                  </h3>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <Button
                    disabled={isPlaying}
                    onClick={() => playAudio("/opt/12/Letter (R).mp3")}
                    className="bg-secondary-500/20 hover:bg-secondary-500/30 border-secondary-400 text-white font-semibold py-3 px-6 transition-all duration-300"
                  >
                    <FaVolumeUp className="mr-2" />R Letter Sound
                  </Button>
                  <Button
                    disabled={isPlaying}
                    onClick={() => playAudio("/opt/12/Word (BIR).mp3")}
                    className="bg-secondary-500/20 hover:bg-secondary-500/30 border-secondary-400 text-white font-semibold py-3 px-6 transition-all duration-300"
                  >
                    <FaVolumeUp className="mr-2" />
                    Word Sound
                  </Button>
                </div>
                <p className="text-primary-400 text-sm mt-3 italic">
                  Listen to the audio files carefully and decode the password
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
                        Encrypted Word:
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-4">
                          <Input
                            {...field}
                            placeholder="Enter the word here..."
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
              Hints unlock sequentially. You cannot open the next hint without
              seeing the previous one.
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/final-location")}
            variant="outline"
            className="border-primary-500 text-primary-200 hover:bg-primary-700 hover:text-white font-semibold py-3 px-6 transition-all duration-300"
          >
            ← Back to Location
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-300 font-light italic text-sm md:text-base">
            Decode the audio mystery to complete your journey...
          </p>
        </footer>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Great Success!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center">
                <p>Congratulations! You have activated all seals!</p>
                <p className="mt-2">
                  Code: <strong className="text-secondary-400">BIR</strong>
                </p>
                <div className="mt-4 p-4 bg-primary-700/50 rounded-lg">
                  <p className="text-lg font-semibold text-white">
                    Redirecting to results page in {countdown} seconds...
                  </p>
                  <div className="w-full bg-primary-600 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((5 - countdown) / 5) * 100}%` }}
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
