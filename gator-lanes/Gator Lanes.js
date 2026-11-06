var gameCost = 6;
var shoeRentalCost = 4;
var gameCutoff = 3;
var gameDiscount = 5;

function priceCalc(games, isMember) {
    var rentalFee = shoeRentalCost;
    var discount = 0;

    if (isMember === true) {
        rentalFee = 0;
    }

    if (games >= gameCutoff) {
        discount = gameDiscount;
    }

    var total = (games * gameCost) + rentalFee - discount;

    return total;
}

function customerCheckout(name, games, member) {
    var fullName = name.toUpperCase();
    var membership = member.toLowerCase();
    var isMember = false;

    if (membership === "yes") {
        isMember = true;
    }

    var totalCost = priceCalc(games, isMember);

    var checkout = "Name - " + fullName +
                   "\nGames - " + games +
                   "\nTotal - $" + totalCost;

    return checkout;
}


var nameOne = prompt("Customer 1: Enter your name");
var gamesOne = Number(prompt("Customer 1: How many games?"));
var memberOne = prompt("Customer 1: Are you a member? Yes/No");

var checkoutOne = customerCheckout(nameOne, gamesOne, memberOne);
alert(checkoutOne);


var nameTwo = prompt("Customer 2: Enter your name");
var gamesTwo = Number(prompt("Customer 2: How many games?"));
var memberTwo = prompt("Customer 2: Are you a member? Yes/No");

var checkoutTwo = customerCheckout(nameTwo, gamesTwo, memberTwo);
alert(checkoutTwo);


var nameThree = prompt("Customer 3: Enter your name");
var gamesThree = Number(prompt("Customer 3: How many games?"));
var memberThree = prompt("Customer 3: Are you a member? Yes/No");

var checkoutThree = customerCheckout(nameThree, gamesThree, memberThree);
alert(checkoutThree);

