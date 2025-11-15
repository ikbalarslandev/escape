"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  FaTimesCircle,
  FaArrowLeft,
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
    "For kitchen fire we created a pipe for smoke, which chimney has the pipe?";

  const hintData = [
    "Focus on the bigger chimneys. You are trying to find one of them.",
    "Look at the holes on the chimneys. If smoke flows there then it paints it to the black",
    "The correct chimney has metal barriers around one hole. From there smoke flows",
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

    if (option === 1) {
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
      router.push("/pagan-cross-crescent/5/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
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

            {/* Options Grid */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Select the correct chimney:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {options.map((option) => (
                  <div
                    key={option}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 group ${
                      selectedOption === option
                        ? option === 1
                          ? "border-secondary-400 ring-2 ring-secondary-400"
                          : "border-red-400 ring-2 ring-red-400"
                        : "border-primary-500 hover:border-secondary-400"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <Image
                      src={`/opt/5/chimney-${option}.jpg`}
                      alt={`Chimney ${option}`}
                      fill
                      className="object-contain bg-primary-900 p-2"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={100}
                      unoptimized={true}
                    />
                    <div className="absolute bottom-2 left-2 bg-primary-800 bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {option}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            onClick={() => router.push("/pagan-cross-crescent/5/location")}
            variant="outline"
            className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900 font-semibold py-3 px-6 transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Location
          </Button>
        </div>

        {/* Zoom Modal */}
        <Dialog
          open={zoomImage !== null}
          onOpenChange={() => setZoomImage(null)}
        >
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-4xl w-[90vw] h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">
                Chimney {zoomImage} - Detailed View
              </DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-full flex items-center justify-center">
              {zoomImage && (
                <Image
                  src={`/opt/5/chimney-${zoomImage}.jpg`}
                  alt={`Chimney ${zoomImage} - Detailed`}
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
                className="bg-secondary-500 hover:bg-secondary-600 text-white"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-secondary-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Correct!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  Yes! The first chimney has the smoke pipe with metal barriers.
                </p>
                <Card className="bg-primary-700 border-primary-500">
                  <CardContent className="p-4">
                    <p className="text-lg font-semibold text-center">
                      Continuing your journey in {countdown} seconds...
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

        {/* Error Dialog */}
        <Dialog open={isError} onOpenChange={setIsError}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-red-400 justify-center">
                <FaTimesCircle className="mr-3" />
                Wrong Chimney!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  This chimney doesn&apos;t have the smoke pipe. Check the hints
                  and try again.
                </p>
                <Button
                  onClick={() => setIsError(false)}
                  className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2 px-6 w-full"
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
