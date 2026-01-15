const trigger = document.querySelector("#modeBtn");
const target = document.querySelector(".toTriggerLightMode");


function changeMode() {

    target.classList.toggle("lightMode");

    if(target.classList.contains("lightMode")) {
        trigger.textContent = "Dark Mode";
    } else {
        trigger.textContent = "Light Mode";
    }
}


trigger.addEventListener("click", changeMode);