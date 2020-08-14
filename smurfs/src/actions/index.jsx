import axios from 'axios'


export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA'
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS'
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE'

export const POST_SMURF_DATA = 'POST_SMURF_DATA'
export const POST_SMURF_DATA_SUCCESS = 'POST_SMURF_DATA_SUCCESS'
export const POST_SMURF_DATA_FAILURE = 'POST_SMURF_DATA_FAILURE'


export const fetchSmurfs = () => (dispatch) =>{

    dispatch({type: FETCH_SMURF_DATA});

    axios.get("http://localhost:3333/smurfs")
    .then((res) =>{
        console.log(res.data)
        dispatch({type: FETCH_SMURF_DATA_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: FETCH_SMURF_DATA_FAILURE, payload: err})
    })
}


// export const postSmurfs = (newSmurf) => (dispatch) =>{

//     dispatch({type: POST_SMURF_DATA});

//     axios.post("http://localhost:3333/smurfs")
//     .then((res) =>{
//         // dispatch({type: POST_SMURF_DATA_SUCCESS, payload: res.data});
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }