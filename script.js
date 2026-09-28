// ESHWARI TRADERS WEBSITE

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Enquiry form
const enquiryForm = document.querySelector(".enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert(
            "Thank you for your enquiry!\n\n" +
            "ESHWARI TRADERS will contact you shortly."
        );

        enquiryForm.reset();
    });
}


// Current year in footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
