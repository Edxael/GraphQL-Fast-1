import express from 'express'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
const app = express()

//  pausa para solo mirar: sec 3 - lec 10 "Schema"

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/play', graphiqlExpress({
    endpointURL: '/myGraphql'
}))

app.use('/myGraphql', bodyParser.json(), graphqlExpress({ }))



app.listen(3000, (err) => {
    if(err){ throw err }
    console.log("\n------------------- \n Server Listening on port 3000 ... \n")
})