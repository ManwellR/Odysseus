var dogPerNight = 40
var catPerNight = 25
var nightsDiscount = 20
var nightCutoff = 7
var codeLength = 3
var groomingPrice = 15
var dayTotal = 0

function priceCalc(petType, nights, isGrooming) {
    var groomingFee = 0;
    var nightFee = catPerNight;
    var discount = 0;

    if (isGrooming === true) {
    groomingFee = groomingPrice
}
    
    if (petType === "dog") {
    nightFee = dogPerNight
    }
    
    if (nights >= nightCutoff){
    discount = nightsDiscount
    }
  
    var total = ((nights * nightFee) + groomingFee) - discount  
    
    return total
}


function customerBooking(name, type, nights, grooms) {
    var frontOfName = name.slice(0, 1);
    frontOfName = frontOfName.toUpperCase();
    var endOfName = name.slice(1);
    endOfName = endOfName.toLowerCase();
    var fullName = frontOfName + endOfName;
    var grooming = grooms.toLowerCase();
    var petType = type.toLowerCase();
    var frontOfCode = name.slice(0, codeLength);
    frontOfCode = frontOfCode.toUpperCase();
    var fullCode = frontOfCode + nights;
    var isGrooming = false

    if (grooming === "yes"){
    isGrooming = true
    }

    var totalCost = priceCalc(petType, nights, isGrooming);
    dayTotal+= totalCost;
    
    var message = "Name - " + fullName +
                 "\nBooking Code - " + fullCode +
                 "\nPrice - $" + totalCost;

    return message
}
    

var namesOne = prompt("What is your pet's name?");
var typeOne = prompt("Is your pet a Dog or Cat?");
var nightsOne = Number(prompt("How many nights are they staying?"));
var groomsOne = prompt("Is your pet getting groomed. Yes/No");

var bookingOne = customerBooking(namesOne, typeOne, nightsOne, groomsOne);
    alert(bookingOne);

var namesTwo = prompt("What is your pet's name?");
var typeTwo = prompt("Is your pet a Dog or Cat?");
var nightsTwo = Number(prompt("How many nights are they staying?"));
var groomsTwo = prompt("Is your pet getting groomed. Yes/No");

var bookingTwo = customerBooking(namesTwo, typeTwo, nightsTwo, groomsTwo);
    alert(bookingTwo);

var namesThree = prompt("What is your pet's name?");
var typeThree = prompt("Is your pet a Dog or Cat?");
var nightsThree = Number(prompt("How many nights are they staying?"));
var groomsThree = prompt("Is your pet getting groomed. Yes/No");

var bookingThree = customerBooking(namesThree, typeThree, nightsThree, groomsThree);
    alert(bookingThree);


alert("You have made $" + dayTotal);