
// var hoisting test(var 호이스팅)
// 호이스팅 : 어디에 선언했던지 간에 최상위로 끌어올려서 실행한다.
// console.log(testVar);  // undifined : 변수는 존재하나 값이 없다의 의미

// var로 선언되어 있지 않아도
// 변수명 = 값 이렇게 할당이 되면
// var testVar = 2;로 할당한 것처럼 동작한다.
// testVar = 2;
// var testVar;
// console.log(testVar); // 2

/**
 * var testVar2
 * testVar2 = 2;
 * console.log(testVar2)
 */


// 오류 발생
// 아래서 선언이 되어 있지 않고,
// 위에서 호출할 경우
// conlog.log(testVar3);
// testVar3 = 10;

// undefined
// 선언은 되었으나 값은 출력한 후에
// 셋팅이 되기 때문에 undefined
// console.log(testVar4);
// testVar4 = 10;
// var testVar4;


// local variable
// {} 안에서만 사용이 가능하다.
// {
//     let age = 20;
//     console.log("inner: "+age);
// }
// console.log("outer: "+age);

// 문제가 많이 생길 수 있음!!!!
console.log(age2);
{
    age2 = 30;
    var age2; // 영역에 관계 없음!
}
console.log(age2); // 30

사탕 = {
    타입: "막대",
    가격: 500
}
console.log(사탕.타입);