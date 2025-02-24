document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".ProjectCard");
  const viewMoreBtn = document.querySelector(".ViewMoreProjectsBtn");

  // Show only the first 6 cards initially
  const visibleCount = 6;

  function showInitialCards() {
    projectCards.forEach((card, index) => {
      if (index < visibleCount) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    });
    viewMoreBtn.textContent = "View More"; // Reset button text
  }

  function showAllCards() {
    projectCards.forEach((card) => card.classList.add("visible"));
    viewMoreBtn.textContent = "View Less"; // Update button text
  }

  // Initially show only the first 6 cards
  showInitialCards();

  // Add click event to toggle between "View More" and "Show Less"
  viewMoreBtn.addEventListener("click", () => {
    const allVisible = Array.from(projectCards).every((card) =>
      card.classList.contains("visible")
    );

    if (allVisible) {
      showInitialCards(); // If all are visible, revert to initial view
    } else {
      showAllCards(); // If not all are visible, show all cards
    }
  });
});
// footer linking
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

// Load the header.html content into the #header-placeholder div
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-placeholder").innerHTML = data;
  });
  
 // Wait for the DOM to load
 document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease-in-out', // Animation easing function
    once: false, // Whether animation should happen only once
    mirror: true // Whether elements should animate out while scrolling past them
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navigation = document.getElementById("site-navigation");
  const menuItems = document.querySelectorAll("#primary-menu .menu-item a");

  // Debugging: Check if elements exist
  if (!menuToggle) {
    console.error("❌ Error: #mobile-menu-toggle not found!");
    return;
  }

  if (!navigation) {
    console.error("❌ Error: #site-navigation not found!");
    return;
  }

  // Toggle navigation menu on button click
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    // Toggle 'aria-expanded' attribute for accessibility
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
  });

  // Close menu when clicking a menu item (on mobile)
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      if (navigation.classList.contains("active")) {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
