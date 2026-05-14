//Select the form using it's ID, listens for when the user submits it, and prevents the page from refreshing by default.
//Allows us to handle the form submission with JavaScript instead of the default behavior.
document.getElementById("submissionForm").addEventListener("submit", function(event) {
    
    //Prevents the browser's default form submission, lets JS habdle it.
    event.preventDefault()
    

    //Retrieves input values from the form, trims accidental spaces before/after texts, and stores them in variables for later use.
    // .value is used to get the current value that the user typed in.
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("user-email").value.trim();
    let phone=document.getElementById("phone").value.trim();
    let inspo=document.getElementById("inspo").value.trim();
    let style=document.getElementById("style").value.trim();
    let occasion=document.getElementById("occasion").value.trim();
    let color=document.getElementById("color").value.trim();
    let fabric=document.getElementById("fabric").value.trim();
    let bust=document.getElementById("bust").value.trim();
    let waist=document.getElementById("waist").value.trim();
    let hips=document.getElementById("hips").value.trim();
    let height=document.getElementById("height").value.trim();


    //VALIDATION: checks if the required fields are filled out, and if not, shows an alert to the user and stops the submission process.
    if (name === "" || email === "" || phone === "" || inspo === "" || style === "" || occasion === "" || color === "" || fabric === "" || bust === "" || waist === "" || hips === "" || height === "" ) {

        alert("Please fill in all required fields before submitting the form.");
        return; // Stops the function from continuing, so the form won't be submitted.
    }

    console.log("Form submitted with values:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Inspiration:", inspo);
    console.log("Style:", style);
    console.log("Occasion:", occasion);
    console.log("Color:", color);
    console.log("Fabric:", fabric);
    console.log("Bust:", bust);
    console.log("Waist:", waist);
    console.log("Hips:", hips);
    console.log("Height:", height);

//LOCAL STORAGE: Saves the form data to the browser's local storage, allowing it to be accessed later in the order's page.
    let orderData = {
        id: Date.now(), // Generates a unique ID based on the current timestamp.
        name: name,
        email: email,
        phone: phone,
        inspo: inspo,
        style: style,
        occasion: occasion,
        color: color,
        fabric: fabric,
        bust: bust,
        waist: waist,
        hips: hips,
        height: height
    };
    let existingOrders = JSON.parse(localStorage.getItem("orders")) || []; // Retrieves existing orders or initializes an empty array if none exist.
    existingOrders.push(orderData); // Adds the new order data to the existing orders array.
    localStorage.setItem("orders", JSON.stringify(existingOrders)); // Saves the updated array back to localStorage.

    console.log("Order saved to localStorage:", orderData);

    //If everything is valid, proceed with submission by displaying a confirmation message to the user.
    document.getElementById("submissionForm").style.display = "none"; // Hides the form after submission.
    document.querySelector(".confirmation").style.display = "block"; // Shows a confirmation message to the user.
}); 

