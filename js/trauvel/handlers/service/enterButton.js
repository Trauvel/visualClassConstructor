function enterButton(e) {
    trauvel.innerService = true;
    // document.getElementById('saveButton').click();

    let service = e.target;
    let parent = service.closest('.block');

    header.querySelector('.headerText').innerText = parent.querySelector('.block-name').innerText;
    header.querySelector('.backArrow').classList.add('active');

    document.getElementById('serviceId').value = parent.id;

    clearCanvas();
    loadCanvas(parent.childrenClasses, false);
}