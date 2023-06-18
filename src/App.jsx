import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'

function App() {
  

  return (
    <>
      <Header />
      <div className='container'>
         <Balance />
         <IncomeExpenses />
         <TransactionList />
         <AddTransaction />
      </div>
    </>
  )
}

export default App
