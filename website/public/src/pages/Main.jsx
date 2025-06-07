import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPython, FaJs, FaGitAlt, FaReact, FaTrophy, FaCode, FaProjectDiagram } from 'react-icons/fa';
import { TbBrandCpp } from "react-icons/tb";
import { SiFlask } from "react-icons/si";
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

const Hi = styled.img`
height: 40px;
margin-right: 0.5rem;
margin-bottom: 0.5rem;
transition: transform 0.5s ease;

&:hover {
    transform: scale(1.5);
}
`;

const TechBadge = styled.div`
height: 28px;
margin-right: 0.5rem;
margin-bottom: 0.5rem;
transition: transform 0.5s ease;

&:hover {
    transform: scale(1.5);
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
                                        <h1 className="display-5 mb-3">Привет! <Hi src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif"/><br/>Меня зовут Роман</h1>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Card.Text className="text-muted mb-3">
                                    Студент 2 курса Новгородского университета по направлению "Информатика и вычислительная техника"<br />
                                    Увлекаюсь программированием и участвую в IT-соревнованиях<br /><br />
                                    В настоящее время изучаю:
                                    </Card.Text>
                                    <div className="mb-3 d-flex justify-content-left flex-wrap">
                                        <TechBadge className="m-2">
                                            <TbBrandCpp style={{ color: "#00599C", fontSize: '2rem' }} />
                                        </TechBadge>
                                        <TechBadge className="m-2">
                                            <FaJs style={{ color: "#F7DF1E", fontSize: '2rem' }} />
                                        </TechBadge>
                                        <TechBadge className="m-2">
                                            <FaReact style={{ color: "#61DAFB", fontSize: '2rem' }} />
                                        </TechBadge>
                                        <TechBadge className="m-2">
                                            <FaPython style={{ color: "#3776AB", fontSize: '2rem' }} />
                                        </TechBadge>
                                        <TechBadge className="m-2">
                                            <SiFlask style={{ color: 'black', fontSize: '2rem' }} />
                                        </TechBadge>
                                        <TechBadge className="m-2">
                                            <FaGitAlt style={{ color: "#F05032", fontSize: '2rem' }} />
                                        </TechBadge>
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
