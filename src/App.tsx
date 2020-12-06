import React, { useState, useEffect } from "react";
import Dropdownmenu from './component/dropdown/dropdownmenu'
import "./App.css";


function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);


  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>Enter any two numbers</h1>
          <form>
            <input type="text" id="num-first" />
            <Dropdownmenu />
            <input type="text" id="num-second" />
            <button>Submit</button>
            <button>Clear</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
