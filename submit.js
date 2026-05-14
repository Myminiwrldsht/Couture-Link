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
    let bust=documentgetElementById("bust").value.trim();
    let waist=document.getElementById("waist").value.trim();
    let hips=document.getElementById("hips").value.trim();
    let height=document.getElementById("height").value.trim();

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


    
}); 

