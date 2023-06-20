import { useContxt } from "../context/GlobalState";
function Balance() {
  const {transactions} = useContxt();

  const amounts = transactions.map(transaction =>transaction.amount);
  const total = amounts.reduce((acc,current)=> acc + current).toFixed(2)
    return (
        <>
          <h4>Your Balance</h4>
          <h1 >${total}</h1>
        </>
        
    );
}

export default Balance;