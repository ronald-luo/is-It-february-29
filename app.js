const path = require('path')
const express = require('express')
const app = express()

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views"))


app.get('/', (req, res) => {
    let date = new Date()
    let dateArray = date.toString().split(' ')
    
    if (dateArray[1] === 'Feb' && dateArray[2] === '29') {
        res.render('feb29.ejs', {date: dateArray.slice(0,3).join(" ")})
    } else {
        res.render('index.ejs', {date: dateArray.slice(0,3).join(" ")})
    }
})

app.use((req, res) => {
    res.status(404);
    res.render('404.ejs')
})

app.listen(3330, () => {
    console.log("now we're listening to u")
});