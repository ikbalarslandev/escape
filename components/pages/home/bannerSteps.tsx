import { LuCalendarCheck } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPuzzlePiece } from "react-icons/fa";

const BannerStepsSection = () => {
  const steps = [
    {
      icon: LuCalendarCheck,
      title: "Book a Game Online",
      description:
        "Choose your date and book your adventure online in just a few clicks.",
    },
    {
      icon: FaMapLocationDot,
      title: "Arrive at Starting Point",
      description:
        "Get directions to the starting location and meet your game guide.",
    },
    {
      icon: FaPuzzlePiece,
      title: "Solve Puzzles & Find Clues",
      description:
        "Follow clues, solve challenges, and uncover the mystery with your team.",
    },
  ];

  return (
    <section className="w-full bg-primary-800 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Start your adventure in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4">
                  {index + 1}
                </div>
                {/* Icon */}
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <step.icon className="w-6 h-6 text-secondary-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-primary-200 leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-primary-600 transform translate-x-1/2 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerStepsSection;
