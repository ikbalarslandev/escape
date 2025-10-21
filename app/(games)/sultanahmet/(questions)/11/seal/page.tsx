"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GiMeditation, GiWatchtower, GiCrossedChains } from "react-icons/gi";

export default function SealPage() {
  const router = useRouter();
  const [selectedObjects, setSelectedObjects] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const question =
    "Theme: Faith in God, worship, humility, spirituality\n\nSelect the correct 2 objects to create the Seal of Humility:";

  const objects = [
    {
      id: "minare",
      name: "Minaret Top",
      icon: GiWatchtower,
      gradient: "from-blue-500 to-purple-700",
      description: "Everyone being equal before God",
      correct: true,
    },
    {
      id: "zincir",
      name: "Chain Link",
      icon: GiCrossedChains,
      gradient: "from-gray-600 to-gray-900",
      description: "The sultan bowing before God, symbol of humility",
      correct: true,
    },
  ];

  const correctObjects = objects.filter((obj) => obj.correct);
  const correctIds = correctObjects.map((obj) => obj.id);

  const handleObjectClick = (objectId: string) => {
    if (selectedObjects.includes(objectId)) {
      setSelectedObjects(selectedObjects.filter((id) => id !== objectId));
    } else if (selectedObjects.length < 2) {
      setSelectedObjects([...selectedObjects, objectId]);
    }
  };

  const checkSeal = () => {
    if (selectedObjects.length !== 2) {
      setIsError(true);
      return;
    }

    const isCorrect =
      selectedObjects.every((id) => correctIds.includes(id)) &&
      selectedObjects.length === correctIds.length;

    if (isCorrect) {
      setIsSuccess(true);
      setCountdown(10);
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
      router.push("/11/seal_final"); // You can change this route to wherever you want to redirect after completion
    }
  }, [isSuccess, countdown, router]);

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white tracking-wider">
            Seal of Humility
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-6">
            Create the third seal
          </p>
        </header>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="whitespace-pre-line text-xl text-gray-200 font-light leading-relaxed mb-8">
            {question}
          </div>

          {/* Objects Grid - Single Column */}
          <div className="mb-8 space-y-4">
            {objects.map((object) => (
              <div
                key={object.id}
                className={`relative rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300  ${
                  selectedObjects.includes(object.id)
                    ? "border-blue-400 ring-2 ring-blue-400 bg-white/20"
                    : "border-white/20 hover:border-white/40 bg-white/5"
                }`}
                onClick={() => handleObjectClick(object.id)}
              >
                <div className="flex items-center flex-col justify-center space-x-4 ">
                  <div
                    className={`bg-gradient-to-br ${object.gradient} border border-white rounded-lg p-4 w-20 h-20 flex items-center justify-center shadow-lg `}
                  >
                    <object.icon className="text-white text-3xl" />
                  </div>
                  <div className="flex-1  flex flex-col items-center">
                    <h3 className="text-lg font-serif font-bold text-white mb-2">
                      {object.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {object.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={checkSeal}
              disabled={selectedObjects.length !== 2}
              className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Seal ({selectedObjects.length}/2)
            </Button>
          </div>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 [&>button]:hidden border-white/20 text-white  h-[90vh] md:h-auto overflow-y-auto">
            <DialogHeader className=" bg-gray-800 z-10 pb-4">
              <DialogTitle className="text-2xl flex items-center text-green-400 justify-center">
                Seal of Humility Created!
              </DialogTitle>
            </DialogHeader>
            <div className="text-gray-200 text-lg">
              <div className="space-y-6">
                {/* Seal Icon */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-600 border-4 border-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-4">
                    <GiMeditation className="text-white text-5xl" />
                  </div>
                  <p className="text-xl font-serif font-bold text-white">
                    Seal of Humility
                  </p>
                  <p className="text-gray-300 mt-2">
                    Symbol of faith in God, worship and spirituality
                  </p>
                </div>

                <p className="text-center font-semibold">
                  Congratulations! You successfully created the Seal of
                  Humility. 🙏
                </p>

                <div className="space-y-3 mt-6">
                  {correctObjects.map((object) => (
                    <div
                      key={object.id}
                      className="flex items-center space-x-4 bg-white/5 rounded-lg p-4"
                    >
                      <div
                        className={`bg-gradient-to-br ${object.gradient} border border-white rounded-lg p-3 w-16 h-16 flex items-center justify-center shadow-lg`}
                      >
                        <object.icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-sm">
                          {object.name}
                        </h4>
                        <p className="text-gray-300 text-xs mt-1">
                          {object.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-lg font-semibold text-center">
                    Redirecting to the next section in {countdown} seconds...
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(countdown / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Error Dialog */}
        <Dialog open={isError} onOpenChange={setIsError}>
          <DialogContent className="bg-gray-800 border-white/20 text-white ">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center text-red-400 justify-center">
                <GiMeditation className="mr-3" />
                Wrong Selection!
              </DialogTitle>
              <div className="text-gray-200 text-lg mt-4 text-center">
                <p>
                  The objects you selected do not create the Seal of Humility.
                  Please select objects that represent faith in God, worship,
                  humility and spirituality.
                </p>
                <Button
                  onClick={() => setIsError(false)}
                  className="mt-4 bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold py-2 px-6"
                >
                  Try Again
                </Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
