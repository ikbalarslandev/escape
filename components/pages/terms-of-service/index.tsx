import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Users,
  Calendar,
  CreditCard,
  AlertTriangle,
  Shield,
} from "lucide-react";

const TermsPage = () => {
  const lastUpdated = "November 08, 2025";

  const keySections = [
    {
      icon: Users,
      title: "Participants & Team Responsibility",
      points: [
        "Games are designed for 2-4 players per team",
        "Children under 14 must be accompanied by adults",
        "Participants must be in suitable physical/mental condition",
        "No influence of alcohol or drugs permitted",
      ],
    },
    {
      icon: Calendar,
      title: "Booking & Game Access",
      points: [
        "No booking required , games are accessible anytime",
        "Games can be paused and resumed at your convenience",
        "Access provided through our web platform",
        "No time restrictions on starting your adventure",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment & Tips",
      points: [
        "Games are free to play with no upfront cost",
        "Voluntary tips support our development via Buy Me a Coffee",
        "Tips are non-refundable as they're voluntary contributions",
        "No pressure to tip. Play first, decide later",
      ],
    },
    {
      icon: Shield,
      title: "Liability & Safety",
      points: [
        "Play at your own risk in public spaces",
        "Follow local laws and regulations",
        "Be aware of your surroundings",
        "We're not liable for personal items or incidents",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Understanding how Nikapolis outdoor escape games work
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                These Terms of Service govern your use of Nikapolis outdoor
                escape games. By accessing and playing our games, you agree to
                these terms.
              </p>
            </div>

            {/* Business Information */}
            <Card className="border border-gray-200 shadow-sm rounded-2xl mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                  About Nikapolis
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nikapolis is an outdoor escape game experience that transforms
                  Istanbul into an interactive adventure playground. We create
                  immersive city exploration games that blend storytelling,
                  puzzle-solving, and urban discovery.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our games are designed to be accessible to everyone through
                  our unique tip-based model, allowing you to experience the
                  adventure first and decide the value afterwards.
                </p>
              </CardContent>
            </Card>

            {/* Key Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {keySections.map((section, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 shadow-sm rounded-2xl h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mr-4">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="text-gray-600 space-y-2 flex-1">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="text-secondary-500 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Terms */}
            <div className="space-y-8">
              {/* Game Experience */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Game Experience & Rules
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our outdoor escape games take place in public areas of
                      Istanbul. Since the games occur in real urban
                      environments, we cannot guarantee exclusivity in any given
                      location or timeslot. You may encounter other players or
                      members of the public during your adventure.
                    </p>
                    <p>
                      Each game is designed to take approximately 1.5-2 hours to
                      complete, though you can take as long as you need. The
                      experience is self-paced, and you can pause at any time
                      for breaks, photos, or to explore interesting locations
                      you discover along the way.
                    </p>
                    <p>
                      We recommend playing during daylight hours for the best
                      experience, as some clues rely on visible details in the
                      environment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment & Tips */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Payment & Tip System
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      <strong>Free Access:</strong> All Nikapolis games are
                      completely free to start and play. There are no hidden
                      costs, subscription fees, or required payments.
                    </p>
                    <p>
                      <strong>Voluntary Tips:</strong> If you enjoy your
                      experience and want to support our work creating more
                      adventures, you can leave a tip through our Buy Me a
                      Coffee page. Tips are entirely voluntary and
                      non-refundable.
                    </p>
                    <p>
                      <strong>Payment Processing:</strong> All tips are
                      processed through Buy Me a Coffee&apos;s secure payment
                      system, which accepts various payment methods including
                      credit cards and PayPal. Nikapolis does not directly
                      handle any payment information.
                    </p>
                    <p>
                      <strong>Business Model:</strong> Our tip-based system
                      allows us to make urban exploration accessible to everyone
                      while continuing to develop new games and improve existing
                      ones.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Liability & Safety */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Liability & Responsibilities
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-yellow-800 mb-2">
                          Important Safety Notice
                        </p>
                        <p className="text-yellow-700">
                          You are responsible for your own safety and the safety
                          of your team members during the game. Always be aware
                          of your surroundings, follow traffic rules, and
                          respect private property.
                        </p>
                      </div>
                    </div>

                    <p>
                      <strong>Personal Responsibility:</strong> Participants
                      play at their own risk. Nikapolis is not liable for any
                      injuries, accidents, loss of personal property, or other
                      incidents that may occur during gameplay.
                    </p>
                    <p>
                      <strong>Public Spaces:</strong> Our games take place in
                      public areas. You are responsible for following all local
                      laws, regulations, and respecting the community and
                      environment.
                    </p>
                    <p>
                      <strong>Force Majeure:</strong> We are not liable for
                      circumstances beyond our control, including weather
                      conditions, public events, construction, or other
                      disruptions that may affect your game experience.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Intellectual Property & Usage
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      All game content, including puzzles, stories, clues, and
                      digital materials, are the intellectual property of
                      Nikapolis. You may not reproduce, distribute, or share
                      game solutions in a way that spoils the experience for
                      other players.
                    </p>
                    <p>
                      You are welcome to share your experience, take photos, and
                      post about your adventure on social media. We only ask
                      that you avoid revealing specific puzzle solutions or
                      major plot points that would diminish others&apos;
                      enjoyment.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Support & Complaints */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Support & Feedback
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We&apos;re committed to providing an excellent experience.
                      If you encounter technical issues, have questions, or want
                      to provide feedback, please contact us at{" "}
                      <span className="font-medium">
                        nikapolistoday@gmail.com
                      </span>
                      .
                    </p>
                    <p>
                      For game-related hints or if you get stuck, use the
                      built-in hint system within each game. We&apos;ve designed
                      multiple levels of hints to help you progress without
                      spoiling the satisfaction of solving puzzles yourself.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Jurisdiction */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                    Governing Law & Changes
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      These Terms of Service are governed by Turkish law. Any
                      disputes shall be resolved in the courts of Istanbul,
                      Turkey.
                    </p>
                    <p>
                      We reserve the right to update these terms as our service
                      evolves. Continued use of Nikapolis games after changes
                      constitutes acceptance of the updated terms. This document
                      was last updated on {lastUpdated}.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <Card className="border border-secondary-200 bg-secondary-50 rounded-2xl mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Questions About Our Terms?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you have any questions about these terms or how Nikapolis
                  works, we&apos;re happy to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-normal transition-all duration-200 inline-flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    className="border border-secondary-300 text-secondary-700 hover:bg-white px-6 py-3 rounded-lg font-normal transition-all duration-200 inline-flex items-center justify-center"
                  >
                    Visit FAQ
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
