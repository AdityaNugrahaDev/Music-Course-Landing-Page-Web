document.addEventListener("DOMContentLoaded", function() {
  // Mengganti Teks pada Hero Section
  const heroTitle = document.querySelector(".hero .content h1");
  const heroText = document.querySelector(".hero .content p");
  heroTitle.textContent = "Discover the Universe of Music with Us";
  heroText.textContent = "Join us in exploring the endless possibilities of musical expression and creativity. Let's embark on this musical journey together.";

  // Menambahkan Elemen Baru pada About Section
  const aboutSection = document.querySelector("#about .container");
  const newElement = document.createElement("div");
  newElement.className = "row mt-4";
  newElement.innerHTML = `
    <div class="col text-center">
      <h3>Our Mission</h3>
      <p>To inspire and nurture the love of music in every individual, providing exceptional music education and fostering a supportive community of musicians.</p>
    </div>
  `;
  aboutSection.appendChild(newElement);

  // Mengubah Teks pada Tombol di Hero Section
  const heroButton = document.querySelector(".hero .btn-container a");
  heroButton.textContent = "Learn More";
});

