

export default class Deck {

    constructor(){
        this.deck = createCrads();
    }

    shuffle(){
        let cardcase = [];
        while (this.deck.length > 0) {
            cardcase.push(this.deck.splice(getRandomNum(this.deck.length), 1)[0]);
        }
    
        this.deck = cardcase;
    }

    printDeck(){
        console.log(this.deck);
    }
}


function createCrads() {
    let deck = [];
    for(let i=0; i<52; i++){
        deck.push(i);
    }
    return deck;
}

function getRandomNum(maxNum) {
    // 0 ~ maxNum까지에서 random 값 반환
    return Math.floor(Math.random() * maxNum);
}