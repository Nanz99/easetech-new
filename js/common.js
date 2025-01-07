(async () => {
    fetch('../services/header.html')
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

    fetch('../services/contact-section.html') // Đường dẫn đến file header.html
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contact-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('../services/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Lỗi:', error));

    fetch('js/header.js')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(scriptContent => {
            const script = document.createElement('script');
            script.text = scriptContent;
            document.body.appendChild(script);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));

    fetch('js/lang.js')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(scriptContent => {

            const script = document.createElement('script');
            script.text = scriptContent;
            document.body.appendChild(script);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
})()