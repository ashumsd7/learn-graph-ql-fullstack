//fethcing ApolloServer class

import {ApolloServer} from '@apollo/server'
//to start thea apollo server
import {startStandaloneServer} from '@apollo/server/standalone'

// What clients can request this is for that: Type Defenition

const typeDefs = `#grapghql
# this is a new comment added
type Query{
    greetings:String
}`

// this is resolver that will resolve the query by returning something
const resolver = {
    Query: {
        greetings: function () {
            return 'Hello I am Greetings query'
        }
    }

}


const server= new ApolloServer({typeDefs, resolver})
// fort starting the server
const info = await startStandaloneServer(server,{
    listen:{
        port:9000
    }
})

console.log("Server running at : ", info?.url , 'and information are :', info)