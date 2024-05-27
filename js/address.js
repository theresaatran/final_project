document.addEventListener('DOMContentLoaded', () => {
    const accessKey = 'jvle6q3nIN4B3slfrUTF4xd0oerjSxo6AJV6tI1T-zA';
    const gallery = document.getElementById('gallery');
    const searchBar = document.getElementById('search-bar');
    const sortButton = document.getElementById('search-button');

    async function fetchImages(query = 'architecture') {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${accessKey}`);
            if (!response.ok) {
                throw new Error('Failed to fetch images from Unsplash');
            }
            const data = await response.json();
            displayImages(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    function displayImages(images) {
        gallery.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.urls.regular;
            imgElement.alt = image.alt_description || 'Architecture Image';
            gallery.appendChild(imgElement);
        });
    }

    fetchImages();

    sortButton.addEventListener('click', () => {
        const query = searchBar.value.trim();
        if (query) {
            fetchImages(query);
        }
    });
});