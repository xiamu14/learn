import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt
} from 'graphql'

// 我们要用的模拟数据
const data = require('../../data.json')

const User = new GraphQLObjectType({
    name: 'User',
    description: 'User对象',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
    }
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (_, args) {
                return data[args.id];
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;