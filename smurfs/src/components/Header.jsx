import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Header = props => {
    return (
        <div className='header'>
            <h1>Wecome to Smurf City</h1>
            {props.isLoading ? <h3>Population: Loading...</h3> : <h3>Population: {props.smurfs.length} </h3>}
        </div>

    )
}

const mapStateToProps =(state) =>{
    return{
       smurfs: state.smurfs,
       isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {})(Header);
{/* {props.monsters.isLoading ? <h3>Loading...</h3> : <h3>Random Monster: {props.random}</h3>} */ }