const randomImageUrl = 'https://picsum.photos/1920/1080'; // Замените на нужные вам размеры

fetch(randomImageUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        document.body.style.backgroundImage = `url(${randomImageUrl})`; // Устанавливаем фоновое изображение
    })
    .catch(error => console.error('Error:', error));