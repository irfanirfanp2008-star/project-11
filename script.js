let seats = document.getElementById("seats");

let data = "";

for (let i = 1; i <= 30; i++) {

    if (i == 1 || i == 6 || i == 11 || i == 16 || i == 21 || i == 26) {
        data += "<tr>";
    }

    if (i){
        data += '<td><button class="avseat">' + i + '</button></td>';
    }

    if (i == 5 || i == 10 || i == 15 || i == 20 || i == 25 || i == 30) {
        data += "</tr>";
    }
}

