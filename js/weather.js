// Функция для обновления HTML с данными о погоде
// Объект с переводами описаний погоды
const weatherTranslations = {
    "Clear": "Ясно",
    "Partly cloudy": "Частично облачно",
    "Overcast": "Пасмурно",
    "Rain": "Дождь",
    "Snow": "Снег",
    "Thunderstorm": "Гроза",
};

function updateWeather(data) {
    // Извлекаем необходимые данные из ответа API
    const temperature = Math.round(data.current.temp_c); // Температура в Цельсиях
    const feelsLike = Math.round(data.current.feelslike_c); // Чувствуется как
    const weatherDescription = data.current.condition.text; // Описание погоды
    const windSpeed = data.current.wind_kph; // Скорость ветра в км/ч
    const humidity = data.current.humidity; // Влажность

     // Переводим описание погоды на русский язык
     const translatedDescription = weatherTranslations[weatherDescription] || weatherDescription;


    // Обновляем HTML с полученными данными
    document.querySelector('.weather__temp').innerHTML = `${temperature}<span class="degree">°</span>`;
    document.querySelector('#weatherList').innerHTML = `
       <li>${translatedDescription}</li>
        <li>чувствуется как : ${feelsLike}°</li>
        <li>ветер: ${windSpeed} м/с</li>
        <li>влажность воздуха: ${humidity}%</li>
    `;
    
    // Обновляем изображение погоды (если у вас есть соответствующее изображение)
    const weatherImg = document.getElementById('weatherImg');
    weatherImg.src = data.current.condition.icon; // Используем URL изображения из API

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const weatherSection = document.getElementById('weatherForecast');
    weatherSection.innerHTML = ''; // Очищаем содержимое секции перед добавлением новых данных

    for (let i = 1; i <= 3; i++) { // Начинаем с 1, чтобы пропустить текущий день
        const forecastDay = data.forecast.forecastday[i]; // Получаем данные о прогнозе для i-го дня
        const dayName = daysOfWeek[new Date(forecastDay.date).getDay()]; // Получаем название дня недели
        const temperature = Math.round(forecastDay.day.avgtemp_c); // Средняя температура в Цельсиях

        // Создаем элемент для дня
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('day__cnt');

        dayContainer.innerHTML = `
            <span class="day">${dayName}</span>
            <span class="day__temp">
                ${temperature}
                <span class="day__degree">°</span>
                <img class="day__img" src="${forecastDay.day.condition.icon}" alt="${forecastDay.day.condition.text}">
            </span>
        `;

        weatherSection.appendChild(dayContainer); // Добавляем элемент в секцию
    }
}