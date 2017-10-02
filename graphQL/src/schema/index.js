import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
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
            resolve(_, args) {
                return data[args.id];
            }
        },
        users: {
            type: new GraphQLList(User),
            resolve(_, args) {
                return data
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;
