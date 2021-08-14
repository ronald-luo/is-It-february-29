const container = document.querySelector('.container')

const date = document.querySelector('.date');

const setDate = () => {
    let dateObj = new Date()
    let dateArray = dateObj.toString().split(' ').slice(0,5).join(" ")
    date.textContent = dateArray
};

setDate()

setInterval(() => {
    setDate()
}, 1000)

