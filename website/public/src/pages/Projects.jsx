import { Card, Container, Row, Col } from "react-bootstrap"
import StyledCard from "../common/StyledCard"
import { useEffect, useState } from "react"
import Loading from "../common/Loading"

function Project({ imgPrefix, project }) {
    return (
        <StyledCard>
            <Card.Header>{project.label}</Card.Header>
            <Card.Body>
                <Card.Img src={imgPrefix + project.img} style={{ height: '300px', objectFit: 'contain'}} />
                <Card.Text className="mt-4">
                    {project.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{textAlign: 'right'}}>
                {project.stack}
            </Card.Footer>
        </StyledCard>
    )
}

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const imgPrefix = 'https://raw.githubusercontent.com/ccrayp/ccrayp/refs/heads/main/assets/projects/'

    useEffect(() => {
        async function getProjects() {
            try {
                const response = await fetch('https://ccrayp.onrender.com/api/project/list', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setProjects(Array.isArray(data) ? data : [])
            } catch (error) {
                console.error("Ошибка загрузки проектов:", error)
                setProjects([])
            } finally {
                setIsLoading(false)
            }
        }
        getProjects()
    }, [])

    if (isLoading) {
        return <Loading />
    }
    else {
        return (
            <Container className="my-4 d-flex justify-content-center">
                <Col lg={10} className="d-flex justify-content-center">
                    <Row className="justify-content-center" style={{ maxWidth: '100%', width: '100%' }}>
                        {projects.map((project, index) => (
                            <Col
                                key={index}
                                xs={12}
                                sm={6}
                                className="d-flex justify-content-center"
                            >
                                <Project imgPrefix={ imgPrefix } key={index} project={project} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Container>
        )
    }
}