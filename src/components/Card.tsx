
import React from 'react'
import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from '../context/StoreProvider';
import { pizzaArray } from '../interfaces/pizzaArray_interface';

function Cards({ name, id, img, price }: pizzaArray) {
    const { getItemQuantity, incrementCartQuantity, decrementCartQuantity, removeToCart } = useShoppingCart()
    const quantity = getItemQuantity(id);

    return (
        <div className='card-content d-flex flex-wrap  '>
            <Card key={id} className='h-100' >
                <Card.Img variant="top" src={img} height={200} width="100%" style={{ objectFit: "cover" }} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                        <span className='fs-4'>{name}</span>
                        <span className='ms-2 text muted'>{price} €</span>
                    </Card.Title>
                    <div className='mt-auto'>
                        {quantity === 0 ? (
                            <Button className='w-100' onClick={() => incrementCartQuantity(id)}>Aggiungi</Button>
                        ) :
                            <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                                <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                                    <Button onClick={() => decrementCartQuantity(id)}>-</Button>
                                    <div>
                                        <span className='fs-3'>{quantity}</span> nel carrello
                                    </div>
                                    <Button onClick={() => incrementCartQuantity(id)}>+</Button>
                                </div>
                                <Button variant='danger' size='sm' onClick={() => removeToCart(id)}>Rimuovi</Button>
                            </div>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>

    )

}

export default Cards