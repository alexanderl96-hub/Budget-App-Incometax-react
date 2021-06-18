import { Link } from "react-router-dom";


export default function MapingLogs({neto, index}) {
    const car = neto.car
    const taxes = neto.taxes
    const retirement = neto.retirement
    const save = neto.save
    const creditcard = neto.creditcard
    const market = neto.creditcard
    const internet = neto.internet
    const pet = neto.pet
    const insurrance = neto.insurrance
    const additional = neto.additional
    const total = car + taxes + retirement + save + creditcard + market + internet + pet + insurrance + additional
    const income = total
    
    return (
        <div className="table">
            <tr>
                <td >
                    <p className="income" >
                    {neto.date ? ( neto.date) 
                    : 
                    (neto.date)
                    }
                    </p>
                </td>
                <td >
                    <Link to={`/transactions/${index}`} className="income" >Income</Link>
                </td>
                <td >
                    {/* <p><strong>$ {car}</strong></p>
                    <p><strong>$ {taxes}</strong></p>
                    <p><strong>$ {retirement}</strong></p>
                    <p><strong>$ {save}</strong></p>
                    <p><strong>$ {creditcard}</strong></p>
                    <p><strong>$ {market}</strong></p>
                    <p><strong>$ {internet}</strong></p>
                    <p><strong>$ {pet}</strong></p>
                    <p><strong>$ {insurrance}</strong></p>
                    <p><strong>$ {additional}</strong></p> */}
                    <p className="income"><strong> $ {income}</strong></p>
                </td>
            </tr>
        </div>
       
       
    )
}