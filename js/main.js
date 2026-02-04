// Smooth scroll to section
function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Footer year
document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Carousel logic
  var currentSlide = 0;
  var slides = document.querySelectorAll(".carousel-slide");
  var dots = document.querySelectorAll(".carousel-dot");

  function showSlide(index) {
    if (!slides.length) return;

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    slides.forEach(function (s, i) {
      if (i === currentSlide) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    dots.forEach(function (d, i) {
      if (i === currentSlide) {
        d.classList.add("active");
      } else {
        d.classList.remove("active");
      }
    });
  }

  window.changeSlide = function (step) {
    showSlide(currentSlide + step);
  };

  window.goToSlide = function (index) {
    showSlide(index);
  };

  // Auto slide every 6 seconds
  if (slides.length) {
    setInterval(function () {
      showSlide(currentSlide + 1);
    }, 6000);
  }

  // Enquiry form -> open email client using mailto:
  var form = document.querySelector(".enquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var travelType = document.getElementById("travelType").value;
      var fromDate = document.getElementById("fromDate").value;
      var toDate = document.getElementById("toDate").value;
      var message = document.getElementById("message").value.trim();

      var subject = encodeURIComponent("New Trip Enquiry – Thanima Travels");
      var body =
        "Name: " + name +
        "%0D%0AEmail: " + email +
        "%0D%0APhone/WhatsApp: " + phone +
        "%0D%0ATrip Type: " + (travelType || "Not specified") +
        "%0D%0AFrom: " + (fromDate || "Not specified") +
        "%0D%0ATo: " + (toDate || "Not specified") +
        "%0D%0A%0D%0ATravel Requirements:%0D%0A" + message;

      var mailtoLink = "mailto:infothanimatravels@gmail.com?subject=" + subject + "&body=" + body;
      window.location.href = mailtoLink;
    });
  }
});
