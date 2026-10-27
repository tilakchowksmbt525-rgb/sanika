
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");

    menuBtn.textContent = navbar.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Prevent selecting a date in the past
const dateInput = document.getElementById("date");
const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localToday;

// Booking form
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        formMessage.textContent =
            "Please enter a valid 10-digit mobile number.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your " + service +
        " enquiry for " + date +
        " has been recorded on this page. Please contact the artist to confirm your booking.";

    console.log("Booking Enquiry:", {
        name: name,
        phone: phone,
        service: service,
        date: date,
        message: message
    });

    bookingForm.reset();
    dateInput.min = localToday;
});
