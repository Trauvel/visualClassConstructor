// Обработчик для добавления связи
let isAddingConnection = false;
document.getElementById('addConnection')?.addEventListener('click', () => {
    isAddingConnection = true;

    const contextMenu = document.getElementById('contextMenu');
    const blockId = contextMenu.dataset.target;
    const sourceBlock = document.getElementById(blockId);

    // Выделяем все блоки, кроме источника
    trauvel.blocks.forEach(block => {
        if (block !== sourceBlock) {
            if (!sourceBlock.linkBlocks)
                sourceBlock.linkBlocks = new Set();

            let isHas = sourceBlock.linkBlocks.has(block.id);
            if (!isHas)
                block.classList.add('highlight'); // Выделяем блоки

            let func = addConnection.bind(null, block, sourceBlock, isHas);
            trauvel.eventsHandlers[block.id] = func;
            block.addEventListener('click', func);
        }
    });

    contextMenu.style.display = 'none'; // Закрываем меню
});

// Обработчик для добавления связи
const addConnection = (block, sourceBlock, isHas) => {
    if (block !== sourceBlock && isAddingConnection) {
        // Создаем связь
        if (!isHas) {
            // console.log('addConnect');
            jsPlumbInstance.connect({
                source: sourceBlock.id,
                target: block.id,
                anchor: ["Left", "Top", "Bottom", "Right"],
            });
            // block.removeEventListener('click', eventsHandlers[block.id]);

            sourceBlock.linkBlocks.add(block.id, block);

            if (!block.linkBlocks)
                block.linkBlocks = new Set();

            block.linkBlocks.add(sourceBlock.id);
        }

        // Сбрасываем выделение
        trauvel.blocks.forEach(b => b.classList.remove('highlight'));
        addingFalse();
    }
}

// Обработчик для нажатия ESC, чтобы выйти из режима добавления связи
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isAddingConnection) {
        addingFalse();
    }
});

// Сбрасываем режим добавления связи
function addingFalse() {
    isAddingConnection = false; // Выключаем режим
    trauvel.blocks.forEach(block => {
        block.classList.remove('highlight'); // Убираем выделение
        block.removeEventListener('click', trauvel.eventsHandlers[block.id]);
    });
}