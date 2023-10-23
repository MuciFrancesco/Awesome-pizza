//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { pizzaMenu } from '../utility/pizzaArray';
import { Button } from "react-bootstrap";
import { useShoppingCart } from '../context/StoreProvider';


function Racomanded() {
    const { incrementCartQuantity, cartItem, vegetarian } = useShoppingCart()
    const [racomandedFood, setRacomandedFood] = useState([])

    const randomItems = pizzaMenu?.toSorted(() => .5 - Math.random()).slice(0, 2);
    const filteredItems = randomItems.filter((el) => el.name !== cartItem.filter((el) => el.name))

    const cartVegan = pizzaMenu.filter((el) => el.vegetarian === true)
    const randomItemsVeg = cartVegan?.toSorted(() => .5 - Math.random()).slice(0, 2);
    const filteredItemsVeg = randomItemsVeg.filter((el) => el.name !== cartItem.filter((el) => el.name))


    useEffect(() => {
        if (vegetarian) {
            setRacomandedFood(filteredItemsVeg)
        } else {
            setRacomandedFood(filteredItems)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItem])



    return (
        <div className='vstack gap-1'>
            <h5>Consigliati : </h5>
            {racomandedFood?.map((el) => (
                <div key={el.id} className='vstack gap-1 d-flex flex-row d-flex justify-content-center align-items-center '>
                    <h6 className='w-3'>{el?.name}</h6>
                    <p>{el.price} €</p>
                    <img width={"70"} height={"70"} src={el?.img} alt={el.name} />
                    <Button onClick={() => incrementCartQuantity(el.id)} >Aggiungi</Button>
                </div>
            ))}
        </div>
    )
}

export default Racomanded