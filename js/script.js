document.addEventListener("DOMContentLoaded", () => {
    // 1. Lightbox Popup
    const lightbox = document.getElementById("lightbox");
    const triggers = document.querySelectorAll(".pop-trigger");

    if (lightbox) {
        triggers.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightbox.innerHTML = `<img src="${img.src}" class="img-fluid">`;
            });
        });

        lightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }

    // 2. Form Validation Utility
    const setupForm = (formId, msgId, successText) => {
        const form = document.getElementById(formId);
        if (!form) return;
        form.onsubmit = (e) => {
            e.preventDefault();
            document.getElementById(msgId).innerText = successText;
            form.reset();
        };
    };

    setupForm("contactForm", "formMsg", "Message Sent!");
    setupForm("bookingForm", "bookingMsg", "Table Booked!");
});