import valid from "card-validator"




export default function validateInfo(values) {


    let errors = {}

    errors.show = false
    errors.variant = "danger"
    errors.message = "C'è stato un errore di compilazione , riprova"
    errors.cname = ""
    errors.cnumber = ""
    errors.cexpiry = ""
    errors.ccvc = ""

    let creditCard = valid.number(values.number)

    creditCard.expirationDate = valid.expirationDate(values.expiration)
    creditCard.cardholderName = valid.cardholderName(values.name)
    creditCard.cvv = valid.cvv(values.cvc)


    //cvc control

    if (values.cvc === "" || values.cvc.length < 3) {
        errors.message = "il CVC non è completo"
    } else if (creditCard.cvv.isValid) {
        errors.ccvc = true
    } else {
        errors.message = "CVC non valido"
    }

    //expiration control

    if (values.expiry === "" || values.expiry.length < 4) {
        errors.message = "Data di scadenza carta non completa"
    } else if (creditCard.expirationDate.isValid) {
        errors.cexpiry = true
    } else if (values.expiry.length === 4) {
        errors.cexpiry = true
    } else {
        errors.message = "Data di scadenza non valida"
    }

    //card number control

    if (values.number === "" || values.number.length < 16) {
        errors.message = "Numero carta non completo"
    } else if (creditCard.isValid) {
        errors.cnumber = true
    } else if (values.number.length === 16) {
        errors.cnumber = true
    } else {
        errors.message = "Numero carta non valido"
    }

    //cardHolder control

    if (values.name === "" || values.name.length < 5) {
        errors.message = "Nome non completo"
    } else if (creditCard.cardholderName.isValid) {
        errors.cname = true
    } else {
        errors.message = "Nome non valido"
    }

    if (errors.cname && errors.cnumber && errors.ccvc && errors.cexpiry) {
        errors.variant = "success"
        errors.message = " Carta di credito valida"
    }

    return errors
}


