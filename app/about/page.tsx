import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-stone-50 text-neutral-900 font-sans">
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-28">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 mt-6 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight !font-heading">
              Helping hospitals
              <br />
              deliver better care
            </h1>

            <p className="text-lg text-neutral-700 max-w-xl">
              Tesla Medical Company builds and supports high-quality biomedical
              equipment for clinics and hospitals. We focus on reliability, easy
              serviceability, and human-centered design so clinicians can focus
              on patients.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-3 rounded-full shadow-md hover:opacity-95"
              >
                See products
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-neutral-300 px-5 py-3 rounded-full text-neutral-800 hover:bg-neutral-100"
              >
                Contact sales
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/assets/hero-about.webp"
              alt="Team"
              width={1200}
              height={800}
              priority
              className="object-cover w-full h-80 lg:h-[420px]"
            />
            <div className="p-6">
              <h4 className="text-sm font-semibold text-pink-600">About us</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Founded to bring reliable diagnostic and therapeutic devices to
                healthcare providers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Trusted quality</h3>
            <p className="text-sm text-neutral-600">
              Devices tested to international standards and backed by fast
              technical support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Service & training</h3>
            <p className="text-sm text-neutral-600">
              On-site setup, preventive maintenance, and staff training for
              seamless adoption.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Human-centered design
            </h3>
            <p className="text-sm text-neutral-600">
              Equipment designed around clinical workflows to reduce errors and
              improve efficiency.
            </p>
          </div>
        </div>

        {/* Team / CTA */}
        <section className="mt-20 bg-gradient-to-tr from-white/80 via-pink-50/60 to-white/80 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Meet the team</h3>
            <p className="mt-3 text-neutral-700 max-w-xl">
              Our engineers, service technicians, and clinical liaisons work
              together to deliver products and support hospitals need.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border px-4 py-2 rounded-full"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/tesla.png"
              alt="Logo"
              width={800}
              height={800}
              className="object-cover w-full h-56"
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
