export const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully!');
            } else {
                console.error('Failed to submit form');
            }
        })
        .catch(error => console.error(error));
};
