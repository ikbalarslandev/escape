"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const question =
    "Cemberlitas is standing at number 12 keep walking towards to number 10 to find the red path. At the end of the path you will see the holly tree. Which fruit does it have?";

  const hintData = [
    "Numbers are representing directions from the manual clock.",
    "Red path is a hallway at the end you will find the place with trees",
    "The tree which you are trying to find is connected to metal.",
  ];

  const options = [
    "Grape",
    "Apple",
    "Date",
    "Cherry",
    "Orange",
    "Fig",
    "Chestnut",
    "Black pepper",
  ];

  const openHint = (index: number) => {
    if (index === 0 || hints[index - 1]) {
      const newHints = [...hints];
      newHints[index] = true;
      setHints(newHints);
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    if (option === "Grape") {
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
      router.push("/pagan-cross-crescent/2/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light mb-2 text-white">
            Question 2
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
                Select the correct fruit:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {options.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className={`h-16 md:h-20 border-2 text-base md:text-lg font-medium transition-all duration-300  ${
                      selectedOption === option
                        ? option === "Grape"
                          ? "border-secondary-400 bg-secondary-400 bg-opacity-20 text-secondary-400"
                          : "border-red-400 bg-red-400 bg-opacity-20 text-red-400"
                        : "border-primary-400 bg-primary-700 text-primary-200 hover:border-secondary-400 hover:text-secondary-400"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </Button>
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
            onClick={() => router.push("/pagan-cross-crescent/2/location")}
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
                Correct!
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  Yes! The holy tree bears grapes. You found the right path.
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
                Incorrect Fruit
              </DialogTitle>
              <DialogDescription className="text-primary-200 text-lg mt-4 text-center space-y-4">
                <p>
                  That&apos;s not the fruit of the holy tree. Check the hints
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
