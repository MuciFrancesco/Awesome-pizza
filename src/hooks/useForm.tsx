//@ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */


import { useState, useEffect } from "react"
import validateInfo from "./validateInfo";
import { useShoppingCart } from "../context/StoreProvider";
import validateUserInfo from "./validateUserInfo";
import { ErrorCardControl, ErrorUserControl, UseForm, ValueCard, ValueUser } from "../interfaces/payment_interface";




const useForm = (): UseForm => {
    const { orderPayed, cartItem } = useShoppingCart()

    const [cardPayment, setcardPayment] = useState<boolean>(false)
    const [localPayment, setLocalPayment] = useState<boolean>(false)

    const [errors, setErrors] = useState({})
    const [errorsUser, setErrorUser] = useState({})

    const [values, setValues] = useState<ValueCard>({
        name: '',
        number: '',
        expiry: '',
        cvc: '',
        focus: '',
    });
    const [valuesUser, setValuesUser] = useState<ValueUser>({
        userName: '',
        userNumber: '',
        email: '',
        road: '',
        roadNumber: '',
        focus: '',
    });


    const errorUsers: ErrorUserControl = validateUserInfo(valuesUser)
    const errorCard: ErrorCardControl = validateInfo(values)


    useEffect(() => {
        setErrors(errorCard)
        setErrorUser(errorUsers)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valuesUser.email, valuesUser.road, valuesUser.roadNumber, valuesUser.userName, valuesUser.userNumber, valuesUser.name, valuesUser.cvc, valuesUser.expiry, valuesUser.number])




    const handleFocus = (e: any): void => {
        setValues((prev: any) => ({ ...prev, focus: e.target.name }))
        setValuesUser((prev: any) => ({ ...prev, focus: e.target.name }))
    }

    const handleChange = (e: any): void => {

        const { name, value } = e.target;
        setValues((prev: any) => ({ ...prev, [name]: value }))
        setValuesUser((prev: any) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        if (errors?.variant === "success") {
            orderPayed(cartItem)
        } else if (errorsUser?.variant === "success" && !cardPayment) {
            orderPayed(cartItem)
        } else if (localPayment && errorsUser?.cemail && errorsUser?.csetName && errorsUser?.cuserNumber) {
            orderPayed(cartItem)
        } else {
            setErrorUser({ ...errorUsers, show: true })
            setErrors({ ...errors, show: true })
        }

    }

    return { handleChange, handleFocus, handleSubmit, values, errors, valuesUser, setValuesUser, errorsUser, cardPayment, setcardPayment, setLocalPayment, localPayment }
}

export default useForm;