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

export function sendRecArea(recAreaDescription, activities, date, leaveDate, recAreaID, recAreaName, recAreaDirections) {
    const payload = {
        date,
        leaveDate,
        activities,
        recAreaDescription,
        recAreaDirections,
        recAreaName,
    }
    return sendRequest(`${BASE_URL}/recareas/${recAreaID}`, 'POST', payload)
}

export function deleteActivity(act, recAreaID) {
    const payload = {act}
    return sendRequest(`${BASE_URL}/${recAreaID}/delete-activity`, 'PUT', payload)
}
