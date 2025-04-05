
// const accessKey = 'V-VPCrXRs2dDlQD4Pp77IGtZlID2X9JDe5xKojUdQ5M'; // Замените на ваш ключ

// async function setRandomBackground() {
//     try {
//         const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        
//         if (!response.ok) {
//             throw new Error('Ошибка при получении изображения');
//         }

//         const data = await response.json();
        
//         // Устанавливаем фоновое изображение
//         document.body.style.backgroundImage = `url(${data.urls.regular})`;
        
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Вызываем функцию при загрузке страницы
// document.addEventListener('DOMContentLoaded', setRandomBackground);

// const accessKey = 'V-VPCrXRs2dDlQD4Pp77IGtZlID2X9JDe5xKojUdQ5M'; // Ваш ключ API

// async function setRandomBackground() {
//     try {
//         const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        
//         if (!response.ok) {
//             throw new Error('Ошибка при получении изображения');
//         }

//         const data = await response.json();
        
//         // Создаем новый элемент изображения для фона
//         const img = new Image();
//         img.src = data.urls.regular;

//         img.onload = () => {
//             document.body.style.backgroundImage = `url(${data.urls.regular})`;
//             document.body.style.display = 'block'; // Показываем тело после загрузки фона
//             document.getElementById('loading').style.display = 'none'; // Скрываем индикатор загрузки
//         };

//         img.onerror = () => {
//             console.error('Ошибка при загрузке изображения');
//             document.getElementById('loading').innerText = 'Не удалось загрузить фон';
//         };
        
//     } catch (error) {
//         console.error(error);
//         document.getElementById('loading').innerText = error.message; // Показываем сообщение об ошибке
//     }
// }

// // Вызываем функцию при загрузке страницы
// setRandomBackground();


const accessKey = 'V-VPCrXRs2dDlQD4Pp77IGtZlID2X9JDe5xKojUdQ5M'; // Ваш ключ API

async function setRandomBackground() {
    // Показываем индикатор загрузки
    document.getElementById('loading').style.display = 'flex';

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
        
        if (!response.ok) {
            throw new Error('Ошибка при получении изображения');
        }

        const data = await response.json();
        
        // Создаем новый элемент изображения для фона
        const img = new Image();
        img.src = data.urls.regular;

        img.onload = () => {
            document.body.style.backgroundImage = `url(${data.urls.regular})`;
            document.body.style.display = 'block'; // Показываем тело после загрузки фона
            document.getElementById('loading').style.display = 'none'; // Скрываем индикатор загрузки
        };

        img.onerror = () => {
            console.error('Ошибка при загрузке изображения');
            document.getElementById('loading').innerText = 'Не удалось загрузить фон';
            document.getElementById('loading').style.display = 'none'; // Скрываем индикатор загрузки в случае ошибки
        };
        
    } catch (error) {
        console.error(error);
        document.getElementById('loading').innerText = error.message; // Показываем сообщение об ошибке
        document.getElementById('loading').style.display = 'none'; // Скрываем индикатор загрузки в случае ошибки
    }
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', setRandomBackground);
