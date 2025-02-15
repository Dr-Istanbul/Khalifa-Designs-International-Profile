document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scrolling when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });

    // Function to highlight the active navigation tab
    const highlightNav = () => {
        let scrollPosition = window.scrollY + 100; // Offset for better detection

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add("active");
            }
        });
    };

    // Function to reveal sections on scroll
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    };

    // Attach event listeners
    window.addEventListener("scroll", () => {
        revealSections();
        highlightNav();
    });

    // Initial call on page load
    revealSections();
    highlightNav();
});

