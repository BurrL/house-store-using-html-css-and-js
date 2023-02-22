let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');    
}
// favourite featured part for index page  
        // select icon
        let heart = document.querySelectorAll(".featured .box-container .box .content .price i");
        // select the icon of favourit page
        let otherPage = document.querySelector("header .icons a.fa-heart");
        // notification of number of favourites
        let notification = document.querySelector("header .icons a.fa-heart .notify");
        // select the card
        let cards = document.querySelector(".featured .box-container .box ");
        let myArrayI = Array.from(heart);
        let myArrayBox = Array.from(cards);
        myArrayI.forEach(function(w){
            w.onclick= function () {
             // add or remove class favourit to the icon
                w.classList.toggle("favourit");
                // save the classlist of card to sessionstorge 
                window.sessionStorage.setItem("cardNum", (w.parentElement).parentElement.parentElement.classList)
            }
            
        })
        heart.onclick = function () {
            heart.classList.toggle("favourit");
            // save the classlist of card to sessionStorage
            window.sessionStorage.setItem("cardNum", cards.classList);
            // count the favourites number
            let favourites = Array.from(document.querySelectorAll(".featured .box-container .box .content .price i.favourit"));
            notification.innerHTML = favourites.length;
            console.log(favourites);
            // coloring the icon of favourit page
            if (notification.innerHTML >= 1) {
                otherPage.style = "color:red;";
            } else if (notification.innerHTML == 0) {
                otherPage.style = "color:#0a497e"
            }
        }

         

