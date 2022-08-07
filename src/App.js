import './App.css';
import Header from './components/Header';
import Income from './components/Income';
import CarExpenses from './components/CarExpenses';
import FoodExpenses from './components/FoodExpenses'
import HousingExpenses from './components/HousingCosts';
import Taxes from './components/TaxPercentage';
//import IncomeAfterTaxes from './components/IncomeAfterTaxes';

function App() {
  return (
    <>
    <Header/>
    <Income />
    <CarExpenses/>
    <FoodExpenses/>
    <HousingExpenses/>
    <Taxes/>
    {/* <IncomeAfterTaxes /> */}
    </>
  )
}

export default App;
