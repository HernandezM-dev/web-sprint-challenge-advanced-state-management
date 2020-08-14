import React, { useEffect } from "react";
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions'
import "./App.css";
import Header from './Header'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'

const App = (props) =>{

useEffect(() => {
  props.fetchSmurfs();
},[]);

    return (
      <div className="App">
        <Header/>
        <SmurfList />
        <SmurfForm />
      </div>
    );
}

export default connect(null, {fetchSmurfs})(App);
