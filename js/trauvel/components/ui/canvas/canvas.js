/*
    Дополнительные обработчики
*/

// Обработчик для зума с колесика мыши
let zoomLevel = 1; // Текущий уровень зума
trauvel.editor.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
        // Прокрутка вверх — увеличиваем зум
        zoomLevel = Math.min(zoomLevel * 1.1, 3); // Ограничим максимальный зум
    } else {
        // Прокрутка вниз — уменьшаем зум
        zoomLevel = Math.max(zoomLevel / 1.1, 0.5); // Ограничим минимальный зум
    }

    // Применяем зум к канвасу
    trauvel.editor.style.transform = `scale(${zoomLevel})`;
    trauvel.editor.style.transformOrigin = '0 0'; // Устанавливаем начало координат в верхний левый угол

    // Обновляем масштаб для всех соединений jsPlumb
    jsPlumbInstance.setZoom(zoomLevel);
});

function clearCanvas() {
    trauvel.editor.innerHTML = '';
    trauvel.blocks = [];
}