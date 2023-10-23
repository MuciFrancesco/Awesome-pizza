export type UseForm = {
    handleChange: (e: any) => void;
    handleFocus: (e: any) => void;
    handleSubmit: (e: any) => void;
    values: any;
    errors: any;
    valuesUser: any;
    setValuesUser: any;
    errorsUser: any;
    cardPayment: boolean;
    setcardPayment: React.Dispatch<React.SetStateAction<boolean>>;
    setLocalPayment: React.Dispatch<React.SetStateAction<boolean>>;
    localPayment: boolean;
}

export type ValueCard = {
    name: string | boolean;
    number: string | boolean;
    expiry: string | boolean;
    cvc: string | boolean;
    focus: string | boolean;
}

export type ValueUser = {
    userName: string | boolean;
    userNumber: string | boolean;
    email: string | boolean;
    road: string | boolean;
    roadNumber: string | boolean;
    focus: string | boolean;
}

export type ErrorUserControl = {
    variant: string;
    show: boolean;
    csetName: string | boolean;
    cuserNumber: string | boolean;
    cemail: string | boolean;
    croad: string | boolean;
    croadNumber: string | boolean;
    cfocus: string;
    message: string;
    cmessage: string;
}

export type ErrorCardControl = {
    show: boolean;
    variant: string;
    message: string;
    cname: string | boolean;
    cnumber: string | boolean;
    cexpiry: string | boolean;
    ccvc: string | boolean;
}