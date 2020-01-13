import React from 'react';
import './App.css';
import Contact from '../Contact/Contact'
//import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function App() {


  return (
    <div className="container App">
      <header className="App-header">
      </header>

      <div>


			<Link to="/contact">
				<span className="btn btn-success btn-lg" href="#" role="button">
          Add new contact2
				</span>
			</Link>


        <Contact/>
        <Contact/>
        <Contact/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
