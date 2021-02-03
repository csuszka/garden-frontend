import React, { useState } from 'react';

let Calculator = () => {
  const [material, setMaterial] = useState(0);
  const [work, setWork] = useState(0);
  const [output, setOutput] = useState(0);

  let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    
    if (name === "material"){
      setMaterial(prevState => Number(event.target.value));
    } else if (name === "work"){
      setWork(prevState => Number(event.target.value));
    }

    setOutput(prevState => {
      let sumExpense = (material + work)/4;
      let smaller: number = 0;
      if (material <= work){
        smaller = material;
      } else if (work < material){
        smaller = work;
      }

      if(smaller < sumExpense){
        return smaller * 2;
      } else {
        return  sumExpense / 2;
      }
    })
  }


  return (
    <form className='calculator'>
      <h1>Anyagköltség</h1>
      <input type="text" className="expense-material" name="material" onChange={handleChange} value = {material} />
      <h1>Munkadíj</h1>
      <input type="text" className="expense-work" name="work" onChange={handleChange} value = {work}/>
      <div className="output">
        <h1>Elérhető támogatás:</h1>
        <h1 className="amount">{output}</h1>
      </div>
    </form>
  )
}

export default Calculator;