
function deliveryDate(el: any, master: any): string {



    return "Verrai chiamato 10 minuti prima della consengna";

    /*

   /////////////// OLD CONTROL  ////////////////////////

   // let ObjLength = el.map((length: { quantity: any }) => length.quantity).reduce((partialSum: any, a: any) => partialSum + a, 0);
    // console.log("master " + master.length)
    //  console.log("ordine" + el.length)
    // console.log("totale" + ObjLength)


    if (master.length <= 15) {
        if (el.length <= 2 && ObjLength < 10) {
            return " Il tuo ordine sarà pronto tra 20 minuti"
        } else if (el.length > 2 && el.length <= 5 && ObjLength >= 10 && ObjLength < 15) {
            return "Il tuo ordine sarà pronto tra 25 minuti"
        } else if (el.length > 5 && el.length <= 10 && ObjLength >= 15 && ObjLength < 20) {
            return "Il tuo ordine sarà pronto tra 30 minuti"
        } else if (el.length > 10 && el.length <= 15 && ObjLength >= 20 && ObjLength < 30) {
            return "Il tuo ordine sarà pronto tra 45 minuti"
        } else {
            return "Verrai chiamato 10 minuti prima della consengna"
        }

    } else if (master.length >= 15) {
        if (el.length <= 2 && ObjLength >= 10 && ObjLength <= 15) {
            return " Il tuo ordine sarà pronto tra 35 minuti"
        } else if (el.length > 2 && el.length <= 5 && ObjLength >= 10 && ObjLength <= 15) {
            return "Il tuo ordine sarà pronto tra 55 minuti"
        } else if (el.length > 5 && el.length <= 10 && ObjLength >= 10 && ObjLength <= 15) {
            return "Il tuo ordine sarà pronto tra 1 ora e 15 minuti"
        } else if (el.length > 10 && el.length <= 15 && ObjLength >= 10 && ObjLength <= 15) {
            return "Il tuo ordine sarà pronto tra 1 ora e 30 minuti"
        } else {
            return "Verrai chiamato 10 minuti prima della consengna"
        }
    }
    */


}


export default deliveryDate