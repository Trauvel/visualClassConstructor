// Сохранение состояния канваса в JSON
document.getElementById('saveButton')?.addEventListener('click', () => {
    // console.log('save start');
    let jsonData = null;

    if (trauvel.innerService) {
        let canvasState = JSON.parse(localStorage.getItem('canvasState'));
        canvasState.blocks = canvasState.blocks.map(block => {
            if (block.id == document.getElementById('serviceId').value) {
                block.childrenClasses = saveCanvas(false);
            }
            return {
                ...block,
            }
        });
        // console.log('canvasState', canvasState);
        jsonData = JSON.stringify(canvasState);
    } else {
        jsonData = saveCanvas();
    }

    // console.log("Saved JSON:", jsonData);  // Выводим данные в консоль (или сохраняем в файл)
    localStorage.setItem('canvasState', jsonData); // Сохраняем в localStorage
    // console.log('save end');
});