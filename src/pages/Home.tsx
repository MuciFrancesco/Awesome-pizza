
import React from 'react'
import Hero from '../components/Hero'
import Bunner from '../components/Bunner'
import Footer from '../components/Footer'
import AboutUsCard from '../components/AboutUsCard'

function Home({ navigate }: any) {
    return (
        <>
            <Hero navigate={navigate} />
            <Bunner navigate={navigate} />
            <AboutUsCard navigate={navigate} />
            <Footer />
        </>
    )
}

export default Home