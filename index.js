const elems = document.querySelectorAll('.collapsable')

elems.forEach(elem => {
    // if (elem.classList.contains('open')) {
    //     elem.classList.remove('open')
    // }
    elem.addEventListener('click', () => {
        elems.forEach(e => {
            if (e.classList.contains('open')) { e.classList.remove('open') }
        })
        
        elem.classList.add('open')
    })
})
