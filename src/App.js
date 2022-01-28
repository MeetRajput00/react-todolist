import './App.css';
import React from 'react';
import Header from "./Header";
function App() {
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <Header/>
          <input type="text"placeholder='Enter item...'/>
          <button className='btn'>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
