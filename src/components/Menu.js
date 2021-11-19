import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {

    const token = useSelector( state => state.admin.token) || localStorage.getItem('auth-token')

    if(!token){
        return(
            <>      
                <div className = "menu py-4 px-5 ">
    
                    <Link to="/">
                        <div className = "main-logo">
                            <div className = 'logo-top'>Abubakar Ali</div>
                            <div className = "text">PHOTOGRAPHER <span className = 'ampersand'>&</span> CREATIVE DIRECTOR</div>
                        </div>
                    </Link>
    
                    <div className = "menu-options">
                        <Link to = "/">works</Link>
                        <Link to = "/hire">hire</Link>
                        <Link to = "/about">about</Link>
                    </div>
    
                </div>
            </>
        )
    }
    else {
        return(
            <>      
                <div className = "menu py-4 px-5 ">
                    <Link to="/">
                        <div className = "main-logo">
                            <div className = 'logo-top'>Admin</div>
                            <div className = "text">ABUBEE.COM ADMIN PANEL</div>
                        </div>
                    </Link>
    
                    <div className = "menu-options">
                        {/* <Link to = "/"></Link>
                        <Link to = "/hire">hire</Link>
                        <Link to = "/about">about</Link> */}
                    </div>
    
                </div>
            </>
        )
    }
}
export default Menu