"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Building2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mvgkqapp",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="USA Upline Technologies Inc"
              width={70}
              height={70}
              className="h-auto w-[70px]"
            />

            <div>
              <h2 className="text-lg font-bold text-[#0B2E6D]">
                USA UPLINE TECHNOLOGIES INC
              </h2>

              <p className="text-xs tracking-[0.25em] text-[#0B2E6D]">
                CONNECT • PROTECT • SUPPORT
              </p>
            </div>
          </Link>

          <nav className="hidden gap-8 font-semibold md:flex">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>

            <Link href="/services" className="hover:text-blue-700">
              Services
            </Link>

            <Link href="/about" className="hover:text-blue-700">
              About
            </Link>

            <Link href="/contact" className="text-blue-700">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0B2E6D] px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>

        <p className="mt-5 text-lg text-blue-100">
          We&apos;d love to help with your next technology project.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
          <h2 className="text-3xl font-bold text-[#0B2E6D] md:text-4xl">
            Get In Touch
          </h2>

          <div className="mt-10 space-y-8">
            {/* Office */}
            <div>
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-[#0B2E6D]" />

                <h3 className="text-2xl font-bold text-[#0B2E6D]">
                  Office
                </h3>
              </div>

              <p className="mt-3 text-lg leading-8 text-gray-900">
                1500 N Grant Street Ste R
                <br />
                Denver, CO 80203
              </p>
            </div>

            {/* Second Office */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-[#0B2E6D]" />

                <h3 className="text-2xl font-bold text-[#0B2E6D]">
                  Second Office
                </h3>
              </div>

              <p className="mt-3 text-lg leading-8 text-gray-900">
                77 Northeastern Blvd.
                <br />
                Suite 105 #1003
                <br />
                Nashua, NH 03062
              </p>
            </div>

            {/* Phone */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-[#0B2E6D]" />

                <h3 className="text-2xl font-bold text-[#0B2E6D]">
                  Phone
                </h3>
              </div>

              <div className="mt-3 space-y-2 text-lg text-gray-900">
                <p>
                  <a
                    href="tel:+16032044124"
                    className="transition hover:text-blue-700"
                  >
                    (603) 204-4124
                  </a>
                </p>

                <p>
                  <a
                    href="tel:+19709170073"
                    className="transition hover:text-blue-700"
                  >
                    (970) 917-0073
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-[#0B2E6D]" />

                <h3 className="text-2xl font-bold text-[#0B2E6D]">
                  Email
                </h3>
              </div>

              <p className="mt-3 break-words text-lg text-gray-900">
                <a
                  href="mailto:info@usaupline-tech.com"
                  className="transition hover:text-blue-700"
                >
                  info@usaupline-tech.com
                </a>
              </p>
            </div>

            {/* Website */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-[#0B2E6D]" />

                <h3 className="text-2xl font-bold text-[#0B2E6D]">
                  Website
                </h3>
              </div>

              <p className="mt-3 text-lg text-gray-900">
                <a
                  href="https://www.usaupline-tech.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-blue-700"
                >
                  www.usaupline-tech.net
                </a>
              </p>
            </div>
          </div>
        </div>

                {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-10">
          <h2 className="text-3xl font-bold text-[#0B2E6D] md:text-4xl">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={status === "sending"}
              className="w-full rounded-xl border border-slate-400 bg-white p-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              disabled={status === "sending"}
              className="w-full rounded-xl border border-slate-400 bg-white p-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              disabled={status === "sending"}
              className="w-full rounded-xl border border-slate-400 bg-white p-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />

            <select
              name="service"
              defaultValue=""
              required
              disabled={status === "sending"}
              className="w-full rounded-xl border border-slate-400 bg-white p-4 text-gray-900 focus:border-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="" disabled>
                Select Service
              </option>

              <option value="Camera Systems">
                Camera Systems
              </option>

              <option value="Alarm Systems">
                Alarm Systems
              </option>

              <option value="Computer Repair">
                Computer Repair
              </option>

              <option value="Tablet Repair">
                Tablet Repair
              </option>

              <option value="Home Network Automation">
                Home Network Automation
              </option>

              <option value="Remote Technical Support">
                Remote Technical Support
              </option>
            </select>

            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              required
              disabled={status === "sending"}
              className="w-full resize-none rounded-xl border border-slate-400 bg-white p-4 text-gray-900 placeholder:text-gray-500 focus:border-blue-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B2E6D] px-8 py-4 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}

              <Send className="h-5 w-5" />
            </button>

            {status === "success" && (
              <div
                role="status"
                className="rounded-xl border border-green-300 bg-green-50 p-4 text-center font-semibold text-green-800"
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="rounded-xl border border-red-300 bg-red-50 p-4 text-center font-semibold text-red-700"
              >
                Sorry, the message could not be sent. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061631] px-6 py-8 text-center text-sm text-slate-300">
        © 2026 USA Upline Technologies Inc. All rights reserved.
      </footer>
    </main>
  );
}