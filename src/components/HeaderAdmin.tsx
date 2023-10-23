import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import logo from "../imgs/logo.svg"

function HeaderAdmin() {
    return (
        <header>
            <NavbarBs className='bg-white shadow-sm mb-3'>
                <Container >
                    <Nav className='me-auto d-flex justify-content-center align-items-center '>
                        <Nav.Link eventKey={"link-1"} as={NavLink} to={"/admin/adminUse"} className='d-flex justify-content-center align-items-center flex-wrap '>
                            <img src={logo} alt="Logo-img" />
                            <h5>Awesome Pizza</h5>
                        </Nav.Link>
                    </Nav>
                </Container>

            </NavbarBs>
        </header>
    )
}

export default HeaderAdmin