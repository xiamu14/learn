import axios from "axios";
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} from "graphql";

// 我们要用的模拟数据
const data = require("../../data.json");

const User = new GraphQLObjectType({
  name: "User",
  description: "User对象",
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  }
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: User,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve(_, args) {
        // return data["users"][args.id];
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(res => res.data);
      }
    },
    users: {
      type: new GraphQLList(User),
      resolve(_, args) {
        // return data["users"]
        return axios.get(`http://localhost:3000/users`).then(res => res.data);
      }
    }
  }
});

// mutaion: add & delete
const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addUser: {
      type: User,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, args) {
        return axios
          .post(`http://localhost:3000/users`, {
            name: args.name
          })
          .then(res => res.data);
      }
    }
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation
});

export default Schema;
