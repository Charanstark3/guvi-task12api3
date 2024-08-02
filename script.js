document.addEventListener('DOMContentLoaded', () => {
    const dogsContainer = document.getElementById('dogs');

    /**
     * Fetch and display data from the Dog API.
     */
    function fetchDogsData() {
        fetch('https://dog.ceo/api/breeds/image/random/12')
            .then(response => response.json())
            .then(data => {
                displayDogs(data.message);
            })
            .catch(error => {
                console.error('Error fetching dog images:', error);
                dogsContainer.innerHTML = '<p class="text-danger">Failed to load dog images.</p>';
            });
    }

    /**
     * Display the fetched dog images on the webpage.
     * @param {Array} dogs - Array of dog image URLs.
     */
    function displayDogs(dogs) {
        dogsContainer.innerHTML = dogs.map(dog => createDogCard(dog)).join('');
    }

    /**
     * Create HTML for a dog card.
     * @param {string} dog - The dog image URL.
     * @returns {string} - HTML string for the dog card.
     */
    function createDogCard(dog) {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${dog}" alt="Dog Image" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">Dog</h2>
                        <p class="card-text">Random Dog Image</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Fetch data from the API
    fetchDogsData();
});


