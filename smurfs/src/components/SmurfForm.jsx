
import React from 'react'

export default function Register(props){
    // Props passed in from apps for use in page functions
    const {
        values,
        submit,
        inputChange,
      } = props

    // prevents page from reloading & calls submit function from App.js
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      // pulls name and value from event target. Passthrough to inputChange in App.js
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }


    // build elements for form/ inputs for first name, last name, email, phone number, and password
    return(
        <div className='create-smurf'>
        <h2>Add Smurfs</h2>
            <form>
                <label>Name:
                    <input 
                        value={values.name}
                        onChange={onInputChange} // checkes
                        placeholder='Name'
                        maxlength='14'
                        name='name'
                        type='text'
                    />
                </label>
                <label>Age:
                    <input 
                        value={values.age}
                        onChange={onInputChange}
                        placeholder='Age'
                        maxlength='14'
                        name='age'
                        type='text'
                    />
                </label>
                <label>Height: 
                    <input 
                        value={values.height}
                        onChange={onInputChange}
                        placeholder='Height'
                        maxlength='5'
                        name='height'
                        type='text'
                    />
                </label>
                <button /*disabled={disabled}*/ >Submit</button>
            </form>
        </div>
    )
}