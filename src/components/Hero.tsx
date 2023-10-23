import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import HeroImg from "../imgs/bunner.jpg"
import heroMobileImg from "../imgs/ardesia.jpg"
function Hero({ navigate }: any) {

    function isMobileWidth() {
        return window.innerWidth < 550;
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

        <div className='hero d-flex'>
            <div className='hero-img'>
                <img src={!isMobile ? HeroImg : heroMobileImg} alt="hero-img" />
            </div>
            <div className='hero-description'>
                <div className='hero-description-text'>
                    <h1>Il nostro menu</h1>
                    <p>Il nostro menù è stagionale e con ingredienti sempre freschi ,</p>
                    <p> ci teniamo a te , vogliamo darti il meglio.</p>
                    <Button variant='btn btn-primary btn-lg' className='rounded' onClick={() => navigate("/menu")} >Scopri ora</Button>
                </div>

            </div>
        </div>
    )
}

export default Hero