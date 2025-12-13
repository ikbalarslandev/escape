"use client";

import { useState, useEffect, useCallback } from "react";
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
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { ISection, IAudioQs } from "@/types";

// Form validation schema
const formSchema = z.object({
  answer: z.string().min(1, "Cevap boş olamaz"),
});

interface Props {
  section: ISection & {
    question: IAudioQs;
  };
}

export default function AudioQs({ section }: Props) {
  const router = useRouter();
  const [hints, setHints] = useState<boolean[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [isPlayingExample, setIsPlayingExample] = useState(false);
  const [isPlayingMystery, setIsPlayingMystery] = useState(false);
  const [exampleAudio, setExampleAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [mysteryAudio, setMysteryAudio] = useState<HTMLAudioElement | null>(
    null
  );

  // Initialize hints based on the current question
  useEffect(() => {
    setHints(new Array(section.question.hints.length).fill(false));
  }, [section.id, section.question.hints.length]);

  // Initialize audio elements
  useEffect(() => {
    if (section.question.audios) {
      const example = new Audio(section.question.audios.example.route);
      const mystery = new Audio(section.question.audios.mystery_route);

      // Set up event listeners for audio end
      const handleExampleEnd = () => setIsPlayingExample(false);
      const handleMysteryEnd = () => setIsPlayingMystery(false);

      example.addEventListener("ended", handleExampleEnd);
      mystery.addEventListener("ended", handleMysteryEnd);

      setExampleAudio(example);
      setMysteryAudio(mystery);

      // Cleanup function
      return () => {
        example.removeEventListener("ended", handleExampleEnd);
        mystery.removeEventListener("ended", handleMysteryEnd);
        example.pause();
        mystery.pause();
      };
    }
  }, [section.id, section.question.audios]);

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

  const toggleExampleAudio = () => {
    if (exampleAudio && !isPlayingExample) {
      // Stop mystery audio if playing
      if (isPlayingMystery && mysteryAudio) {
        mysteryAudio.pause();
        mysteryAudio.currentTime = 0;
        setIsPlayingMystery(false);
      }

      // Play example audio
      exampleAudio.currentTime = 0;
      exampleAudio.play();
      setIsPlayingExample(true);
    }
  };

  const toggleMysteryAudio = () => {
    if (mysteryAudio && !isPlayingMystery) {
      // Stop example audio if playing
      if (isPlayingExample && exampleAudio) {
        exampleAudio.pause();
        exampleAudio.currentTime = 0;
        setIsPlayingExample(false);
      }

      // Play mystery audio
      mysteryAudio.currentTime = 0;
      mysteryAudio.play();
      setIsPlayingMystery(true);
    }
  };

  const stopAllAudio = useCallback(() => {
    if (exampleAudio) {
      exampleAudio.pause();
      exampleAudio.currentTime = 0;
      setIsPlayingExample(false);
    }

    if (mysteryAudio) {
      mysteryAudio.pause();
      mysteryAudio.currentTime = 0;
      setIsPlayingMystery(false);
    }
  }, [exampleAudio, mysteryAudio, setIsPlayingExample, setIsPlayingMystery]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Normalize the answer: lowercase and trim
    const normalizedAnswer = values.answer.toLowerCase().trim();

    // Check if answer is correct
    if (normalizedAnswer === section.question.answer.toLowerCase()) {
      setIsSuccess(true);
      setCountdown(4);
    } else {
      form.setError("answer", {
        type: "manual",
        message:
          "Cevap yanlış! Lütfen tekrar deneyin veya ipuçlarını kullanın.",
      });
    }

    setIsSubmitting(false);
  };
  // Function to determine next page URL
  const getNextPageUrl = (currentId: number): string => {
    if (section.info) {
      return `/t/${currentId}/info`;
    }

    return `/t/${currentId + 1}/location`;
  };
  // Countdown effect for success
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      // Navigate to next page (info if exists, otherwise next location)
      const nextPage = getNextPageUrl(section.id);
      router.push(nextPage);
    }
  }, [isSuccess, countdown, router, section.id, getNextPageUrl]);

  // Stop audio when component unmounts
  useEffect(() => {
    return () => {
      stopAllAudio();
    };
  }, [stopAllAudio]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Soru {section.id}
          </h1>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
            {section.question.qs}
          </p>

          {/* Audio Players */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Example Audio */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                Örnek Ses - &quot;{section.question.audios.example.answer}&quot;
                Harfi
              </h3>
              <Button
                onClick={toggleExampleAudio}
                disabled={isPlayingExample}
                className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlayingExample ? <FaPause /> : <FaPlay />}
                {isPlayingExample ? "Çalıyor..." : "Örnek Ses Çal"}
              </Button>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Bu ses &quot;{section.question.audios.example.answer}&quot;
                harfinin nasıl bulunacağını gösteriyor
              </p>
            </div>

            {/* Mystery Audio */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                Gizemli Ses
              </h3>
              <Button
                onClick={toggleMysteryAudio}
                disabled={isPlayingMystery}
                className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPlayingMystery ? <FaPause /> : <FaPlay />}
                {isPlayingMystery ? "Çalıyor..." : "Gizemli Ses Çal"}
              </Button>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Bu sesi çözerek şifrelenmiş kelimeyi bulun
              </p>
            </div>
          </div>

          {/* Stop All Audio Button */}
          {(isPlayingExample || isPlayingMystery) && (
            <div className="flex justify-center mb-6">
              <Button
                onClick={stopAllAudio}
                variant="outline"
                className="bg-red-500/20 hover:bg-red-500/30 border-red-400 text-white font-bold py-2 px-6 transition-all duration-300"
              >
                Tüm Sesleri Durdur
              </Button>
            </div>
          )}

          {/* Answer Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-white">
                      Cevabınız:
                    </FormLabel>
                    <FormControl>
                      <div className="flex gap-4">
                        <Input
                          {...field}
                          placeholder="Cevabınızı buraya yazın..."
                          className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400 text-lg py-6 px-4 focus:border-white/40"
                          disabled={isSubmitting}
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-6 px-8 transition-all duration-300"
                        >
                          {isSubmitting ? "Kontrol..." : <IoIosSend />}
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
              İPUÇLARI
            </h3>

            <div className="space-y-4">
              {section.question.hints.map((hint, index) => (
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
                          {index + 1}. İpucu
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
              İpuçları sırayla açılır. Önceki ipucunu görmeden sonrakini
              açamazsınız.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => {
              stopAllAudio();
              router.push(`/${section.id}/location`);
            }}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Lokasyona Dön
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 border-white/20 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Tebrikler!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  Doğru cevap! &quot;{section.question.answer}&quot;ı buldunuz.
                </p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <p className="text-lg font-semibold">
                    {countdown} saniye içinde yönlendiriliyorsunuz...
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(countdown / 4) * 100}%` }}
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
