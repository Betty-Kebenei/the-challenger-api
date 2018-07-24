import mongoose from 'mongoose';

var dailysSchema = new mongoose.Schema({
    monthId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    morning_chapters: {
        type: Int,
        required: true,
    },
    other_chapters: {
        type: Int,
        required: true,
    },
    riser_time: {
        type: String,
        required: true,
    },

    notes: {
        type: Boolean,
        required: true,
    },

    prayer: {
        type: Boolean,
        required: true,
    },

    smr: {
        type: Boolean,
        required: true,
    },


});
export default mongoose.model('Daily', dailysSchema);
