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
// Function to load header and footer and execute a callback after loading
function loadComponent(file, elementId, callback) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
          if (callback) callback(); 
      })
      .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load header and footer when the page loads
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header.html", "header-placeholder", function () {
      // Now that the header is loaded, we can add event listeners
      const menuToggle = document.getElementById("mobile-menu-toggle");
      const navigation = document.getElementById("site-navigation");
      const menuItems = document.querySelectorAll("#site-navigation a"); // Select menu links

      if (!menuToggle || !navigation) {
          console.error("Menu toggle button or navigation not found!");
          return;
      }

      // Toggle menu on hamburger click
      menuToggle.addEventListener("click", function () {
          navigation.classList.toggle("toggled");
          const isExpanded = navigation.classList.contains("toggled");
          menuToggle.setAttribute("aria-expanded", isExpanded);
      });

      // Close menu when clicking a menu item
      menuItems.forEach(item => {
          item.addEventListener("click", function () {
              navigation.classList.remove("toggled"); // Hide the menu
              menuToggle.setAttribute("aria-expanded", "false");
          });
      });
  });

  loadComponent("footer.html", "footer");
});