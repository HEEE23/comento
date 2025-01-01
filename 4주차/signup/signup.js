// 1. 아이디 
// 사용자가 작성한 아이디들을 저장하는 배열
let userIds = [];

// 아이디 중복 확인 버튼에 이벤트 리스너 추가
document.getElementById("dup-btn").addEventListener("click", checkDupBtn);

// 아이디 중복 확인 버튼을 클릭했을 때 실행되는 함수
function checkDupBtn() {
    const userid = document.getElementById("userid").value;
    const useridRegex = /^[a-zA-Z0-9]{6,20}$/;  // 아이디는 6~20자, 알파벳과 숫자만 가능

    // 아이디 유효성 체크
    if (!useridRegex.test(userid)) {
        alert("아이디는 6~20자, 알파벳과 숫자만 가능합니다.");
        return;
    }

    const dupMsgElement = document.getElementById("dup-msg");

    // 아이디 중복 체크
    if (userIds.includes(userid)) {
        dupMsgElement.textContent = "이미 존재하는 아이디입니다.";
        dupMsgElement.classList.add('error-msg'); // 오류 메시지 스타일 추가
        dupMsgElement.classList.remove('success-msg'); // 성공 메시지 스타일 제거
        document.getElementById("userid").value = "";  // 중복된 경우 입력란을 비움
    } else {
        dupMsgElement.textContent = "사용 가능한 아이디입니다.";
        dupMsgElement.classList.add('success-msg'); // 성공 메시지 스타일 추가
        dupMsgElement.classList.remove('error-msg'); // 오류 메시지 스타일 제거
        userIds.push(userid);  // 중복되지 않으면 리스트에 아이디 추가
    }
}


// 2. 비밀번호
// 비밀번호 유효성 검사
function validatePassword() {
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/; // 비밀번호: 문자, 숫자, 특수문자 포함 8~20자

    if (!passwordRegex.test(password)) {
        alert("비밀번호는 문자, 숫자, 특수문자를 포함하여 8~20자여야 합니다.");
        return false;
    }
    return true;
}

// 비밀번호 확인 함수
function checkPasswordMatch() {
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    if (password !== password2) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
    return true;
}

// 폼 제출 시 검사
document.getElementById("form").addEventListener("submit", function(e) {
    const userid = document.getElementById("userid").value;

    // 아이디 입력 체크
    if (!userid) {
        alert("아이디를 입력해주세요.");
        e.preventDefault();
        return;
    }

    // 아이디 중복 여부 확인
    if (userIds.indexOf(userid) === -1) {
        alert("아이디 중복 확인을 해주세요.");
        e.preventDefault();
        return;
    }

    // 아이디 중복 여부 체크: 이미 존재하는 아이디라면 가입 불가능
    const dupMsgElement = document.getElementById("dup-msg");
    if (dupMsgElement.textContent === "이미 존재하는 아이디입니다.") {
        alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
        e.preventDefault();
        return;
    }

    // 비밀번호 유효성 체크
    if (!validatePassword()) {
        e.preventDefault();
        return;
    }

    // 비밀번호 확인 체크
    if (!checkPasswordMatch()) {
        e.preventDefault();
        return;
    }

    // 모든 조건을 통과하면 폼이 제출됨
    alert("회원가입이 완료되었습니다.");
});