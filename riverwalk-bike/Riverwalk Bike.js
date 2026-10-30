var hourlyPerBike = 15
var insuranceFee = 5
var codeLength = 3

function calculatePrice(riders, hours) {
   return ((riders * hours)* hourlyPerBike) + insuranceFee; 
}



function groupBooking(name, riders, hours) {
    var beginningOfName = name.slice(0, 1);
    beginningOfName = beginningOfName.toUpperCase();
    var restOfName = name.slice(1);
    restOfName = restOfName.toLowerCase();
    var fullName = beginningOfName + restOfName;
    var bookingCode = name.slice(0, codeLength);
    bookingCode = bookingCode.toUpperCase();
    var fullBookingCode = bookingCode + riders;
    var priceCalc = calculatePrice(riders, hours);
    var message = "Name - " + fullName +
      "\nBooking Code - " + fullBookingCode +
      "\nPrice - $" + priceCalc;
    return message;

}

var ridersOne = 4
var hoursOne = 3
var confirmationOne = groupBooking("marcUs", ridersOne, hoursOne);
var priceOne = calculatePrice(ridersOne, hoursOne)
alert(confirmationOne);

var ridersTwo = 6
var hoursTwo = 2
var confirmationTwo = groupBooking("toDD", ridersTwo, hoursTwo);
var priceTwo = calculatePrice(ridersTwo, hoursTwo);
alert(confirmationTwo);

var ridersThree = 8
var hoursThree = 5
var confirmationThree = groupBooking("brIAN", ridersThree, hoursThree);
var priceThree = calculatePrice(ridersThree, hoursThree);
alert(confirmationThree);

var dailyTotal = (priceOne + priceTwo + priceThree);
alert("The total for today is $" + dailyTotal);

