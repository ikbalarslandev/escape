"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/howItWorks", label: "How to Play" },
    { href: "/games", label: "Games" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const closeMenu = () => setIsOpen(false);

  const whatsappNumber = "+905524260406";
  const whatsappMessage = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-primary-800 border-b border-primary-600 backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-light text-white hover:text-secondary-300 transition-colors"
              onClick={closeMenu}
            >
              <Image width={50} height={50} alt="logo" src="/logo.png" />
              <span>
                <span className="font-semibold">Nika</span>polis
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-100 hover:text-white transition-colors duration-200 font-light text-sm uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg font-normal transition-all duration-200">
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-primary-100 hover:text-white hover:bg-primary-700"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-primary-800 border-l border-primary-600"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-4 border-b border-primary-600 ">
                    <Link
                      href="/"
                      className="flex items-center space-x-2 text-lg  font-light text-white"
                      onClick={closeMenu}
                    >
                      <Image
                        width={50}
                        height={50}
                        alt="logo"
                        src="/logo.png"
                      />
                      <span>
                        <span className="font-semibold">Nika</span>polis
                      </span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeMenu}
                      className="text-primary-100 hover:text-white hover:bg-primary-700"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex-1 p-6 space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-primary-100 hover:text-white text-lg font-light transition-colors duration-200 py-2 border-b border-primary-700"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <SheetTitle></SheetTitle>

                  {/* Mobile CTA Button */}
                  <div className="p-6 border-t border-primary-600">
                    <Button
                      className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-3 rounded-lg font-normal text-lg transition-all duration-200"
                      onClick={closeMenu}
                    >
                      Book Adventure
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Sticky WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-white"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
};

export default NavComponent;
