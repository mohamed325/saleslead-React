import React, { Component } from 'react'
import axios from 'axios';
import Leads from './components/Leads'
import AddLead from './components/AddLead';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
export class App extends Component {
  state = {
    saleslead:[]
  
    
  }
  componentDidMount(){
    axios.get('http://localhost:8080/saleslead/api/get_leads.php').then(res=>
    
      this.setState({saleslead:res.data})
      
    ).catch(e=>{
      console.log(e)
    })
  }
  //post
  postLead(name,phone,state,city,zip,contact_method){
   
   axios.post('http://localhost:8080/saleslead/api/add_lead.php',{
    name,phone,state,city,zip,contact_method}
  
  ).then(res=>{
    
   
    this.setState({
      
      saleslead:this.state.saleslead!==undefined? [...this.state.saleslead,res.data] :[res.data]
    });
   
  }).catch(e=>{
    console.log(e)
  })
  
  }
  //delete lead
deleteLead = (id)=>{
  axios.delete(`http://localhost:8080/saleslead/api/delete_lead.php/?id=${id}`).then(res=> this.setState({
    saleslead: [...this.state.saleslead.filter(x=>
      x.id!==id)
    
    ]
  })
  
  )
  
}

  render() {
     
    return (
      <Router>
      <Header/>
      <div className = "container">

      
      <Route exact path = "/" render = {props=>(
        <React.Fragment>
        <Leads leads = {this.state.saleslead} deleteLead = {this.deleteLead}/>
        </React.Fragment>
      )}/>
      <Route exact path = "/addlead" render = {props=>(
        <React.Fragment>
        <AddLead postLead = {this.postLead}/>
        </React.Fragment>
      )}/>
      </div>
     
      </Router>
    );
      
  }
}

export default App
