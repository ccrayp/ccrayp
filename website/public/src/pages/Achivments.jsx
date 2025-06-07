import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import StyledCarousel from '../common/StyledCarousel';
import StyledCard from '../common/StyledCard'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Loading from '../common/Loading'

const StyledA = styled.a`
    text-decoration: none;

    &:visited {
        color: light-blue;
    }
`

function AchievementBasic({ imgPrefix, achievement }) {

    return (
        <Card>
            <Card.Header><h5>{ achievement.label }</h5></Card.Header>
            <Card.Body className="p-4 md-5">
                <Row>
                    <Col md={6}>
                        <Card.Img style={{ maxHeight: '400px', objectFit: 'contain'}} src={imgPrefix + achievement.img} alt={ achievement.label } />
                    </Col>
                    <Col md={6}>            
                        <Card.Text>
                            {achievement.text}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: 'right' }}>
                    <Row>
                        <Col style={{textAlign: 'left'}}><StyledA target='_blank' href={achievement.link}>Перейти к событию</StyledA></Col>
                        <Col style={{textAlign: 'right'}}>{achievement.date}</Col>
                        </Row>
                </Card.Footer>
        </Card>
    )
}

function Achievement({ imgPrefix, achievement }) {

    return (
        <StyledCard>
            <Card.Header><h5>{ achievement.label }</h5></Card.Header>
            <Card.Body className="p-4 md-5">
                <Row>
                    <Col md={6}>
                        <Card.Img style={{ maxHeight: '400px', objectFit: 'contain'}} src={imgPrefix + achievement.img} alt={ achievement.label } />
                    </Col>
                    <Col md={6}>            
                        <Card.Text>
                            {achievement.text}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: 'right' }}>
                    <Row>
                        <Col style={{textAlign: 'left'}}><StyledA target='_blank' href={achievement.link}>Перейти к событию</StyledA></Col>
                        <Col style={{textAlign: 'right'}}>{achievement.date}</Col>
                        </Row>
                </Card.Footer>
        </StyledCard>
    )
}

export default function Achievements() {

    const [achs, setAchs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const imgPrefix = 'https://raw.githubusercontent.com/ccrayp/ccrayp/refs/heads/main/assets/posts/'

    useEffect(() => {
        async function getAchs() {
            try {
                const response = await fetch('https://ccrayp.onrender.com/api/post/list', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                setAchs(Array.isArray(data) ? data : [])
            } catch (error) {
                console.error("Ошибка загрузки достижений:", error)
                setAchs([])
            } finally {
                setIsLoading(false)
            }
        }
        getAchs()
    }, [])

    if (isLoading) {
        return <Loading /> 
    }
    else {
        return (
            <Container className="my-4">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Achievement imgPrefix={imgPrefix} achievement={achs.filter(item => item.label === 'НЕЙМАРК.Хакатон')[0]} />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <StyledCarousel indicators controls className="mb-4">
                            {achs.reverse().map((achievement, index) => (
                                <Carousel.Item key={index}>
                                    <AchievementBasic imgPrefix={imgPrefix} achievement={achievement} />
                                </Carousel.Item>
                            ))}
                        </StyledCarousel>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        {achs.reverse().slice(1).map((ach, index) => (
                            <div key={index}>
                                <Achievement imgPrefix={ imgPrefix } achievement={ach} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}