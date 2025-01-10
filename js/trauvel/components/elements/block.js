function createBlock(id, left = 0, top = 0, text = 'Новый блок', linkBlocks = [], childrenClasses = []) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = `${left}px`;
    block.style.top = `${top}px`;
    block.id = id;
    if (linkBlocks?.length)
        block.linkBlocks = new Set(linkBlocks);
    if (childrenClasses){
        block.childrenClasses = childrenClasses;
        // console.log('childrenClassesCreate', 'true');
    }
    // console.log('childrenClasses', childrenClasses);

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

    //создаю кнопку для просмотра деталки сервиса
    block3 = document.createElement('span');
    block3.classList.add('enterButton');
    block3.innerText = '⮊';
    block3.style.position = 'absolute';
    block3.style.right = 0;
    block3.style.bottom = 0;
    block3.style.cursor = 'pointer';
    block3.style.fontSize = '30px';
    block3.addEventListener('click', enterButton);
    block2.appendChild(block3);

    block.appendChild(block2);


    trauvel.editor.appendChild(block);

    jsPlumbInstance.draggable(id);
    addContextMenu(block);
    trauvel.blocks.push(block);
}