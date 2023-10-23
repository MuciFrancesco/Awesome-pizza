//@ts-nocheck
import { Offcanvas, Stack, Button } from "react-bootstrap"
import { useShoppingCart } from '../context/StoreProvider'
import CartItem from './CartItem'

import Racomanded from "./Racomanded"




function Cart() {
    const { closeCart, cartItem, isOpen, removeAllToCart, totalPrice, confirmOrder } = useShoppingCart()

    let price = cartItem.reduce((total, el) => totalPrice(total, el), 0)


    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end' >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrello</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItem.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    {cartItem.length > 0 ?
                        <div className='ms-auto fw-bold fs-5 '>
                            Totale : {"€ " + price}
                        </div>

                        :
                        <div className='ms-auto fw-bold fs-5 '>Non c'è niente qui.</div>
                    }
                    {cartItem.length > 0 &&
                        <>
                            <Button variant="danger" onClick={() => removeAllToCart()}>Ellimina Tutti</Button>
                            <Racomanded />
                            <Button onClick={() => confirmOrder()}>Procedi all'ordine</Button>
                        </>

                    }
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart


