import PolytechLec from './PolytechLec.js';
import util from './utility.js';

const root = document.querySelector("#root");
root.innerHTML = `<p>Hello World</p>`;
util.log("내가 만든 임포트 익스포트 데이터");

const pt = new PolytechLec();
util.log(`current hour is ${pt.getCurrentHours()}`);
util.log(`lectures of Ploytech are ${pt.getLectures()}`);