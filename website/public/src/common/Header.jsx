import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function Header() {
    const location = useLocation();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">ccrayp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link 
                        as={Link} 
                        to="/technologies" 
                        active={location.pathname === '/technologies'}
                    >
                        Технологии
                    </Nav.Link>
                    <Nav.Link 
                        as={Link} 
                        to="/achievements" 
                        active={location.pathname === '/achievements'}
                    >
                        Достижения
                    </Nav.Link>
                    <Nav.Link 
                        as={Link} 
                        to="/projects" 
                        active={location.pathname === '/projects'}
                    >
                        Проекты
                    </Nav.Link>
                </Nav>
                <a className='me-2' href='https://ccrayp-admin.vercel.app/' target='_blank'><Button variant='dark'>ccrayp-admin</Button></a>
                <a href='https://ccrayp.onrender.com/' target='_blank'><Button variant='dark'>ccrayp-api</Button></a>
            </Container>
        </Navbar>
    );
}
