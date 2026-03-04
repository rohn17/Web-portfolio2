// Function to add new benefit

function addBenefit() {

    var input = document.getElementById("benefitInput");
    var value = input.value;

    if (value == "") {
        alert("Please enter something");
        return;
    }

    var list = document.getElementById("benefitList");

    var li = document.createElement("li");
    li.innerText = value;

    // create delete button
    var btn = document.createElement("button");
    btn.innerText = " Delete";

    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);

    list.appendChild(li);

    input.value = "";
}


// Contact form alert

function showMessage() {
    alert("Form submitted successfully!");
}


// Show current date and time

function showTime() {

    var date = new Date();

    document.getElementById("time").innerHTML =
        "Current Date & Time: " + date.toLocaleString();
}

setInterval(showTime, 1000);