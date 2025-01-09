// Обработчик для переименования блока
document.getElementById('renameOption').addEventListener('click', () => {
    const contextMenu = document.getElementById('contextMenu');
    const blockId = contextMenu.dataset.target;

    // Преобразуем название блока в input для редактирования
    const blockName = document.getElementById(blockId).querySelector('.block-name');
    blockName.contentEditable = true;
    blockName.focus();

    contextMenu.style.display = 'none';
});

document.addEventListener('click', (e) => {
    const contextMenu = document.getElementById('contextMenu');

    if (!contextMenu.contains(e.target)) {
        contextMenu.style.display = 'none';
        const blockId = contextMenu.dataset.target;

        let block = document.getElementById(blockId)
        if (block)
            block.querySelector('.block-name').contentEditable = false;
    }
});