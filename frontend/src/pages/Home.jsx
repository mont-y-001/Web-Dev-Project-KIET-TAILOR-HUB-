import { Link } from "react-router-dom";
import homeImg from "../assets/homeimg.jpeg";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
              <span>📍</span> Connect with Expert Tailors Near You
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Find Your Perfect <br />
              <span className="text-yellow-500">Tailor in Minutes</span>
            </h1>

            <p className="text-gray-600 mt-4">
              Custom clothing, alterations & premium tailoring services — all in
              one place.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <Link
                to="/appointments"
                className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                Book Appointment
              </Link>

              <Link
                to="/register"
                className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-200 transition"
              >
                Join as Tailor
              </Link>
            </div>
          </div>

          <img
            src={homeImg}
            alt="Tailoring Service"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          <Stat number="500+" label="Expert Tailors" />
          <Stat number="5k+" label="Happy Customers" />
          <Stat number="10k+" label="Orders Completed" />
          <Stat number="4.9★" label="Average Rating" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-gray-600 mt-2">
            Just four simple steps to get the perfect outfit.
          </p>

          <div className="grid md:grid-cols-4 gap-10 mt-12">
            <Step
              title="1. Search Tailors"
              desc="Find skilled tailors near you with just one click."
            />
            <Step
              title="2. Connect & Discuss"
              desc="Share your requirements and get quotes."
            />
            <Step
              title="3. Get Work Done"
              desc="Tailors start creating or altering your clothes."
            />
            <Step
              title="4. Enjoy & Review"
              desc="Enjoy your perfect fit and leave a review."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Why Choose TailorHUB?</h2>
          <p className="text-gray-600 mt-2">
            We connect quality craftsmanship with modern convenience.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <Feature
              title="Verified Tailors"
              desc="Every tailor is verified to ensure quality and trust."
            />
            <Feature
              title="Affordable Pricing"
              desc="Transparent pricing with no hidden charges."
            />
            <Feature
              title="On-Time Delivery"
              desc="We respect your time and deliver as promised."
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-2">
            Professional tailoring services for all needs.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <Service title="Custom Tailoring" img="https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg" />
            <Service title="Alterations & Repairs" img="https://images.pexels.com/photos/3738055/pexels-photo-3738055.jpeg" />
            <Service title="Special Occasions" img="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg" />
            <Service title="Fabric Consultation" img="https://images.pexels.com/photos/164839/pexels-photo-164839.jpeg" />
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold">What Our Customers Say</h2>
    <p className="text-gray-600 mt-2">
      Trusted by thousands of happy customers.
    </p>

    <div className="grid md:grid-cols-3 gap-10 mt-12">
      <Testimonial
        name="Amit Sharma"
        role="Customer"
        text="TailorHUB helped me find an excellent tailor in minutes. Perfect fitting and on-time delivery!"
      />
      <Testimonial
        name="Neha Verma"
        role="Fashion Designer"
        text="Amazing platform! Very professional tailors and smooth appointment process."
      />
      <Testimonial
        name="Rahul Khan"
        role="Customer"
        text="Highly recommended for anyone looking for premium tailoring services."
      />
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-16 bg-yellow-400 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Find Your Perfect Tailor?
        </h2>
        <p className="mt-2">
          Start now and experience premium tailoring.
        </p>
        <Link
          to="/appointments"
          className="mt-5 inline-block bg-black text-white px-6 py-3 rounded-full"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

/* COMPONENTS */

function Step({ title, desc }) {
  return (
    <div className="p-6 shadow rounded-xl bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Service({ title, img }) {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <h3 className="text-xl font-semibold my-4">{title}</h3>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-yellow-500">{number}</h3>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}

function Testimonial({ name, role, text }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-600 italic">“{text}”</p>
      <h4 className="mt-4 font-bold">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}

