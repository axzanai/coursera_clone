// Navigation behavior
// Add functionality for smooth scrolling if needed in the future.

document.addEventListener("DOMContentLoaded", () => {
    console.log("CourseraClone site loaded successfully.");

    // Course Card Button Event
    const courseButtons = document.querySelectorAll(".courses .card button");

    courseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const courseTitle = button.parentElement.querySelector(".card-title").textContent;
            alert(`You clicked on the ${courseTitle} course!`);
        });
    });

    // Toggle Navbar on Mobile
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");

    navbarToggler.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");
    });

    // Placeholder for future interactivity
    console.log("JavaScript functionality ready for more features.");
});
