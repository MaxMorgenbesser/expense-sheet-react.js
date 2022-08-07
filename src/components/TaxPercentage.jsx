


import React, {useState} from "react";


const Taxes = (props) => {
  
    const [TaxesMessage,setTaxesMessage] = useState('')
    
    const [TaxesValue, setTaxesValue] = useState('')
    const handleChange = (event) => {
       setTaxesValue(event.target.value)
       //console.log(event.target.value)
    }
    const handleClick = (event) => {
        event.preventDefault() 
        setTaxesMessage(TaxesValue)
       
        
    }
  return (<form>
  <p>Please enter an estimate of your tax percentage</p>
  <input type="number" name="Taxes" id="Taxes" value={props.TaxRate} onChange={handleChange}></input>
  <button onClick={handleClick}>Submit</button>
  <p>You pay {TaxesMessage}% of your income to taxes</p>
  </form>  
  
  )
}

export default Taxes