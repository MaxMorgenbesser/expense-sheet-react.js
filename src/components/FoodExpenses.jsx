import React, {useState} from "react";


const FoodExpenses = () => {
    const [FoodExpenseMessage,setFoodExpenseMessage] = useState('')
    
    const [FoodExpenseValue, setFoodExpenseValue] = useState('')
    const handleFoodExpenseChange = (event) => {
        setFoodExpenseValue(event.target.value)
       //console.log(event.target.value)
    }
    const handleClickFoodExpense = (event) => {
        event.preventDefault() 
        setFoodExpenseMessage(FoodExpenseValue)
       
        
    }
  return (<form>
  <p>Please enter your total monthly food and grocery expenses</p>
  <input type="number" name="Income" id="Income" onChange={handleFoodExpenseChange}></input>
  <button onClick={handleClickFoodExpense}>Submit</button>
  <p>Your total monthly food and grocery expenses are ${FoodExpenseMessage}</p>
  </form>  
  )
}

export default FoodExpenses

