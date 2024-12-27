let numberClicked = false;  // 숫자가 클릭되었는지 여부
let history = "";  // 연산 기록을 저장할 변수

function addToDisplay(char) {
    const result = document.querySelector('.result');

    // 화면에 0이 표시되고, 클릭한 값이 숫자라면 그 값으로 바꾼다.
    if (result.innerText == "0" && !isNaN(char)) {
        result.innerText = char;
    }
    // 화면에 0이 표시되고, 클릭한 값이 괄호일 때, 0이 아닌 괄호를 추가
    else if (result.innerText == "0" && (char === '(' || char === ')')) {
        result.innerText = char;
    }
    else {
        // 연산자가 연속해서 입력되지 않도록 처리, 괄호는 예외로 처리
        if (isNaN(char) && char !== '(' && char !== ')') {  // 연산자일 경우 (괄호 제외)
            if (!numberClicked) {
                return; // 이전에 연산자가 눌린 상태에서 연산자를 눌렀다면 아무것도 하지 않음
            }
        }
        // 괄호 뒤에 연산자가 올 수 있도록 처리
        if (char === '(' || char === ')') {
            result.innerText += char;
        } else {
            result.innerText += char;  // 숫자 또는 연산자, 괄호를 화면에 추가
        }
    }

    // 입력 후, 숫자 클릭 여부를 설정
    if (isNaN(char)) {  // 연산자일 경우
        if (char == '(' || char == ')') {
            numberClicked = true;  // 괄호가 입력되면 숫자가 눌린 상태로 처리
        } else {
            numberClicked = false; // 연산자는 숫자 상태를 해제
        }

    } else {
        numberClicked = true;  // 숫자가 눌린 경우
    }
}

function calculate() {
    const result = document.querySelector('.result');
    const expression = result.innerText;
    try {
        const calcResult = eval(expression);
        result.innerText = calcResult;
        // 연산 기록을 추가
        history = expression + " = " + calcResult;
        updateHistory();
    } catch (e) {
        result.innerText = "Error";  // 계산 오류 처리
    }
}

function updateHistory() {
    const historyDisplay = document.querySelector('.history');
    historyDisplay.innerText = history;  // 계산 기록을 화면에 표시
}

function clearDisplay() {
    document.querySelector('.result').innerText = "0"; // 화면 초기화
    document.querySelector('.history').innerText = ""; // 연산 기록 초기화
}

function clearLast() {
    const result = document.querySelector('.result');
    result.innerText = result.innerText.slice(0, -1) || "0"; // 마지막 문자 제거
}