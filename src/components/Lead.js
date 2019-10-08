import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Lead extends Component {
   
    render() {
        const {id,name,phone,state,city,zip,contact_method} = this.props.lead;
        
        return (
            <tr>
                <td>
                   {name} 
                </td>
            
                <td>
                   {phone} 
                </td>
                <td>
                   {state} 
                </td>
                <td>
                   {city} 
                </td>
                <td>
                   {zip} 
                </td>
                <td>
                   {contact_method} 
                </td>
                <td>
                   <button style = {btnStyle} onClick = {this.props.deleteLead.bind(this,id)}>X</button>
                </td>
                
            </tr>
        )
    }
}
const btnStyle = {
   background: '#ff0000',
   color: '#fff',
   border : 'none',
   padding : '5px 9px',
   borderRadius: '50%',
   cursor: 'pointer',
   float: 'right'
}
Lead.propTypes = {
    lead: PropTypes.object.isRequired
    
}
export default Lead
