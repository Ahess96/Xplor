const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recAreaSchema = new Schema({
    recAreaID: {type: String},
    recAreaName: {type: String},
    recAreaDirections: {type: String},
    recAreaDescription: {type: String},
    activities: {type: Array},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    notes: {type: String},
    date: {type: Date},
    leaveDate: {type: Date},
}, {
    timestamps: true,
});




module.exports = mongoose.model('RecArea', recAreaSchema);
