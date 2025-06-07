import { Card, Container, Row, Col } from "react-bootstrap"
import classNames from 'classnames'
import StyledCard from "../common/StyledCard"

function Project({ project }) {
    return (
        <StyledCard>
            <Card.Header>{project.label}</Card.Header>
            <Card.Body>
                <Card.Img src={project.path} style={{ height: '300px', objectFit: 'contain'}} />
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

const projects = [
    { label: "ВШЭ НН", text: 'Реализация проекта по кейсу от Высшей Школы Экономини в Нижнем Новгороде "Система непрерывной оценки качества преподавания и экзаменов".', stack: "Python, Flask, Ollama", path: "/hse.jpg" },
    { label: "SOCBOOK", text: 'Разработка клиентской части для социальной сети для врачей-реабилитологов. Заказчик - компания "Актив" (Санкт-Петербург), специализирующаяся на производстве ТСР.', stack: "HTML, CSS, JavaScript, React", path: "/active.webp" },
]

export default function Projects() {
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
                            <Project key={index} project={project} />
                        </Col>
                    ))}
                </Row>
            </Col>
        </Container>
    )
}