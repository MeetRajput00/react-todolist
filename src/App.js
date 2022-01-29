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
  const deleteItem = (id) => {
    // console.log('deleted');
    const updatedItems = itemList.filter((elem) => {
        console.log("deleteItem(id)=="+id);
        console.log("elem.id=="+elem.id);
        return elem.id !== id;
    });
    setItemList(updatedItems);
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
                  console.log("itemVal.id=="+itemVal.id);
                  return(
                    <div key={itemVal.id} id={itemVal.id}>
                      <li>{itemVal}</li><button onClick={()=>deleteItem(itemVal.id)}>x</button>
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
