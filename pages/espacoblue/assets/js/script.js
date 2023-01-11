
let isMapOnTop = false;
function mapSwitch() {
    let map = document.querySelector("#mapId");
    let card = document.querySelector("#cardId");
    let mapOver = document.querySelector("#mapOverId");
    if (isMapOnTop) {
        map.classList.add("topToBottomSwitch");
        map.classList.remove("bottomToTopSwitch");

        card.classList.add("bottomToTopSwitch");
        card.classList.remove("topToBottomSwitch");

        mapOver.style.animation = 'fadeIn .5s ease-in-out forwards';
    }else{
        
        map.classList.add("bottomToTopSwitch");
        map.classList.remove("topToBottomSwitch");

        card.classList.add("topToBottomSwitch");
        card.classList.remove("bottomToTopSwitch");        
        mapOver.style.animation = 'fadeOut .5s ease-in-out forwards';
    }
    isMapOnTop = !isMapOnTop;
}


