import { Dispatch, ReactNode, SetStateAction } from "react"
import { pizzaArray } from "./pizzaArray_interface"

export type StoreProviderProps = {
    children: ReactNode
}

export type StoreProviderContextInterface = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    incrementCartQuantity: (id: number) => void
    decrementCartQuantity: (id: number) => void
    removeToCart: (id: number) => void
    setCartItem: (value: SetStateAction<CartItem[]>) => void
    vegetarian: boolean
    setVegetarian: any
    removeAllToCart: (id: number) => void
    cartQuantity: number
    cartItem: CartItem[]
    isOpen: boolean
    order: boolean
    setOrder: any
    orderElements: any
    confirmOrder: () => void
    totalPrice: (totals: number, items: { id: number; quantity: number }) => void
    mobile: boolean
    paymentControl: boolean
    setPaymentControl: any
    orderPayed: (el: CartItem) => void
    oldOrders: CartItem[]
    orderDone: (el: CartItem, i: number) => void
    changeObj: (obj: any) => void
    setobject: any
    object: object
    setRadioValue: any
    radioValue: string | number
    vegetarianMenu: () => void
    radios: Radios
    category: pizzaArray | any
    setCategory: Dispatch<SetStateAction<string>>
    pizzeRosse: {}
    pizzeBianche: {}
    fritti: {}
    dolci: {}
    rosseVeg: {}
    biancheVeg: {}
    frittiVeg: {}
    dolciVeg: {}
}

export type Radios =
    { id: number; name: string; value: string; el: ObjectRadio; }[]

export type ObjectRadio =
    {
        id: number;
        name: string;
        category: string;
        details: string[];
        kcal: string;
        price: string;
        img: string;
        vegetarian: boolean;
    }[]

export type CartItem = {
    name: unknown;
    id: number
    quantity: number
}

export type CartItemProps = {
    id: number
    quantity: number
    price: number
}