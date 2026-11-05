// mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) mainNav.classList.remove("is-open");
});

// quote form: reg aur service ke saath WhatsApp message khulta hai (koi server nahi chahiye)
const quoteForm = document.getElementById("quote-form");
if (quoteForm) {
  const regInput = quoteForm.elements.reg;
  regInput.addEventListener("input", () => {
    regInput.value = regInput.value.toUpperCase().replace(/[^A-Z0-9 ]/g, "");
  });
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const reg = regInput.value.trim();
    if (!reg) {
      regInput.focus();
      return;
    }
    const town = quoteForm.dataset.town;
    const message = `Hi, can I get a price for ${quoteForm.elements.service.value}? Reg: ${reg}${town ? ` (${town})` : ""}`;
    window.open(`https://wa.me/${quoteForm.dataset.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

// FAQ: ek waqt mein ek hi khula
document.querySelectorAll(".faq").forEach((list) => {
  list.addEventListener("toggle", (event) => {
    if (!event.target.open) return;
    list.querySelectorAll("details[open]").forEach((item) => { if (item !== event.target) item.open = false; });
  }, true);
});
