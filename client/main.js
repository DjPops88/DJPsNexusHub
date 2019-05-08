const $ = e => document.querySelector(e)
let isMenuOpened = false

$('button').addEventListener('click', event => {
    console.log ('Hello World!')

    if (isMenuOpened) {
        isMenuOpened = false

        $('.menu').style.padding = '0 30px'
        $('.menu').style.height = '0'
    } else {
        isMenuOpened = true

        $('.menu').style.padding = '30px'
        $('.menu').style.height = 'auto'
    }
})