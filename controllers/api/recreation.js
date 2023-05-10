const RecArea = require('../../models/recArea');

module.exports = {
    create,
    getAll,
    deleteRec,
    deleteAct,
}


async function create(req, res) {
    try {
        const userID = req.user._id;
        const recAreaID = await req.params.id;
        const recAreaName = req.body.recAreaName;
        const recAreaDescription = req.body.recAreaDescription;
        const recAreaDirections = req.body.recAreaDirections;
        const activities = req.body.activities;
        const date = await req.body.date;
        const leaveDate = req.body.leaveDate;
        if (!recAreaID) {
            return res.status(400).json({message: 'RecArea not found'})
        }
        const recArea = new RecArea({
            recAreaID,
            recAreaName,
            recAreaDirections,
            recAreaDescription,
            user: userID,
            activities,
            date, 
            leaveDate,
        });
        await recArea.save();
        res.status(201).json({message: 'recArea created'})
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'})
    }
}

async function getAll(req, res) {
    const plans = await RecArea.find({user: req.user._id}).exec()
    res.json(plans);
}

async function deleteRec(req, res) {
    await RecArea.findByIdAndDelete(req.body._id);
    res.status(200).json('File Deleted.');
}

async function deleteAct(req, res) {
    try {
        const recArea = await RecArea.findById(req.params.id)
        const actIndex = recArea.activities.indexOf(req.body.act)
        if (actIndex === -1) res.status(404).json({message: 'Acitivity not found.'})
        recArea.activities.splice(actIndex, 1)
        await recArea.save();
        res.status(200).json({message: 'Activity Deleted.'})
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'server error'})
    }
}

// const apikey = process.env.API_KEY;
// const ROOT_URL = 'https://ridb.recreation.gov/api/v1'


// async function search(req, res) {
//     // search information
//     const query = activities;
//     if (!query) return res.status(400).json({error: 'Query parameter is missing'});
//     const options = {
//         headers: {
//             Authorization: `apikey ${apikey}`
//         }
//     }
//     const response = await fetch(`${ROOT_URL}/${query}`, options)
//     console.log(response)
//     const searchResults = await response.json();
//     res.json({searchResults});
// }

// module.exports = {
//     search,
// }