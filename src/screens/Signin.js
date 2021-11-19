import React, { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { signIn } from "../store/actions"
import { useHistory } from "react-router"
import { useSelector, useDispatch } from "react-redux"

const Signin = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const token = useSelector( state => state.admin.token )

    useEffect(() => {
        if(token){
            history.push('/')
        }
    }, [token])

    const handleInputChange = (event) => {
        event.preventDefault();
        setLogin({
            ...login, 
            [event.target.name] : event.target.value 
        })
    }

    const handleSignin = (event) => {
        event.preventDefault()
        setLoading(true)
        dispatch( signIn(login) ).then(
            setLoading(false)
        )

    }

    return(
        <>
            <div className = "signup-body">
                <div>
                    <div className = "signup-title mb-3">
                        Site Admin Log-In
                    </div>

                    <form action="" onSubmit = {handleSignin}>
                        <div className = "signup-fields">
                            <div className = 'field'>
                                <div className = "for-label">
                                    <label htmlFor = "emailInput">EMAIL {">>>"}</label>
                                </div>
                                <div className = "field-input">
                                    <input name = "email" type="text" onChange = { handleInputChange }/>
                                </div>
                            </div>
                            <div className = 'field'>

                                <div className = "for-label">
                                    <label htmlFor = "emailInput">PASSWORD {">>>"}</label>
                                </div>
                                <div className = "field-input">
                                    <input name = "password" type="password" onChange = { handleInputChange }/>
                                </div>
                            </div>
                        </div>
                        <button 
                            className = "signup-btn mt-4"
                            type = "submit"
                        >
                            submit.
                            {
                            loading ? 
                                <span>
                                <Spinner animation="border" variant="light" size = "sm"/>
                                </span>
                                :
                                null
                            }
                        </button>
                    </form>

                    <br />
                </div>
            </div>
        </>
    )
}

export default Signin