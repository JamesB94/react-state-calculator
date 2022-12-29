import "./App.css"
import { useState } from 'react'

function App() { 

  const [firstNumber, setFirstNumber] = useState(0)
  const [Operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [answer, setAnswer] = useState(0)

  const letsClearOne = () => {
    setFirstNumber(0)
  }
  const letsCleartwo = () => {
    setSecondNumber(0)
  }

  const getLeftNum = (e) => {
  setFirstNumber(e.target.innerText)
}

  const getOperators = (e) => {
  setOperator(e.target.innerText)
}

  const getRightNum = (e) => {
    setSecondNumber(e.target.innerText)
  }

  const result = () => {

    if(Operator === '+' ) {
      //console.log('returned a +')
      return setAnswer(Number(firstNumber) + Number(secondNumber)) 
    }
   if(Operator === '-' ) {
      //console.log('returned a -')
      return setAnswer(Number(firstNumber) - Number(secondNumber)) 
    }
  if(Operator ==='*') {
    return setAnswer(Number(firstNumber) * Number(secondNumber))
  }
  if(Operator === '÷') {
    return setAnswer(Number(firstNumber) / Number(secondNumber))
  }
  }

  return (
    <div className="calculator">
        <div className="panel">
          <p>{ firstNumber }</p>
          <div className="numbers">
            <button onClick={getLeftNum}>1</button>
            <button onClick={getLeftNum}>2</button>
            <button onClick={getLeftNum}>3</button>
            <button onClick={getLeftNum}>4</button>
            <button onClick={getLeftNum}>5</button>
            <button onClick={getLeftNum}>6</button>
            <button onClick={getLeftNum}>7</button>
            <button onClick={getLeftNum}>8</button>
            <button onClick={getLeftNum}>9</button>
            <button onClick={getLeftNum}>0</button>
            <button onClick={letsClearOne}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{Operator}</p>
          <div className="numbers">
            <button onClick={getOperators}>+</button>
            <button onClick={getOperators}>-</button>
            <button onClick={getOperators}>*</button>
            <button onClick={getOperators}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNumber}</p>
          <div className="numbers">
            <button onClick={getRightNum}>1</button>
            <button onClick={getRightNum}>2</button>
            <button onClick={getRightNum}>3</button>
            <button onClick={getRightNum}>4</button>
            <button onClick={getRightNum}>5</button>
            <button onClick={getRightNum}>6</button>
            <button onClick={getRightNum}>7</button>
            <button onClick={getRightNum}>8</button>
            <button onClick={getRightNum}>9</button>
            <button onClick={getRightNum}>0</button>
            <button onClick={letsCleartwo}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{answer}</p>
          <div>
            <button onClick={result}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
