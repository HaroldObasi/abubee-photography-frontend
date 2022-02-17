import React from "react";
import { useHistory } from "react-router";

const AddImage  = () => {
    const history = useHistory()
    return(
        <>
            <div 
                className="add-image"
                onClick={() => {history.push('admin/createphoto')}}
                >
                <div className="add-image-text">
                    ADD IMAGE
                </div>
            </div>
        </>
    )
}
export default AddImage