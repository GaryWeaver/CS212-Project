document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase(); // Get input and convert to lowercase
    const items = document.querySelectorAll('#resultsList li'); // Get all list items

    if (!query) {
        items.forEach(item => item.classList.remove('visible'));
    } else {
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
        });
    }
  });

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#resultsList li');

    if (!query) {
        items.forEach(item => item.classList.remove('visible'));
    } else {
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
        });
    }
});

const form = document.getElementById("reservationForm");
const confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  form.style.display = "none";
  confirmationMessage.style.display = "block";
});

function resetForm() {
  form.reset();
  form.style.display = "block";
  confirmationMessage.style.display = "none";
}

document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#resultsList li');

    if (!query) {
        items.forEach(item => item.classList.remove('visible'));
    } else {
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
  const reviewsLink = document.getElementById('reviews-link');
  const reviewSection = document.getElementById('review-section');


  reviewsLink.addEventListener('click', function (e) {
    e.preventDefault(); 

    reviewSection.classList.toggle('hidden');
  });


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