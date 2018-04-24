import { makeExecutableSchema } from 'graphql-tools'

cosnt typeDefinitions = `type Person {
    age: Int
    name: String 
    gender: String
}`

const schema = makeExecutableSchema({ typeDefinitions })