import React from 'react';
import {BiCodeAlt} from 'react-icons/bi'
import {AiFillCode} from 'react-icons/ai'
import {BsNewspaper} from 'react-icons/bs'

import { Link } from 'react-router-dom';



const NavBar = () => {
    return ( <div className="NavBar">
                
                <div className="homeLogo">
                    <Link to="/" className="btnBorder navBtn"><BiCodeAlt/>CodeTribe</Link>
                </div>
                <div className="newsfeed">
                    <Link to="/newsfeed" className="btnBorder navBtn"><BsNewspaper/></Link>
                </div>
            </div> 
    );
}
 
export default NavBar;