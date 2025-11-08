import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Globe, Puzzle } from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      icon: Globe,
      number: "1",
      label: "Countries Explored",
    },
    {
      icon: Users,
      number: "3",
      label: "Adventurers Served",
    },
    {
      icon: Puzzle,
      number: "2",
      label: "Puzzles Created",
    },
    {
      icon: MapPin,
      number: "1",
      label: "Amazing City",
    },
  ];

  const teamValues = [
    {
      title: "Curiosity-Driven",
      description:
        "We believe every corner of Istanbul has a story waiting to be discovered.",
    },
    {
      title: "Interactive Learning",
      description:
        "History comes alive when you're actively exploring and solving puzzles.",
    },
    {
      title: "Local Insights",
      description:
        "Experience Istanbul through the eyes of someone who calls it home.",
    },
    {
      title: "Accessible Adventure",
      description:
        "Premium experiences that are available to everyone through our tip-based model.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Our Story
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Transforming Istanbul into your personal adventure playground
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Founder Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              {/* Image Section */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-96 lg:h-[500px] relative">
                    <Image
                      src="/about.jpeg"
                      alt="Ikbal - Founder of Nikapolis"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Fallback loading state */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">🧭</div>
                        <p className="text-lg font-light">Ikbal - Founder</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-200 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-200 rounded-2xl -z-10"></div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Meet the Creator
                </div>

                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="font-semibold text-secondary-600">
                    Ikbal
                  </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  The creator of Nikapolis, and a passionate traveler living in
                  Istanbul. I've always been fascinated by exploring new
                  cultures and uncovering the stories behind every place I
                  visit.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Having traveled to{" "}
                  <span className="font-semibold text-primary-600">
                    15 countries
                  </span>
                  , I realized that this curiosity is something I want to
                  dedicate my life to.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Nikapolis is my way of sharing that passion. It's proof that
                  learning about history can be fun, interactive, and full of
                  discovery.
                </p>

                <div className="pt-6">
                  <Link href="/games">
                    <Button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-normal text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                      Start Your Adventure
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-200 mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl lg:text-3xl font-light text-primary-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-primary-700 leading-relaxed">
                  Together with my small team of storytellers and designers,
                  we're building games that help people explore the city.
                  Through our outdoor escape games, you'll explore Istanbul in a
                  completely new way: uncover hidden facts, solve creative
                  puzzles, and experience the city's history coming to life
                  right before your eyes.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 shadow-sm rounded-2xl text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                  What Drives Us
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our core values that shape every Nikapolis adventure
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {teamValues.map((value, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow duration-200"
                  >
                    <CardContent className="p-6 lg:p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                Ready to Explore Istanbul Differently?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Whether you're with friends, family, or exploring on your own,
                Nikapolis turns every walk into an adventure: where curiosity
                leads the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/games">
                  <Button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-normal text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                    Discover Our Games
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
