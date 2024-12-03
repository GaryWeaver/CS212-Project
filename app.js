document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();
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

cards.forEach(card => {
  card.addEventListener('mouseover', (e) => {

    const description = card.getAttribute('data-description');
    const price = card.getAttribute('data-price');
    const nutrition = card.getAttribute('data-nutrition');

    infoText.innerHTML = `
      <strong>Description:</strong> ${description}<br>
    `;

    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Nutrition:', nutrition);


    infoBox.style.top = `${e.pageY + 10}px`;
    infoBox.style.left = `${e.pageX + 10}px`;
    infoBox.style.display = 'block';
  });

  card.addEventListener('mousemove', (e) => {

    infoBox.style.top = `${e.pageY + 10}px`;
    infoBox.style.left = `${e.pageX + 10}px`;
  });

  card.addEventListener('mouseout', () => {

    infoBox.style.display = 'none';
  });
});


document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseover', () => {
      const info = circle.getAttribute('data-info');

      const descriptionCard = document.getElementById('descriptionCard');
      descriptionCard.style.display = 'block';
      descriptionCard.style.top = `${circle.getBoundingClientRect().bottom + window.scrollY + 10}px`;
      descriptionCard.style.left = `${circle.getBoundingClientRect().left + window.scrollX}px`;

      descriptionCard.innerHTML = `<p>${info}</p>`;
    });

    circle.addEventListener('mouseleave', () => {
      document.getElementById('descriptionCard').style.display = 'none';
    });
  });