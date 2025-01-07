
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        fetch('services/footer.html') // Đường dẫn đến file header.html
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(async data => {
                console.log(2)
                document.querySelector('#footer').innerHTML = data;
            })
            .catch(error => console.error('Error loading header:', error));
    });
})()