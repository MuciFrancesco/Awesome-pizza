const date: Date = new Date();

let currentDay = String(date.getDate()).padStart(2, '0');
let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
let currentYear: number = date.getFullYear();

let fullDate: string = `${currentDay}-${currentMonth}-${currentYear}`;


export default fullDate;