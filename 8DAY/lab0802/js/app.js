/**
 * 생성자 생성
 * 아래 3가지 다 같은 형태
 */
// const crad = {};
// crad.suit = "하트";
// crad.rank = "A";
// console.log(crad);


// function Card2(suit, rank){
//     this.suit = suit;
//     this.rank = rank;
// }
// //          생성자
// const card2 = new Card2("클로버", "A");
// console.log(card2);


// class Card3{
//     constructor(suit, rank){
//         this.suit = suit;
//         this.rank = rank;
//     }
// }
// const card3 = new Card3("다이아몬드", "2");
// console.log(card3);



/**
 * typeof 연산자
 * - 타입을 확인해서 데이터 타입을 텍스트 형태로 알려준다.
 * - 객체 : object
 * - string, number, boolean, function
 * - symbol, undefined
 */
// let v1 = "밤먹고 졸리다.";
// console.log(typeof v1);
// let v2 = new Array();
// console.log(typeof v2);
// let v3 = new Date();
// console.log(typeof v3);
// let v4 = 20;
// console.log(typeof v4);

/**
 * instanceof 연산자
 * - 지정한 객체의 프로토타입 체인에 지정한 생성자의 프로토타입 객체가 포함되어 있는지 확인한다.
 * - 프로토타입 -> 인스턴스가 존재하느냐를 확인해주는 연산자
 * - 부모의 이름으로 자식을 받을 수 있다. (다향성 발생원리)
 */
// function Func() {};
// const obj = new Func();
// console.log(obj instanceof Func); //true
// console.log(obj instanceof Object); //true
// console.log(obj instanceof Date); //false
