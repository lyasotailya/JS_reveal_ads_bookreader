let a = document.querySelectorAll('a.font-size')
let book = document.querySelector('div.book')

a.forEach((el) => {
    el.onclick = (e) => {
        e.preventDefault()

        let active = document.querySelector('a.font-size_active')
        active.classList.remove('font-size_active')
        
        el.classList.add('font-size_active')

        if (el.classList.contains('font-size_small')) {
            book.className = 'book book_fs-small'
        } else if (el.classList.contains('font-size_big')) {
            book.className = 'book book_fs-big'
        } else {
            book.className = 'book'
        }
        }
    }
)

