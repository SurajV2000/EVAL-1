import { useState } from "react";


function App() {

const [counter,setCount] = useState(0);
const addition=()=>{
  setCount(counter+1)
}
const subtract=()=>{
  setCount(counter-1)
}

const prime =(num)=>{
  let count=0;
  for(let i=1 ; i<=num ; i++){
    if(num%i==0){
      count++
    }
  }
  if(count ==2){
    return true
  }else{
    return false
  }
}

  return (
    <div>
      <h1>Welcome To Counter 2.0</h1>
      <div>
        <button   data-testid="minusonebtn" onClick={subtract}  disabled={counter === 0} >-1</button>
        <button  data-testid="plusonebtn" onClick={addition}>+1</button>
      <div>
        <button data-testid="resetbtn"  onClick={()=>setCount(0)} >Reset Count</button>
      </div>
      
      </div>
      <span data-testid="counter">
      <h1>Count : {counter}</h1>
      
      </span>
      <div>
        <span data-testid="odd-or-even">{counter%2===0 ? "This Number is : Even" : "This Number is : Odd"}</span>
        <br/>
        <span  data-testid="is-prime">{prime(counter) ? "true" : "false"}</span>
      </div>
    </div>
  );

}

export default App;

