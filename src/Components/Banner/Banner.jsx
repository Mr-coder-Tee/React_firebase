import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return ( <div className="banner">
                <div className="backgroundImg">
                    <img src={banner} alt="background" />
                </div>
                <div className="content">
                    <h1>welcome to MLab Codetribe</h1>
                    <p>Register below to become a user</p>
                </div>
                <div className="ImgLayer"/>
            </div> 
            
            );
}
 
export default Banner;