import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPhotos, editPhoto } from "../store/actions"
import {ImageItem} from "../components/ImageItem"
import AdminImageItem from '../components/AdminImageItem'
import {Row, Col } from 'react-bootstrap'

const Home = () => {
    const dispatch = useDispatch()
    const photos = useSelector( state => state.photos.photoList)
    const token = useSelector( state => state.admin.token) || localStorage.getItem('auth-token')
    useEffect( () => {
        dispatch(getAllPhotos())
    }, [dispatch])
    
    if (!token){
        return(
            <>
            <Row className = 'main-row'>
                    {photos ?
                            photos.map( (item) => (
                                <Col sm={12} md={6} lg={4} xl={4} className = 'hold' key = {item.id}>
                                    <ImageItem 
                                        title = {item.title} 
                                        camera = {item.cameraInfo} 
                                        location = {item.shotLocation} 
                                        shotDate = {item.shotDate} 
                                        url = {item.img}
                                    />
                                </Col>
                            ))
                        :
                            null
                    }
            </Row>
            </>
        )
    }else{
        return(
            <>
            <Row className = 'main-row'>
                    {photos.photoList?
                            photos.photoList.map( (item) => (
                                <Col sm={12} md={6} lg={4} xl={4} className = 'hold' key = {item.id}>
                                    <AdminImageItem 
                                        id = {item._id}
                                        title = {item.title} 
                                        camera = {item.cameraInfo} 
                                        location = {item.shotLocation} 
                                        shotDate = {item.shotDate} 
                                        url = {item.img}
                                    />
                                </Col>
                            ))
                        :
                            null
                    }
            </Row>
            </>
        )
    }
}

export default Home