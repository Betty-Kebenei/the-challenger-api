import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLID,
    GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
    name: "Month",
    description: "This represents a month's data",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        from_date: {type: new GraphQLNonNull(GraphQLString)},
        to_date: {type: new GraphQLNonNull(GraphQLString)}
    })
});