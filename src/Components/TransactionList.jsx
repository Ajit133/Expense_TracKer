import { useContxt } from "../context/GlobalState";
import Transaction from "./Transaction";
function TransactionList() {
  const {transactions,deleteTransaction} = useContxt()
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((newdata)=>(<Transaction key={newdata.id} newdata={newdata} deleteTransaction={deleteTransaction} />))}
      </ul>
    </>
  );
}

export default TransactionList;
