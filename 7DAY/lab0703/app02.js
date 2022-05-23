// const element1 = document.querySelector("p");
// const myObj1 = {
//     register(){
//         element1.addEventListener("click", function(evt){
//             this.printData();
//         });
//     },
//     printData() {
//         console.log("clicked");
//     }
// }
// myObj.register();



const element2 = document.querySelector("p");
const myObj2 = {
    register(){
        element2.addEventListener("click", (evt) => {
            this.printData();
        });
    },
    printData() {
        console.log("clicked");
    }
}
myObj2.register();