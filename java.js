document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Handle form submission
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Your message has been sent successfully!");
            contactForm.reset();
        });
    }

    // Buy Now button functionality
    const buyButtons = document.querySelectorAll(".buy-now");
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to purchase page...");
            window.location.href = "checkout.html";
        });
    });

    // Highlight active menu item
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute("href").includes(currentPage)) {
            link.style.textDecoration = "underline";
        }
    });
});
