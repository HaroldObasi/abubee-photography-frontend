import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Hamburger from "../components/Hamburger";

const MobileMenu = () => {
    const token = useSelector( state => state.admin.token) || localStorage.getItem('auth-token')

    const toggleSlide = () => {
        document.getElementById("exit").style.display = "block"
        document.getElementById("sideBar").classList.toggle("slideRight")
        console.log(window.innerWidth)
    }

    const removeSelf = () => {
        document.getElementById("exit").style.display = "none"
        document.getElementById("sideBar").classList.remove("slideRight")
    }

    if (!token){
        return(
            <>
            <div onClick = {removeSelf} id = "exit" className = "see-through" />
                <div id = "sideBar" className = "side-bar"> 
                    <div className = "side-options">
                        <ul>
                            <li> 
                                <span className = "side-icons"><i class="fas fa-home"></i></span>
                                <Link to = "/">works</Link> 
                            </li>
                            <li> 
                                <span className = "side-icons"><i class="fas fa-home"></i></span>
                                <Link to = "/hire">hire</Link> 
                            </li>
                            <li>  
                                <span className = "side-icons"><i class="fas fa-home"></i></span>
                                <Link to = "/about">about</Link>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div className = 'mobile-menu py-1'>
                    <a href="/">
                        <div className = "main-logo">
                            <div className = 'logo-top'>Abubakar Ali</div>
                            <div className = "text">
                                PHOTOGRAPHER <span className = 'ampersand'>&</span> CREATIVE DIRECTOR
                            </div>
                        </div>
                    </a>
                    
                    <div 
                    onClick = {toggleSlide}
                    className= "hamburger">
                        <Hamburger />
                        {/* <i class="fas fa-bars"></i> */}
                    </div>            
    
                </div>
            </>
        )
    }else{
        return(
            <>
            <div onClick = {removeSelf} id = "exit" className = "see-through" />
                <div id = "sideBar" className = "side-bar"> 
                    <div className = "side-options">
                        <ul>
                            <li> 
                                <span className = "side-icons"><i class="fas fa-home"></i></span>
                                <Link to = "/">works</Link> 
                            </li>
                            <li> 
                                <span className = "side-icons"><i class="fas fa-home"></i></span>
                                <Link to = "/hire">hire</Link> 
                            </li>
                            <li>  
                                <span className = "side-icons"><i class="fas fa-home"></i></span>
                                <Link to = "/about">about</Link>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div className = 'mobile-menu py-1'>
                    <a href="/">
                        <div className = "main-logo">
                            <div className = 'logo-top'>Admin</div>
                            <div className = "text">
                                ABUBEE.COM ADMIN PANEL
                            </div>
                        </div>
                    </a>
                    
                    {/* <div 
                    onClick = {toggleSlide}
                    className= "hamburger">
                        <Hamburger />
                    </div>             */}
    
                </div>
            </>
        )
    }
}

export default MobileMenu