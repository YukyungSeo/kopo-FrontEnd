/**
 * 명명법
 * 
 * 카멜(camel) :소-대-대 ex) let coffeeType, makeCoffee(){}
 * 파스칼(pascal) : 대-대-소 ex) clss User, function Person(){}
 * lower(전체소문자) : 전체를 소문자로 ex) let, const 예약어, 키워드
 * upper(전체대문자) : 전체를 대문자로 ex) const PI = 3.14;
 *                                          const PI = Math.PI;
 */

/**
 * 데이터 타입 분류
 * 1) 기본타입(primitive type) : int , String, boolean, undifined, null, SystemS
 * 2) 참조타입(reference type) : Object, primitive type이 아닌 것
 *          
 * 기본타입을 제외한 모든 타입은 참조(객체) 타이니다.
 * 
 * pass by value
 * assign by value
 * immtable
 * 
 * pass by reference
 * assgin by reference
 * mutable
 *
 */

// 기본 타입
// let a = 10;
// let b = a;
// b = 20;
// console.log(a, b);

// 참조 타입 pass by reference
// let list = [1, 2, 3, 4, 5];
// let list2 = list;
// console.log("list=", list, "list2=", list2);
// list[2] = 100;
// console.log("list=", list, "list2=", list2);

/**
 * undefined 값이 나오는 경우
 * : 존재하는데, 값이 없을경우
 *  
 * - 값을 가직 할당받지 못한 변수의 값
 * - 없는 객체의 프로퍼티를 읽으려고 시도했을 대의 값
 * - 없는 배열의 요소를 읽으려고 시도했을 때의 값
 * - 아무것도 반환하지 않는 함수가 반환하는 값
 * - 함수를 호출했을 때 전달받지 못한 인수의 값
 *  
 */
// console.log("하이"); // 브라우저 콘솔에서 실행하면 리턴값이 없어서 undefined 나옴

/**
 * 리터럴 객체의 프로퍼티 값 확인하기
 */
// const coffee = {
//     type:"Americano",
//     price: 4000
// };

// console.log(coffee.price);
// console.log(coffee.sirup);
// coffee.sirup = "설탕많이";
// console.log(coffee.sirup);

// delete coffee.price;
// console.log(coffee);

// console.log("price" in coffee);
// console.log("type" in coffee);
// coffee 객체에는 없는 속성이나 js 최상위 객체인 
// object에 있는 속성도 사용할 수 있기 때문에 true가 나온다.
// js 모든 객체는 Object를 상속받는다.
// console.log("toString" in coffee);
// console.log(coffee.toString());

// 템플릿 리터럴
// ``(역따옴표)로 묶은 문자열을 말한다.
// let strTemplate = `오늘도 벌서 3시간 밖에 안남았어요`;
// console.log(strTemplate);
// 줄바꿈 표시 해보기
// let strTemplate2 = `오늘도 벌서 3시간\n밖에 안남았어요`;
// console.log(strTemplate2);

// 보간 표현식
/**
 * 템플릿 리터럴 안에 플레이스 홀더를 넣을 수 잇다.
 * 플레이스 홀더는 ${...}로 표시가 된다.
 * 플레이스 홀더 : 실제 값을 나중에 넣기 위해 확보한 장소
 * ${}를 활용하여 문자열 안에 변수나 표현식을 결과값을 삽입할 수 있다.
 */
// let a=2, b=3;
// console.log(`${a} + ${b} = ${a+b}`);
// console.log(a, "+", b, "=", (a+b));
// let now = new Date();
// console.log(`오늘은 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`)

// 문자열 리터럴
// let str = String.raw`오늘은 집에가면\n잠을 잘 자겠죠?`;
// let str2 = String.raw

// const 사용하는 방법
// 상수 값을 할당
// 변경 금지
const people = {
    userName:"손흥민",
    age: 30
};
people.userName="IU";
// const로 선언했는데 바뀌는 이유는 
// 다시 할당만 안되고 안에 내용을 수정하는 것은 된다.
console.log(people);
people = {
    userName2:"블랙핑크",
    age2: 22
};
console.log(people);