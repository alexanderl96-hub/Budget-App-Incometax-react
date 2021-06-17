// import React from 'react'
import Form from "../Components/BudgetNewForm"

export default function New({addBudget}) {
    return (
        <div>
           <h1>New Transaction</h1> 
           <Form addBudget={addBudget}/>
        </div>
    )
}
