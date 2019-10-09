import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header style = {headerStyle}>
            
            <h1>
                SalesLead
                
        <Link style = {linkStyle} to ="/">Display_Leads</Link>
        
        <Link style = {linkStyle} to = "/addlead">Add_Lead</Link>
        
        </h1>
        
        </header>
    )
}
const headerStyle = {
    background : '#333',
    color: "#fff",
    textAlign: "left",
    padding: "20px",
    borderBottom: 'solid 5px #cc0000'
    
    
    
    
    
}
const linkStyle = {
    color: "#fff",
    float: "right",
    padding: "15px 0px 10px 30px",
    textDecoration: 'none',
    fontSize: '20px'

    
    
    
}
