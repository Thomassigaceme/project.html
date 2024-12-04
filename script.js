let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Fungsi untuk menggeser carousel
function showNextItem() {
  items.forEach((item, index) => {
    item.style.transform = `translateX(-${100 * currentIndex}%)`;
  });
  currentIndex = (currentIndex + 1) % totalItems;
}

// Menjalankan carousel otomatis
setInterval(showNextItem, 3000);

// Fungsi untuk tombol View Details
function showDetails(projectId) {
  const projectDetails = {
    project1: "This is a detailed description of Project 1: Innovative E-Commerce Solution...",
    project2: "Details for Project 2: Creative Marketing Campaign...",
    // Tambahkan detail lainnya sesuai kebutuhan
  };

  alert(projectDetails[projectId]);
}
function showDetails(projectId) {
  const projectDetails = {
    project1: "This is a detailed description of Project 1: Innovative E-Commerce Solution...",
    project2: "Details for Project 2: Creative Marketing Campaign...",
    project3: "Details for Project 3: Custom Web Application...",
    project4: "Details for Project 4: Mobile App Design...",
  };

  alert(projectDetails[projectId] || "Details not available for this project.");
}
