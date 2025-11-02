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

  const question =
    "I am the Serpent Column. The place where the blue poison drips is the north of your journey. From there, go in the direction my height points to now. The antidote tree is waiting for you. Which tree is the antidote tree?";

  const hintData = [
    "Look under the monument, where it touches the ground, to follow the poison’s trail.",
    "Think of the direction where the poison flows as 12 o’clock. Using this, which direction does the Serpent Column’s current height point to?",
    "5.5 meters... This is not a height measurement, but a direction guide. Proceed in this direction, it will lead you to the correct tree.",
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

    if (option === 4) {
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
      router.push("/hipodrom/3/info");
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Question 3
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
              Select the correct tree:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {options.map((option) => (
                <div
                  key={option}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                    selectedOption === option
                      ? option === 4
                        ? "border-green-400 ring-2 ring-green-400"
                        : "border-red-400 ring-2 ring-red-400"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <Image
                    src={`/opt/3/${option}.jpg`}
                    alt={`Tree ${option}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
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
              Hints unlock sequentially. You cannot open the next hint without
              seeing the previous one.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => router.push("/3/location")}
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
                Congratulations!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  You found the correct tree! You selected the antidote tree.
                </p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <p className="text-lg font-semibold">
                    Redirecting in {countdown}...
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
          <DialogContent className="bg-gray-800 border-white/20 text-white ">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-red-400 justify-center">
                <FaTimesCircle className="mr-3" />
                Wrong Choice!
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg mt-4 text-center">
                <p>This tree is not correct. Use the hints and try again.</p>
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
