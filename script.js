const titleContainer = document.querySelectorAll(".start, .input");
const titleBtn = document.querySelector(".info")
const questionContainer = document.querySelector(".question_container");
const question = document.querySelector('.question_logo');
const contents = document.querySelector('#question');
const type = document.querySelector("#type");
const yBtn = document.querySelector(".answer-1_btn");
const nBtn = document.querySelector('.answer-2_btn');
const explain = document.querySelector(".result_show");
const image = document.querySelector(".result_img");
const resultContainer = document.querySelector(".end_question");
const progress = document.querySelector('.progress-bar');

const q = { // question Object 
    1 : {"title" : "질문 1", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    2 : {"title" : "질문 2", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    3 : {"title" : "질문 3", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    4 : {"title" : "질문 4", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    5 : {"title" : "질문 5", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    6 : {"title" : "질문 6", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    7 : {"title" : "질문 7", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    8 : {"title" : "질문 8", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    9 : {"title" : "질문 9", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    10 : {"title" : "질문 10", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    11 : {"title" : "질문 11", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    12 : {"title" : "질문 12", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"},
    13 : {"title" : "질문 13", "contents" : "a", "type" : "char", "Y" : "네", "N" : "아니오"}
}

const result = { // 최종적으로 gender 추가해야 함
    "upper": {"pos": "상", "explain": "#", "img": "#"},
    "middle": {"pos": "중", "explain": "#", "img": "#"},
    "lower": {"pos": "하", "explain": "#", "img": "#"}
}

let num = 1; // 질문 횟수 카운트
let answer = ''; // 결과 저장 후 출력할 변수

function start() {
    if (info.name.value == "") {
        alert("이름을 작성해주세요.")
        return
    } else if (info.gender[0].checked == false && info.gender[1].checked == false) {
        alert("성별을 선택해주세요.");
        return
    } else {
        titleContainer[0].style.display = 'none';
        titleContainer[1].style.display = 'none';
        questionContainer.style.display = 'block';
        updateQuestion();
    }
}

yBtn.addEventListener('click', ()=>{
    
    updateQuestion()
});

nBtn.addEventListener('click', ()=>{
    updateQuestion();
});

function updateQuestion() { // Example 1~5 하, 6~10 중, 11~13 상
    if (num == 13) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = "block";
        

    } else {
        progress.setAttribute('style', `width : calc(100/13*${num}%)`);
        question.innerHTML = q[num].title;
        contents.innerHTML = q[num].contents;
        num++;
    }
}

function prevent_multi_check(n) {
    let obj = document.getElementsByName("gender");
    for (let i=0; i < obj.length; i++) {
        if (obj[i] != n) {
            obj[i].checked = false;
        }
    }
}

function open_result() {
    document.getElementsByClassName("end_quesion")[0].style.display = 'none'
    document.getElementsByClassName("result_container")[0].style.display = 'block'
}