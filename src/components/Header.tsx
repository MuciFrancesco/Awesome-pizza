import React, { useEffect, useState } from 'react'
import logo from "../imgs/logo.svg"
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as NavbarBs, Button, Dropdown } from "react-bootstrap"
import { useShoppingCart } from '../context/StoreProvider'
import { FaCartPlus } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"


function Header() {
    const { openCart, cartQuantity } = useShoppingCart()

    function isMobileWidth() {
        return window.innerWidth < 700;
    }

    const [isMobile, setIsMobile] = useState(isMobileWidth());

    useEffect(() => {
        function handleWindowResize() {
            setIsMobile(isMobileWidth());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [isMobile]);


    return (
        <header>
            <NavbarBs className='bg-white shadow-sm mb-3'>
                <Container >
                    <Nav className='me-auto d-flex justify-content-center align-items-center '>
                        <Nav.Link eventKey={"link-1"} as={NavLink} to={"/"} className='d-flex justify-content-center align-items-center flex-wrap '>
                            <img src={logo} alt="Logo-img" />
                            <h5>Awesome Pizza</h5>
                        </Nav.Link>
                    </Nav>
                    {!isMobile ? <Nav className='d-flex justify-content-center align-items-center'>
                        <Nav.Item>
                            <Nav.Link eventKey={"link-2"} as={NavLink} to={"/menu"}>Menu</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"link-3"} as={NavLink} to={"/store"}>Delivery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"link-4"} as={NavLink} to={"/order"}>I miei ordini</Nav.Link>
                        </Nav.Item>
                    </Nav> :
                        <Dropdown>
                            <Dropdown.Toggle variant="btn-outline-primary" id="dropdown-basic" className='btn-outline-primary'>
                                <AiOutlineMenu />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" aria-selected="false" aria-current="false" eventKey={"link-2"} as={NavLink} to={"/menu"} >Menu</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" aria-selected="false" aria-current="false" eventKey={"link-3"} as={NavLink} to={"/store"}>Delivery</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" aria-selected="false" aria-current="false" eventKey={"link-4"} as={NavLink} to={"/order"}>I miei ordini</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                    {cartQuantity > 0 && (
                        <Button
                            onClick={openCart}
                            style={{ width: "3rem", height: "3rem", position: "relative" }}
                            variant='outline-primary'
                            className='rounded-circle'
                        >
                            <FaCartPlus />
                            <div
                                className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                                style={{ color: "white", width: "1.5rem" }}
                            >
                                {cartQuantity}
                            </div>
                        </Button>
                    )}
                </Container>

            </NavbarBs>
        </header>
    )
}

export default Header