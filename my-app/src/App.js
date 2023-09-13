// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'
// import Todolist from './components/Todolist';

// function App() {
//   const [input,setInput]=useState();
//   const [items,setItems]=useState([]);
//   const [deletedItems,setDeletedItems]=useState([]);
//   // const [deletedItems, setDeletedItems] = useState([]);
//   const itemEvent=(event)=>{
//     setInput(event.target.value);

//   }
//   const listofItems=()=>{
//     setItems((oldItems)=>{
//       return [...oldItems,input];
//     })
//     setInput('')
//   };
//   const deleteItems=(id)=>{
//     const deletedItem = items[id];
//         // console.log('deleted');
//         setItems((oldItems)=>{
// return oldItems.filter((elem,index)=>{
//   return index!==id;

// })
//         })
// setDeletedItems((prevDeletedItems) => [...prevDeletedItems, deletedItem]);
//       }
//   return (
//     <div className='main'>
//       <div className="card">
//         <br style={{backgroundColor:'skyblue'}}></br>
//         <h1>TO DO LIST</h1>
//         <br style={{backgroundColor:'skyblue'}}></br>
//         <br style={{backgroundColor:'skyblue'}}></br>
//         <input style={{height:50}} type='text' placeholder='Add Here' value={input} onChange={itemEvent}/><div ><button onClick={listofItems}>ADD</button></div>
//         <br style={{backgroundColor:'skyblue'}}></br><br style={{backgroundColor:'skyblue'}}></br>
//         <ol> 
//           {items.map((itemvalue,index)=>{
//             return <Todolist key={index} id={index} text={itemvalue} onSelect={deleteItems} />
//           })}
//         </ol>
//       </div>
//       <div>
//           <h2>Deleted Items:</h2>
//           <ul>
//             {deletedItems.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
        
//       </div>
  
//   );
// }
// export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './components/Todolist';

function App() {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  
  const itemEvent = (event) => {
    setInput(event.target.value);
  };

  const listofItems = () => {
    
    if(input!=''){
    setItems((oldItems) => {
      return [...oldItems, input];
    });
    setInput('');
  }
  };

  const deleteItems = (id) => {
    const deletedItem = items[id];

    setItems((oldItems) => {
      return oldItems.filter((_, index) => index !== id);
    });

    // setDeletedItems((prevDeletedItems) => [...prevDeletedItems, deletedItem]);
    setDeletedItems((prev)=>[...prev,deletedItem]);
  };

  return (
    <div className='main'>
      <div className="card">
        <br style={{backgroundColor: 'skyblue'}}></br>
        <h1>TO DO LIST</h1>
        <br style={{backgroundColor: 'skyblue'}}></br>
        <br style={{backgroundColor: 'skyblue'}}></br>
        <input
          style={{ height: 50 }}
          type='text'
          placeholder='Add Here'
          value={input}
          onChange={itemEvent}
        />
        <div>
          <button onClick={listofItems}>ADD</button>
        </div>
        <br style={{backgroundColor: 'skyblue'}}></br>
        <br style={{backgroundColor: 'skyblue'}}></br>
        <ol>
          { items.map((itemvalue, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                text={itemvalue}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
        
        {/* Show Deleted Items */}
        <div style={{backgroundColor:'#fef9c3'}}>
          <h5>Deleted Items:</h5>
          <ul>
            {deletedItems.map((val, index) => ( 
              <li key={index}>{val}</li>
            )).reverse().slice(0,5)}
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default App;

