var customerName = prompt("What is your name?");
var customerText = prompt("What text do you want on the back of your shirt?");
var shirtsOrdered = 50;
var heatPressLimit = 14;
var shirtsPerPack = 10;
var customerTextCut = customerText.slice(0, heatPressLimit);
var backTextUpperCase = customerTextCut.toUpperCase();
var firstChar = customerName.slice(0, 1);
var firstCharUpperCase = firstChar.toUpperCase();
var restOfName = customerName.slice(1);
var restOfNameLowerCase = restOfName.toLowerCase();
var fullName = firstCharUpperCase + restOfNameLowerCase;
var blankShirtsBin = (shirtsOrdered % shirtsPerPack);
var blankShirtsPacks = ((shirtsOrdered - blankShirtsBin) / shirtsPerPack);
var pricePerShirt = 9;
var oneTimeSetup = 15;
var totalCost = ((pricePerShirt * shirtsOrdered) + oneTimeSetup);
alert("Name: " + fullName +
"\nText: " + backTextUpperCase +
"\nPacks: " + blankShirtsPacks +
"\nSingles: " + blankShirtsBin +
"\nTotal Cost: $" + totalCost);