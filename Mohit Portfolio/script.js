// Contact Modal 
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// Replace the simulated alert with actual API call
const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    // Send POST request to your backend
    const res = await fetch("http://localhost:5000/api/contact", { // change URL if hosted
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.msg); // show success message
      form.reset(); // clear form
      contactModal.style.display = "none"; // close modal
    } else {
      alert(data.msg || "Something went wrong!");
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Please try again later.");
  }
});
