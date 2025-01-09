document.getElementById('backArrow').addEventListener('click', () => {
    jsPlumbInstance.reset();
    jsPlumbInstance.deleteEveryConnection();
    document.getElementById('loadButton').click();

    header.querySelector('.backArrow').classList.remove('active');

    header.querySelector('.headerText').innerText = 'Верхний слой';
})