import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../Back-end/apiURl.js"

const API_BASE = apiURL()

 function Logsapi(props) {
    const {deleteBudget} = props

    // const [ budget, setBudget] = useState([])
    // let { index } = useParams() 
    // let history = useHistory()

//    useEffect(()=>{
//        axios.get(`${API_BASE}/transactions/${index}`).then((res)=>{
//            const { data} = res
//            setBudget(data)
//        }).catch((e)=>{
//         history.push('/not-found')
//     })
//    }, [ index, history ])
    
    const handleDelete = () => {
        // deleteBudget(index);
        // history.push("/transactions");
    };
const date= 'May 1'
const save ='May 1'
const retirement= 'May 1'
const taxes= 'May 1'
const creditcard= 'May 1'
const market= 'May 1'
const internet= 'May 1'
const car= 'May 1'
const pet= 'May 1'
const insurrance= 'May 1'
const additional= 'May 1'

    return (  
        <article>
           <div className="showButton">
                <div>
                    <Link to={`/transactions`}> 
                        <button className="btn">Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/transactions/:index/edit`}> 
                        <button className="btn">Edit</button>
                    </Link>
                </div>
                <div>
                <button onClick={handleDelete} className="btn">Delete</button>
                </div>
           </div> 
           <div className="info">
                <strong>Date: {date}</strong>
                <p>Taxes % {taxes}</p>
                <p>Retirement $ {retirement}</p>
                <p>Save $ {save}</p>
                <p>CreditCard $ {creditcard}</p>
                <p>Market $ {market}</p>
                <p>Internet $ {internet}</p>  
                <p>Pet $ {pet}</p>  
                <p>Car    $ {car}</p> 
                <p>Insurrance $ {insurrance}</p>   
                <p>Additional $ {additional}</p> 
           </div>
        </article>
        
    )
}

export default withRouter(Logsapi)