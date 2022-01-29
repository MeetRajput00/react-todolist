import './App.css';
import React, { useState } from 'react';
import Header from "./Header";
function App() {
  const [item,setItem]=useState("");
  const [itemList,setItemList]=useState([]);
  const addItem=(event)=>{
    setItem(event.target.value);
  };
  const listOfItems=()=>{
    if(itemList.length<10){
    setItemList((oldItems)=>{
      return [...oldItems, item];
    })};
  }
  const deleteItems=()=>{
    setItemList([]);
  }
  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br></br>
          <Header/>
          <input id="mainInput"onChange={addItem}type="text"placeholder='Enter item...'/>
          <button className="btn" onClick={listOfItems}>+</button>
          <button className="removebtn"onClick={deleteItems}>x</button>
          <div className='actualList'>
            <ol>
              {
                itemList.map((itemVal)=>{
                  console.log("itemVal.id=="+itemVal.id);
                  return(
                    <div key={itemVal.id} id={itemVal.id}>
                      <li>{itemVal}</li>
                    </div>
                  );
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
