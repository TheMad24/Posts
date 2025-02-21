import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [listPosts,setListPosts] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:2424/posts").then((response)=>{
      setListPosts(response.data);
    })
  },[]);


  return<div className='App'>{
    listPosts.map((value, key)=>{
      return (
      
      <div className='post'> 
        <div className='title'> {value.title} </div>
      
        <div className='body'>  {value.text}</div>
        
        <div className='footer'> <a href='https://www.google.com/' rel="noreferrer" target="_blank">@{value.username}</a> </div>
      
      </div>)
    
  })
  }</div>;
  
}

export default App;
