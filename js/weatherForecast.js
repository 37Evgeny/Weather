// Функция для получения прогноза погоды на 3 дня вперед, исключая текущий день
function displayWeatherForecast() {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const weatherData = [10, 12, 11]; // Пример температур для трех дней

    const weatherSection = document.getElementById('weatherForecast');
    weatherSection.innerHTML = ''; // Очищаем содержимое секции перед добавлением новых данных

    for (let i = 1; i <= 3; i++) { // Начинаем с 1, чтобы пропустить текущий день
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i); // Увеличиваем дату на i дней

        const dayName = daysOfWeek[currentDate.getDay()]; // Получаем название дня недели
        const temperature = weatherData[i - 1]; // Получаем температуру для текущего дня (i-1)

        // Создаем элемент для дня
        const dayContainer = document.createElement('div');
        dayContainer.classList.add('day__cnt');

        dayContainer.innerHTML = `
            <span class="day">${dayName}</span>
            <span class="day__temp">
                ${temperature}
                <span class="day__degree">°</span>
                <img class="day__img" src="./img/days__img.png" alt="img">
            </span>
        `;

        weatherSection.appendChild(dayContainer); // Добавляем элемент в секцию
    }
}

// Вызываем функцию при загрузке страницы
displayWeatherForecast();