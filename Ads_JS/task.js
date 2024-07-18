let span = document.querySelectorAll('span.rotator__case')
let len_span = span.length
let i = 0

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(() => {
    let active = document.querySelector('span.rotator__case_active')
    active.classList.toggle('rotator__case_active')

    i == len_span ? i = 0 : i

    span[i].classList.toggle('rotator__case_active')

    let randColor = ['red', 'green', 'yellow', 'black', 'pink', 'purple', 'brown'][Math.floor(Math.random() * len_span)]
    span[i].style.color = randColor

    i++
}, randomNumber(200, 2000))