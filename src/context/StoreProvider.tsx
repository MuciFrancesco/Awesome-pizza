import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, createContext, useState } from "react";
import Cart from "../components/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { pizzaMenu } from "../utility/pizzaArray";
import { useEffect } from "react"
import { pizzaArray } from '../interfaces/pizzaArray_interface';
import { CartItem, StoreProviderContextInterface, StoreProviderProps } from '../interfaces/storeProvider_interface';




// eslint-disable-next-line @typescript-eslint/no-redeclare
const StoreProviderContext = createContext({} as StoreProviderContextInterface)


export function useShoppingCart() {
    return useContext(StoreProviderContext)
}

export function StoreProviders({ children }: StoreProviderProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const pizzeRosse: Object = pizzaMenu.filter((el) => el?.category === "rossa");
    const pizzeBianche: Object = pizzaMenu.filter((el) => el?.category === "bianca");
    const fritti: Object = pizzaMenu.filter((el) => el?.category === "fritti");
    const dolci: Object = pizzaMenu.filter((el) => el?.category === "dolce");
    const rosseVeg: Object = pizzaMenu.filter((el) => el?.category === "rossa" && el.vegetarian === true);
    const biancheVeg: Object = pizzaMenu.filter((el) => el?.category === "bianca" && el.vegetarian === true);
    const frittiVeg: Object = pizzaMenu.filter((el) => el?.category === "fritti" && el.vegetarian === true);
    const dolciVeg: Object = pizzaMenu.filter((el) => el?.category === "dolce" && el.vegetarian === true);

    const [cartItem, setCartItem] = useLocalStorage<CartItem[]>("store-item", [])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [vegetarian, setVegetarian] = useState<boolean>(false)
    const [order, setOrder] = useState<boolean>(false)
    const [orderElements, setorderElements] = useLocalStorage<CartItem[]>("store-orders", [])
    const [category, setCategory] = useState<pizzaArray | any>(pizzeRosse)
    const [oldOrders, setoldOrders] = useLocalStorage<CartItem[]>("old-orders", [])
    const [radioValue, setRadioValue] = useState<string | number | any>('1');
    const [object, setobject] = useState<Object>(pizzeRosse)
    const [paymentControl, setPaymentControl] = useState<boolean>(false)
    const [mobile, setIsMobile] = useState<boolean>(isMobileWidth());


    function changeObj(obj: any): void {
        setobject(obj)
    }

    const radios: any = [
        { id: 1, name: 'Pizze rosse', value: '1', el: !vegetarian ? pizzeRosse : rosseVeg },
        { id: 2, name: 'Pizze bianche', value: '2', el: !vegetarian ? pizzeBianche : biancheVeg },
        { id: 3, name: 'Fritti', value: '3', el: !vegetarian ? fritti : frittiVeg },
        { id: 4, name: 'Dolci', value: '4', el: !vegetarian ? dolci : dolciVeg },
    ];
    function isMobileWidth() {
        return window.innerWidth < 501;
    }

    useEffect(() => {
        function handleWindowResize() {
            setIsMobile(isMobileWidth());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [mobile]);


    useEffect(() => {
        setVegetarian(false)
        setobject(pizzeRosse)
        setRadioValue("1")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])


    function vegetarianMenu(): void {
        if (!vegetarian) {
            setVegetarian(true)
            if (radioValue === "1") {
                changeObj(rosseVeg)
            } else if (radioValue === "2") {
                changeObj(biancheVeg)
            } else if (radioValue === "3") {
                changeObj(frittiVeg)
            } else if (radioValue === "4") {
                changeObj(dolciVeg)
            }

        } else {
            setVegetarian(false)
            if (radioValue === "1") {
                changeObj(pizzeRosse)
            } else if (radioValue === "2") {
                changeObj(pizzeBianche)
            } else if (radioValue === "3") {
                changeObj(fritti)
            } else if (radioValue === "4") {
                changeObj(dolci)
            }

        }
    }

    const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)

    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number): number {
        return cartItem.find(item => item.id === id)?.quantity ?? 0
    }

    function incrementCartQuantity(id: number): void {
        const item = pizzaMenu.find(i => i.id === id)
        //@ts-ignore
        setCartItem(currentItem => {
            if (currentItem.find(item => item.id === id) == null) {
                return [...currentItem, { id, quantity: 1, items: item }]
            } else {
                return currentItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item
                    }
                })
            }
        })

    }

    function decrementCartQuantity(id: number): void {
        setCartItem(currentItem => {
            if (currentItem.find(item => item.id === id)?.quantity === 1) {
                return currentItem.filter(item => item.id !== id)
            } else {
                return currentItem.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeToCart(id: number): void {
        setCartItem(currentItem => {
            return currentItem.filter(item => item.id !== id)
        })
    }

    function removeAllToCart(id: number): void {
        setCartItem([])
    }

    function totalPrice(totals: number, items: { id: number; quantity: number }): number {
        let item = pizzaMenu.find(i => i.id === items.id)
        let price: number = Number(item?.price)
        let cost = totals + (price ?? 0) * items.quantity
        return cost
    }
    //redirect to payment page
    function confirmOrder(): void {
        setIsOpen(false)
        navigate("/payment")
    }

    //order stored 
    function orderPayed(el: CartItem): void {
        setOrder(true)
        setorderElements(current => [...current, el])
        setCartItem([])
        setIsOpen(false)
        navigate("/order")

    }

    //admin order done
    function orderDone(el: CartItem, i: number): void {
        setoldOrders((current) => [...current, el])
        setorderElements(orderElements.filter((items, index) => index !== i))

    }

    return <StoreProviderContext.Provider value={{ mobile, paymentControl, orderPayed, setPaymentControl, oldOrders, orderDone, changeObj, setobject, object, setRadioValue, radioValue, vegetarianMenu, radios, orderElements, category, setCategory, pizzeRosse, pizzeBianche, fritti, dolci, rosseVeg, biancheVeg, frittiVeg, dolciVeg, totalPrice, confirmOrder, order, setOrder, vegetarian, setVegetarian, isOpen, cartItem, cartQuantity, openCart, closeCart, getItemQuantity, incrementCartQuantity, decrementCartQuantity, removeToCart, removeAllToCart, setCartItem }}>
        {children}
        <Cart />
    </StoreProviderContext.Provider>

}