export default function TeamCard({ name, role, img, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow hover:shadow-2xl transition overflow-hidden hover:-translate-y-1"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600 mt-1">{role}</p>
        <p className="text-yellow-500 mt-2 font-semibold">
          View Portfolio →
        </p>
      </div>
    </a>
  );
}
