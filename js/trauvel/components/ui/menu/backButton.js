document.getElementById('backArrow').addEventListener('click', () => {
    clearCanvas();

    document.getElementById('loadButton').click();

    header.querySelector('.backArrow').classList.remove('active');

    header.querySelector('.headerText').innerText = 'Верхний слой';
})