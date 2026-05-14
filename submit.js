//Select the form using it's ID, listens for when the user submits it, and prevents the page from refreshing by default.
//Allows us to handle the form submission with JavaScript instead of the default behavior.
document.getElementById("submissionForm").addEventListener("submit", function(event) {
    
    //Prevents the browser's default form submission, lets JS habdle it.
    event.preventDefault()
    
    
}); 

