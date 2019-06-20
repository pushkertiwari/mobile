import { LOGIN } from './actionTypes';

export const login = (user) => {
    return {
        type: LOGIN,
        payload:user
    }
}
