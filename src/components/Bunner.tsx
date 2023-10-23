import React from 'react'
import { Container, Button } from "react-bootstrap"


function Bunner({ navigate }: any) {
    return (
        <Container className='banner me-auto  '>
            <div className='banner-img d-flex justify-content-center align-items-center'>
                <h4>Ordina da casa</h4>

            </div>

            <div className='banner-description'>
                <h2>Scegli tra le nostre specialità</h2>
                <Button variant='btn btn-primary btn-lg ' className='rounded' onClick={() => navigate("/store")} >Ordina ora</Button>
            </div>
        </Container>
    )
}

export default Bunner