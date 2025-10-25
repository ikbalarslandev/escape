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
  FaVideo,
  FaWhatsapp,
  FaGoogle,
  FaCheckCircle,
  FaCamera,
  FaChevronDown,
  FaChevronUp,
  FaPenFancy,
} from "react-icons/fa";

export default function ReviewPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isInspirationOpen, setIsInspirationOpen] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Review",
      description: "with photos",
    },
    { number: 2, title: "Testimonial", description: "30-second" },
  ];

  const videoInspirations = [
    {
      title: "Simple & Enthusiastic",
      scripts: [
        "That was such an amazing experience! Solving puzzles right in the heart of Old City was so much fun!",
        "We just finished the city escape game  it was incredible! You solve clues, explore beautiful spots, and learn history at the same time!",
        "What a unique adventure! Every puzzle led us to another part of Istanbul’s Old City it felt like a treasure hunt through history!",
      ],
    },
    {
      title: "For Friends & Groups",
      scripts: [
        "We played as a group of friends and had the best time exploring Old City! Every clue made us laugh and think together.",
        "Such a great activity for friends or family! We discovered new places in the Old City while solving fun puzzles.",
        "Perfect for tourists and locals! It’s like sightseeing, but with teamwork and challenges  we loved it!",
      ],
    },
    {
      title: "Highlighting Specifics",
      scripts: [
        "I loved how each puzzle was connected to Istanbul’s history. After solving one, you actually learn the story behind that building!",
        "The attention to detail was incredible  every clue had meaning and taught us something new about the city.",
        "The mix of fun puzzles and cultural stories made it unforgettable. We learned, laughed, and explored all at once!",
      ],
    },
    {
      title: "Emotional & Personal",
      scripts: [
        "This was more than just a game it made me appreciate Istanbul’s history in a whole new way.",
        "Walking around Old City solving clues with friends felt magical. It’s a memory we’ll never forget.",
        "As a traveler, this was the perfect way to discover the city — interactive, fun, and full of surprises!",
      ],
    },
  ];

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setIsSuccess(true);
    setCountdown(3);
  };

  // Countdown effect for success
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      router.push("/sultanahmet/5/location");
    }
  }, [isSuccess, countdown, router]);

  const openGoogleReview = () => {
    window.open(
      "https://www.google.com/maps/place/Nikapolis+Outdoor+Escape+Experience/@41.0195955,28.9855282,12z/data=!3m1!4b1!4m3!3m2!1s0x897e879a133773bb:0x17dd148dfe3b2237!16s%2Fg%2F11zjyq9jhh?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
    handleNextStep();
  };

  const openWhatsApp = () => {
    const phoneNumber = "+905524260406";
    const message =
      "Hello! I've recorded my testimonial video for the escape game experience!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    handleComplete();
  };

  const openExampleVideo = () => {
    window.open("https://www.youtube.com/watch?v=Nt8wPYdP_2o", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">We Need Your Support!</h1>
          <p className="text-lg text-gray-300 mb-6">
            Your personal feedback helps us tremendously and allows us to keep
            creating amazing experiences
          </p>
        </header>

        {/* Progress Steps */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      currentStep >= step.number
                        ? "bg-green-500 border-green-500"
                        : "border-white/40"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <FaCheckCircle className="text-white text-lg" />
                    ) : (
                      <span className="text-sm font-bold">{step.number}</span>
                    )}
                  </div>
                  <div className="text-center mt-2">
                    <p className="font-semibold text-xs">{step.title}</p>
                    <p className="text-gray-300 text-xs mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      currentStep > step.number ? "bg-green-500" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          {/* Step 1: Google Review */}
          {currentStep === 1 && (
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
                    others understand what makes your experience special and
                    count <span className="font-bold">3x more</span> than just
                    star ratings!
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
                onClick={handleNextStep}
                className="text-gray-400 text-sm underline mt-4"
              >
                I&apos;ll do this later
              </button>
            </div>
          )}

          {/* Step 2: Video Testimonial */}
          {currentStep === 2 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaVideo className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Record a Video Testimonial
              </h2>
              <p className="text-gray-300 mb-4">
                Your short video helps us show the real experience to future
                visitors and it&apos;s incredibly valuable to our small
                business!
              </p>

              <div className="space-y-4">
                {/* Example Video */}
                <div className="bg-white/5 rounded-lg p-4">
                  <a
                    href="https://www.youtube.com/watch?v=Nt8wPYdP_2o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full  bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-full text-center transition-all duration-300"
                  >
                    Watch Example Video
                  </a>
                </div>

                {/* Inspiration Dropdown */}
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setIsInspirationOpen(!isInspirationOpen)}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="font-bold text-sm">
                      Need inspiration? Click for ideas
                    </span>
                    {isInspirationOpen ? (
                      <FaChevronUp className="text-gray-400" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </button>

                  {isInspirationOpen && (
                    <div className="p-4 border-t border-white/10 space-y-4 max-h-60 overflow-y-auto">
                      {videoInspirations.map((category, index) => (
                        <div key={index} className="text-left">
                          <h4 className="font-bold text-green-400 text-sm mb-2">
                            {category.title}
                          </h4>
                          <div className="space-y-2">
                            {category.scripts.map((script, scriptIndex) => (
                              <div
                                key={scriptIndex}
                                className="text-xs text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-green-400/30 transition-colors duration-200"
                              >
                                &quot;{script}&quot;
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Recording Guide */}
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
                  <h3 className="font-bold text-green-200 mb-2">
                    Quick Recording Tips:
                  </h3>
                  <ul className="text-green-200 text-sm text-left space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">📱</span>
                      <span>Use your phone&apos;s camera app (horizontal)</span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2">⏱️</span>
                      <span>
                        Keep it around 30 seconds - 1 minute, just share your
                        genuine thoughts
                      </span>
                    </li>

                    <li className="flex items-start">
                      <span className="mr-2">🌍</span>
                      <span>
                        Please mention your{" "}
                        <span className="font-bold">nationality</span> in the
                        video (e.g. &quot;I&apos;m from Italy&quot; or
                        &quot;I&apos;m Turkish&quot;)
                      </span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Instructions */}
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-sm mb-2">
                    Ready to Share Your Experience?
                  </h3>
                  <p className="text-gray-300 text-xs mb-3">
                    we can&apos;t wait to see your video!
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4 rounded-full transition-all duration-300"
                  >
                    <FaWhatsapp className="mr-3 text-xl" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-gray-400 text-xs mt-2">
                    We&apos;ll guide you through sending the video if needed
                  </p>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(1)}
                className="text-gray-400 text-sm underline"
              >
                Back to Google Review
              </button>
            </div>
          )}
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
                    style={{ width: `${(countdown / 3) * 100}%` }}
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
