import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { faqData, features } from "./data";
import Link from "next/link";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about your urban adventure with
              Nikapolis
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors duration-200">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get all the details about how Nikapolis works and what to expect
                from your adventure
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-2xl px-6 hover:border-gray-300 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:no-underline [&[data-state=open]]:text-secondary-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {item.answer.split("\n").map((line, lineIndex) => (
                      <p key={lineIndex} className="mb-3 last:mb-0">
                        {line.startsWith("• ") ? (
                          <span className="flex">
                            <span className="text-secondary-500 mr-2">•</span>
                            {line.slice(2)}
                          </span>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA Section */}
            <div className="text-center mt-16 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join players who have discovered Istanbul&apos;s hidden secrets
                through Nikapolis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div>
                    <Link href="/games">Choose Your Route</Link>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
