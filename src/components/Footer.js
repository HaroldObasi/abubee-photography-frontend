import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {

    return(
        <>
            <div className = 'footer-text py-3'>
                Are You the Owner of this Site? <span> <Link className = 'text-link' to = '/signin'> Click Here! </Link> </span>
            </div>
        </>

    )
}

export default Footer