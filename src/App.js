import './App.css';
import Weather from './components/weather';
import {useState} from 'react'
function App() {
  const [input, setInput] = useState("")
 
  const handleClick=()=>{
    alert(input)
  
  }
  const handleChange=(e)=>{
setInput(e.target.value)
  }
 
 
  
  return (
    <div>
      <input className={input ? "textRed":'textBlue'} type="text" onChange={handleChange} />
      <button  onClick={handleClick}>Search</button>
      <Weather/>

    </div>
  );
}

export default App;
