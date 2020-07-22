import React from 'react';
import logo from '../assets/tennislogo.jpeg'


function Header() {
    return ( 
    <div className = "Header" 
    style={{ background: 'linear-gradient(#80FF72,#7EE8FA)',
            display:'flex', 
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'space-around'
            }}>
        <img src={logo}/>
        <label style={{fontSize: '25px'}}>Royal Tennis</label>
     </div>
    );
}

export default Header;