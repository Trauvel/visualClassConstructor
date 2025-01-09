// Загрузка состояния канваса из JSON
document.getElementById('loadButton')?.addEventListener('click', () => {
    const jsonData = localStorage.getItem('canvasState');
    if (jsonData) {
        const { blocks: blockStates, connections: connectionStates } = JSON.parse(jsonData);

        trauvel.editor.innerHTML = '';

        // Восстанавливаем блоки
        blockStates.forEach(state => {
            console.log(state);
            createService(state.id, state.left, state.top, state.text, state.linkBlocks, state.childrenClasses);
        });

        // Восстанавливаем соединения
        connectionStates.forEach(state => {
            jsPlumbInstance.connect({
                source: state.source,
                target: state.target
            });
        });
    } else {
        alert("No saved state found.");
    }
});