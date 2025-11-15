"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function InfoPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="h-12 w-12 text-secondary-300 mr-4" />
            <h1 className="text-3xl md:text-4xl font-light text-white">
              Journey Complete!
            </h1>
          </div>
          <div className="w-24 h-1 bg-secondary-300 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            You've discovered the unique fusion of East and West
          </p>
        </header>

        {/* Success Card */}
        <Card className="border border-primary-500 bg-primary-800 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-6 md:p-8">
            {/* Historical Info */}
            <div className="space-y-6 md:space-y-8 text-primary-100 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-light text-secondary-300 text-center mb-6">
                The Perfect Fusion: Baroque Meets Ottoman
              </h2>

              {/* Baroque Style */}
              <Card className="bg-primary-700 border-primary-400">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-secondary-300 mb-4">
                    What is Baroque Style?
                  </h3>
                  <div className="space-y-3 text-primary-50">
                    <p>
                      <strong className="text-white">Origin:</strong> Started in
                      17th century Italy.
                    </p>
                    <p>
                      <strong className="text-white">Goal:</strong> To create
                      emotion, drama, and a sense of theater.
                    </p>
                    <div>
                      <strong className="text-white">Features:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li>Curves and Wavy Lines</li>
                        <li>
                          Lots of Decoration: Gold leaf, detailed plasterwork,
                          carvings
                        </li>
                        <li>
                          Dramatic Light: Uses windows to create light and
                          shadow
                        </li>
                        <li>
                          Sculptural Elements: Looks like the building is
                          covered in carvings
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ottoman Style */}
              <Card className="bg-primary-600 border-primary-400">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-secondary-300 mb-4">
                    What is Classical Ottoman Style?
                  </h3>
                  <div className="space-y-3 text-primary-50">
                    <p>
                      <strong className="text-white">Origin:</strong> Perfected
                      in the 16th century by architect Mimar Sinan.
                    </p>
                    <p>
                      <strong className="text-white">Goal:</strong> To create a
                      calm, peaceful, and harmonious space for prayer.
                    </p>
                    <div>
                      <strong className="text-white">Features:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li>Geometric Shapes: Clear circles and squares</li>
                        <li>A Grand Central Dome</li>
                        <li>
                          Simple & Abstract Decoration: Tiles, Islamic
                          calligraphy, patterns
                        </li>
                        <li>
                          Balanced & Even Light: Many windows for a soft glow
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comparison Table */}
              <Card className="bg-primary-700 border-primary-400">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-secondary-300 mb-4 text-center">
                    The Unique Mix at Nuruosmaniye Mosque
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm md:text-base">
                      <thead>
                        <tr className="border-b border-primary-400">
                          <th className="text-left py-3 px-2 md:px-4 font-semibold text-white bg-primary-600">
                            Feature
                          </th>
                          <th className="text-left py-3 px-2 md:px-4 font-semibold text-white bg-primary-600">
                            Classical Ottoman Style
                          </th>
                          <th className="text-left py-3 px-2 md:px-4 font-semibold text-white bg-primary-600">
                            Nuruosmaniye's Baroque Style
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary-500">
                        <tr className="hover:bg-primary-600 transition-colors">
                          <td className="py-3 px-2 md:px-4 font-medium text-white">
                            COURTYARD
                          </td>
                          <td className="py-3 px-2 md:px-4 text-primary-50">
                            Rectangle or Square
                          </td>
                          <td className="py-3 px-2 md:px-4 text-secondary-200 font-medium">
                            Semi-Circle or Oval
                          </td>
                        </tr>
                        <tr className="hover:bg-primary-600 transition-colors">
                          <td className="py-3 px-2 md:px-4 font-medium text-white">
                            DOME BASE
                          </td>
                          <td className="py-3 px-2 md:px-4 text-primary-50">
                            Triangular Supports (pendentives)
                          </td>
                          <td className="py-3 px-2 md:px-4 text-secondary-200 font-medium">
                            Curved, Shell-like Supports
                          </td>
                        </tr>
                        <tr className="hover:bg-primary-600 transition-colors">
                          <td className="py-3 px-2 md:px-4 font-medium text-white">
                            DECORATION
                          </td>
                          <td className="py-3 px-2 md:px-4 text-primary-50">
                            Tiles and Calligraphy
                          </td>
                          <td className="py-3 px-2 md:px-4 text-secondary-200 font-medium">
                            Plaster Reliefs, Leaf Patterns, more 3D effect and
                            gold
                          </td>
                        </tr>
                        <tr className="hover:bg-primary-600 transition-colors">
                          <td className="py-3 px-2 md:px-4 font-medium text-white">
                            STAIRS
                          </td>
                          <td className="py-3 px-2 md:px-4 text-primary-50">
                            Straight and simple lines
                          </td>
                          <td className="py-3 px-2 md:px-4 text-secondary-200 font-medium">
                            Curved and Wavy form
                          </td>
                        </tr>
                        <tr className="hover:bg-primary-600 transition-colors">
                          <td className="py-3 px-2 md:px-4 font-medium text-white">
                            WINDOWS
                          </td>
                          <td className="py-3 px-2 md:px-4 text-primary-50">
                            Regular rows, straight tops
                          </td>
                          <td className="py-3 px-2 md:px-4 text-secondary-200 font-medium">
                            Wavy and Curved tops
                          </td>
                        </tr>
                        <tr className="hover:bg-primary-600 transition-colors">
                          <td className="py-3 px-2 md:px-4 font-medium text-white">
                            OVERALL FEELING
                          </td>
                          <td className="py-3 px-2 md:px-4 text-primary-50">
                            Calm, peaceful, balanced
                          </td>
                          <td className="py-3 px-2 md:px-4 text-secondary-200 font-medium">
                            Movement, grandeur, emotional
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <Card className="bg-primary-600 border-primary-400">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-secondary-300 mb-4 text-center">
                    A Masterpiece of Mixing Styles
                  </h3>
                  <p className="text-primary-50 text-base md:text-lg text-center leading-relaxed">
                    Nuruosmaniye Mosque is a perfect example of the Ottoman
                    Empire opening up to the West. It keeps the traditional
                    Ottoman mosque plan but reinterprets it with the dynamic and
                    decorative language of Baroque style. This created a
                    completely unique synthesis in architectural history.
                  </p>
                </CardContent>
              </Card>

              {/* Historical Significance */}
              <Card className="bg-primary-700 border-primary-400">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold text-secondary-300 mb-4">
                    Historical Significance
                  </h3>
                  <p className="text-primary-50 text-base md:text-lg leading-relaxed">
                    Built between 1748-1755, Nuruosmaniye represents a turning
                    point in Ottoman architecture. It marks the beginning of the
                    "Tulip Period" and the Westernization movement that would
                    eventually transform the empire. The mosque stands as a
                    testament to cultural exchange and the ability to embrace
                    new influences while preserving core identity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Final Navigation */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/pagan-cross-crescent/final")}
            className="bg-secondary-500 hover:bg-secondary-400 text-white font-semibold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See The Final Page
            <FaArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 md:mt-12">
          <p className="text-primary-200 font-light italic text-sm md:text-base">
            Where Pagan, Cross, and Crescent found perfect harmony...
          </p>
        </footer>
      </div>
    </div>
  );
}
