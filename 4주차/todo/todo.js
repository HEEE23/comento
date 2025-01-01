let todoidx = 0;

window.onload = function() {
    // + 버튼 클릭 시
    document.querySelector('.add-btn').addEventListener('click', addTodo);

    // 엔터키 입력 시
    document.querySelector('.todo').addEventListener('keydown', function(event){
        if(event.keyCode === 13) {
            addTodo();
        }
    });
}


// 1. 일정 추가
const addTodo = () => {
    const todoInput = document.querySelector('.todo');
    const taskList = document.querySelector('.task-list');

    // 값이 비어있거나 공백만 있을 경우, 리스트에 추가되지 않음
    if (todoInput.value.split(' ').join('') === '') return;

    // li
    const task = document.createElement('li');
    task.className = 'task';
    taskList.appendChild(task);
    
    // checkbox
    const checkItem = document.createElement('div');
    checkItem.className = "check-item";
    task.appendChild(checkItem);    
    
    const checkInput = document.createElement('input');
    checkInput.setAttribute('type', 'checkbox');
    checkInput.id = todoidx;
    checkItem.appendChild(checkInput);

    const checkLabel = document.createElement('label');
    checkLabel.innerText = todoInput.value;
    checkLabel.setAttribute('for', todoidx);
    checkItem.appendChild(checkLabel);

    // Delete
    const deletebtn = document.createElement('deletebtn');
    deletebtn.className = 'delete-btn';
    deletebtn.setAttribute('onclick', 'removeTodo(this);');
    task.appendChild(deletebtn);
    
    // 입력란 비우기
    todoInput.value = '';
    
    // 인덱스 증가 - 고유 ID 부여
    todoidx += 1;
}

// 2. 일정 삭제
const removeTodo = (_this) => {
    _this.closest('.task').remove();
}

