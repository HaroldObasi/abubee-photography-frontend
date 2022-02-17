import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPhotos, editPhoto } from "../../store/actions"
import AdminImageItem from '../../components/ImageItem/AdminImageItem'
import {Container, Row, Col } from 'react-bootstrap'
import AddImage from '../../components/ImageItem/AddImage'

const AdminHome = () =>{
    const dispatch = useDispatch()
    const photos = useSelector( state => state.photos.photoList)
    const token = useSelector( state => state.admin.token) || localStorage.getItem('auth-token')
    useEffect( () => {
        dispatch(getAllPhotos())
    }, [dispatch])

    return(
        <>
        <Container className = 'foo' fluid>
            <Row className = 'd-sm-flex samp'>
                    {photos ?
                            photos.map( (item) => (
                                <Col xl={4} sm={12} md={6} lg={4} className = 'foo-2 pb-3 px-5'>
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
                            (<> </>)
                    }
                    <Col xl={4} sm={12} md={6} lg={4} className = 'foo-2 pb-3 px-5'>
                        <AddImage />                
                    </Col>
            </Row>
        </Container>
        </>
    )
}

export default AdminHome