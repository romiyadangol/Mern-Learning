
import { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment';

function App() {
  const[counter,setCounter] = useState(0);
  const[isEven,setIsEven] = useState(false);
  const[input,setInput] = useState('');
  const today = Date.now();
  console.log(moment(today).fromNow());

  useEffect(()=>{
    console.log(input);
    
  },[input]);

  useEffect(()=>{
    setIsEven(counter % 2 === 0);
  },[counter]);

  // console.log(Date());
  
  return (
    <>
      <div>
        <h1>Is this even ({counter})={isEven.toString()}</h1>
        <span>Current Count is : {counter}</span><br />
        <button onClick={() =>
        // setCounter(count + 1);
          setCounter((pre) => pre + 1)
          }>
        Increase Count</button>
      </div>
      <div className="input">
        <input type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}/>
        <p>{input}</p>
      </div>
    </>
  )
}

export default App
