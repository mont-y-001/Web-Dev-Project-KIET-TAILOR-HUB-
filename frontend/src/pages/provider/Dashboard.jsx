import ProviderLayout from "../../layouts/ProviderLayout";

export default function Dashboard() {
  return (
    <ProviderLayout>
      {/* PAGE HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Provider Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your services, appointments & grow your tailoring business
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Total Appointments</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-500">24</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Pending Requests</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-500">6</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Active Services</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-500">8</h2>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-3">
            ✂️ Add New Service
          </h3>
          <p className="text-gray-600 mb-4">
            Add new tailoring services to attract more customers.
          </p>
          <a
            href="/provider/services"
            className="inline-block bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
          >
            Manage Services
          </a>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold mb-3">
            📅 View Appointments
          </h3>
          <p className="text-gray-600 mb-4">
            Check upcoming bookings and manage customer requests.
          </p>
          <a
            href="/provider/appointments"
            className="inline-block bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
          >
            View Appointments
          </a>
        </div>
      </div>

      {/* BANNER / MOTIVATION */}
      <div className="bg-yellow-400 rounded-2xl p-10 text-center text-gray-900 shadow-lg">
        <h2 className="text-3xl font-bold">
          Grow Your Tailoring Business with TailorHUB
        </h2>
        <p className="mt-2 text-lg">
          Deliver quality. Build trust. Get more customers.
        </p>
      </div>
    </ProviderLayout>
  );
}
