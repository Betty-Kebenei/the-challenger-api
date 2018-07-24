import mongoose from 'mongoose';

var monthsSchema = new mongoose.Schema({
    from_date: {
        type: string,
        required: true,
    },
    to_date: {
        type: string,
        required: true,
    }
});
export default mongoose.model('Month', monthsSchema);
