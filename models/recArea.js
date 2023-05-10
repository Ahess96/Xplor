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
    leaveDate: {type: Date},
    isConfirmed: { type: Boolean, default: false }
}, {
    timestamps: true,
    // toJSON: { virtuals: true}
});


// recAreaSchema.statics.getPlannedActivities = function(user, recAreaID, activities) {
//     return this.findOneAndUpdate(
//         // query for the following
//         { user, recAreaID, isConfirmed: false },
//         // update with the following if it is upserted
//         { user, recAreaID },
//         // create doc if it doesn't exist 
//         { upsert: true, new: true }
//     );
// };

// add 

// recAreaSchema.methods.addActivityToPlans = async function(activity) {
//     const plans = this;
//     console.log({activity});
//     plans.activities.push({activity});
// }


module.exports = mongoose.model('RecArea', recAreaSchema);
