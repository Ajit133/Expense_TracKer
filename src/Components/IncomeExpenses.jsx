import { useContxt } from "../context/GlobalState";

const IncomeExpenses = () => {
  const {transactions} = useContxt();

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter((item)=> item>0).reduce((acc,item)=>acc+item).toFixed(2)
  
  const expense = amounts.filter((item)=> item < 0).reduce((acc,item)=>(acc+item))*-1
    return (
        <>
            <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>

        </>
    );
};

export default IncomeExpenses;