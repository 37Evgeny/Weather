// Функция для получения текущей даты и времени
function updateDateTime() {
    const now = new Date(); // Получаем текущую дату и время

    // Опции для форматирования даты
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    
    // Форматируем дату
    let formattedDate = now.toLocaleDateString('ru-RU', options);
    
    // Заменяем запятую на пробел после дня недели
    formattedDate = formattedDate.replace(',', ' ');
    
    // Убираем букву "в" перед временем
    formattedDate = formattedDate.replace(/ в /, ' ');
    
    // Убираем букву "г" после года
    formattedDate = formattedDate.replace(/(\d{4}) г/, '$1'); // Удаляем "г" после года
    
    // Убираем точку после года, если она есть
    formattedDate = formattedDate.replace(/\s+\./, ''); // Удаляем точку, если она стоит после пробела

    // Преобразуем каждое слово в строке в формат с заглавной буквы
    formattedDate = formattedDate.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Обновляем содержимое элемента с id "dateTime"
    document.getElementById('dateTime').textContent = formattedDate;
}

// Вызываем функцию при загрузке страницы
updateDateTime();