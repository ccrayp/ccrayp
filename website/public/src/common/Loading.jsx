import { Container, Row, Col, Spinner } from "react-bootstrap"

export default function Loading() {
    return (
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Row className="text-center mt-5">
                    <Col>
                        {/* <h1 className="mb-4">Загрузка...</h1> */}
                        <Spinner animation="border" variant="primary" />
                    </Col>
                </Row>
            </Container>
        )
}