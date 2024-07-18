let a = document.querySelectorAll('a.font-size')
let book = document.querySelector('div.book')

a.forEach((el) => {
    el.onclick = () => {
        let active = document.querySelector('a.font-size_active')
        active.classList.toggle('font-size_active')

        let small = document.querySelector('div.book_fs-small')
        let big = document.querySelector('div.book_fs-big')
        small.classList.remove('book_fs-small')
        big.classList.remove('book_fs-big')

        el.classList.remove('font-size_active')
        
        if (a.indexOf(el) == 0) {
            book.classList.add('book_fs-small')
        }

        if (a.indexOf(el) == 2) {
            book.classList.add('book_fs-big')
        }
    }
})

