/*
    Контекстное меню для блока
*/
function addContextMenu(block) {
    block.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        const contextMenu = document.getElementById('contextMenu');

        // Позиционирование меню
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.display = 'block';

        // Запоминаем блок, для которого контекстное меню
        contextMenu.dataset.target = block.id;
    });
}

