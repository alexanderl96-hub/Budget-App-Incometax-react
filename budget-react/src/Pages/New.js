// import React from 'react'
import Form from "../Components/BudgetNewForm"

export default function New({addBudget}) {
    return (
        <div>
           <h1 className="newtrans">New Transaction</h1> 
           <Form addBudget={addBudget}/>
        </div>
    )
}
