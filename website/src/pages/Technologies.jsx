import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaReact, FaPython, FaJs, FaGitAlt, FaDatabase, FaNpm, FaJava, FaCalculator, FaProjectDiagram, FaCodeBranch, FaShieldAlt, FaChartPie } from 'react-icons/fa';
import { SiCplusplus, SiFlask, SiVite, SiVitest } from 'react-icons/si';
import StyledCard from '../common/StyledCard'

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
  font-size: 2.5rem;
  color: ${props => props.color || '#6c757d'};
  margin-bottom: 1rem;
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

// Массив технологий с иконками
const technologies = [
    { name: 'C/C++', icon: <SiCplusplus color="#00599C" />},
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'Java', icon: <FaJava color="#E76F00" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'Flask', icon: <SiFlask color="#000000" />},
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Vite', icon: <SiVite color="#646CFF" /> },
    { name: 'Vitest', icon: <SiVitest color="#6EBC00" /> },
    { name: 'npm', icon: <FaNpm color="#CB3837" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" />},
    { name: 'SQL', icon: <FaDatabase color="#4479A1" /> }
];

const ides = [
  { 
    name: 'VS Code', 
    icon: <img src="https://img.shields.io/badge/-VS%20Code-007ACC?logo=visual-studio-code&logoColor=white" alt="VS Code" /> 
  },
  { 
    name: 'Visual Studio', 
    icon: <img src="https://img.shields.io/badge/-Visual%20Studio-5C2D91?logo=visual-studio&logoColor=white" alt="Visual Studio" /> 
  },
  { 
    name: 'PyCharm', 
    icon: <img src="https://img.shields.io/badge/-PyCharm-21D789?logo=pycharm&logoColor=white" alt="PyCharm" /> 
  },
  { 
    name: 'WebStorm', 
    icon: <img src="https://img.shields.io/badge/-WebStorm-07C3F2?logo=webstorm&logoColor=white" alt="WebStorm" /> 
  },
  { 
    name: 'IntelliJ IDEA', 
    icon: <img src="https://img.shields.io/badge/-IntelliJ%20IDEA-000000?logo=intellij-idea&logoColor=white" alt="IntelliJ IDEA" /> 
  },
  { 
    name: 'CLion', 
    icon: <img src="https://img.shields.io/badge/-CLion-000000?logo=clion&logoColor=white" alt="CLion" /> 
  },
  { 
    name: 'Windows', 
    icon: <img src="https://img.shields.io/badge/-Windows-0078D6?logo=windows&logoColor=white" alt="Windows" /> 
  },
  { 
    name: 'Linux', 
    icon: <img src="https://img.shields.io/badge/-Linux-FCC624?logo=linux&logoColor=black" alt="Linux" /> 
  }
];

const fundamental = [
  {
    name: 'Математический анализ',
    icon: <FaCalculator color="#4E79A7" />,
  },
  {
    name: 'Дискретная математика',
    icon: <FaProjectDiagram color="#F28E2B" />,
  },
  {
    name: 'Структуры данных и алгоритмы',
    icon: <FaCodeBranch color="#E15759" />,
  },
  {
    name: 'Методы защиты информации',
    icon: <FaShieldAlt color="#76B7B2" />,
  },
  {
    name: 'Теория вероятностей и математическая статистика',
    icon: <FaChartPie color="#59A14F" />,
  },
];

function Block({array, title}) {
    return (
        <StyledCard>
            <Card.Body className="p-4 md-5">
                <SectionTitle>{ title }</SectionTitle>
                <Row>
                    {array.map((item, index) => (
                        <Col md={3} sm={4} xs={6} key={index} className="mb-4">
                            <StyledTechCard className="text-center">
                                <TechIcon>{item.icon}</TechIcon>
                                <h5>{item.name}</h5>
                            </StyledTechCard>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </StyledCard>
    )
}

export default function Technologies() {
    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Block array={technologies} title="Языки программирования и технологии" />
                    <Block array={ides} title="Средства разработки" />
                    <Block array={fundamental} title="Фундаментальные дисциплины"/>
                </Col>
            </Row>
        </Container>
    );
};