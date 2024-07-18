let reveal = document.querySelectorAll('div.reveal')

function isVis(els) {
    els.forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect()

        if (bottom > 0 && top < window.innerHeight) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    })
}

setInterval(() => {
    isVis(reveal)
}, 1)