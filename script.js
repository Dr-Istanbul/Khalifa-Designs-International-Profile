document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            sections.forEach(section => {
                section.style.display = section.id === targetId ? "block" : "none";
            });
        });
    });

    // Show the first section by default
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? "block" : "none";
    });

    // Form submission handling
    const inquiryForm = document.querySelector("form");
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Your inquiry has been submitted!");
            inquiryForm.reset();
        });
    }
});

