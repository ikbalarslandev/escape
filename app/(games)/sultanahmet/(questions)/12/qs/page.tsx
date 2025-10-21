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

  const question =
    "Let the king guide you. The first audio file taught you the code for the letter 'R'. Now listen to the second audio file and find the encrypted word.";

  const hintData = [
    "The code is hidden in the metal cast inscription on the German Fountain.",
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

  const playAudio = (audioFile: string) => {
    const audio = new Audio(audioFile);
    audio.play().catch((error) => {
      console.log("Audio file could not be played:", error);
    });
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
      router.push("/12/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Final Question
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            Time to activate all seals
          </p>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
            {question}
          </p>

          {/* Audio Files Section */}
          <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center">
              <FaVolumeUp className="mr-3 text-blue-400" />
              AUDIO FILES
            </h3>
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => playAudio("/opt/12/Letter (R).mp3")}
                className="bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/30 text-white font-bold py-3 px-6 transition-all duration-300"
              >
                <FaVolumeUp className="mr-2" />
                Listen to R Letter Sound
              </Button>
              <Button
                onClick={() => playAudio("/opt/12/Word (BIR).mp3")}
                className="bg-green-500/20 hover:bg-green-500/30 border-green-400/30 text-white font-bold py-3 px-6 transition-all duration-300"
              >
                <FaVolumeUp className="mr-2" />
                Listen to Word Sound
              </Button>
            </div>
            <p className="text-gray-400 text-sm mt-3 italic">
              Listen to the audio files carefully and decode the password
            </p>
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
                      Encrypted Word:
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Input
                          {...field}
                          placeholder="Enter the word here..."
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
            onClick={() => router.push("/final-location")}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Back to Location
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 border-white/20 text-white ">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Great Success!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center ">
                <p>Congratulations! You have activated all seals!</p>
                <p className="mt-2">
                  Code: <strong>BIR</strong>
                </p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <p className="text-lg font-semibold">
                    Redirecting to results page in {countdown} seconds...
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(countdown / 5) * 100}%` }}
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
