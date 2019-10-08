import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';


export class AddLead extends Component {
    state = {
        name:'',
        phone:'',
        city:'',
        state:'',
        zip:'',
        contact_method:'phone',
        redirect:false
        
    }

    onChange = (e)=>{
       
        this.setState({
            
            [e.target.name]: e.target.value})
            console.log(e.target.value);
    }
        onSubmit = (e)=>{
        e.preventDefault();
        const {name,phone,state,city,zip,contact_method} = this.state;
        this.props.postLead(name,phone,state,city,zip,contact_method);
        this.setState({
        name:'',
        phone:'',
        city:'',
        state:'',
        zip:'',
        contact_method:'phone',
        redirect:true
        
    });
    

   
    }
    render() {
        
        if(this.state.redirect){
            return <Redirect to="/" />
        }
        
        return (
            <div className="row">
                <div className="col-md-6">
            <form onSubmit = {this.onSubmit}>
            <div className = 'form-group'><label>Name: </label>  <input className = "input-group mb-3"  type = 'text' name = 'name' required value = {this.state.name} onChange = {this.onChange}/></div>
          <div className = 'form-group'><label>Phone: </label>  <input className = "input-group mb-3" type = 'text' name = 'phone' required value = {this.state.phone}  onChange = {this.onChange}/></div>
          <div className = 'form-group'><label>City: </label>  <input className = "input-group mb-3" type = 'text' name = 'city' required value = {this.state.city}  onChange = {this.onChange}/></div>
          <div className = 'form-group'><label>State: </label>  <input className = "input-group mb-3" type = 'text' name = 'state' required value = {this.state.state}  onChange = {this.onChange}/></div>
          <div className = 'form-group'><label>Zip :   </label>  <input className = "input-group mb-3" type = 'text' name = 'zip' required value = {this.state.zip}  onChange = {this.onChange}/></div>
          <div className = 'form-group'><label>ContactMethod: </label>  
              <select onChange = {this.onChange} className = "input-group mb-3" name = 'contact_method' value = {this.state.contact_method} >ContactMethod
              <option  value = "phone">Phone</option>
              <option  value = "email">Email</option>o
              <option  value = "sms">Sms</option>
              <option  value = "CarrierPigeon">CarrierPigeon</option>
              </select>
              
              
              </div>
              
              <input type = 'submit' value = 'submit'className = 'btn btn-primary'/>

            </form>
            </div>
        </div>
        )
    }
}
AddLead.propTypes = {
    postLead: PropTypes.func.isRequired
}
export default AddLead
