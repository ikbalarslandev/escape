// app/[id]/qs/ImageQsClientPage.tsx (CLIENT COMPONENT)
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  FaTimesCircle,
} from "react-icons/fa";
import { ISection, IImageQs } from "@/types";

interface Props {
  section: ISection;
}

export default function ImageQs({ section }: Props) {
  const router = useRouter();
  const [hints, setHints] = useState<boolean[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Type guard to ensure it's an image question
  const question = section.question as IImageQs;

  // Initialize hints based on the current question
  useEffect(() => {
    setHints(new Array(question.hints.length).fill(false));
  }, [section.id, question.hints.length]);

  const openHint = (index: number) => {
    if (index === 0 || hints[index - 1]) {
      const newHints = [...hints];
      newHints[index] = true;
      setHints(newHints);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    if (option === question.answer) {
      setIsSuccess(true);
      setCountdown(4);
    } else {
      setIsError(true);
    }
  };

  // Function to determine next page URL
  const getNextPageUrl = (currentId: number): string => {
    if (section.info) {
      return `/${currentId}/info`;
    }
    return `/${currentId + 1}/location`;
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

  // Handle manual navigation
  const goToNextPage = () => {
    const nextPage = getNextPageUrl(section.id);
    router.push(nextPage);
  };

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Soru {section.id}
          </h1>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
            {question.qs}
          </p>

          {/* Options Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              Doğru seçeneği seçin:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {question.options.map((option, index) => (
                <div
                  key={option}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 group ${
                    selectedOption === option
                      ? option === question.answer
                        ? "border-green-400 ring-2 ring-green-400"
                        : "border-red-400 ring-2 ring-red-400"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <Image
                    src={option}
                    alt={`Seçenek ${index + 1}`}
                    fill
                    className="object-contain bg-black/50 p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={100}
                  />
                </div>
              ))}
            </div>
          </div>

          <hr className="mt-12" />

          {/* Hints Section */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/20 mt-8">
            <h3 className="text-xl font-serif font-bold text-white mb-6 flex items-center">
              <FaLightbulb className="mr-3 text-yellow-400" />
              İPUÇLARI
            </h3>

            <div className="space-y-4">
              {question.hints.map((hint, index) => (
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
            onClick={() => router.push(`/${section.id}/location`)}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Lokasyona Dön
          </Button>
        </div>

        {/* Zoom Modal */}
        <Dialog
          open={zoomImage !== null}
          onOpenChange={() => setZoomImage(null)}
        >
          <DialogContent className="bg-gray-800 border-white/20 text-white max-w-4xl w-[90vw] h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">
                Seçenek {zoomImage} - Detaylı Görünüm
              </DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-full flex items-center justify-center">
              {zoomImage && (
                <Image
                  src={`/opt/${section.id}/${zoomImage}.jpg`}
                  alt={`Seçenek ${zoomImage} - Detaylı`}
                  fill
                  className="object-contain"
                  quality={100}
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setZoomImage(null)}
                className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
              >
                Kapat
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 border-white/20 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Tebrikler!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>Doğru seçeneği buldunuz!</p>
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
                <Button
                  onClick={goToNextPage}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                >
                  Hemen İlerle
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Error Dialog */}
        <Dialog open={isError} onOpenChange={setIsError}>
          <DialogContent className="bg-gray-800 border-white/20 text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-red-400 justify-center">
                <FaTimesCircle className="mr-3" />
                Yanlış Seçim!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  Bu seçenek doğru değil. İpuçlarını kullanarak tekrar deneyin.
                </p>
                <Button
                  onClick={() => setIsError(false)}
                  className="mt-4 bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-2 px-6"
                >
                  Tekrar Dene
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
