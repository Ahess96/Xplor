import sendRequest from './send-request';
const BASE_URL = '/api/recreation';

export function getActivities() {
    return sendRequest(`${BASE_URL}/activities`)
}

export function getSearch(search) {
    const payload = {search: search}
    return sendRequest(`${BASE_URL}/recareas`, 'POST', payload)
}

export function getAll() {
    return sendRequest(BASE_URL)
}

export function deleteRecArea(recAreaID) {
    const payload = {_id: recAreaID};
    return sendRequest(`${BASE_URL}/${recAreaID}`, 'DELETE', payload)
}

export function sendRecArea(recAreaDescription, date, leaveDate, recAreaID, recAreaName, recAreaDirections) {
    const payload = {
        date,
        leaveDate,
        recAreaDescription,
        recAreaDirections,
        recAreaName,
    }
    return sendRequest(`${BASE_URL}/recareas/${recAreaID}`, 'POST', payload)
}

// export function addActivityToPlans(activity, recAreaID) {
//     const payload = {activity, recAreaID}
//     console.log('REACT', payload)
//     return sendRequest(`${BASE_URL}/recareas/activities`, 'POST', payload)
// }

// export function getPlans(recAreaID) {
//     const payload = {recAreaID}
//     console.log('sent')
//     return sendRequest(`${BASE_URL}/recareas/plans`, 'POST', payload)
// }