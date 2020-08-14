//import action
import {FETCH_SMURF_DATA, FETCH_SMURF_DATA_SUCCESS, FETCH_SMURF_DATA_FAILURE, POST_SMURF_DATA, POST_SMURF_DATA_SUCCESS,POST_SMURF_DATA_FAILURE} from '../actions'
//create initial state
const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
};


export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SMURF_DATA:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURF_DATA_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}