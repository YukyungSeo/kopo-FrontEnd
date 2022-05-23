// Arrow
// function My(커피) {
//   this.coffee = coffee;
//   this.printCoffee = () => {
//     console.log(`내가 좋아하는 커피는? ${this.coffee}이다.`);
//   };
// }

// .bind 사용해보기
function My(커피) {
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`내가 좋아하는 커피는? ${this.coffee}이다.`);
    };
    this.printCoffee = this.printCoffee.bind(this);
  }
  
  function Your(커피) {
    this.coffee = coffee;
    this.printCoffee = function () {
      console.log(`너가 좋아하는 커피는? ${this.coffee}이다.`);
    };
  }
  
  // 출력 해보기
  const my = new My('아메리카노');
  const your = new Your('라떼');
  my.printCoffee();
  your.printCoffee();
  
  your.printCoffee = my.printCoffee;
  your.printCoffee();
  my.printCoffee();
  