import React, { useState } from 'react';
import './Calculator.css';

let Calculator = () => {
  const [material, setMaterial] = useState(0);
  const [work, setWork] = useState(0);

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    
    if (name === "material"){
      setMaterial(prevState => Number(event.target.value));
    } else if (name === "work"){
      setWork(prevState => Number(event.target.value));
    }
  }

  let calculateOutput = () => {
    let sumExpense = (material + work);
    let smaller: number = 0;
    if (material <= work){
      smaller = material;
    } else if (work < material){
      smaller = work;
    }

    if(smaller < sumExpense/4){
      return smaller * 2;
    } else {
      return  sumExpense / 2;
    }
  }
  
  const output = calculateOutput();

  return (
    <form className='calculator'>
      <h1>Anyagköltség</h1>
      <input type="text" placeholder='' className="expense-material" name="material" onChange={handleChange} value = {material} />
      <h1>Munkadíj</h1>
      <input type="text" placeholder='' className="expense-work" name="work" onChange={handleChange} value = {work}/>
      <div className="output">
        <h1>Az igényelhető támogatás:</h1>
        {output ? <h1 className="amount">{new Intl.NumberFormat('hu').format(output)} Ft</h1> : null}
      </div>
      <div>
        {output>=3000000 ?<p style={{color:'red'}}>A maximálisan igényelhető támogatás összege 3 000 000 Ft!</p> :null}
      </div>

    </form>
  )
}

export default Calculator;