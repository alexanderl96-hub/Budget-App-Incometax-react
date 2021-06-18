import { useState } from 'react'
import {withRouter} from "react-router-dom"

 function BudgetNewForm(props) {
    const [budget, setBudget] = useState({
        date: '',
        taxes: [],
        retirement: [],
        save: [],
        creditcard: [],
        market: [],
        internet: [],
        pet: [],
        car: [],
        insurrance: [],
        additional: [],
        made: false,
    })
    const HandleInput =(e)=>{
        setBudget({...budget, [e.target.id]:e.target.value})
    }
    const HandleCheck =()=>{
        setBudget({...budget, made: !budget.made})
    }
    const HandleSubmit =(e)=>{
        e.preventDefault()
        props.addBudget(budget)
        props.history.push("/transactions")
    }
    return (
        <div >
            <form onSubmit={HandleSubmit} className="form">
            <label htmlFor="date">Date:</label>
            <input
            id="date"
            value={budget.date}
            type="text"
            onChange={HandleInput}
            placeholder="Months-Day"
            required/>
            <label htmlFor="taxes">Taxes:</label>
            <input
             id="taxes"
             value={budget.taxes}
             type="number"
             onChange={HandleInput}
             placeholder="%"
             required/>
            <label htmlFor="retirement">Retirement:</label>
            <input
            id="retirement"
            value={budget.retirement}
            type="number"
            onChange={HandleInput}
            placeholder="$ Amount"
            required/>
            <label htmlFor="save">Save:</label>
            <input
            id="save"
            value={budget.save}
            type="number"
            onChange={HandleInput}
            placeholder="$ Total"
            required/>
            <label htmlFor="creditcard">CreditCard:</label>
            <input
            id="creditcard"
            value={budget.creditcard}
            type="number"
            onChange={HandleInput}
            placeholder="$ Income"
            required/>
            <label htmlFor="market">Market:</label>
            <input
            id="market"
            value={budget.market}
            type="number"
            onChange={HandleInput}
            placeholder="$ Spent"
            required/>
            <label htmlFor="internet">Internet:</label>
            <input
            id="internet"
            value={budget.internet}
            type="number"
            onChange={HandleInput}
            placeholder="$ Monthly"
            required/>
            <label htmlFor="pet">Pet:</label>
            <input
            id="pet"
            value={budget.pet}
            type="number"
            onChange={HandleInput}
            placeholder="$ food"
            required/>
            <label htmlFor="car">Car:</label>
            <input
            id="car"
            value={budget.car}
            type="number"
            onChange={HandleInput}
            placeholder="$ Monthly"
            required/>
            <label htmlFor="insurrance">Insurrance:</label>
            <input
             id="insurrance"
             value={budget.insurrance}
             type="number"
             onChange={HandleInput}
             placeholder="$ Amount"
             required/> 
            <label htmlFor="additional">Additional:</label>
            <input
            id="additional"
            value={budget.additional}
            type="number"
            onChange={HandleInput}
            placeholder="$ Amount"
            required/>
            <label htmlFor="made">Made:</label>
            <input
            id="made"
            value={budget.made}
            />
            Checkbox <input
            id="made"
            type="checkbox"
            onChange={HandleCheck}
            checked={budget.made}
            className ="checkbox"
            /> 
            <button type='submit' className="btnform">Submit Budget</button>
            </form>
           
        </div>
    )
}
export default withRouter(BudgetNewForm)