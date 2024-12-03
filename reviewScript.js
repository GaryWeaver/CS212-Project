document.addEventListener('DOMContentLoaded', function () {
    const reviewsLink = document.getElementById('reviews-link');
    const reviewSection = document.getElementById('review-section');
  
    document.getElementById('review-form').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('reviewer-name').value.trim();
      const review = document.getElementById('review-text').value.trim();
  
      if (name && review) {
  
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review-item');
  
        reviewContainer.innerHTML = `
          <h4>${name}</h4>
          <p>${review}</p>
          `;
  
  
        document.getElementById('reviews-container').appendChild(reviewContainer);
  
  
        document.getElementById('reviewer-name').value = '';
        document.getElementById('review-text').value = '';
      } else {
        alert('Please fill out all fields!');
      }
    });
  });