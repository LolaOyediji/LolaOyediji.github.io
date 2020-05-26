const enterBtn = document.getElementsByClassName('intro__btn')[0];
const coverPage = document.getElementsByClassName('intro')[0]

enterBtn.addEventListener('mousedown', () => {
    coverPage.classList.toggle('enter')
})

enterBtn.addEventListener('mouseup', () => {
    coverPage.classList.remove('enter')
})
