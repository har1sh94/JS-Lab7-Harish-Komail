document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://raw.githubusercontent.com/KomailK/json-inclass/main/sports-examples/sports.json';

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('error');
      }
      return response.json();
    })
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error('Error :', error);
    });
});

const displayData = (data) => {
  const dataContainer = document.getElementById('dataContainer');

  data.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.classList.add('item');

    const nameElement = document.createElement('h2');
    nameElement.textContent = `Name : ${item.name}`;

    const playersElement = document.createElement('p');
    playersElement.textContent = `Players : ${item.players}`;

    const pitchElement = document.createElement('p');
    pitchElement.textContent = `Pitch : ${item.pitch}`;

    const imageElement = document.createElement('img');
    imageElement.src = item.image;

    listItem.appendChild(nameElement);
    listItem.appendChild(playersElement);
    listItem.appendChild(pitchElement);
    listItem.appendChild(imageElement);

    dataContainer.appendChild(listItem);
  });
};
