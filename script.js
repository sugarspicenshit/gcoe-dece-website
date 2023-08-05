document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const headerImg = document.querySelector(".header-img");
    const dlsuNavbarLogo = document.getElementById("dlsu-logo-navbar");

    // Function to update the navbar transparency
    function updateNavbarTransparency() {
        const scrollTop = window.scrollY;
        const headerImgHeight = headerImg.offsetHeight;

        if (scrollTop > headerImgHeight - navbar.offsetHeight) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("opaque");
            dlsuNavbarLogo.setAttribute("src", "assets/dlsu logo.png");

        } else {
            navbar.classList.remove("opaque");
            navbar.classList.add("navbar-transparent");
            dlsuNavbarLogo.setAttribute("src", "assets/dlsulogowhite.png");
        }
    }

    // Add an event listener to update the navbar transparency on scroll
    window.addEventListener("scroll", updateNavbarTransparency);

    // Call the function on page load to set the initial transparency
    updateNavbarTransparency();
});