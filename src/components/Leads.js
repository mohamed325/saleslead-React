import React, { Component } from 'react';
import Lead from './Lead'
import PropTypes from 'prop-types';

export class Leads extends Component {
    render() {
        return (
          <table className="table">
            <thead>
              <tr>
                
            <th>Name</th>
            <th>Phone</th>
            <th>State</th>
            <th>City</th>
            <th>Zip</th>
            <th>Prefered Contact Method</th>
            </tr>
            </thead>
            <tbody>
              {this.props.leads.map(x=>
                 <Lead key ={x.id} lead = {x} deleteLead = {this.props.deleteLead}/>
                )}
            </tbody>
          </table>
        );
      }
}
Leads.propTypes = {
    leads: PropTypes.array.isRequired
    

}
export default Leads
