import { Link } from "react-router-dom";


export default function MapingLogs({neto, index}) {
    // const car = neto.car
    // const taxes = neto.taxes
    // const retirement = neto.retirement
    // const save = neto.save
    // const creditcard = neto.creditcard
    // const market = neto.creditcard
    // const internet = neto.internet
    // const pet = neto.pet
    // const insurrance = neto.insurrance
    // const additional = neto.additional
   // const income = car + taxes + retirement + save + creditcard + market + internet + pet + insurrance + additional
    
    
    return (
        <div className="table">
            <tr>
                <td >
                    <p className="income" >
                    { neto.date ? ( neto.date ) 
                    : 
                    ( neto.date )
                    }
                    </p>
                </td>
                <td >
                    <Link to={`/transactions/${index}`} className="income" >Income</Link>
                </td>
                <td >
                    <p><strong>$ {neto.car}</strong></p>
                    <p><strong>$ {neto.taxes}</strong></p>
                    <p><strong>$ {neto.retirement}</strong></p>
                    <p><strong>$ {neto.save}</strong></p>
                    <p><strong>$ {neto.creditcard}</strong></p>
                    <p><strong>$ {neto.market}</strong></p>
                    <p><strong>$ {neto.internet}</strong></p>
                    <p><strong>$ {neto.pet}</strong></p>
                    <p><strong>$ {neto.insurrance}</strong></p>
                    <p><strong>$ {neto.additional}</strong></p>
                    <p className="income"><strong> $ {neto.car}</strong></p>
                </td>
            </tr>
        </div>
       
       
    )
}