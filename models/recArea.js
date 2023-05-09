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
    date: {type: Date},
    leaveDate: {type: Date}
}, {
    timestamps: true,
    // toJSON: { virtuals: true}
});


recAreaSchema.statics.getPlannedActivities = function(recAreaID) {
    return this.findOneAndUpdate(
        { recAreaID },
        { upsert: true, new: true }
    );
};

recAreaSchema.methods.addActivityToPlans = async function(activity) {
    const plans = this;
    console.log({activity});
    plans.activities.push({activity});
}


module.exports = mongoose.model('RecArea', recAreaSchema);
