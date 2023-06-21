import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const Headers = () => {
    const cartData = useSelector((state) => state.allCart);
    
    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>

                    <Button variant="primary" onClick={()=>navigate("/cart")}>
                        Cart <Badge bg="secondary">{cartData.carts?.length > 0 ? cartData.carts.length :""}</Badge>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers