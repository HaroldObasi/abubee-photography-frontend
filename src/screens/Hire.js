import React from 'react'

const Hire = () => {

    return(
        <>
            <div className = 'hire-body'>
                <div className="hire-title">GET IN TOUCH - LETS WORK!</div>
                <div className = "signup-fields">
                        <div className = 'field'>

                            <div className = "for-label">
                                <label htmlFor = "emailInput">NAME</label>
                            </div>
                            <div className = "field-input" >
                                <input type="text"/>
                            </div>
                        </div>
                        <br />
                        <div className = 'field'>

                            <div className = "for-label">
                                <label htmlFor = "emailInput">EMAIL</label>
                            </div>
                            <div className = "field-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <br />
                        <div className = 'field'>

                            <div className = "for-label">
                                <label htmlFor = "emailInput">PHONE NUMBER</label>
                            </div>
                            <div className = "field-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <br />
                        <div className = 'field'>

                            <div className = "for-label">
                                <label htmlFor = "emailInput">MESSAGE</label>
                            </div>
                            <div className = "field-input">
                                <input style = {{ height: '100px', resize: 'none', boxSizing: 'border-box'}} type="text"/>
                            </div>
                        </div>
                    </div>

                    <button className = "signup-btn mt-4">
                        submit.
                    </button>
            </div>
        </>
    )
}

export default Hire
