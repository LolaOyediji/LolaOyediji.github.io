const lupusBtn = document.getElementsByClassName('lupus__sidebar--img')[0];

lupusBtn.addEventListener('mousedown', () => {
    lupusBtn.classList.toggle('lupusActive')
})

lupusBtn.addEventListener('mouseup', () => {
    lupusBtn.classList.remove('lupusActive')
})