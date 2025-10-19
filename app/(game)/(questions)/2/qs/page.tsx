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

export default function QuestionPage() {
  const router = useRouter();
  const [hints, setHints] = useState([false, false, false]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [zoomImage, setZoomImage] = useState<number | null>(null);

  const question =
    "I am Emperor Theodosius. My friends also share the same deficiency as me. Their total number carries the key that will free my soul. My soul, rising to the sky in agony, is trapped in the stone heart of a hieroglyph. Find the hieroglyph and free my soul.";

  const hintData = [
    "Examine all the statues on the four sides at the base of the obelisk. Those who share the same deficiency are companions of the same fate.",
    "Count those who share the same deficiency as the emperor, so you understand how many friends he has.",
    "Count the hieroglyphs on the side where the emperor with the deficiency is located, from bottom to top, as many as his friends. This way you can find the hieroglyph where the emperor's soul is trapped.",
  ];

  const options = [1, 2, 3, 4, 5, 6, 7, 8];

  const openHint = (index: number) => {
    if (index === 0 || hints[index - 1]) {
      const newHints = [...hints];
      newHints[index] = true;
      setHints(newHints);
    }
  };

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);

    if (option === 6) {
      setIsSuccess(true);
      setCountdown(4);
    } else {
      setIsError(true);
    }
  };

  // Countdown effect for success
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      router.push("/2/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Question 2
          </h1>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
            {question}
          </p>

          {/* Options Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-6 text-center">
              Select the correct hieroglyph:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {options.map((option) => (
                <div
                  key={option}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 group ${
                    selectedOption === option
                      ? option === 6
                        ? "border-green-400 ring-2 ring-green-400"
                        : "border-red-400 ring-2 ring-red-400"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <Image
                    src={`/opt/2/${option}.jpg`}
                    alt={`Hieroglyph ${option}`}
                    fill
                    className="object-contain bg-black/50 p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={100}
                    unoptimized={true}
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
            onClick={() => router.push("/2/location")}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-3 px-8"
          >
            ← Back to Location
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
                Hieroglyph {zoomImage} - Detailed View
              </DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-full flex items-center justify-center">
              {zoomImage && (
                <Image
                  src={`/opt/2/${zoomImage}.jpg`}
                  alt={`Hieroglyph ${zoomImage} - Detailed`}
                  fill
                  className="object-contain"
                  quality={100}
                  unoptimized={true}
                />
              )}
            </div>
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => setZoomImage(null)}
                className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
              >
                Close
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
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  You found the correct hieroglyph! Emperor Theodosius's soul is
                  free.
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
                Wrong Choice!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  This hieroglyph is not correct. Use the hints and try again.
                </p>
                <Button
                  onClick={() => setIsError(false)}
                  className="mt-4 bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-2 px-6"
                >
                  Try Again
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
