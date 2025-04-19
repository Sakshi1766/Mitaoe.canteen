// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Get all the order buttons
  const orderButtons = document.querySelectorAll('.order-btn');

  // Loop through each button and add an event listener for the click event
  orderButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the name of the item and its price (you can extend this for other details)
      const itemName = this.previousElementSibling.previousElementSibling.textContent;
      const itemPrice = this.previousElementSibling.textContent;

      // Display an alert or take some other action
      alert(`You have ordered: ${itemName} for ${itemPrice}`);
      
      // Optionally, you can send this information to the backend here using fetch/AJAX
      // fetch('/order', {
      //   method: 'POST',
      //   body: JSON.stringify({ item: itemName, price: itemPrice }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
    });
  });
});
