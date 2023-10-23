import margherita from "../imgs/margherita.jpg"
import bufala from "../imgs/bufala.jpeg"
import marinara from "../imgs/marinara.jpeg"
import pulcinella from "../imgs/pulcinella.jpeg"
import amatriciana from "../imgs/amatriciana.jpg"
import prosciutto from "../imgs/prosciutto.jpg"
import vegetariana from "../imgs/vegetariana.jpg"
import spada from "../imgs/spadaBianca.jpeg"
import fagiolina from "../imgs/fagiolina.jpg"
import friariello from "../imgs/friariello.jpg"
import zucchina from "../imgs/zucchina.jpeg"
import pestosa from "../imgs/pestosa.jpeg"
import bufaletta from "../imgs/bufala-bianca.jpeg"
import marea from "../imgs/marea.jpeg"
import nuggets from "../imgs/nuggets.jpg"
import arancino from "../imgs/arancino.jpg"
import carboSupli from "../imgs/carboSupli.jpg"
import panzerotto from "../imgs/panserotto.jpg"
import arcobaleno from "../imgs/arcobaleno.jpg"
import sacher from "../imgs/sacher.jpg"
import nonna from "../imgs/nonna.jpg"
import soufle from "../imgs/soufle.jpg"



export const pizzaMenu = [
    {
        id: 1,
        name: "Margherita",
        category: "rossa",
        details: ["pomodoro,mozzarella,basilico"],
        kcal: "1200",
        price: "5",
        img: margherita,
        vegetarian: true
    },
    {
        id: 2,
        name: "Bufala",
        category: "rossa",
        details: ["pomodoro,mozzarella di bufala,basilico"],
        kcal: "1350",
        price: "8",
        img: bufala,
        vegetarian: true
    },
    {
        id: 3,
        name: "Marinara",
        category: "rossa",
        details: ["capperi, acciughe, aglio, origano"],
        kcal: "900",
        price: "4",
        img: marinara,
        vegetarian: false
    },
    {
        id: 4,
        name: "Pulcinella",
        category: "rossa",
        details: ["Ragù napoletano, mozzarella, polpette di manzo fritte, chips di grana 24 mesi, basilico, olio"],
        kcal: "2300",
        price: "15",
        img: pulcinella,
        vegetarian: false
    },
    {
        id: 5,
        name: "Amatriciana",
        category: "rossa",
        details: ["pancetta, pomodorini dry carbone, basilico, pomodoro, mozzarella"],
        kcal: "1900",
        price: "12",
        img: amatriciana,
        vegetarian: false
    },
    {
        id: 6,
        name: "Prosciutto cotto",
        category: "rossa",
        details: ["pomodoro, mozzarella, basilico, prosciutto cotto"],
        kcal: "1280",
        price: "7",
        img: prosciutto,
        vegetarian: false
    },
    {
        id: 7,
        name: "Vegetariana",
        category: "rossa",
        details: ["zucchine, peperoni, melanzane, pomodoro, mozzarella"],
        kcal: "1230",
        price: "7",
        img: vegetariana,
        vegetarian: true
    },
    {
        id: 8,
        name: "Spada",
        category: "bianca",
        details: ["Carpaccio di Spada, gorgonzola, pepe, scorza di limone"],
        kcal: "1600",
        price: "16",
        img: spada,
        vegetarian: false
    },
    {
        id: 9,
        name: "Faggiolina",
        category: "bianca",
        details: ["Crema di fagioli, spinaci saltati con burro, mozzarella, funghi chiodini, gratin di castagne, tartufo nero, olio extravergine"],
        kcal: "2400",
        price: "22",
        img: fagiolina,
        vegetarian: true
    },
    {
        id: 10,
        name: "Friariello",
        category: "bianca",
        details: ["Crema di friarielli, pomodorini semi-dry, salsiccia umbra, mozzarella"],
        kcal: "2300",
        price: "15",
        img: friariello,
        vegetarian: false
    },
    {
        id: 11,
        name: "Zucchina",
        category: "bianca",
        details: ["Vellutata di zucchine, provolone del Monaco, fiori di zucca, salame"],
        kcal: "1960",
        price: "16",
        img: zucchina,
        vegetarian: false
    },
    {
        id: 12,
        name: "Pestosa",
        category: "bianca",
        details: ["Pesto, pomodorini, stracciatella"],
        kcal: "1460",
        price: "15",
        img: pestosa,
        vegetarian: true
    },
    {
        id: 22,
        name: "Bufaletta",
        category: "bianca",
        details: ["Filetti di pomodoro San Marzano, fiordilatte di Agerola, parmigiano reggiano DOP stagionato 24 mesi,  basilico, olio"],
        kcal: "2000",
        price: "14",
        img: bufaletta,
        vegetarian: true
    },
    {
        id: 13,
        name: "Marea",
        category: "bianca",
        details: ["Tranci di tonno, pomodorini cliegini gialli, olive nere denocciolate, mozzarella di bufala, basilico"],
        kcal: "2100",
        price: "15",
        img: marea,
        vegetarian: false
    },
    {
        id: 14,
        name: "Nuggets",
        category: "fritti",
        details: ["pane grattugiato, pollo, rosmarino, uovo"],
        kcal: "380",
        price: "7",
        img: nuggets,
        vegetarian: false
    },
    {
        id: 15,
        name: "Arancino",
        category: "fritti",
        details: ["riso, pomodoro, mozzarella, pane grattugiato, pepe, basilico, uovo"],
        kcal: "320",
        price: "5",
        img: arancino,
        vegetarian: true
    },
    {
        id: 16,
        name: "Carbo supplì",
        category: "fritti",
        details: ["pasta, uovo, parmigiano, pecorino, pane grattuggiato, pepe, guanciale"],
        kcal: "400",
        price: "8",
        img: carboSupli,
        vegetarian: false
    },
    {
        id: 17,
        name: "Panzerotto di patate",
        category: "fritti",
        details: ["patate, pane grattuggiato, uovo, menta"],
        kcal: "320",
        price: "5",
        img: panzerotto,
        vegetarian: true
    },
    {
        id: 18,
        name: "Arcobaleno",
        category: "dolce",
        details: "",
        kcal: "",
        price: "6",
        img: arcobaleno,
        vegetarian: true
    },
    {
        id: 19,
        name: "Sacher",
        category: "dolce",
        details: "",
        kcal: "",
        price: "10",
        img: sacher,
        vegetarian: true
    },
    {
        id: 20,
        name: "Nonna",
        category: "dolce",
        details: "",
        kcal: "",
        price: "6",
        img: nonna,
        vegetarian: true
    },
    {
        id: 21,
        name: "Soufle",
        category: "dolce",
        details: "",
        kcal: "",
        price: "8",
        img: soufle,
        vegetarian: true
    },
]