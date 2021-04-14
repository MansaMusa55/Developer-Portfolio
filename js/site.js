const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_6rpic2w';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        title: 'Email Sent',
        text: 'Your email was sent succesfully, I will respond within 24 hours',
        icon: 'success',
        confirmButtonText: 'Cool'
      })      
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        title: 'Error!',
        html: 'Looks like something went wrong! <hr /> I\'m always available on <a href="https://www.Linkedin.com/in/samuel-musa-27a21120b" target="_blank">LinkedIn</a>',
        icon: 'error',
        confirmButtonText: 'Try Again'
      })      
      alert(JSON.stringify(err));
    });
});


