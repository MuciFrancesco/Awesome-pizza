
import React from 'react'
import { Container, Button } from "react-bootstrap"
import aboutHome from "../imgs/about-img-home.jpg"
function AboutUsCard({ navigate }: any) {
    return (
        <>
            <div className='about-card'>
                <h2 className='typography-2 capitalize mb-10 mx-10 text-center heading-hr'><span>Scopri chi siamo</span></h2>
                <Container className='about-card-container px-20 py-70'>
                    <div className='about-card-description flex flex-wrap items-center justify-center bg-white px-20 py-15 mx-auto rounded'>
                        <img src={aboutHome} alt="" />
                        <Button variant='danger' className='button  flex-grow flex-shrink-0 text-center custom-btn' onClick={() => navigate("/")}>
                            Scopri chi siamo
                        </Button>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default AboutUsCard