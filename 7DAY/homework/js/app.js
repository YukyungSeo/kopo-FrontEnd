// id가 1개씩 들어갈 수 있도록 저장하고 있는 수
let idnum = 0;

document.querySelector("#add-work").addEventListener("click", (evn) => {
    // 요소 가져옴
    const container = document.querySelector("#work-list");
    const inputtag = document.querySelector("#input-work");
    
    // div, p, i를 입력하여 넣음
    container.innerHTML += `<div class="workset" id="work${idnum}"><p><i class="fa-solid fa-check hello"></i> ` + inputtag.value + `</p><i class="fa-solid fa-trash-can" id="i${idnum}" onclick=deleteWork(${idnum})></i></div>`

    // 다음 id를 위해 증가
    idnum++;

    // input 내에 있는 값 삭제
    inputtag.value = "";
});


document.querySelector("#clear").addEventListener("click", (e) => {
    document.querySelector("#work-list").innerHTML = "";
});


function deleteWork(value) {
    const element = document.querySelector(`#work${value}`);
    element.parentNode.removeChild(element);
}

