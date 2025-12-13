"use client";

import Link from "next/link";

import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { BiCoffeeTogo } from "react-icons/bi";

const FooterComponent = () => {
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

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
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
    <footer className="mt-auto bg-primary-900 text-primary-100 border-t border-primary-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-light text-white mb-4"
            >
              <span className="font-semibold">Nika</span>polis
            </Link>
            <p className="text-primary-300 text-sm mb-6 leading-relaxed">
              Your ultimate adventure destination. Experience thrilling games
              and create unforgettable memories with us.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-primary-400 hover:text-white transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={30} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2 group"
                  >
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact*/}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-primary-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-primary-400 text-sm">
              © {new Date().getFullYear()} Nikapolis. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-400">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
