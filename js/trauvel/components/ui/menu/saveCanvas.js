// Сохранение состояния канваса в JSON
document.getElementById('saveButton')?.addEventListener('click', () => {
    let jsonData = null;

    if (trauvel.innerService) {
        let canvasState = JSON.parse(localStorage.getItem('canvasState'));
        canvasState.blocks = canvasState.blocks.map(block => {
            if (block.id == document.getElementById('serviceId').value) {
                block.childrenClasses = saveCanvas(false);
                return {
                    ...block,
                }
            }
        });

        jsonData = JSON.stringify(canvasState);
    } else {
        jsonData = saveCanvas();
    }

    console.log("Saved JSON:", jsonData);  // Выводим данные в консоль (или сохраняем в файл)
    localStorage.setItem('canvasState', jsonData); // Сохраняем в localStorage
});

function saveCanvas(isJson = true) {
    const blockStates = trauvel.blocks.map(block => (
        {
            id: block.id,
            left: parseFloat(block.style.left),
            top: parseFloat(block.style.top),
            text: block.querySelector('.block-name').innerText,
            linkBlocks: block.linkBlocks ? JSON.stringify(Array.from(block.linkBlocks)) : null,
        }
    ));

    const connectionStates = jsPlumbInstance.getConnections().map(connection => ({
        source: connection.source.id,
        target: connection.target.id
    }));

    if (isJson) {
        return JSON.stringify({ blocks: blockStates, connections: connectionStates });
    } else {
        return { blocks: blockStates, connections: connectionStates };
    }
}