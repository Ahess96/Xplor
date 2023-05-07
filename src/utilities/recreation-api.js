import sendRequest from './send-request';
const BASE_URL = '/api/recreation/activities';

export function getActivities() {
    return sendRequest(BASE_URL)
}