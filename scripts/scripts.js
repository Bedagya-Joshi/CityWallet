function openWebsite() {
    window.location.href = "https://agent.citywallet.com.np/auth/signup";
}

function androidDownload() {
    window.location.href ="https://play.google.com/store/apps/details?id=com.ctxpress.citypay";
}

function iosDownload() {
    window.location.href ="https://apps.apple.com/nz/app/citypay-nepal/id1643110573";
}

function facebookPage() {
    window.location.href ="https://www.facebook.com/";
}

function instaPage() {
    window.location.href ="https://www.instagram.com/";
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then((response) => response.text())
        .then((data) => {
        // Create a new container element for the fetched navbar
        var navbarContainer = document.createElement("div");
        navbarContainer.innerHTML = data;

        // Insert the navbar container before the content
        document.body.insertBefore(navbarContainer, document.body.firstChild);

        document.body.style.display = "block";
        })
        .catch((error) => console.error("Error fetching navbar:", error));
});

function handleScroll() {
    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 150) {
        section.classList.add("active");
        } else {
        section.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", handleScroll);

handleScroll();
