let counterElement = document.getElementById("value");

function onIncrease() {
    let content = counterElement.textContent;
    let updatedCounter = parseInt(content) + 1;
    counterElement.textContent = updatedCounter;
    if (updatedCounter > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounter < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }



}

function onReset() {
    counterElement.textContent = 0;
    counterElement.style.color = "black";
}

function onDecrease() {
    let content = counterElement.textContent;
    let updatedCounter = parseInt(content) - 1;
    counterElement.textContent = updatedCounter;
    if (updatedCounter > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounter < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }

}
