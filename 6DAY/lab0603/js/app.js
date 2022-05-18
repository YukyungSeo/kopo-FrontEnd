// arrow function(화살표 함수)
// 브라우저에서 테스트 할 수 있는 API이다.
setTimeout(function(){
    console.log("화살표 함수입니다.")
}, 1000);

// 이렇게 작성을 하면 function을 만들어야하기 때문에 좀더 간단하게 작성해보자
setTimeout(()=>{
    console.log("화살표 함수입니다.")
}, 1000);


const simpleFunc = function(){
    console.log("simple function");
}
simpleFunc();

// 화살표 함수는 anonymous(이름없는) 함수이다.
// 아규먼트가 없는 화살표 함수
const simpleFunc2 = () => console.log("simple2");
simpleFunc2();


// 아규먼트가 있는 화살표 함수
const add = (a, b) => a + b;
console.log(add(1, 2));
// const add1 = function(a, b) {
//     return a + b;
// }


// default parameter(디폴트 파라미터)
// es6 추가
function showMessage1(message, from="IU") {
    console.log(`${message} by ${from}`);
};
showMessage1('안녕~~', '정우성');
showMessage1('안녕~~');

// es6 이전
function showMessage2(message, from) {
    if(from === undefined) {
        from = "IU";
    }
    console.log(`${message} by ${from}`);
};
showMessage2('안녕~~', '정우성');
showMessage2('안녕~~');

// if문
/**
 * if(조건식){
 *      조건식이 참일 경우 실행되는 부분
 * }
 * 조건식이 거짓일 경우 실행되는 부분
 * 
 * if(조건식){
 *      조건식이 참일 경우 실행되는 부분
 * } else {
 *      조건식이 거짓일 경우 실행되는 부분
 * }
 * 
 * if(조건식){
 *      조건식1이 참일 경우 실행되는 부분
 * } else if (조건식2) {
 *      조건식2가 참일 경우 실행되는 부분
 * } else {
 *      조건식1, 조건식2 모두 거짓일 경우 실행되는 부분
 * }
 */

/**
 * 반복문 for문
 * 기준값이 존재하고, 일정한 증감값이 있을 경우 사용한다.
 * for(let i=length; j>0; j--){}
 * for(let i=0; i<length; i++){
 *      i=0 부터 length보다 하나 작을 때가지 반복
 * }
 */

/**
 * 반복문 while()
 * 
 * while(조건식){
 *      조건식이 참일 경우에만 이 문장을 반복한다.
 * }
 */

/**
 * 반복문 do ~ while()
 * do{
 *      최소한 한번은 이 부분은 실행된다.
 *      그리고 조건식을 만족하게 되면 계속 반복실행
 * }while(조건식)
 */

/**
 * Rest Parameter
 * 표현 : ...args
 * Rest 파라미터는 배열형태로 값을 전달한다. 
 */
function printArr(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }   
};
printArr('javascript', 'java', 'spring');

// for ... of 값이 있으면 쭉 뽑아내라
function printArr2(...args){
    for (const arg of args) {
        console.log(arg);
    }
};
printArr('javascript', 'java', 'spring');


