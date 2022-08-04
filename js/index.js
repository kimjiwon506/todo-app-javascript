// 기능목록
const input = document.querySelector("#todo");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
const alert = document.querySelector("span");

const appTodo = () => {
  if (input.value !== " ") {
    const item = document.createElement("div");
    item.classList.add('itemList')
    // 체크박스
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    //만약 체크박스가 svg일경우는..?
    //class추가 후 display속성을 주어야할지

    // text
    const text = document.createElement("span");

    // 제거하기 버튼
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "제거하기";

    text.textContent = input.value;
    input.value = "";

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(deleteButton);
    todoList.appendChild(item);

    deleteButton.addEventListener("click", (e) => {
      todoList.removeChild(e.currentTarget.parentNode);
    });

    //체크박스
    checkbox.addEventListener("change", (event) => {
      if (event.currentTarget.checked) {
        text.style.textDecoration = "line-through";
      } else {
        text.style.textDecoration = "none";
      }
    });
  } else {
    alert.textContent = "할 일을 입력하세요!";
    input.value = "";
    alert.textContent = "";
  }
};

addButton.addEventListener("click", appTodo);
input.addEventListener("keypress", (event) => {
  const ENTER = 13;
  if (event.keyCode === ENTER) appTodo();
});
