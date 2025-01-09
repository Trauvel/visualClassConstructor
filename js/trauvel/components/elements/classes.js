function drawClasses(classes = null) {
    if(!classes) return;

    console.log(classes);
}

function createClass(id, left = 0, top = 0, text = 'Новый класс', linkBlocks = []) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = `${left}px`;
    block.style.top = `${top}px`;
    block.id = id;
    if (linkBlocks?.length)
        block.linkBlocks = new Set(JSON.parse(linkBlocks));

    //создаю div обертку
    let block2 = document.createElement('div');
    block2.style.width = '100%';
    block2.style.height = '100%';
    block2.style.position = 'relative';

    //создаю span с именем сервиса
    let block3 = document.createElement('span');
    block3.classList.add('block-name');
    block3.innerText = text;
    block2.appendChild(block3);

    block.appendChild(block2);


    trauvel.editor.appendChild(block);

    jsPlumbInstance.draggable(id);
    addContextMenu(block);
    trauvel.blocks.push(block);
}