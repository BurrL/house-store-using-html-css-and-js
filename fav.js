// favourit part
let cardNum = window.sessionStorage.getItem("cardNum");
if (cardNum != null) {
    let cards = Array.from(document.querySelectorAll(".featured .box-container .box"));
    cards.forEach(function (card) {
        if (card.classList.value === cardNum) {
            card.style = "display:flex;"
        }
    })
}
