import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import StyledCard from '../common/StyledCard'
import Loading from '../common/Loading';

const StyledTechCard = styled.div`
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 10px;

    &:hover {
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    }
`

const TechIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #6c757d, #adb5bd);
  }
`;

function Block({imgPrefix, array, title}) {
    return (
        <StyledCard>
            <Card.Body className="p-4 md-5">
                <SectionTitle>{ title }</SectionTitle>
                <Row>
                    {array.map((item, index) => (
                        <Col md={3} sm={4} xs={6} key={index} className="mb-4">
                            <StyledTechCard className="text-center">
                              <TechIcon>
                                <img src={imgPrefix + item.img} alt={item.label} />
                              </TechIcon>
                              <h5>{item.label}</h5>
                            </StyledTechCard>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </StyledCard>
    )
}

export default function Technologies() {

  const [tech, setTech] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const imgPrefix = 'https://raw.githubusercontent.com/ccrayp/ccrayp/refs/heads/main/assets/technologies/'
  
  useEffect(() => {
    async function getTech() {
      try {
        const response = await fetch('https://ccrayp.onrender.com/api/technology/list', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        setTech(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Ошибка загрузки технологий:", error)
        setTech([])
      } finally {
        setIsLoading(false)
      }
    }
    getTech()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  else {
    return (
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Block imgPrefix={ imgPrefix } array={tech.filter(item => item.group === 'lang_tech')} title="Языки программирования и технологии" />
            <Block imgPrefix={ imgPrefix } array={tech.filter(item => item.group === 'ide_os')} title="Средства разработки" />
            <Block imgPrefix={ imgPrefix } array={tech.filter(item => item.group === 'fund')} title="Фундаментальные дисциплины" />
          </Col>
        </Row>
      </Container>
    );
  }
};