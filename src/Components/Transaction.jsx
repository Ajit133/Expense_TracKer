import { useContxt } from "../context/GlobalState";
const Transaction = ({newdata,deleteTransaction}) => {
    const sign = newdata.amount > 0 ? '+':'-';

    
    return (
        <>
          <li className={newdata.amount > 0 ? "plus":"minus"}>
          {newdata.text}<span>{sign}${ Math.abs(newdata.amount)}</span>
          <button className="delete-btn" onClick={() => deleteTransaction(newdata.id)}>x</button>
          </li>
        </>
        
    );
};

export default Transaction;