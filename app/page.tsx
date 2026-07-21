import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  Camera,
  CheckCircle2,
  Headphones,
  Laptop,
  Network,
  ShieldCheck,
  Tablet,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Camera Systems",
    description:
      "Professional installation and support for residential and commercial security cameras.",
    icon: Camera,
  },
  {
    title: "Alarm Systems",
    description:
      "Reliable alarm solutions designed to help protect homes and businesses.",
    icon: AlarmClock,
  },
  {
    title: "Computer Repair",
    description:
      "Diagnostics, upgrades, virus removal and dependable technical support.",
    icon: Laptop,
  },
  {
    title: "Tablet Repair",
    description:
      "Professional repair solutions for tablets and other mobile devices.",
    icon: Tablet,
  },
  {
    title: "Home Networking",
    description:
      "Wi-Fi setup, network optimization, smart-home integration and cabling.",
    icon: Network,
  },
  {
    title: "Remote Support",
    description:
      "Secure remote technical assistance whenever you need help.",
    icon: Headphones,
  },
];

const benefits = [
  "Residential and Commercial Service",
  "Professional Installation",
  "Reliable Technical Support",
  "Free Estimates Available",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#061631] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="USA Upline Technologies Inc"
              width={72}
              height={72}
              className="h-auto w-[72px]"
            />

            <div>
              <h1 className="text-lg font-bold">
                USA UPLINE TECHNOLOGIES INC
              </h1>

              <p className="text-xs tracking-[0.25em] text-blue-200">
                CONNECT • PROTECT • SUPPORT
              </p>

              <p className="mt-1 text-xs text-blue-100">
                (603) 204-4124 • (970) 917-0073
              </p>
            </div>
          </Link>

          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <Link href="/" className="text-blue-300">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-blue-300">
              Services
            </Link>
            <Link href="/about" className="transition hover:text-blue-300">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-blue-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-br from-[#061631] via-[#0B2E6D] to-[#1256C8] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              Professional Technology Solutions
            </p>

            <h2 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
              Technology Solutions You Can Trust
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Security cameras, alarm systems, computer repair, tablet repair,
              networking and remote technical support for homes and businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-7 py-4 font-bold text-[#0B2E6D] shadow-lg transition hover:-translate-y-1"
              >
                Get a Free Quote
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0B2E6D]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-blue-200">Core Services</p>
              </div>

              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-blue-200">Office Locations</p>
              </div>

              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-blue-200">Remote Support</p>
              </div>

              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-blue-200">Professional Service</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-white/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
              <Image
                src="/hero.jpg"
                alt="USA Upline Technologies service van"
                width={1000}
                height={760}
                priority
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-700" />
              <p className="font-semibold text-slate-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#0B2E6D] md:text-5xl">
              Our Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Complete technology, security, networking and repair solutions
              delivered with professional support.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#0B2E6D]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-6 inline-flex font-bold text-blue-700 transition hover:translate-x-1"
                  >
                    Learn More →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#071D45] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Reliable service from professionals who care
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              We help customers choose the right technology, install it
              correctly and provide ongoing support when they need it.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <ShieldCheck className="h-8 w-8 text-blue-300" />
                <h3 className="mt-4 text-xl font-bold">Trusted Solutions</h3>
                <p className="mt-2 text-blue-100">
                  Dependable equipment, installation and technical support.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Wrench className="h-8 w-8 text-blue-300" />
                <h3 className="mt-4 text-xl font-bold">Professional Service</h3>
                <p className="mt-2 text-blue-100">
                  Practical solutions tailored to each customer and property.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 text-slate-900 shadow-2xl">
            <h3 className="text-3xl font-bold text-[#0B2E6D]">
              Ready to get started?
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Contact USA Upline Technologies today for a free estimate and
              professional help with your next project.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="tel:+16032044124"
                className="block rounded-xl bg-[#0B2E6D] px-6 py-4 text-center font-bold text-white transition hover:bg-blue-800"
              >
                Call (603) 204-4124
              </a>

              <a
                href="tel:+19709170073"
                className="block rounded-xl border border-[#0B2E6D] px-6 py-4 text-center font-bold text-[#0B2E6D] transition hover:bg-blue-50"
              >
                Call (970) 917-0073
              </a>

              <Link
                href="/contact"
                className="block rounded-xl border border-slate-300 px-6 py-4 text-center font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061631] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">
              USA UPLINE TECHNOLOGIES INC
            </h3>

            <p className="mt-2 text-sm text-slate-300">
              Connect • Protect • Support
            </p>
          </div>

          <div className="text-sm text-slate-300">
            <p>
              <a href="tel:+16032044124">(603) 204-4124</a>
            </p>

            <p className="mt-2">
              <a href="tel:+19709170073">(970) 917-0073</a>
            </p>

            <p className="mt-2">
              <a href="mailto:info@usaupline-tech.com">
                info@usaupline-tech.com
              </a>
            </p>

            <p className="mt-2">usaupline-tech.net</p>
          </div>

          <div className="text-sm text-slate-300">
            <p>1207 Delaware Ave Unit 390</p>
            <p>Wilmington, DE 19806</p>

            <p className="mt-4">215 S Wadsworth Blvd.</p>
            <p>Unit 400 #660</p>
            <p>Denver, CO 80226</p>

            <p className="mt-4">20 Portsmouth Ave</p>
            <p> Ste 1 #2045</p>
            <p> Stratham, NH 03885</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © 2026 USA Upline Technologies Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}