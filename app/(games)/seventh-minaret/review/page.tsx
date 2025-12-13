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
import {
  FaStar,
  FaGoogle,
  FaCheckCircle,
  FaCamera,
  FaPenFancy,
} from "react-icons/fa";

export default function ReviewPage() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Countdown effect for success
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      router.push("/seventh-minaret/2/location");
    }
  }, [isSuccess, countdown, router]);

  const openGoogleReview = () => {
    window.open("https://g.page/r/CTciO_6NFN0XEBI/review", "_blank");
    setIsSuccess(true); // Show success dialog after opening review
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">We Need Your Support!</h1>
          <p className="text-lg text-gray-300 mb-6">
            Your personal feedback helps us tremendously and allows us to keep
            creating amazing experiences.
          </p>
        </header>

        {/* Step Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGoogle className="text-white text-2xl" />
            </div>

            <h2 className="text-2xl font-bold mb-2">Leave a Google Review</h2>
            <p className="text-gray-300 mb-4">
              Your review shows Google that we&apos;re providing great
              experiences!
            </p>

            <div className="space-y-4">
              {/* Card: Write a message */}
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4">
                <h3 className="font-bold text-yellow-200 mb-2 flex items-center justify-center">
                  <FaPenFancy className="mr-2" />
                  Write a Few Words
                </h3>
                <p className="text-yellow-200 text-sm text-center">
                  Please write a message about your visit. Reviews with{" "}
                  <span className="font-bold">personal comments</span> help
                  others understand what makes your experience special and count{" "}
                  <span className="font-bold">3x more</span> than just star
                  ratings!
                </p>
              </div>

              {/* Card: Add photos */}
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4">
                <h3 className="font-bold text-yellow-200 mb-2 flex items-center justify-center">
                  <FaCamera className="mr-2" />
                  Photos Make a Huge Difference!
                </h3>
                <p className="text-yellow-200 text-sm text-center">
                  When you add photos to your review, it becomes{" "}
                  <span className="font-bold">5x more valuable</span> to us!
                  Photos show the real experience and help convince others to
                  visit.
                </p>
              </div>
            </div>

            <Button
              onClick={openGoogleReview}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300"
            >
              <FaGoogle className="mr-3" />
              Write Google Review
            </Button>

            <button
              onClick={() => router.push("/seventh-minaret/2/location")}
              className="text-gray-400 text-sm underline mt-4"
            >
              I&apos;ll do this later
            </button>
          </div>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-gray-800 [&>button]:hidden border-white/20 text-white max-w-md">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-xl flex items-center text-green-400 justify-center">
                <FaCheckCircle className="mr-2" />
                Thank You! 🎉
              </DialogTitle>
            </DialogHeader>

            <div className="text-gray-200 text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 border-4 border-white rounded-full mx-auto flex items-center justify-center">
                <FaStar className="text-white text-3xl" />
              </div>

              <p className="font-bold text-white">
                You&apos;re Amazing! Thank You!
              </p>

              <p className="text-sm">
                Your personal support means the world to us. Because of guests
                like you, we can continue creating magical experiences for
                everyone.
              </p>

              <div className="p-3 bg-white/10 rounded-lg">
                <p className="font-semibold text-sm">
                  Closing in {countdown} seconds...
                </p>
                <div className="w-full bg-white/20 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-green-400 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${(countdown / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
