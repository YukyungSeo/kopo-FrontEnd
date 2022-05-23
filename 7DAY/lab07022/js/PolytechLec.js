// class
/**
 * export default 해야 다른 곳에서 사용이 가능하다.
 */
export default class PolytechLec {
    constructor(props){
        this.lectures = ['javaScript', 'HTML5', 'CSS3'];
    }
    getLectures() {
        return this.lectures;
    }
    getCurrentHours(){
        return (new Date).getHours();
    }
    getTime() {
        return Date.now();
    }
}
