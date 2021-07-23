const container = document.querySelector('.container')
container.setAttribute('style', 'background-color: black;');

const date = document.querySelector('.date')
date.textContent = new Date()

setInterval(() => {
    date.textContent = new Date()
}, 1000)

