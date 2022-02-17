import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhotos } from "../../store/actions";
import { ImageItem } from "../../components/ImageItem/ImageItem";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
	const photos = useSelector((state) => state.photos.photoList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllPhotos());
	}, [dispatch]);
	//HOME VIEW FOR REGULAR USERS

	return (
		<>
			<Container className="foo" fluid>
				<Row className="d-sm-flex">
					{photos ? (
						photos.map((item) => (
							<Col xl={4} sm={12} md={6} lg={4} className="foo-2 pb-3 px-5">
								<ImageItem
									title={item.title}
									camera={item.cameraInfo}
									location={item.shotLocation}
									shotDate={item.shotDate}
									url={item.img}
								/>
							</Col>
						))
					) : (
						<> </>
					)}
				</Row>
			</Container>
		</>
	);

	//HOME VIEW FOR SITE ADMIN
};

export default Home;
