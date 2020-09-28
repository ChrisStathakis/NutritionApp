import {PROFILE_REQUEST} from '../actionTypes';


const initialState = {
    username: '',
    id: '',
    email: '',
    profile_id: '',
    weight: '',
    height: '',
    birth: '',
    workout_lvl: '',
    gender: '',
    tag_gender: '',
    calories: 0
};


export default function profileReducer(state=initialState, action){
    switch(action.type){
        case PROFILE_REQUEST:
            return {
                ...state,
                profile_id: action.payload.id,
                weight: action.payload.weight,
                height: action.payload.height,
                birth: action.payload.birth,
                gender: action.payload.gender,
                tag_gender: action.payload.tag_gender,
                workout_lvl: action.payload.workout_lvl,
                bmi:action.payload.bmi,
                calories: action.payload.calories,
                username: action.userload.username,
                id: action.userload.id,
                email: action.userload.email
            }
        default:
            return state
    }
}