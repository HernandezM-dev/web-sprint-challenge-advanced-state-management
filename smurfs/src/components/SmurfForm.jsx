import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {fetchSmurfs}  from '../actions'

const initialFormValues = {
    name: '',
    age: '',
    height: '',
    // id: 0,

}
const SmurfForm = (props) =>{
    const [formValues, setFormValues] = useState(initialFormValues)
    // Props passed in from apps for use in page functions
   const inputChange = (name, value) =>{
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = evt => {
        evt.preventDefault()
        const newSmurf = {
            name: formValues.name.trim(),
            age: formValues.age.trim(),
            height: `${formValues.height.trim()}cm`,
        }

        // postSmurfs(newSmurf)
        axios.post("http://localhost:3333/smurfs", newSmurf)
        .then((res) =>{
            // dispatch({type: POST_SMURF_DATA_SUCCESS, payload: res.data});
            setFormValues(initialFormValues)     
        })
        .catch((err) => {
            console.log(err)
        })
      }

      useEffect(() => {
        props.fetchSmurfs();
      },[formValues]);
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value);
      }

    return(
        <div className='create-smurf'>
        <h2>Add Smurfs</h2>
            <form>
                <label>Name:
                    <input 
                        value={formValues.name}
                        onChange={onInputChange} // checkes
                        placeholder='Name'
                        maxlength='14'
                        name='name'
                        type='text'
                    />
                </label>
                <label>Age:
                    <input 
                        value={formValues.age}
                        onChange={onInputChange}
                        placeholder='Age'
                        maxlength='14'
                        name='age'
                        type='test'
                    />
                </label>
                <label>Height: 
                    <input 
                        value={formValues.height}
                        onChange={onInputChange}
                        placeholder='Height'
                        maxlength='5'
                        name='height'
                        type='text'
                    />
                </label>
                <button onClick={onSubmit} >Submit</button>
            </form>
        </div>
    )
}

export default connect(null, {fetchSmurfs})(SmurfForm)