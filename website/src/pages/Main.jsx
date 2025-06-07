import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { FaTrophy, FaCode, FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router';

const StyledCard = styled(Card)`
border: none;
border-radius: 15px;
overflow: hidden;
box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
    //transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}
`;

const TechBadge = styled.img`
height: 28px;
margin-right: 0.5rem;
margin-bottom: 0.5rem;
transition: transform 0.3s ease;

&:hover {
    transform: scale(1.1);
}
`;

const SectionBadge = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.bgcolor || '#f1f3f5'};
  color: ${props => props.color || '#212529'};
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  margin-right: 0.8rem;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  border: 1px solid #dee2e6;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    background-color: ${props => props.bgcolor || '#e9ecef'};
  }
  
  svg {
    margin-right: 0.6rem;
    font-size: 1.1rem;
  }
`;

export default function Main() {
    return (
        <>
            <Container className="my-4 mb-4">
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <StyledCard>
                            <Card.Body className="p-4 md-5">
                                <Row className="align-items-center">
                                    <Col md={5} className="text-center mb-4 mb-md-0">
                                        <Image 
                                            src="/photo.jpg" 
                                            alt="Роман Михайлов"
                                            roundedCircle
                                            style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
                                    </Col>
                                    <Col md={7}>
                                        <h1 className="display-5 mb-3">Привет! <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/><br/>Меня зовут Роман</h1>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Card.Text className="text-muted mb-3">
                                    Студент 2 курса Новгородского университета по направлению "Информатика и вычислительная техника"<br />
                                    Увлекаюсь программированием и участвую в IT-соревнованиях<br /><br />
                                    В настоящее время изучаю:
                                    </Card.Text>
                                    <div className="mb-3">
                                        <TechBadge src="https://img.shields.io/badge/-C++-00599C?logo=c%2B%2B&logoColor=white" alt="C++" />
                                        <TechBadge src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white" alt="Python" />
                                        <TechBadge src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
                                        <TechBadge src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black" alt="React" />
                                        <TechBadge src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white" alt="Git" />
                                    </div>
                                    <Card.Text className="text-muted mb-3">
                                        Подробную информацию можно увидеть в соответствующих разделах:
                                    </Card.Text>
                                    <div>
                                        <SectionBadge 
                                            as={Link}
                                            to="/achievements" 
                                            bgcolor="#fff3bf" 
                                            color="#5f3dc4"
                                        >
                                            <FaTrophy /> Достижения
                                        </SectionBadge>
                                        
                                        <SectionBadge
                                            as={Link}    
                                            to="/technologies" 
                                            bgcolor="#d0ebff" 
                                            color="#1864ab"
                                        >
                                            <FaCode /> Технологии
                                        </SectionBadge>
                                        
                                        <SectionBadge 
                                            as={Link}
                                            to="/projects" 
                                            bgcolor="#ffe3e3" 
                                            color="#c92a2a"
                                        >
                                            <FaProjectDiagram /> Проекты
                                        </SectionBadge>
                                        </div>
                                </Row>
                            </Card.Body>
                        </StyledCard>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
