function getRandomNum(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function shakeCardcase(){
    // 0 : space, 1 : heart, 2 : diamond, 3 : clova
    // let baseDeck = ['SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'ST', 'SJ', 'SQ', 'SK',
    //             'HA', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'HT', 'HJ', 'HQ', 'HK',
    //             'DA', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'DT', 'DJ', 'DQ', 'DK',
    //             'CA', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'CT', 'CJ', 'CQ', 'CK'];
    
    let baseDeck = [];
    for (let i = 0; i < 52; i++) {
        baseDeck.push(i);
    }

    let cardcase = [];
    while (baseDeck.length > 0) {
        cardcase.push(baseDeck.splice(getRandomNum(baseDeck.length), 1)[0]);
    }
    
    return cardcase;
}
// console.log(shakeCardcase());

function insertCardcaseHTML(deck){
    let shapeList = ["spades", "hearts", "diamonds","clubs"];
    let str = "";

    deck.forEach(card => {
        let shape = Math.floor(card / 13);
        let number = card % 13;
        str += `<div class="card" `;
        str += `id="${shapeList[shape]}${number}" `;
        str += `style="background-image: url(./img/`;
        if (number == 0) {
            str += `king`;
        } else if (number == 1) {
            str += `ace`;
        } else if (number == 11) {
            str += `jack`;
        } else if (number == 12) {
            str += `queen`;
        } else {
            str += `${number}`;
        }
        str += `_of_${shapeList[shape]}.png); transition-delay: 0.5s; transition-duration: 0.5s; transition: all 1s; transform: rotateY(-1turn);"></div>\n`;
    });
    document.querySelector("#deck").innerHTML = str;

    setTimeout(function () {
        document.querySelector(".card").classList.add("animation-fade");
    }, 30);
    
}

