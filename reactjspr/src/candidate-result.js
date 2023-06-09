import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {List,Button, Grid, Image,Menu,Icon,Dropdown, Form, Radio, Container} from 'semantic-ui-react'
import { useFullScreenHandle } from 'react-full-screen';
import Cookies from 'universal-cookie';
import { logout } from './functions/auth';
import { Navigate } from 'react-router-dom';
import { Dispatch } from 'react';
import { setAdmin, setLogins } from './reducers/globalStates';
import { useDispatch } from 'react-redux';
import NAvbar from './navbar';
function CandidateResult(props){
    const dispatcher = new useDispatch();
    console.log(props)
    const navigate = useNavigate();
    const destroySession = async () => {
        let flag = await logout();
        if (flag === true) {
            dispatcher(setLogins(false, null), setAdmin(false));
            navigate("/objectivetest/authenticate");
        } else {
            return false;
        }
    };
    var cook = new Cookies()
    var uname = cook.get("username")
    const locat = useLocation();
    const totalm = locat.state;

    
    
return (
        <center><div>
            
            <h1>Candidate - Result</h1>
            <NAvbar></NAvbar>
            <h2>            Test Submitted Succesfully</h2>
            <h2>Username : {uname}</h2>
            
<h2>Your total score : {totalm}</h2>
           </div></center>
    );
}
export default CandidateResult;