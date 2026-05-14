//GET ORDERS FROM LOCALSTORAGE.
//Get the orders array from localStorage, if none exist use empty array.
let orders = JSON.parse(localStorage.getItem("orders")) || [];

//Select the ordersGrid div where cards will be added. 
const ordersGrid = document.querySelector(".ordersGrid");

//Check if there are any orders
if (orders.length === 0){

    //If there are no orders, show the noOrder section.
    document.querySelector(".noOrders").style.display = "block";
    ordersGrid.style.display = "none";

} else {

    //If there are no orders, hide the noOrder section.
    document.querySelector(".noOrders").style.display = "none";
    

    //Loops through the orders array and create a card for each order.
    //ForEach is used to loop through the orders array one by one and create a card for each order.
    orders.forEach(function(order) {

        //Create a new div element for the order card.
        const orderCard = document.createElement("div");

        //Add the orderCard class to the new div element.
        orderCard.classList.add("orderCard", "pending");

        //Set the innerHTML of the order card to display the order details.
        card.innerHTML = `
            <h3>Order #${order.id}</h3>
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Style:</strong> ${order.style}</p>
            <p><strong>Occasion:</strong> ${order.occasion}</p>
            <p><strong>Color:</strong> ${order.color}</p>
            <p><strong>Status:</strong> Pending </p>
        `;

        //Add the card to the ordersGrid div.
        ordersGrid.appendChild(orderCard);

    });
}