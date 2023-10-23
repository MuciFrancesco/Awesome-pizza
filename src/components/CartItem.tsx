import { useShoppingCart } from '../context/StoreProvider'
import { CartItemProps } from '../interfaces/storeProvider_interface'
import { pizzaMenu } from '../utility/pizzaArray'
import { Stack, Button } from "react-bootstrap"




function CartItem({ id, quantity }: CartItemProps) {
    const { removeToCart, incrementCartQuantity, decrementCartQuantity } = useShoppingCart()
    const item = pizzaMenu.find(i => i.id === id)
    const price = Number(item?.price)

    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} >
            <img src={item.img} alt={item.name} width={125} height={75} style={{ objectFit: "cover" }} />
            <div className='me-auto'>
                <div>
                    {item.name} {quantity > 1 &&
                        <span className='text-muted' style={{ fontSize: "0.65rem" }}>
                            x{quantity}
                        </span>
                    }
                </div>

                <div>
                    {price * quantity} €
                </div>
            </div>
            <Button size="sm" style={{ width: "2rem" }} onClick={() => decrementCartQuantity(item.id)}>-</Button>
            <Button size='sm' style={{ width: "2rem" }} onClick={() => incrementCartQuantity(item.id)}>+</Button>
            <Button variant='outline-danger' size='sm' onClick={() => removeToCart(item.id)}>x</Button>
        </Stack>
    )
}

export default CartItem