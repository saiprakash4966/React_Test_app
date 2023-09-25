import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import FormPage from '../FormPage';
import ResultPage from '../ResultPage';


function Rout() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/form' element={<FormPage/>} />
                <Route exact path='/result' element={<ResultPage/>} />
            </Routes>
        </Router>
    );
}

export default Rout;
