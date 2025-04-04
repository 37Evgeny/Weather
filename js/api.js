const apiKey = '3e63e2d20fd14485b4b164750250404';
let city = 'Ivanovo';
const urlBase = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;// 

// fetch(urlBase)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         updateWeather(data);
//     })
//     .catch(error => console.error('Error:', error));

// Функция для получения данных о погоде
function getWeather(city) {
    const url = `${urlBase}${city}&days=4`; // Запрашиваем 4 дня (включая текущий)

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            updateWeather(data);
        })
        .catch(error => console.error('Error:', error));
}

// Получаем элементы по их ID
const searchValue = document.getElementById('search__value');
const searchBtn = document.getElementById('search__btn');

// Добавляем обработчик события на кнопку
searchBtn.addEventListener('click', () => {
     city = searchValue.value; // Получаем значение из поля ввода
     getWeather(city); // Вызываем функцию для получения погоды
});

// Изначально загружаем погоду для города по умолчанию
getWeather(city);

