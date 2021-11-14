function button(value) {    
    let output = document.getElementById("output").innerHTML;

    if (value == "+" || value == "-" || value == "÷" || value == "×") {
        operator = value;
    } else if (output.includes("+") || output.includes("-") || 
    output.includes("÷") || output.includes("×")) {
        val2 = parseFloat(value);
    } else {
        val1 = parseFloat(value);
    };

    document.getElementById("output").innerHTML += value;
};

function clearCalc() {
    document.getElementById("output").innerHTML = "";
    val1 = 0;
    val2 = 0;
    operator = "";
};

function equals() {

    let solution = 0;
    switch(operator) {
        case "+": {
            sol = val1 + val2;
            break;
        }
        case "-": {
            sol = val1 - val2;
            break;
        }
        case "×": {
           sol = val1 * val2;
           break;
        }
        case "÷": {
            sol = val1 / val2;
            break;
        }
    }
    document.getElementById("output").innerHTML = sol;
    val1 = sol;
    val2 = 0;
    operator = "";


};

let val1 = 0;
let val2 = 0;
let operator = "";