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