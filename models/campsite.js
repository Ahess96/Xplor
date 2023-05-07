const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const campsiteSchema = new Schema({
    campsiteID: {type: String},
    facilityID: {type: String},
    campsiteName: {type: String},
    campsiteLocation: {type: Number},
    user: {type: Schema.Types.ObjectId},
    date: {type: Date}
})


module.exports = mongoose.model('Campsite', campsiteSchema);
