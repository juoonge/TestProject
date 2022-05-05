const titleContainer = document.querySelector("#")
const questionContainer = document.querySelector("#")
const char = document.querySelector("#")
const yBtn = document.querySelector("#");
const nBtn = document.querySelector('#');
const explain = document.querySelector("#")
const image = document.querySelector("#")
const resultContainer = document.querySelector("#")


const q = { // question Object 
    1 : {"title" : "질문 1", "type" : "char", "Y" : "네", "N" : "아니오"},
    2 : {"title" : "질문 2", "type" : "char", "Y" : "네", "N" : "아니오"},
    3 : {"title" : "질문 3", "type" : "char", "Y" : "네", "N" : "아니오"},
    4 : {"title" : "질문 4", "type" : "char", "Y" : "네", "N" : "아니오"},
    5 : {"title" : "질문 5", "type" : "char", "Y" : "네", "N" : "아니오"},
    6 : {"title" : "질문 6", "type" : "char", "Y" : "네", "N" : "아니오"},
    7 : {"title" : "질문 7", "type" : "char", "Y" : "네", "N" : "아니오"},
    8 : {"title" : "질문 8", "type" : "char", "Y" : "네", "N" : "아니오"},
    9 : {"title" : "질문 9", "type" : "char", "Y" : "네", "N" : "아니오"},
    10 : {"title" : "질문 10", "type" : "char", "Y" : "네", "N" : "아니오"},
    11 : {"title" : "질문 11", "type" : "char", "Y" : "네", "N" : "아니오"},
    12 : {"title" : "질문 12", "type" : "char", "Y" : "네", "N" : "아니오"},
    13 : {"title" : "질문 13", "type" : "char", "Y" : "네", "N" : "아니오"}
}

const result = { // 최종적으로 gender 추가해야 함
    "upper": {"pos": "상", "explain": "#", "img": "#"},
    "middle": {"pos": "중", "explain": "#", "img": "#"},
    "lower": {"pos": "하", "explain": "#", "img": "#"}
}

let num = 1; // 질문 횟수 카운트
let answer = ''; // 결과 저장 후 출력할 변수

titleBtn.addEventListener('click', ()=>{
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
});

yBtn.addEventListener('click', ()=>{

});

nBtn.addEventListener('click', ()=>{
    updateQuestion();
});

function updateQuestion() { // Example 1~5 하, 6~10 중, 11~13 상
    if (num == 13) {
        questionContainer.style.display = "none";
        resultContainer.style.display = "block";
        

    } else {

    }
}