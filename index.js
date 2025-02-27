const buttonsLayout = [
    "INIT REF", "RTE", "DEP ARR", "ALTN", "VNAV", "EXEC",
    "FIX", "LEGS", "HOLD", "FMC COMM", "PROG", "",
    "MENU", "NAV RAD", "", "", "", "",
    "PREV PAGE", "NEXT PAGE", "A", "B", "C", "D",
    "1", "2", "3", "E", "F", "G",
    "4", "5", "6", "H", "I", "J",
    "7", "8", "9", "K", "L", "M",
    "CLR", "0", "SP", "DEL", "N", "O"
];

const buttonsContainer = document.getElementById("fmc-buttons");

buttonsLayout.forEach(label => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = label;
    btn.onclick = () => handleButtonPress(label);
    buttonsContainer.appendChild(btn);
});

function handleButtonPress(label) {
    const output = document.getElementById("fmc-output");
    if (label === "CLR") {
        output.innerText = "";
    } else {
        output.innerText += label + " ";
    }
}
