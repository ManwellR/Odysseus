var customerFirstName = prompt("What is your first name");
var customerLastName = prompt("What is your last name");
var customerMonths = prompt("How many months are you signing up for");
var fullName = (customerFirstName + " " + customerLastName);
var cardNameLimit = 16;
var cardName = fullName.slice(0, cardNameLimit);
var memberCodeFirst = customerFirstName.slice(0,1);
var memberCodeLast = customerLastName.slice(0,3);
var memberCode = (memberCodeFirst + memberCodeLast);
var membershipCostMonth = 35;
var customerTotalCost = (membershipCostMonth * customerMonths);
var newCardFee = 5;
alert("Name: " + cardName +
"\nMember Code: " + memberCode + 
"\nTotal Cost: $" + (customerTotalCost + newCardFee));

