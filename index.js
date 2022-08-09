let homeScore= document.getElementById("home-score")
let guestScore= document.getElementById("guest-score")


let Count = 0;

function add1ForHome(){
    Count += 1;
    homeScore.innerText = Count
}

function add2ForHome(){
    Count += 2;
    homeScore.innerText = Count
}
function add3ForHome(){
    Count += 3;
    homeScore.innerText = Count
}

guestCount = 0;
function add1ForGuest(){
    guestCount += 1;
    guestScore.innerText = guestCount
}

function add2ForGuest(){
    guestCount += 2;
    guestScore.innerText = guestCount
}
function add3ForGuest(){
    guestCount += 3;
    guestScore.innerText = guestCount
}