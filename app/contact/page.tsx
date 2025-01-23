"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { submitContactForm } from "./action";
import { Instagram, Mail, Phone } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitMessage(result.message);
        const form = document.querySelector("form") as HTMLFormElement;
        form?.reset();
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-12">
        {/* Header text */}
        <div className={`mb-8 ${montserrat.className}`}>
          <h2 className="text-base font-normal">Designer-Model-Artist</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <div>
            <h1 className="text-[128px] leading-none font-bold text-black mb-16">
              LET'S
              <br />
              CONNECT
            </h1>

            <form action={handleSubmit} className="space-y-12">
              <div className="space-y-1">
                <label htmlFor="name" className="text-sm font-medium">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none focus:border-b-2"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none focus:border-b-2"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-sm font-medium">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none focus:border-b-2 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 px-8 text-center transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {submitMessage && (
                <p className="text-sm text-center mt-4">{submitMessage}</p>
              )}
            </form>
          </div>

          {/* Personal Contact Information */}
          <div className="pt-80 pl-32">
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Direct Contact</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6" />
                    <a
                      href="mailto:info@indijanssen.com"
                      className="hover:opacity-70"
                    >
                      info@indijanssen.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="w-6 h-6" />
                    <a
                      href="https://instagram.com/indijanssen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70"
                    >
                      @indijanssen
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6" />
                    <a href="tel:+31612345678" className="hover:opacity-70">
                      +31 6 12345678
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Location</h2>
                <p>Amsterdam, Netherlands</p>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Business Hours</h2>
                <p>
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM CET
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
