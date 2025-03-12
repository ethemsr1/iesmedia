document.getElementById("start-btn").addEventListener("click", function() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("main").style.animation = "fadeIn 1s ease-in-out";
});
// Sayfa kaydırıldığında about me kısmını göster
document.addEventListener("scroll", function() {
    var aboutSection = document.querySelector(".about");
    var sectionPosition = aboutSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add("show");
    }
});
window.addEventListener('scroll', function () {
    let header = document.querySelector("nav");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Varsayılan tıklama olayını engelle
        const targetId = this.getAttribute('href').substring(1); // href içindeki ID'yi al
        const targetElement = document.getElementById(targetId); // Hedef elementi seç
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // 50px üstten boşluk bırak
                behavior: 'smooth' // Yumuşak kaydırma efekti
            });
        }
    });
});
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});
