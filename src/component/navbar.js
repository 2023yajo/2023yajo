import { Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../img/logo_49.png'


function Navibar() {
    const navbarStyle = {
        height: '15vh', // Navbar 높이를 viewport 높이의 15%로 설정
        alignItems: 'flex-start', // 요소를 상단에 붙이기
    };
    return (
        <Navbar bg="transparent" variant="light" style={navbarStyle}>
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>
                        <img className="nav_logo" width="10%" src={logo} alt="Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Text>
                    <p className="nav_text">
                        Hongik University<br />
                        Outdoor<br />
                        Sculpture<br />
                        Exhibition
                    </p>
                </Navbar.Text>
                <Nav>
                    <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                    <Nav.Link as={Link} to={'/archive'}>Archive</Nav.Link>
                    <Nav.Link as={Link} to={'/program'}>Program</Nav.Link>
                    <Nav.Link as={Link} to={'/credit'}>Credit</Nav.Link>
                </Nav>
              
            </Container>
        </Navbar>
    )
}

export default Navibar;