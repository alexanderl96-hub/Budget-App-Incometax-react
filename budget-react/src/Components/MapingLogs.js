import { Link } from "react-router-dom";


export default function MapingLogs({neto, index}) {
    
   const income = neto.car + neto.taxes + neto.retirement + neto.save + neto.creditcard + neto.market + neto.internet + neto.pet + neto.insurrance + neto.additional
    
    console.log(income)
    return (
        <div className="table">
            <tr>
                <td >
                    <p className="income" >
                    { neto.made ? (<span>⭐️</span> ) 
                    : 
                    (null)
                    }
                    </p>
                </td>
                <td>
                    <p className="income" >
                    { neto.name ?  neto.name :  neto.date}
                    </p>
                </td>
                <td >
                    <Link to={`/transactions/${index}`} className="income" >Income</Link>
                </td>
                <td >
                    <p className="income"><strong> $ {income}</strong></p>
                </td>
            </tr>
        </div>
       
       
    )
}