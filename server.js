import express from 'express'
const app = express()

console.log("Miriam...s")


app.get('/graphql', (req, res) => {
    res.send('Hello World')
})



app.listen(4000, (err) => {
    if(err){ throw err }
    console.log("\n------------------- \n Server Listening on port 4000 ... \n")
})