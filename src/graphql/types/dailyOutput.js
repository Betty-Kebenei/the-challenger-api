import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
    name: "Daily",
    description: "This represents a day's data",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLID)},
        monthId: {type: new GraphQLNonNull(GraphQLID)},
        morning_chapters: {type: new GraphQLNonNull(GraphQLInt)},
        other_chapters: {type: new GraphQLNonNull(GraphQLInt)},
        riser_time: {type: new GraphQLNonNull(GraphQLString)},
        notes: {type: new GraphQLNonNull(GraphQLBoolean)},
        prayer: {type: new GraphQLNonNull(GraphQLBoolean)},
        smr: {type: new GraphQLNonNull(GraphQLBoolean)},
    }) 
});