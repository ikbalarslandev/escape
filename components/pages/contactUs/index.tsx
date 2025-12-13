"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/905524260406",
      color: "hover:text-green-500",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/nikapolis.today/",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      href: "https://youtube.com/@nikapolistoday?si=mSaRJimFxBrsgaq4",
      color: "hover:text-red-500",
    },
    {
      name: "Buy Me Coffee",
      icon: BiCoffeeTogo,
      href: "https://buymeacoffee.com/nikapolis.today",
      color: "hover:text-yellow-500",
    },
    {
      name: "Google",
      icon: FaGoogle,
      href: "https://maps.app.goo.gl/Mhft7rSmooUnMFqc7",
      color: "hover:text-blue-500",
    },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      text: "+90 552 426 0406",
      href: "tel:+905524260406",
    },
    {
      icon: FaEnvelope,
      text: "nikapolistoday@gmail.com",
      href: "mailto:nikapolistoday@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Istanbul, Turkey",
      href: "/home/#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Do you have any questions? Send us a message and we&apos;ll get in
              touch shortly
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information & Socials */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
                    Get in Touch
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
                      >
                        <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center group-hover:bg-secondary-600 transition-colors duration-200">
                          {index === 0 ? (
                            <Phone className="h-6 w-6 text-white" />
                          ) : index === 1 ? (
                            <Mail className="h-6 w-6 text-white" />
                          ) : (
                            <MapPin className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">
                            {index === 0
                              ? "Phone"
                              : index === 1
                              ? "Email"
                              : "Location"}
                          </p>
                          <p className="text-gray-900 font-medium">
                            {item.text}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border border-gray-200 shadow-sm rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6">
                    Socials{" "}
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 group"
                      >
                        <social.icon
                          className={`h-8 w-8 text-gray-600 mb-2 transition-colors duration-200 ${social.color}`}
                        />
                        <span className="text-sm text-gray-700 text-center font-medium">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Info */}
              <Card className="border border-secondary-200 bg-secondary-50 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Quick Response Guaranteed
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We understand your time is valuable. We strive to
                        respond to all inquiries within 8 hours, and usually
                        much sooner!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
