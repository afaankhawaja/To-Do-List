import React from 'react'

export default function Todolist(props) {
  return (
    <div style={{backgroundColor:"skyblue",paddingLeft:'5px',paddingRight:'100px'}} >
        
<li style={{backgroundColor:"skyblue"}}><strong>{props.text}</strong> <span style={{paddingLeft:'230px',paddingRight:'50px'}}>
    <button style={{width:20,borderRadius:30,paddingLeft:12,paddingRight:20 ,paddingTop:3,paddingBottom:7}} onClick={()=>{
    props.onSelect(props.id);}}>x</button>
    </span></li> 

</div>
    
  )
}
