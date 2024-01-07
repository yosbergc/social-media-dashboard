let checkbox = document.querySelector('#dark-mode');
let main = document.querySelector('main');
let text = document.querySelector('*');
let cardUp = document.querySelectorAll('.social-follower');
let cardOverview = document.querySelectorAll('.overview-single');
let textOverview = document.querySelectorAll('.word-count');
let infoP = document.querySelectorAll('.info p');
let headerText = document.querySelector('header .info span');
let users = document.querySelectorAll('.social-container p');
checkbox.addEventListener('input', () => {
    if (checkbox.checked) {
        main.style.backgroundColor = "var(--bg)";
        text.style.color = "white";
        headerText.style.color = "var(--text)";
        cardUp.forEach((element) => element.style.backgroundColor = "var(--card-oscura)");
        cardOverview.forEach((element) => element.style.backgroundColor = "var(--card-oscura)");
        textOverview.forEach((element) => element.style.color = "var(--text)");
        infoP.forEach((element) => element.style.color = "var(--text)");
        users.forEach((element) => element.style.color = "var(--text)");

    } else {
        main.style.backgroundColor = "";
        text.style.color = "";
        headerText.style.color = "var(--gris-claro)";
        cardUp.forEach((element) => element.style.backgroundColor = "var(--card-bg)");
        cardOverview.forEach((element) => element.style.backgroundColor = "var(--card-bg)");
        textOverview.forEach((element) => element.style.color = "");
        infoP.forEach((element) => element.style.color = "var(--gris-claro)");
        users.forEach((element) => element.style.color = "var(--gris-claro)");
    }
})