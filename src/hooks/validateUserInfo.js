export default function validateUserInfo(values) {


    let errors = {}
    errors.variant = "danger"
    errors.show = false
    errors.csetName = ""
    errors.cuserNumber = ""
    errors.cemail = ""
    errors.croad = ""
    errors.croadNumber = ""
    errors.cfocus = ""
    errors.message = "C'è stato un errore di compilazione , riprova"


    //setName control

    if (values.userName === "" || values.userName.length < 5) {
        errors.message = "Nome non inserito o incompleto"
    } else {
        errors.csetName = true
    }


    //userNumber control

    if (values.userNumber === "" || values.userNumber.length < 9) {
        errors.cmessage = "Numero di telefono non inserito o incompleto"
    } else {
        errors.cuserNumber = true
    }

    //email control

    if (values.email === "" || !values.email.includes("@")) {
        errors.message = "Email non inserita o incompleta"
    } else {
        errors.cemail = true
    }


    //road control

    if (values.road === "") {
        errors.message = "Via non inserita o non corretta"
    } else {
        errors.croad = true
    }

    //roadNumber control

    if (values.roadNumber === "") {
        errors.message = "Numero via non inserito o non corretto"
    } else {
        errors.croadNumber = true
    }




    if (errors.cemail && errors.croad && errors.croadNumber && errors.csetName && errors.cuserNumber) {
        errors.variant = "success"
        errors.message = " Dati validi"
    }

    return errors
}

