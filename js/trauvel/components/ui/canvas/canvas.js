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
    jsPlumbInstance.reset();
    jsPlumbInstance.deleteEveryConnection();
    trauvel.editor.innerHTML = '';
    trauvel.blocks = [];
}

function saveCanvas(isJson = true) {
    // console.log('trauvel.blocks', trauvel.blocks);
    const blockStates = trauvel.blocks.map(block => (
        {
            id: block.id,
            left: parseFloat(block.style.left),
            top: parseFloat(block.style.top),
            text: block.querySelector('.block-name').innerText,
            linkBlocks: block.linkBlocks ? Array.from(block.linkBlocks) : null,
            childrenClasses: block.childrenClasses ? block.childrenClasses : null,
        }
    ));
    // console.log('blockStates', blockStates);

    const connectionStates = jsPlumbInstance.getConnections().map(connection => ({
        source: connection.source.id,
        target: connection.target.id
    }));
    // console.log('connectionStates', connectionStates);

    if (isJson) {
        return JSON.stringify({ blocks: blockStates, connections: connectionStates });
    } else {
        return { blocks: blockStates, connections: connectionStates };
    }
}

function loadCanvas(jsonData = [], isParse = true) {
    // console.log('jsonData', jsonData);
    if (jsonData) {
        if (isParse) {
            // console.log('parse');
            var { blocks: blockStates, connections: connectionStates } = JSON.parse(jsonData);
        } else {
            var { blocks: blockStates, connections: connectionStates } = jsonData;
        }
        // console.log('blockStates', blockStates);
        if (!blockStates) return;

        trauvel.editor.innerHTML = '';

        // Восстанавливаем блоки
        // console.log('blockStates', blockStates);
        blockStates.forEach(state => {
            // console.log('state', state);
            createBlock(state.id, state.left, state.top, state.text, state.linkBlocks, state.childrenClasses);
        });

        // Восстанавливаем соединения
        connectionStates.forEach(state => {
            jsPlumbInstance.connect({
                source: state.source,
                target: state.target
            });
        });
    }
}