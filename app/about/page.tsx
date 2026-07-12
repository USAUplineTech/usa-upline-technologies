import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const statistics = [
  {
    number: "10+",
    label: "Years Experience",
    icon: Clock3,
  },
  {
    number: "1000+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    number: "24/7",
    label: "Remote Support",
    icon: ShieldCheck,
  },
  {
    number: "50+",
    label: "Cities Served",
    icon: MapPin,
  },
];

export default function AboutPage() {
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
              <h1 className="text-lg font-bold text-[#0B2E6D]">
                USA UPLINE TECHNOLOGIES INC
              </h1>

              <p className="text-xs tracking-[0.25em] text-[#0B2E6D]">
                CONNECT • PROTECT • SUPPORT
              </p>
            </div>
          </Link>

          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <Link
              href="/"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Services
            </Link>

            <Link href="/about" className="text-blue-700">
              About
            </Link>

            <Link
              href="/contact"
              className="text-slate-700 transition hover:text-blue-700"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0B2E6D] to-[#1256C8] px-6 py-20 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
          Who We Are
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          About USA Upline Technologies
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
          Professional technology solutions for residential and commercial
          customers.
        </p>
      </section>

      {/* Main About Section */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Van Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/hero.jpg"
              alt="USA Upline Technologies service van"
              width={1100}
              height={800}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Main Text */}
          <div>
            
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B2E6D] md:text-5xl">
              Technology You Can Trust
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              USA Upline Technologies Inc provides professional technology
              solutions for residential and commercial customers. We
              specialize in security camera systems, alarm systems, networking,
              computer repair, tablet repair, smart-home automation and remote
              technical support.
            </p>

            <h3 className="mt-8 text-4xl font-extrabold uppercase leading-tight text-[#0B2E6D] md:text-5xl">
              Expanding Nationwide Soon
            </h3>

            <p className="mt-4 text-xl leading-8 text-slate-600">
              Serving residential and commercial customers across the United
              States.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <Users className="mt-1 h-6 w-6 shrink-0 text-blue-700" />

              <p className="leading-7 text-slate-700">
                Our goal is to provide dependable service, professional
                installation and long-term technical support for every
                customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((statistic) => {
            const Icon = statistic.icon;

            return (
              <div
                key={statistic.label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon className="h-7 w-7" />
                </div>

                <p className="mt-5 text-4xl font-extrabold text-[#0B2E6D]">
                  {statistic.number}
                </p>

                <p className="mt-2 font-semibold text-slate-600">
                  {statistic.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission, Vision and Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Our Commitment
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0B2E6D] md:text-5xl">
              Built on Service and Trust
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on dependable technology, professional workmanship and
              excellent customer service.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B2E6D]">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Deliver dependable technology solutions with professional
                installation, responsive support and excellent customer
                service.
              </p>
            </article>

            {/* Vision */}
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <MapPin className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B2E6D]">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Become a trusted nationwide technology partner for homes,
                businesses and growing communities across the United States.
              </p>
            </article>

            {/* Values */}
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <ShieldCheck className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0B2E6D]">
                Our Values
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Integrity, quality, professionalism, reliability and customer
                satisfaction guide every service we provide.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#071D45] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Need help with your technology?
            </h2>

            <p className="mt-3 text-lg text-blue-100">
              Contact our team today and request a free estimate.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
           
            <Link
              href="/contact"
              className="rounded-xl border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0B2E6D]"
            >
              Get a Free Quote
            </Link>
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
              <a
                href="tel:+16032044124"
                className="transition hover:text-white"
              >
                (603) 204-4124
              </a>
            </p>

            <p className="mt-2">
              <a
                href="tel:+19709170073"
                className="transition hover:text-white"
              >
                (970) 917-0073
              </a>
            </p>

            <p className="mt-2">
              <a
                href="mailto:info@usaupline-tech.com"
                className="transition hover:text-white"
              >
                info@usaupline-tech.com
              </a>
            </p>

            <p className="mt-2">usaupline-tech.net</p>
          </div>

          <div className="text-sm text-slate-300">
            <p>1500 N Grant Street Ste R</p>
            <p>Denver, CO 80203</p>

            <p className="mt-4">77 Northeastern Blvd.</p>
            <p>Suite 105 #1003</p>
            <p>Nashua, NH 03062</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © 2026 USA Upline Technologies Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}