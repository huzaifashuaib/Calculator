function clearOutput() {
    document.getElementById("get").value = "";
}

function getValue(num) {
    document.getElementById("get").value += num
}
function result() {
    let equTo = document.getElementById("get").value;
    let output = eval(equTo)
    document.getElementById("get").value = output;
}