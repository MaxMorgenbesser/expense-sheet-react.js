import React, {useState} from "react";
import "./Income.css";

const CarExpenses = () => {
    const [CarExpenseMessage,setCarExpenseMessage] = useState('')
    
    const [CarExpenseValue, setCarExpenseValue] = useState('')
    const handleCarExpenseChange = (event) => {
        setCarExpenseValue(event.target.value)
       //console.log(event.target.value)
    }
    const handleClickCarExpense = (event) => {
        event.preventDefault() 
        setCarExpenseMessage(CarExpenseValue)
       
        
    }
  return (<form id="CarExpenseForm">
  <p>Please enter your total monthly expenses related to your car.</p>
  <input type="number" name="Income" id="Income" onChange={handleCarExpenseChange}></input>
  <button onClick={handleClickCarExpense}>Submit</button>
  <p>Your total monthly car expesnses are ${CarExpenseMessage}</p>
  </form>  
  )
}

export default CarExpenses