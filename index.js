const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")

morgan.token("data", (request, response) => {
    return JSON.stringify(request.body)
})

app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :data"))
app.use(cors())
app.use(express.static("build"))

let persons = [
    {
        id: 1,
        name: "timmothee the eighth",
        number: "123453236612316136261",
    },
    {
        id: 2,
        name: "aaaaaaaaaaaaaaaaaa",
        number: "13512562355232352352352352351245125125",
    },
    {
        id: 3,
        name: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        number: "4112412412425152115",
    }
]

app.get("/info", (request, response) => {
    const today = new Date()

    response.send(`<p>Phonebook has entries for ${persons.length} people</p>
                   <p>${String(today)}</p>`)
})

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.filter(p => p.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    console.log(persons)
    response.status(204).end()
})

app.post("/api/persons", (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(404).json({
            error: "name missing"
        })
    } else if (!body.number) {
        return response.status(404).json({
            error: "number missing"
        })
    }

    const names = persons.map(p => p.name)

    if (names.indexOf(body.name) != -1) {
        return response.status(404).json({
            error: "name must be unique"
        })        
    }

    const person = {
        id: Math.floor(Math.random() * 10000),
        name: body.name,
        number: body.number,
        date: new Date()
    }
    
    persons = persons.concat(person)

    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> {
    console.log(`app running on port ${PORT}`)
})