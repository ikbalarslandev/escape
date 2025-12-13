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
import { FaStar, FaCheckCircle, FaCamera, FaPenFancy } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";

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
      router.push("/hippodrome/2/location");
    }
  }, [isSuccess, countdown, router]);

  const openGoogleReview = () => {
    window.open(
      "https://www.tripadvisor.com/Attraction_Review-g293974-d34026318-Reviews-Nikapolis_Hippodrome-Istanbul.html",
      "_blank"
    );
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-md">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-3xl font-light text-white">
              We Need Your Support!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-400 mx-auto mb-4"></div>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Your personal feedback helps us tremendously and allows us to keep
            creating amazing experiences.
          </p>
        </header>

        {/* Main Content Card */}
        <div className="border border-primary-600 bg-primary-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <SiTripadvisor className="text-white text-2xl" />
            </div>

            <h2 className="text-2xl font-light text-white mb-2">
              Leave a Review
            </h2>
            <p className="text-primary-200 mb-4">
              Your review shows Tripadvisor that we&apos;re providing great
              experiences!
            </p>

            <div className="space-y-4">
              {/* Write Message Card */}
              <div className="bg-secondary-500/20 border border-secondary-500 rounded-lg p-4">
                <h3 className="font-semibold text-secondary-300 mb-2 flex items-center justify-center">
                  <FaPenFancy className="mr-2" />
                  Write a Few Words
                </h3>
                <p className="text-secondary-200 text-sm text-center">
                  Please write a message about your visit. Reviews with{" "}
                  <span className="font-bold">personal comments</span> help
                  others understand what makes your experience special and count{" "}
                  <span className="font-bold">3x more</span> than just star
                  ratings!
                </p>
              </div>

              {/* Add Photos Card */}
              <div className="bg-secondary-500/20 border border-secondary-500 rounded-lg p-4">
                <h3 className="font-semibold text-secondary-300 mb-2 flex items-center justify-center">
                  <FaCamera className="mr-2" />
                  Photos Make a Huge Difference!
                </h3>
                <p className="text-secondary-200 text-sm text-center">
                  When you add photos to your review, it becomes{" "}
                  <span className="font-bold">5x more valuable</span> to us!
                  Photos show the real experience and help convince others to
                  visit.
                </p>
              </div>
            </div>

            <Button
              onClick={openGoogleReview}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <SiTripadvisor className="mr-3" />
              Write a Tripadvisor Review
            </Button>

            <button
              onClick={() => router.push("/hippodrome/2/location")}
              className="text-primary-300 text-sm underline mt-4 hover:text-primary-200 transition-colors"
            >
              I&apos;ll do this later
            </button>
          </div>
        </div>

        {/* Success Dialog */}
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="bg-primary-800 border-primary-600 text-white max-w-md [&>button]:text-white [&>button]:hover:text-primary-200">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-xl flex items-center text-secondary-400 justify-center">
                <FaCheckCircle className="mr-2" />
                Thank You! 🎉
              </DialogTitle>
            </DialogHeader>

            <div className="text-primary-200 text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-primary-600 border-4 border-white rounded-full mx-auto flex items-center justify-center">
                <FaStar className="text-white text-3xl" />
              </div>

              <p className="font-semibold text-white text-lg">
                You&apos;re Amazing! Thank You!
              </p>

              <p className="text-sm">
                Your personal support means the world to us. Because of guests
                like you, we can continue creating magical experiences for
                everyone.
              </p>

              <div className="p-3 bg-primary-700/50 rounded-lg border border-primary-600">
                <p className="font-semibold text-sm text-secondary-300">
                  Closing in {countdown} seconds...
                </p>
                <div className="w-full bg-primary-600 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-secondary-400 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${(countdown / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Footer */}
        <footer className="text-center mt-8">
          <p className="text-primary-300 font-light italic text-sm">
            Your feedback helps preserve ancient history for future
            generations...
          </p>
        </footer>
      </div>
    </div>
  );
}
