document.addEventListener("DOMContentLoaded", () => {
    fetch('services/header.html') // Đường dẫn đến file header.html
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});