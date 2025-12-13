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
  FaPaw,
  FaHashtag,
} from "react-icons/fa";

export default function QuestionPage() {
  const router = useRouter();
  const [hints, setHints] = useState([false, false, false]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [selectedAnimal, setSelectedAnimal] = useState<number | null>(null);
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<"animal" | "count">("animal");
  const [zoomImage, setZoomImage] = useState<number | null>(null);

  const question =
    "First, identify which animal you can see. Then, count how many of that animal you can see around the area.";

  const hintData = [
    "Look around carefully. Don't look at only the store",
    "Look at the rocks",
    "Look at the door",
  ];

  const animalOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const countOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  const openHint = (index: number) => {
    if (index === 0 || hints[index - 1]) {
      const newHints = [...hints];
      newHints[index] = true;
      setHints(newHints);
    }
  };

  const handleAnimalSelect = (animal: number) => {
    setSelectedAnimal(animal);
    setCurrentStep("count");
  };

  const handleCountSelect = (count: number) => {
    setSelectedCount(count);

    // Check both answers: animal should be 3, count should be 5
    if (selectedAnimal === 5 && count === 3) {
      setIsSuccess(true);
      setCountdown(4);
    } else {
      setIsError(true);
    }
  };

  const resetSelection = () => {
    setSelectedAnimal(null);
    setSelectedCount(null);
    setCurrentStep("animal");
    setIsError(false);
  };

  // Countdown effect for success
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      router.push("/grand-bazaar/4/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
            Question 4
          </h1>
          <div className="w-20 h-1 bg-secondary-400 mx-auto mb-4"></div>
        </header>

        {/* Progress Indicator */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center ${
                  currentStep === "animal"
                    ? "text-secondary-400"
                    : "text-primary-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                    currentStep === "animal"
                      ? "bg-secondary-400 text-primary-900"
                      : "bg-primary-600 text-primary-300"
                  }`}
                >
                  1
                </div>
                <span className="font-semibold">Identify Animal</span>
              </div>
              <div className="flex-1 h-1 bg-primary-600 mx-4"></div>
              <div
                className={`flex items-center ${
                  currentStep === "count"
                    ? "text-secondary-400"
                    : "text-primary-300"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                    currentStep === "count"
                      ? "bg-secondary-400 text-primary-900"
                      : "bg-primary-600 text-primary-300"
                  }`}
                >
                  2
                </div>
                <span className="font-semibold">Count Animals</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card className="border border-primary-600 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-6">
              {question}
            </p>

            {/* Step 1: Animal Selection */}
            {currentStep === "animal" && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FaPaw className="mr-2 text-secondary-400" />
                  Step 1: Which animal can you see around Store 49?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {animalOptions.map((option) => (
                    <div
                      key={option}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                        selectedAnimal === option
                          ? "border-secondary-400 ring-2 ring-secondary-400"
                          : "border-primary-500 hover:border-secondary-400"
                      }`}
                      onClick={() => handleAnimalSelect(option)}
                    >
                      <Image
                        src={`/qs-imgs/grand-bazaar/qs/options/4/${option}.png`}
                        alt={`Animal option ${option}`}
                        fill
                        className="object-contain bg-primary-900 p-2"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        quality={100}
                      />
                      <div className="absolute bottom-2 right-2 bg-primary-800 bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Count Selection */}
            {currentStep === "count" && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FaHashtag className="mr-2 text-secondary-400" />
                  Step 2: How many of this animal can you see around the area?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {countOptions.map((option) => (
                    <div
                      key={option}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                        selectedCount === option
                          ? "border-secondary-400 ring-2 ring-secondary-400"
                          : "border-primary-500 hover:border-secondary-400"
                      }`}
                      onClick={() => handleCountSelect(option)}
                    >
                      <div className="w-full h-full bg-primary-700 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                          {option}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-primary-800 bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected Animal Preview */}
                {selectedAnimal && (
                  <Card className="bg-primary-700 border-primary-500 mt-6">
                    <CardContent className="p-4">
                      <h4 className="text-md font-semibold text-secondary-400 mb-2">
                        Selected Animal:
                      </h4>
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-primary-400">
                        <Image
                          src={`/qs-imgs/grand-bazaar/qs/options/4/${selectedAnimal}.png`}
                          alt={`Selected animal ${selectedAnimal}`}
                          fill
                          className="object-contain"
                          quality={100}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Navigation between steps */}
            {currentStep === "count" && (
              <div className="flex justify-start mt-4">
                <Button
                  onClick={() => setCurrentStep("animal")}
                  variant="outline"
                  className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900"
                >
                  ← Back to Animal Selection
                </Button>
              </div>
            )}
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
            onClick={() => router.push("/grand-bazaar/4/location")}
            variant="outline"
            className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900 font-semibold py-3 px-6 transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Location
          </Button>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-secondary-400 justify-center">
                <FaCheckCircle className="mr-3" />
                Perfect!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  Excellent! You correctly identified the animal and counted 3
                  of them around the area.
                </p>
                <Card className="bg-primary-700 border-primary-500">
                  <CardContent className="p-4">
                    <p className="text-lg font-semibold text-center">
                      Moving to next in {countdown} seconds...
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
                Incorrect Combination
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  The animal and count combination is not correct. Please try
                  again.
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={resetSelection}
                    className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2 px-4 flex-1"
                  >
                    Start Over
                  </Button>
                  <Button
                    onClick={() => setIsError(false)}
                    variant="outline"
                    className="border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-primary-900 font-semibold py-2 px-4 flex-1"
                  >
                    Try Again
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
