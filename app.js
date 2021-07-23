const path = require('path')
const express = require('express')
const app = express()

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views"))


app.get('/', (req, res) => {
    let date = new Date()
    let dateArray = date.toString().split(' ')
    
    if (dateArray[1] === 'Jul' && dateArray[2] === '16') {
        res.render('feb23.ejs')
    } else {
        res.render('index.ejs')
    }
})

app.use((req, res) => {
    res.status(404);
    res.render('404.ejs')
})

app.listen(3330, () => {
    console.log("now we're listening to u")
});