// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Get form values
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;
//     const statusMessage = document.getElementById("statusMessage");

//     // Basic validation (optional)
//     if (!name || !email || !message) {
//         statusMessage.textContent = "Please fill out all fields.";
//         return;
//     }

//     // Create an object to hold the form data
//     const formData = {
//         name: name,
//         email: email,
//         message: message
//     };

//     // Send data to the server
//     fetch("http://localhost:3000/api/contact", { // Replace with your backend URL
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok.");
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle success (e.g., clear the form, show a success message)
//         statusMessage.textContent = "Message sent successfully!";
//         document.getElementById("contactForm").reset(); // Clear the form
//     })
//     .catch(error => {
//         // Handle error
//         console.error("Error:", error);
//         statusMessage.textContent = "There was a problem sending your message.";
//     });
// });
