const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())

let books = [
    {title: "The Vampire Chronicles",
     genre: "fiction",
     publisher: "Knopf",
     year: 2019,
     imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Complete_Vampire_Chronicles_cover.jpg/220px-The_Complete_Vampire_Chronicles_cover.jpg",
     id: 1
    }      
]


app.get('/api/home', (req,res) => {
    res.json(books)
})

app.listen(5050, () => {
    console.log("Server is running")
})