import BudgetEdit from "../Components/BudgetEdit"
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Edit({budge, updateBudget}) {

    let { index } = useParams();
  const [ budget ] = useState(budge[index]);
    return (
        <div>
           <h1 className="newtrans">Edit</h1> 
           <BudgetEdit budget={budget} index={index} updateBudget={updateBudget}/>
        </div>
    )
}