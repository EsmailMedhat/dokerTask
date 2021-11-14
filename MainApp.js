// needed libraries
const express = require("express")

// setting the port 
const App = express()
const PortNum = 3000

App.get('/', (req, res) => {
    res.send('<h1 style="text-align:center">this image is made by esmail elsheikh</h1> ')
})

//App listening 
App.listen(PortNum, () => {
    console.log(`App listening at port number ${PortNum}`)
})
