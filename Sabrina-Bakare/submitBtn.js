const submitBtn = document.body.getElementsByClassName('submit__btn')[0];
const snackbar = document.body.getElementsByClassName('snackbar')[0];
const smileyBtn = document.body.getElementsByClassName('smiley__btn')[0];
let submit = false;

submitBtn.addEventListener('mousedown', () => {
    submitBtn.classList.toggle('contact')
})

submitBtn.addEventListener('click', () => {
    snackbar.classList.toggle('sent')
})

setTimeout(function(){snackbar.classList.remove('sent')}, 4500);

submitBtn.addEventListener('mouseup', () => {
    submitBtn.classList.remove('contact')
    submitBtn.classList.toggle('disappear');
    smileyBtn.classList.toggle('contact')
})

setTimeout(() => {smileyBtn.classList.remove('contact')}, 4500)
setTimeout(() => {submitBtn.classList.remove('disappear')}, 4500);




