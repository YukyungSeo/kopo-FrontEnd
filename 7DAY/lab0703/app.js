/**
 * arrow function을 확인해본다.
 * arrow function으로 사용할 API가 setTimeout이라
 * web browser 띄우고 javascript를 실행한다.
 */

// setTimeout(function(){
//     console.log("hello");
// }, 1000);

// // arrow function으로 나타내면
// setTimeout(()=>{
//     console.log("hello2");
// }, 2000);








// this context of arrow function
const myObj1 = {
    runTimeout(){
        setTimeout(function(){
            // 지금 이 영역에서의 this는 window
            console.log(this === window)
        });
    }
}
myObj1.runTimeout();



// this context of arrow function
const myObj2 = {
    runTimeout(){
        setTimeout(function(){
            // 현재의 영역에서 this는 window를 가리키고 있기 때문에
            // window.printData()라는 function이 존재하지 않는다.
            this.printData();
        }.bind(this), 1000);
    },
    printData() {
        console.log("print data 출력");
    }
}
myObj2.runTimeout();

// bind()함수 말고 arrow function을 적용해보자.
// bind()를 생략한 상태에서도 this가 context를 유지하고 있다고 생각하면 된다.
// arrow function은 context(실행영역)를 유지해주기 때문이다.
const myObj3 = {
    runTimeout(){
        setTimeout(() => { //실행 영역이 변하지 않음
            console.log(this === window);
            this.printData();
        }, 1000);
    },
    printData() {
        console.log("print data 출력");
    }
}
myObj3.runTimeout();