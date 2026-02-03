const msgs = [
    "t'es surrr",
    "sara prk tu insiste noo",
    "putain tes tute toi",
    "tamelhantiww dila3nayam oui",
    "saronnnnnnnnnn dit oui",
    "j vais te facher si non",
    "ad echhagh",
    "mo9arooooo n sarsora apuis oui",
    "zrigh themeldiyi mais dzkara",
    "mais nk hemlaghkm achogher iyitkhedmed aka 🩷"
]

let msgIndex = 0;

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleNoClick() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    noButton.textContent = msgs[msgIndex];
    msgIndex = (msgIndex + 1) % msgs.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}