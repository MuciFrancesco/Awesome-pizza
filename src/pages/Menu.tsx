import React from 'react'
import { Container } from "react-bootstrap"
import { pizzaMenu } from '../utility/pizzaArray'


function Menu() {

    const pizzeRosse = pizzaMenu.filter((el) => el.category === "rossa");
    const pizzeBianche = pizzaMenu.filter((el) => el.category === "bianca");
    const fritti = pizzaMenu.filter((el) => el.category === "fritti");
    const dolci = pizzaMenu.filter((el) => el.category === "dolce");



    return (
        <Container className='menu'>
            <h2>Il nostro menu</h2>
            <ul>
                <h3>Pizze rosse :</h3>
                {pizzeRosse.map((el, id) => (
                    <li key={id}>
                        <h5>{el.name} : {el.price}€</h5>
                        <h6>Ingredienti : </h6>
                        <p>{el.details}</p>
                    </li>
                ))}
            </ul>

            <ul>
                <h3>Pizze bianche :</h3>
                {pizzeBianche.map((el, id) => (
                    <li key={id}>
                        <h5>{el.name} : {el.price}€</h5>
                        <h6>Ingredienti : </h6>
                        <p>{el.details}</p>
                    </li>
                ))}
            </ul>

            <ul>
                <h3>Fritti :</h3>
                {fritti.map((el, id) => (
                    <li key={id}>
                        <h5>{el.name} : {el.price}€</h5>
                        <h6>Ingredienti : </h6>
                        <p>{el.details}</p>
                    </li>
                ))}
            </ul>

            <ul>
                <h3>Dolci :</h3>
                {dolci.map((el, id) => (
                    <li key={id}>
                        <h5>{el.name} : {el.price}€</h5>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default Menu