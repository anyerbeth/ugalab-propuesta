// Año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Nav: fondo al hacer scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menú móvil
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
  })
);

// Aparición suave de secciones
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Visor de imágenes de noticias
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll("[data-full]").forEach((btn) =>
  btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.full;
    lightboxImg.alt = btn.querySelector("img").alt;
    lightbox.showModal();
  })
);
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) lightbox.close();
});
