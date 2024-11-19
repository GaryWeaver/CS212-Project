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