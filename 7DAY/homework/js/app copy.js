// id가 1개씩 들어갈 수 있도록 저장하고 있는 수
let idnum = 0;

document.querySelector("#add-work").addEventListener("click", (evn) => {
    // 요소 가져옴
    const container = document.querySelector("#work-list");
    const inputtag = document.querySelector("#input-work");
    
    // 새로운 div 생성
    const element = document.createElement("div");

    // 새로운 div에 값(input에 입력된 value) 넣기
    element.setAttribute("id", `div${idnum}`);
    element.setAttribute("class", "work")
    element.innerText = inputtag.value;

    // 휴지통 아이콘 추가
    const trashicon = document.createElement("i");
    trashicon.setAttribute("class", "fa-solid fa-trash-can");
    element.appendChild(trashicon);

    // 다음 id를 위해 증가
    idnum++;

    // 새로운 div 추가
    container.appendChild(element);

    // input 내에 있는 값 삭제
    inputtag.value = "";
});

