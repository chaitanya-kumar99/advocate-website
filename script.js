// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Scroll to the targeted section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Handle form submission with AJAX (Formspree)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission
  
  // Get form data
  const formData = new FormData(this);

  // Send form data via AJAX to Formspree
  fetch('https://formspree.io/f/mblolkne', {  // <-- Use your Formspree URL
    method: 'POST',
    body: formData,
  })
  .then(response => {
    if (response.ok) {
      // Success: Notify the user
      alert('Your message has been sent successfully!');
      this.reset(); // Reset form fields after submission

      // Show the thank you modal
      const modal = document.getElementById('thankYouModal');
      modal.style.display = "block";
    } else {
      // Error: Notify the user
      alert('Something went wrong. Please try again!');
    }
  })
  .catch(error => {
    alert('Error submitting form. Please try again later.');
  });
});

// Modal behavior (Thank You popup)
const closeModal = document.querySelector('.close');
const modal = document.getElementById('thankYouModal');

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function() {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
