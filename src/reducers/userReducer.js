import { LOGIN } from '../actions/actionTypes';

const initialState = {
    loginData:{}
};

export default user = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:{
            return {
                ...state,
                loginData:action.payload
            }
        }
        default:
            return state
    }
}