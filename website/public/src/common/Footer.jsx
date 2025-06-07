import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegram, FaVk, FaEnvelope, FaGithub } from 'react-icons/fa';

const ContactIcon = styled.a`
color: #495057;
font-size: 1.5rem;
margin-right: 1rem;
transition: color 0.3s ease, transform 0.3s ease;

&:hover {
    color: #0d6efd;
    transform: translateY(-3px);
}
`;

const FooterContainer = styled.footer`
background-color: #f8f9fa;
padding: 2rem 0;
border-top: 1px solid #dee2e6;
`;

export default function Footer() {
    return (
        <FooterContainer className="">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                    <h5 className="mb-3">Связь со мной</h5>
                    <div className="d-flex justify-content-center">
                        <ContactIcon href="https://t.me/ccrayp" target="_blank" rel="noopener noreferrer" title="Telegram">
                        <FaTelegram />
                        </ContactIcon>
                        <ContactIcon href="https://vk.ru/ccrayp" target="_blank" rel="noopener noreferrer" title="VK">
                        <FaVk />
                        </ContactIcon>
                        <ContactIcon href="mailto:roman.mikhalov.05@gmail.com" title="Email">
                        <FaEnvelope />
                        </ContactIcon>
                        <ContactIcon href="https://github.com/ccrayp" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                        </ContactIcon>
                    </div>
                    <p className="mt-3 mb-0 text-muted">© {new Date().getFullYear()} Роман Михайлов</p>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    )
}