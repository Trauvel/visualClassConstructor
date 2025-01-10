// Соединение блоков с помощью jsPlumb
jsPlumbInstance.ready(function () {
    // Добавление нового сервиса
    document.getElementById('addBlockButton')?.addEventListener('click', () => {
        createBlock('service-' + new Date().getTime());
    });
});