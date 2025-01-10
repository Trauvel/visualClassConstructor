// Загрузка состояния канваса из JSON
document.getElementById('loadButton')?.addEventListener('click', () => {
    loadCanvas(localStorage.getItem('canvasState'));
});