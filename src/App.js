import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,  Routes,Route,} from 'react-router-dom'
import Home from './Home/homepage'
import About from './About/About'
import Activity from './Activities/Activity'
import Resources from './Resources/Resources'
import Error from './Error/Error'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
    <Route exact path='/'element={<Home/>}/> 
    <Route  path='/activity' element={<Activity/>}/> 
    <Route  path='/about' element={<About/>}/> 
    <Route  path='/resources' element={<Resources/>}/> 
    <Route  path='*' element={<Error/>}/> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
