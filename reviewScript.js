document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.getElementById('reviews-container');
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  
    // Load saved reviews from localStorage
    savedReviews.forEach(({ name, review, image }) => {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review-item');
        reviewContainer.innerHTML = `
            <h4>${name}</h4>
            <p>${review}</p>
            ${image ? `<img src="${image}" alt="Review Image" class="review-image">` : ''}
        `;
        reviewsContainer.appendChild(reviewContainer);
    });
  
    // Handle new review submission
    document.getElementById('review-form').addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('reviewer-name').value.trim();
        const review = document.getElementById('review-text').value.trim();
        const imageInput = document.getElementById('review-image');
        let image = '';
  
        if (imageInput.files.length > 0) {
            const file = imageInput.files[0];
            const reader = new FileReader();
            reader.onload = function () {
                image = reader.result;
                addReview(name, review, image);
            };
            reader.readAsDataURL(file);
        } else {
            addReview(name, review, image);
        }
    });
  
    // Add review to DOM and localStorage
    function addReview(name, review, image) {
        if (name && review) {
            const reviewContainer = document.createElement('div');
            reviewContainer.classList.add('review-item');
            reviewContainer.innerHTML = `
                <h4>${name}</h4>
                <p>${review}</p>
                ${image ? `<img src="${image}" alt="Review Image" class="review-image">` : ''}
            `;
            reviewsContainer.appendChild(reviewContainer);
  
            // Save review to localStorage
            savedReviews.push({ name, review, image });
            localStorage.setItem('reviews', JSON.stringify(savedReviews));
  
            // Clear input fields
            document.getElementById('reviewer-name').value = '';
            document.getElementById('review-text').value = '';
            document.getElementById('review-image').value = '';
        } else {
            alert('Please fill out all fields!');
        }
    }
  });