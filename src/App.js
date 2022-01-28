import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
function App() {
  let inputField=""
  const [item,setItem]=useState("");
  const [itemList,setItemList]=useState([]);
  const addItem=(event)=>{
    setItem(event.target.value);
  };
  const listOfItems=()=>{
    setItemList((oldItems)=>{
      return [...oldItems, item];
    });
    this.mainInput.value="";
  }
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <Header/>
          <input id="mainInput"onChange={addItem}type="text"placeholder='Enter item...'/>
          <button className="btn" onClick={listOfItems}>+</button>
          <div className='actualList'>
            <ol>
              {
                itemList.map((itemVal)=>{
                  return <li> {itemVal} </li>
                })
              }
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
