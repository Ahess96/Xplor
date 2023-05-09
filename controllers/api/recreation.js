const RecArea = require('../../models/recArea');

module.exports = {
    create,
}


async function create(req, res) {
    try {
        const userID = req.user._id;
        const recAreaID = await req.params.id;
        const recAreaName = req.body.recAreaName;
        const recAreaDescription = req.body.recAreaDescription;
        const recAreaDirections = req.body.recAreaDirections;
        const date = await req.body.date;
        if (!recAreaID) {
            return res.status(400).json({message: 'RecArea not found'})
        }
        const recArea = new RecArea({
            recAreaID,
            recAreaName,
            recAreaDirections,
            recAreaDescription,
            user: userID,
            activities: [],
            date, 
        });
        await recArea.save();
        res.status(201).json({message: 'recArea created'})
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