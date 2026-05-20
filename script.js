const CTA_URL = "https://www.omniflashgenerator.com/";

function redirectToCTA(targetUrl = CTA_URL) {
  window.location.href = targetUrl;
}

document.querySelectorAll("[data-cta]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const targetUrl = element.getAttribute("href") || CTA_URL;
    redirectToCTA(targetUrl);
  });
});

document.querySelectorAll("[data-fill-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.getAttribute("data-fill-prompt") || "";
    const targetId = button.getAttribute("data-target") || "heroPrompt";
    const field = document.getElementById(targetId);

    if (field) {
      field.value = prompt;
      field.focus();
      field.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

document.querySelectorAll(".chip-group").forEach((group) => {
  group.addEventListener("click", (event) => {
    const target = event.target.closest(".tool-pill");
    if (!target) return;
    group.querySelectorAll(".tool-pill").forEach((chip) => chip.classList.remove("active"));
    target.classList.add("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("form[data-redirect]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    redirectToCTA();
  });
});
