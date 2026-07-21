import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Camera Systems",
    description:
      "Professional installation, configuration, and remote support for security camera systems.",
    image: "/service-camera-new.jpg",
  },
  {
    title: "Alarm Systems",
    description:
      "Protect your home or business with reliable alarm installation and monitoring solutions.",
    image: "/service-alarm-new.jpg",
  },
  {
    title: "Computer Repair",
    description:
      "Diagnostics, hardware upgrades, software troubleshooting, virus removal, and technical support.",
    image: "/service-computer-new.jpg",
  },
  {
    title: "Tablet Repair",
    description:
      "Professional repair services for tablets with quick and dependable turnaround times.",
    image: "/service-tablet-new.jpg",
  },
  {
    title: "Home Network Automation",
    description:
      "Wi-Fi setup, smart home integration, network optimization, and structured cabling.",
    image: "/service-network-new.jpg",
  },
  {
    title: "Remote Technical Support",
    description:
      "Secure remote assistance to solve technology problems wherever you are.",
    image: "/service-support-new.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
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
              <p className="text-lg font-bold text-[#0B2E6D]">
                USA UPLINE TECHNOLOGIES INC
              </p>
              <p className="text-xs tracking-[0.25em] text-slate-500">
                CONNECT • PROTECT • SUPPORT
              </p>
            </div>
          </Link>

          <nav className="hidden gap-7 text-sm font-semibold md:flex">
            <Link href="/" className="hover:text-blue-700">
              Home
            </Link>
            <Link href="/services" className="text-blue-700">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-700">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-700">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-[#0B2E6D] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Professional Technology Services
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">Our Services</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            We provide dependable technology, security, networking, repair,
            and remote-support solutions for homes and businesses.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-75 w-fulloverflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-bold text-[#0B2E6D]">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
                >
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#071D45] px-6 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold">
              Need help with your technology?
            </h2>

            <p className="mt-3 text-blue-100">
              Speak with USA Upline Technologies and request a free quote.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            
            <Link
              href="/contact"
              className="rounded-lg border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#0B2E6D]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#061631] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold">USA UPLINE TECHNOLOGIES INC</h3>
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

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-6 text-center text-xs text-slate-400">
          © 2026 USA Upline Technologies Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}