import React from 'react';

let Calculator = () => {
return(
  <form className = 'calculator'>
    <h1>Anyagköltség</h1>
    <input type="text" className = "expense-material" inputMode="numeric"/>
    <h1>Munkadíj</h1>
    <input type="text" className = "expense-work" inputMode="numeric"/>
    <div className = "output">
      <h1>Elérhető támogatás:</h1>
      <h1 className = "amount">{}</h1>
    </div>
  </form>
)
}

export default Calculator;