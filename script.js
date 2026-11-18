let seats = document.getElementById("seats");

let data = "";
let i = 1;

for (i; i <= 30; i++) {

    if (i == 1 || i == 6 || i == 11 || i == 16 || i == 21 || i == 26) {
        data += "<tr>";
    }
    data += '<td><button type="button" class="avseat">' + i + '</button></td>';
    if (i == 5 || i == 10 || i == 15 || i == 20 || i == 25 || i == 30) {
        data += "</tr>";
    }
}

seats.innerHTML = data;
let countl = document.getElementById("count");
let toltel = document.getElementById("total");
let avail = document.getElementById("avail");
let book = document.getElementById("book")

let confirm = document.getElementById("confirm");
let reset = document.getElementById("reset");
let theme = document.getElementById("theme");
let msg = document.getElementById("msg");

let seat = document.getElementsByClassName("avseat");
let count =0
let tol =150
let booked = 0;

avail.innerHTML = 30;
book.innerHTML = 0;

for (let j =0; j <seat.length; j++) {

    seat[j].addEventListener("click", function() {

        msg.innerHTML = "";
        if (seat[j].style.backgroundColor == "darkorange") {
            seat[j].style.backgroundColor = "green";
            count--
        }
        else if (count == 5) {
            msg.innerHTML = "Maximum 5 seats allowed";
        }
        else {
            seat[j].style.backgroundColor = "darkorange";
            count++;
        }

        countl.innerHTML = count;
        toltel.innerHTML = tol * count;
        avail.innerHTML = 30 -booked-count;

    });
}    

let doom =document.getElementById("movie1")
let ram =document.getElementById("movie2")
let scen =document.getElementById("movie3")

let div1 =document.getElementById("card1")
let div2 =document.getElementById("card2")
let div3 =document.getElementById("card3")


let name =document.getElementById("movieD")
let poster =document.getElementById("poster") 

doom.addEventListener("click",function(event){
    name.innerHTML = ("Avengers DoomsDay")
    poster.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJrlOXkIoUny_WsKZzYWh6yrLk90FyUhM0n6tX6IpXg&s=10"
    div1.style.borderColor = "darkorange"
    div2.style.borderColor = ""
    div3.style.borderColor = "" 
})

ram.addEventListener("click",function(event){
    name.innerHTML = "Ramayana"
    poster.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3Ar_CztsqacA8PMpknT0pICkbhtlKZBIAESq87291g&s=10"
    div2.style.borderColor = "darkorange";
    div1.style.borderColor = "" 
    div3.style.borderColor = "" 

})

scen.addEventListener("click",function(event){
    name.innerHTML = ("SCENE")
    poster.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk5Vl9CllxH1R6h_w9x4graW2XnqLVq4qZHWlcWExZA&s=10"
    div3.style.borderColor = "darkorange";
    div1.style.borderColor = "" 
    div2.style.borderColor = "" 
})

confirm.addEventListener("click", function() {
    if (count == 0) {
        msg.innerHTML = "Please select your seats";
    }
    else {
        booked = booked + count;
               for (let j = 0; j < seat.length; j++) {

            if (seat[j].style.backgroundColor == "darkorange") {
                seat[j].style.backgroundColor = "red";
            }
        }
        book.innerHTML = booked;
        avail.innerHTML = 30 - booked;
        msg.innerHTML = "Booking Successful!";
        count = 0;
        countl.innerHTML = 0;
        toltel.innerHTML = 0;
    }
})
reset.addEventListener("click", function() {

    for (let j = 0; j < seat.length; j++) {

        if (seat[j].style.backgroundColor == "darkorange" || seat[j].style.backgroundColor == "red") {
            seat[j].style.backgroundColor = "green";
        }
    }
    count = 0;
    countl.innerHTML = 0;
    toltel.innerHTML = 0;
    avail.innerHTML = 30 - booked;
    msg.innerHTML = "";
})

theme.addEventListener("click",function(){
    if(document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor ="white"
    }else{
        document.body.style.backgroundColor = "black"
    }
})