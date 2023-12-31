// const searchInput = document.getElementById('search-input');
// const searchButton = document.getElementById('search-button');
// const resultsContainer = document.getElementById('results-container');

// searchButton.addEventListener('click', () => {
//     const searchTerm = searchInput.value.trim();

//     if (searchTerm !== '') {
//         // Replace 'YOUR_API_KEY' with your actual API key
//         const apiKey = 'AIzaSyB30pLvAsbcSNG-4FEaNgGtvv3U9689DPA';
        
//         // Make a request to the Google Books API with your API key
//         const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&orderBy=relevance&maxResults=10&key=${apiKey}`;

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 // Clear previous results
//                 resultsContainer.innerHTML = '';

//                 if (data.items) {
//                     data.items.forEach(book => {
//                         const title = book.volumeInfo.title;
//                         const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
//                         const rating = book.volumeInfo.averageRating || 'N/A';

//                         // Create a card for each book
//                         const card = document.createElement('div');
//                         card.classList.add('book-card');
//                         card.innerHTML = `
//                             <h2>${title}</h2>
//                             <p>Author(s): ${authors}</p>
//                             <p>Rating: ${rating}</p>
//                         `;

//                         resultsContainer.appendChild(card);
//                     });
//                 } else {
//                     resultsContainer.innerHTML = '<p>No results found.</p>';
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }
// });


const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'AIzaSyB30pLvAsbcSNG-4FEaNgGtvv3U9689DPA';

        // Make a request to the Google Books API with your API key
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&orderBy=relevance&maxResults=30&key=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Clear previous results
                resultsContainer.innerHTML = '';

                if (data.items) {
                    // Sort books by rating in descending order
                    const sortedBooks = data.items.sort((a, b) => {
                        const ratingA = a.volumeInfo.averageRating || 0;
                        const ratingB = b.volumeInfo.averageRating || 0;
                        return ratingB - ratingA;
                    });

                    // sortedBooks.forEach(book => {
                    //     const title = book.volumeInfo.title;
                    //     const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
                    //     const rating = book.volumeInfo.averageRating || 'N/A';
                    //     const infoLink = book.volumeInfo.infoLink || '#'; // Use '#' if no link is available

                    //     // Create a card for each book with a link for reading
                    //     const card = document.createElement('div');
                    //     card.classList.add('book-card');
                    //     card.innerHTML = `
                    //         <h2>${title}</h2>
                    //         <p>Author(s): ${authors}</p>
                    //         <p>Rating: ${rating}</p>
                    //         <a href="${infoLink}" target="_blank">Read Book</a>
                    //     `;

                    //     resultsContainer.appendChild(card);
                    // });

                    // Modify the JavaScript code to include a thumbnail image in the card




                    //final
                   // Modify the JavaScript code to include a link to each book for reading
                    // sortedBooks.forEach(book => {
                    //     const title = book.volumeInfo.title;
                    //     const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
                    //     const rating = book.volumeInfo.averageRating || 'N/A';
                    //     const infoLink = book.volumeInfo.infoLink || '#'; // Use '#' if no link is available
                    //     const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'image-not-available.jpg'; // Provide a default image if not available

                    //     // Create a card for each book with a thumbnail and the correct link
                    //     const card = document.createElement('div');
                    //     card.classList.add('book-card');
                    //     card.innerHTML = `
                    //         <img src="${thumbnail}" alt="${title}" class="book-thumbnail">
                    //         <h2>${title}</h2>
                    //         <p>Author(s): ${authors}</p>
                    //         <p>Rating: ${rating}</p>
                    //         <a href="${infoLink}" target="_blank">Read Book</a>
                    //     `;

                    //     resultsContainer.appendChild(card);
                    // });



                    // Modify the JavaScript code to include a link to each book for reading
                    sortedBooks.forEach(book => {
                        const title = book.volumeInfo.title;
                        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author';
                        const rating = book.volumeInfo.averageRating || 'N/A';
                        const infoLink = book.volumeInfo.infoLink || '#'; // Use '#' if no link is available
                        const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'image-not-available.jpg'; // Provide a default image if not available

                        // Create a card for each book with a thumbnail and the correct link
                        const card = document.createElement('div');
                        card.classList.add('book-card');
                        card.innerHTML = `
                            <img src="${thumbnail}" alt="${title}" class="book-thumbnail">
                            <h2>${title}</h2>
                            <p>Author(s): ${authors}</p>
                            <p>Rating: ${rating}</p>
                        `;

                        if (infoLink.includes('play.google.com')) {
                            // Replace play.google.com links with Google Books links
                            card.innerHTML += `<a href="${infoLink.replace('play.google.com', 'books.google.com')}" target="_blank">Read Book</a>`;
                        } else {
                            card.innerHTML += `<a href="${infoLink}" target="_blank">Read Book</a>`;
                        }

                        resultsContainer.appendChild(card);
                    });








                } else {
                    resultsContainer.innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
