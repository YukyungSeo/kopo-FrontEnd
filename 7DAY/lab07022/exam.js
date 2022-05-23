/**
 * People
 * this.name 프로퍼티를 갖게 된다.
 * this.age 프로퍼티를 갖게 된다.
 * this 상황에 따라 가리키는 범위가 달라짐
 *      지금 현재 실행되는 영역의 바로 바깥을 가리킨다.
 */

// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     show(){
//         console.log(`${name}은 ${age}살 입니다.`);
//     }
// }
//                 //생성자 호출
// const people = new People("서유경", 26);
// people.show();

/**
 * java는 클래스 기반 객체지향 언어
 * javascript는 프로토타입 기반 객체지향 언어
 */
// const user = {
//     name = "IU",
//     age = 20
// }

class Coffee {
    constructor(type, price){
        this.type = type;
        this.price = price;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}

// console.log(type, price);
const coffee = new Coffee("latte", 5500);
console.log(coffee.type);