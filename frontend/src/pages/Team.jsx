import TeamCard from "../components/TeamCard";

export default function Team() {
  const teamMembers = [
    {
      name: "Mohit Yadav",
      role: "Frontend Developer",
      img: "/team/Mohit-Yadav/mohit-yadav.jpeg",
      link: "/team/Mohit-Yadav/",
    },
    {
      name: "Radwa",
      role: "Database Administration",
      img: "/team/Radwa/radwaphoto.jpeg",
      link: "/team/Radwa/",
    },
    {
      name: "Nitin Saini",
      role: "UI/UX Designer",
      img: "/team/Nitin-Saini/portfolio-1.jpg",
      link: "/team/Nitin-Saini/",
    },
    {
      name: "Prashant",
      role: "Backend Developer",
      img: "/team/Prashant/prashant.jpg",
      link: "/team/Prashant/",
    },
    {
      name: "Mansha Sharma",
      role: "Testing",
      img: "/team/Mansha-Sharma/ManshaSharma.jpeg",
      link: "/team/Mansha-Sharma/",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* HEADER */}
      <section className="bg-yellow-400 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Meet Our Team
        </h1>
        <p className="text-gray-800 text-lg mt-3">
          Passionate individuals driving TailorHUB forward.
        </p>
      </section>

      {/* TEAM GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}
