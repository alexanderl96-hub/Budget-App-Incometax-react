import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../Back-end/apiURl"

const API_BASE = apiURL()

 function Logsapi(props) {
    const {deleteBudget} = props

    const [budget, setBudget] = useState([])
    let {index} = useParams() 
    let history = useHistory()

   useEffect(()=>{
       axios.get(`${API_BASE}/transactions/${index}`).then((res)=>{
           const { data} = res
           setBudget(data)
       }).catch((e)=>{
        history.push('/not-found')
    })
   }, [index, history ])
    // const date = "May-1"
    // const taxes = 0.50
    // const retirement = 300
    // const save = 5000
    // const creditcard = 3000
    // const market = 20
    // const internet = 23
    // const pet = 23
    // const car = 90
    // const insurrance = 20
    // const additional = 46
    
    
    

    

    
    const handleDelete = () => {};

    return (  
        <article>
           <div className="showButton">
                <div>
                    <Link to={`/transactions`}> 
                        <button className="btn">Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/transactions/${index}/edit`}> 
                        <button className="btn">Edit</button>
                    </Link>
                </div>
                <div>
                <button onClick={handleDelete} className="btn">Delete</button>
                </div>
           </div> 
           <div className="info">
                <strong>Date {budget.date}</strong>
                <p>Taxes % {budget.taxes}</p>
                <p>Retirement $ {budget.retirement}</p>
                <p>Save $ {budget.save}</p>
                <p>CreditCard $ {budget.creditcard}</p>
                <p>Market $ {budget.market}</p>
                <p>Internet $ {budget.internet}</p>  
                <p>Pet $ {budget.pet}</p>  
                <p>Car    $     {budget.car}</p> 
                <p>Insurrance $ {budget.insurrance}</p>   
                <p>Additional $ {budget.additional}</p> 
                {/* <h3>Aqui debe ir la informacion que le sigue</h3> */}
           </div>
        </article>
        
    )
}

export default withRouter(Logsapi)