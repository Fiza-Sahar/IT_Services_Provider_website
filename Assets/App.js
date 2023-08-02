//  // JavaScript for Navbar Toggle Functionality
//  const navbarToggler = document.querySelector('.navbar-toggler');
//  const navbarNav = document.querySelector('#navbarNav');

//  navbarToggler.addEventListener('click', () => {
//      navbarNav.classList.toggle('collapsed');
//  });



const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form values
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const serviceType = form.elements["serviceType"].value;
    const message = form.elements["message"].value;

    // Basic validation
    if (!name || !email || !phone || !serviceType || !message) {
        alert("Please fill in all fields.");
        return;
    }

   
    popup.style.display = "block";

    // Reset the form after submission
    form.reset();
});


closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});