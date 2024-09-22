

document.querySelector('#contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

// function myFunction()
{
    const formData = {
        fullName: this.querySelector('[name="fullName"]').value,
        email: this.querySelector('[name="email"]').value,
        phoneNumber:this.querySelector('[name="phoneNumber"]').value,
        emailSubject:this.querySelector('[name="emailSubject"]').value,
        massage: this.querySelector('[name="massage"]').value
    };
    console.log(formData);
    fetch('http://localhost:8084/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(() => {
        // Handle the submission success
        alert('Form submitted successfully!');
        // Optionally, reset the form or display a confirmation message to the user
        this.reset();
    })
    .catch(error => {
        // Handle submission error
        console.error('Error:', error);
    });
}});
