// Соединение блоков с помощью jsPlumb
jsPlumbInstance.ready(function () {
    // Добавление нового сервиса
    document.getElementById('addClassButton')?.addEventListener('click', () => {
        if (!trauvel.innerService) return;

        createClass('class-' + new Date().getTime());
    });
});