const img = document.querySelector('.img');
const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element img
img.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);

});
img.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'img';
});

// 
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered');
    });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(img);
    })
}