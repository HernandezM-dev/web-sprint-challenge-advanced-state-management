import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard'

const SmurfList = props => {
    return (
        <div className='header'>
            <h2>Meet Your Smurfs!</h2>
            {
                props.smurfs.map(smurf =>
                    <p>{smurf.name}</p>
                    // <SmurfCard key={smurf.id} smurf={smurf}/>
                )
            }
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(SmurfList);



