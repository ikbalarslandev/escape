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
  answer: z.string().min(1, "Cevap boş olamaz"),
});

export default function QuestionPage() {
  const router = useRouter();
  const [hints, setHints] = useState([false, false, false]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(4);

  const question =
    "Düşersem kırılırım, içim sarı ve beyazdır. Burada benden kaç tane var?";

  const hintData = [
    "Henüz çok küçüğüm ve yuvamdan pek ayrılmam.",
    "Annem, dunyanin en buyuk kusudur.",
    "Işıklar içinde parlamayı çok severim.",
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

    // Accept various forms of "12" answer
    const correctAnswers = ["28"];

    if (correctAnswers.includes(normalizedAnswer)) {
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

  // Countdown effect
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      router.push("/10/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Soru 10
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
            onClick={() => router.push("/10/location")}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Lokasyona Dön
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 border-white/20 text-white ">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Tebrikler!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center ">
                <p>Doğru cevap! 28 tane var.</p>
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
