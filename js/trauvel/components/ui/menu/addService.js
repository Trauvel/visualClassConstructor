// Соединение блоков с помощью jsPlumb
jsPlumbInstance.ready(function () {
    // Добавление нового сервиса
    document.getElementById('addServiceButton')?.addEventListener('click', () => {
        createService('service-' + new Date().getTime());
    });
});