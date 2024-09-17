const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic form validation (you can add more checks)
    if (form.fullName.value.trim() === '' || 
        form.email.value.trim() === '' ||
        form.message.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here, you would typically send the form data to a server using AJAX or Fetch API
    // For now, let's just display a confirmation message
    alert('Thank you for your message!');
    form.reset(); // Clear the form fields
});