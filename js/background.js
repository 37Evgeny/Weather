// Ваш Access Key от Unsplash
const accessKey = 'V-VPCrXRs2dDlQD4Pp77IGtZlID2X9JDe5xKojUdQ5M'; // Замените на ваш ключ

async function setRandomBackground() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        
        if (!response.ok) {
            throw new Error('Ошибка при получении изображения');
        }

        const data = await response.json();
        
        // Устанавливаем фоновое изображение
        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        
    } catch (error) {
        console.error(error);
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', setRandomBackground);