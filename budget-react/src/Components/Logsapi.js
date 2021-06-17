import { useState, useEffect } from "react";
import {Link, useParams, useHistory, withRouter } from "react-router-dom"
import axios from "axios"
import {apiURL} from "../Back-end/apiURl"

const API_BASE = apiURL()

 function Logsapi(props) {
    const {deleteBudget} = props

    const [budget, setBudget1] = useState([])
    let {index} = useParams() 
    let history = useHistory()


    useEffect(()=>{
        axios.get(`${API_BASE}/transactions/${index}`).then((res)=>{
            const { data } = res
            setBudget1(data)
        }).catch((e)=>{
            history.push("/not-found")
        })
    } ,[index, history])
    const handleDelete = () => {};

    return (  
        <article>
            
           <div className="showButton">
                <div>
                    <Link to={`/transactions`}> 
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/transactions/${index}/edit`}> 
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                <button onClick={handleDelete}>Delete</button>
                </div>
           </div> 
           <div className="info">
              <strong>{budget.taxes}</strong>
                <h3>
                    {budget.save}
                </h3>
                <h4>
                    {budget.car}
                </h4>  
                <p>
                {budget.additional}
                </p> 
                <h3>Aqui debe ir la informacion que le sigue</h3>
           </div>
        </article>
        
    )
}

export default withRouter(Logsapi)