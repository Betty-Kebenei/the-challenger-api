import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
    name: "MonthInput",
    description: "This represents a month's data",
    fields: () => ({
        _id: {type: GraphQLID},
        from_date: {type: GraphQLString},
        to_date: {type: GraphQLString}
    })
});