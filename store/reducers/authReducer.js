import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, REFRESH_TOKEN} from '../actionTypes';

const initialState = {
    isAuthenticated: false,
    accessToken: '',
    refreshToken: '',
    authLoading: false
}


export default function authReducer(state=initialState, action){

    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                accessToken: '',
                refreshToken: '',
                isAuthenticated: false,
                authLoading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.access,
                refreshToken: action.payload.refresh,
                isAuthenticated: true,
                authLoading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                accessToken: '',
                refreshToken: '',
                isAuthenticated: false,
                authLoading: false
            }

        case REFRESH_TOKEN:
            return {
                ...state,
                accessToken: action.payload.access
            }
    }
}