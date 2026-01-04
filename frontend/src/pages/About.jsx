import homeImg from "../assets/homeimg.jpeg";

export default function About() {
  return (
    <div className="bg-gray-50 font-sans">
      {/* HERO */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            About TailorHUB
          </h1>
          <p className="text-gray-800 mt-4 text-lg max-w-3xl mx-auto">
            TailorHUB is a modern digital platform designed to connect customers
            with skilled local tailors, making tailoring services accessible,
            reliable, and hassle-free.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>

            <p className="text-gray-600">
              TailorHUB was born from a real-life challenge faced by one of our
              team members, <span className="font-semibold">Nitin Saini</span>.
              After relocating from Gurgaon to Ghaziabad, he struggled to find a
              reliable local tailor for daily stitching and clothing alterations.
            </p>

            <p className="text-gray-600 mt-4">
              Finding a skilled tailor involved visiting multiple shops, asking
              locals for recommendations, and still facing inconsistent quality
              and delays. This experience highlighted a common problem faced by
              many people when they move to a new city or locality.
            </p>

            <p className="text-gray-600 mt-4">
              After sharing this problem with the team, we realized the need for
              a centralized platform where customers could easily discover
              trusted tailors, view their services, and book appointments
              without hassle.
            </p>

            <p className="text-gray-600 mt-4">
              This idea led to the creation of{" "}
              <span className="font-semibold">TailorHUB</span> — a solution that
              bridges the gap between skilled tailors and customers by combining
              traditional craftsmanship with modern technology.
            </p>
          </div>

          <img
            src={homeImg}
            alt="Tailor shop"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to simplify tailoring services by providing a
              reliable platform that connects customers with verified and
              experienced tailors. We aim to ensure quality, transparency, and
              convenience for every user.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision TailorHUB as a leading platform for tailoring services
              across cities, empowering local tailors with digital tools while
              delivering exceptional experiences to customers.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose TailorHUB?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            TailorHUB focuses on trust, quality, and customer satisfaction. We
            ensure that every tailor listed on our platform meets high standards
            of professionalism and skill.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <Card
              title="Verified Tailors"
              desc="All tailors are carefully verified to ensure professional quality and reliability."
            />
            <Card
              title="Convenient Booking"
              desc="Book appointments easily without visiting multiple shops or making endless calls."
            />
            <Card
              title="Customer-Centric Approach"
              desc="We prioritize customer satisfaction and continuously improve our services."
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>

          <div className="grid md:grid-cols-4 gap-8 mt-10">
            <Value title="Trust" />
            <Value title="Quality" />
            <Value title="Transparency" />
            <Value title="Innovation" />
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-16 bg-yellow-400 text-center">
        <h2 className="text-3xl font-bold">
          TailorHUB — Where Craftsmanship Meets Convenience
        </h2>
        <p className="mt-3 max-w-3xl mx-auto">
          We are committed to transforming the tailoring experience by making
          it simpler, faster, and more reliable for everyone.
        </p>
      </section>
    </div>
  );
}

/* COMPONENTS */

function Card({ title, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
}

function Value({ title }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}
