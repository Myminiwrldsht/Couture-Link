//GET ORDERS FROM LOCALSTORAGE.
//Get the orders array from localStorage, if none exist use empty array.
let orders = JSON.parse(localStorage.getItem("orders")) || [];
