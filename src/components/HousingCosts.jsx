import React, {useState} from "react";


const HousingExpenses = () => {
    const [HousingExpenseMessage,setHousingExpenseMessage] = useState('')
    
    const [HousingExpenseValue, setHousingExpenseValue] = useState('')
    const handleHousingExpenseChange = (event) => {
        setHousingExpenseValue(event.target.value)
       //console.log(event.target.value)
    }
    const handleClickHousingExpense = (event) => {
        event.preventDefault() 
        setHousingExpenseMessage(HousingExpenseValue)
       
        
    }
  return (<form>
  <p>Please enter your total monthly Housing expenses</p>
  <input type="number" name="Income" id="Income" onChange={handleHousingExpenseChange}></input>
  <button onClick={handleClickHousingExpense}>Submit</button>
  <p>Your total monthly Housing expenses are ${HousingExpenseMessage}</p>
  </form>  
  )
}

export default HousingExpenses