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