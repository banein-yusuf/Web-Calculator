import { add, subtract, multiply, divide, square, cube, sqrt, cbrt } from "./calculator.js";
let form = document.querySelector("#calculatorform");

let addb = document.querySelector("#addbutton");
addb.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let v2str = document.querySelector("#n2").value;
    let re = document.querySelector("#resulte");
    if (v1str === "" || v2str === "") {
        re.innerHTML = "⚠️ Please enter both numbers.";
    } else {
        let v1 = Number(v1str);
        let v2 = Number(v2str);
        re.innerHTML = "The Result: " + add(v1, v2);
        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";

    }
});

let subtractb = document.querySelector("#subbutton");
subtractb.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let v2str = document.querySelector("#n2").value;
    let re = document.querySelector("#resulte");
    if (v1str === "" || v2str === "") {
        re.innerHTML = "⚠️ Please enter both numbers.";
    } else {
        let v1 = Number(v1str);
        let v2 = Number(v2str);
        re.innerHTML = "The Result: " + subtract(v1, v2);
        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";

    }
});

let mul = document.querySelector("#mulbutton");
mul.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let v2str = document.querySelector("#n2").value;
    let re = document.querySelector("#resulte");
    if (v1str === "" || v2str === "") {
        re.innerHTML = "⚠️ Please enter both numbers.";
    } else {
        let v1 = Number(v1str);
        let v2 = Number(v2str);
        re.innerHTML = "The Result: " + multiply(v1, v2);
        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";

    }
});

let div = document.querySelector("#divbutton");
div.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let v2str = document.querySelector("#n2").value;
    let re = document.querySelector("#resulte");
    if (v1str === "" || v2str === "") {
        re.innerHTML = "⚠️ Please enter both numbers.";
    } else {
        let v1 = Number(v1str);
        let v2 = Number(v2str);
        if (v2 === 0) {
            re.innerHTML = "⚠️ Cannot divide by zero.";
        } else {
            re.innerHTML = "The Result: " + divide(v1, v2);
            document.querySelector("#n1").value = "";
            document.querySelector("#n2").value = "";

        }
    }
});

let squareBtn = document.querySelector("#squarebutton");
squareBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let re = document.querySelector("#resulte");
    if (v1str === "") {
        re.innerHTML = "⚠️ Please enter a number in the first field.";
    } else {
        let v1 = Number(v1str);
        re.innerHTML = "The Result: " + square(v1);
        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";

    }
});

let cubeBtn = document.querySelector("#cubebutton");
cubeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let re = document.querySelector("#resulte");
    if (v1str === "") {
        re.innerHTML = "⚠️ Please enter a number in the first field.";
    } else {
        let v1 = Number(v1str);
        re.innerHTML = "The Result: " + cube(v1);
        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";

    }
});

let sqrtBtn = document.querySelector("#sqrtbutton");
sqrtBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let re = document.querySelector("#resulte");
    if (v1str === "") {
        re.innerHTML = "⚠️ Please enter a number in the first field.";
    } else {
        let v1 = Number(v1str);
        if (v1 < 0) {
            re.innerHTML = "⚠️ Cannot take square root of a negative number.";
        } else {
            re.innerHTML = "The Result: " + sqrt(v1);
            document.querySelector("#n1").value = "";
            document.querySelector("#n2").value = "";

        }
    }
});

let cbrtBtn = document.querySelector("#cbrtbutton");
cbrtBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let v1str = document.querySelector("#n1").value;
    let re = document.querySelector("#resulte");
    if (v1str === "") {
        re.innerHTML = "⚠️ Please enter a number in the first field.";
    } else {
        let v1 = Number(v1str);
        re.innerHTML = "The Result: " + cbrt(v1);
        document.querySelector("#n1").value = "";
        document.querySelector("#n2").value = "";

    }
});
