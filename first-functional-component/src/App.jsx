import { useState } from 'react';
import './App.css';
// import Button from './components/Button';
// import Card from './components/Card';

function App(){
  const[count,setCount] = useState(0);//return state & setState

  return <div>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount((prev)=>{
        return prev+1;
      });
    }}>
    Count++
    </button>
    
    <button onClick={()=>{
      setCount((prev)=> prev -1);
    }}>
    Count--
    </button>
  </div>;
}
export default App;

// onClick={() => {
//   setCount((pre) => pre + 1);
// }}