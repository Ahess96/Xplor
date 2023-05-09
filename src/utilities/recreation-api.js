import sendRequest from './send-request';
const BASE_URL = '/api/recreation';

export function getActivities() {
    return sendRequest(`${BASE_URL}/activities`)
}

export function getSearch(search) {
    const payload = {search: search}
    console.log(search)
    return sendRequest(`${BASE_URL}/recareas`, 'POST', payload)
}

export function sendRecArea(recAreaDescription, date, recAreaID, recAreaName, recAreaDirections, id) {
    const payload = {
        date,
        recAreaDescription,
        recAreaDirections,
        recAreaName
    }
    return sendRequest(`${BASE_URL}/recareas/${recAreaID}`, 'POST', payload)
}