var customerName = prompt("What is your name?");
var drinkPrice = 6;
var customerPoints = 15;
var pointsPerOrder = 10;
var customerDrink = prompt("What drink are you ordering.");
customerPoints = customerPoints + pointsPerOrder;
var offeringDelivery = false;
alert("Hello " + customerName + " you ordered the " + customerDrink + " it cost $" + drinkPrice + ", your points has been updated to " + customerPoints + " points." );
alert("Delivery is " + offeringDelivery + ".")