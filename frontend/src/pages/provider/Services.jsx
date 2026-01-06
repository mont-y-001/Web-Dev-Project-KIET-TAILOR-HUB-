import { useEffect, useState } from "react";
import ProviderLayout from "../../layouts/ProviderLayout";

export default function Services() {
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); // 🔥 file object

  const token = localStorage.getItem("token");

  /* IMAGE */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file); // ✅ direct file
  };

  /* FETCH */
  const fetchServices = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/services/my`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setServices(data);
  };

  /* ADD / UPDATE */
  const submitService = async (e) => {
    e.preventDefault();

    if (!title || !price) {
      alert("Title and price are required");
      return;
    }

    if (!editingId && !image) {
      alert("Please upload an image");
      return;
    }

    try {
      const url = editingId
        ? `${process.env.REACT_APP_API_URL}/api/services/${editingId}`
        : `${process.env.REACT_APP_API_URL}/api/services`;

      const method = editingId ? "PUT" : "POST";

      // ✅ FormData
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);

      if (image) {
        formData.append("image", image);
      }

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          // ❌ Content-Type mat set karo
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Operation failed");
        return;
      }

      resetForm();
      fetchServices();
    } catch (err) {
      console.error("FRONTEND ERROR:", err);
      alert("Network error");
    }
  };

  /* DELETE */
  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    await fetch(`${process.env.REACT_APP_API_URL}/api/services/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchServices();
  };

  /* EDIT */
  const editService = (s) => {
    setEditingId(s._id);
    setTitle(s.title);
    setDescription(s.description || "");
    setPrice(s.price || "");
    setImage(null); // 🔥 image optional in update
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ProviderLayout>
      <h1 className="text-3xl font-bold text-center mb-8">
        My Services
      </h1>

      {/* FORM */}
      <form
        onSubmit={submitService}
        className="bg-white p-6 rounded-xl shadow max-w-xl mx-auto grid gap-4 mb-12"
      >
        <input
          className="border p-3 rounded"
          placeholder="Service Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="border p-3 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          className="border p-3 rounded"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-3 rounded"
        />

        <button className="bg-yellow-400 py-2 rounded font-semibold">
          {editingId ? "Update Service" : "Add Service"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={resetForm}
            className="text-sm text-gray-500"
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* LIST */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s._id}
            className="bg-white p-5 rounded-xl shadow flex gap-4"
          >
            <img
              src={`${process.env.REACT_APP_API_URL}${s.image}`}
              className="h-24 w-24 object-cover rounded"
              alt={s.title}
            />

            <div className="flex-1">
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
              <p className="text-yellow-500 font-semibold">
                ₹ {s.price}
              </p>

              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => editService(s)}
                  className="text-blue-500 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteService(s._id)}
                  className="text-red-500 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProviderLayout>
  );
}
