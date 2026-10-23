var ticketNumber = 0;
var peopleAhead = 0;
var estimatedWait = 0;
var hairCutTime = 25;

function customerCheckIn() {
    var name = prompt("What is your first name?");
    var beginningOfName = name.slice(0 , 1);
    beginningOfName = beginningOfName.toUpperCase();
    var restOfName = name.slice(1);
    restOfName = restOfName.toLowerCase();
    var fullName = beginningOfName + restOfName;
    var ticketCode = name.slice(0, 3);
    ticketCode = ticketCode.toUpperCase();
    ticketNumber++;
    var fullTicketCode = ticketCode + ticketNumber
    peopleAhead++;
    estimatedWait += hairCutTime;
    alert("Name: " + fullName +
    "\nTicket Number: " + ticketNumber +
    "\nTicket Code: " + fullTicketCode +
    "\nPeople Ahead: " + peopleAhead +
    "\nEstimated Wait: " + estimatedWait + " minutes" ); 
    
}

customerCheckIn();
customerCheckIn();
customerCheckIn();