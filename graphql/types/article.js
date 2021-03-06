import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from "graphql";

import ChannelType from "./channel.js";

export default new GraphQLObjectType({
  name: "Article",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: GraphQLString,
    },
    body: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    channel: {
      type: ChannelType,
    },
    status: {
      type: GraphQLString,
    },
    date_published: {
      type: GraphQLString,
    },
    date_created: {
      type: GraphQLString,
    },
    date_updated: {
      type: GraphQLString,
    },
  },
});
