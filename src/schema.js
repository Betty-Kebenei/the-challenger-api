const _ = require('lodash');
const Months = require("./data/months");
const Dailys = require("./data/dailys");

let {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLID,
    GraphQLNonNull,
    GraphQLSchema,
} = require("graphql");

const MonthType = new GraphQLObjectType({
    name: "Month",
    description: "This represents a month's data",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        from_date: {type: new GraphQLNonNull(GraphQLString)},
        to_date: {type: new GraphQLNonNull(GraphQLString)}
    })
});

const DailyType = new GraphQLObjectType({
    name: "Daily",
    description: "This represents a day's data",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLID)},
        morning_chapters: {type: new GraphQLNonNull(GraphQLInt)},
        other_chapters: {type: new GraphQLNonNull(GraphQLInt)},
        riser_time: {type: new GraphQLNonNull(GraphQLString)},
        notes: {type: new GraphQLNonNull(GraphQLBoolean)},
        prayer: {type: new GraphQLNonNull(GraphQLBoolean)},
        smr: {type: new GraphQLNonNull(GraphQLBoolean)},
        month: {
            type: MonthType,
            resolve: function(daily){
                return _.find(Months, month => month.id == daily.month_id);
            }
        }
    })
});

const ChallengerQueryRootType = new GraphQLObjectType({
    name: "ChallengerAppSchema",
    description: "Challenger Application Schema Query Root",
    fields: () => ({
        months: {
            type: new GraphQLList(MonthType),
            description: "List of all months",
            resolve: function () {
                return Months
            }
        },
        dailys: {
            type: new GraphQLList(DailyType),
            description: "List of all daily data",
            resolve: function () {
                return Dailys
            }
        }
    })
});

const ChallengerAppSchema = new GraphQLSchema({
    query: ChallengerQueryRootType
});

module.exports = ChallengerAppSchema;