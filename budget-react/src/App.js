import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import {apiURL} from "./Back-end/apiURl.js";

//Pages to represent the info in the browser
import Navbar from "./Components/Navbar.js"
import Home from "./Pages/Home"
import Datalogs from "./Pages/Datalogs.js";
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import New from "./Pages/New"
import Four0Four from "./Pages/Four0Four"

const API_BASE = apiURL()

function App() {
  const [budget, setBudget] = useState([])

  // "Another way to doit in large web app": Myra concept 
  const addBudget = (newBudget)=>{
    axios.post(`${API_BASE}/transactions`, newBudget).then((res)=>{
     setBudget([...budget, newBudget])
    }, (error)=> console.error(error)
    ).catch((e)=>{})
  }
  // "Another way to doit in short web app": 
  // => [ const addBudget = (newBudget)=>{
  //      axios.post(`${API_BASE}/transactions`, newBudget).then((res)=>{
  //      setBudget([...budget, newBudget])
  //      }, (error)=> console.error(error)
  //      ).catch((e)=>{})
  //      }
  //     ]
  const deleteBudget = (index)=>{}
  const updateBudget = (updateBudget, index)=>{}

  useEffect(()=> {
    axios.get(`${API_BASE}/transactions`).then((res)=>{
      const {data} = res
      console.log(data)
      setBudget(data)
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/transactions">
               <Datalogs budget={budget}/>
            </Route>
            <Route path="/transactions/new">
               <New addBudget={addBudget}/>
            </Route>
            <Route exact path="/transactions/:index">
               <Show budge={budget} deleteBudget={deleteBudget}/>
            </Route>
            <Route path="/transactions/:index/edit">
               <Edit budget={budget} deleteBudget={updateBudget}/>
            </Route>
            <Route path="*">
               <Four0Four />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
