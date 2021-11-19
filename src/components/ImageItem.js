import React, {useState, useRef} from "react";
import { DateTime } from "luxon"
import { imgUrlTransform } from "../helpers";
import axios from "axios";

export const ImageItem = ({title, camera, location, shotDate, url}) => {
    const dateTransform = (dateString) => {
        return DateTime.fromISO(dateString).toFormat('MMMM dd, yyyy')
    }
    const newUrl = imgUrlTransform(305, 298, "upload", url)
    const newDate = dateTransform(shotDate)
    return(
        <>
            <div className = "photo-item">
                <div className = 'photo-title'>
                    {title}
                </div>
                <div className = 'photo-camera'>
                    {camera}
                </div>
                <img src={newUrl} 
                    alt="Sample title" 
                />
                <div className = 'photo-det2 pt-3'>
                    {location}
                </div>
                <div className = 'photo-det2'>
                    {newDate}
                </div>
            </div>
        </>
    )
}


