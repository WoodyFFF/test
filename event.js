document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('event-apply-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const event = document.getElementById('event').value;
        const message = document.getElementById('message').value;

      
        console.log('Application submitted:', { name, email, phone, event, message });

       
        alert('Thank you for applying! We will contact you soon.');

       
        form.reset();
    });
});
