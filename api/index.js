const { ApolloServer } = require('apollo-server');
const userSchema = require('./user/schema/user/user.graphql')

const typeDefs = [userSchema]
const resolvers = {}
const server = new ApolloServer({typeDefs, resolvers})