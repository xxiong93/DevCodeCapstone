import config from '../_config/config.js';
import { authHeader } from '../_helpers/auth-header';
import { handleResponse } from '../_helpers/handle-response';
export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}