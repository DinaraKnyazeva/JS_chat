//выбираю элемент с id="name" (инпут где указано имя)
let userName = document.getElementById("name");
//выбираю элемент с id="link" (инпут где указана ссылка на аватар)
let userLink = document.getElementById("link");
//выбираю элемент с id="comments" (инпут c комментарием)
let userComments = document.getElementById("comments");

//проверка и преобразование имени
userName.addEventListener("blur", () => {
  let elementName = userName.value.replace(/\s+/g, " ").trim();
  elementName = elementName
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
  userName.value = elementName;
});

//функция для проверки на спам
function checkSpam(str) {
  let newStr = str.replace(/viagra|xxx/gi, "***");
  return newStr;
}

//выбираю элемент с классом "chat__comment" (контейнер для комментариев)
let chatContainer = document.querySelector(".chat__comment");

//обработка отправки формы
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //отменяем стандартное поведение браузера

  //создаю новый элемент "div"
  let newComment = document.createElement("div");

  //создаю элементы для нового комментария
  let newAvatar = document.createElement("img");
  let newName = document.createElement("p");
  let newText = document.createElement("p");

  //присваиваю классы элементам
  newComment.classList.add("chat__result");
  newAvatar.classList.add("chat__avatar");
  newName.classList.add("chat__name");
  newText.classList.add("chat__text");

  //получаю значения из инпутов формы
  let elementName = userName.value;
  let elementLink = userLink.value;
  let elementComments = userComments.value;

  //проверяю, что все поля заполнены
  if (elementName !== "" && elementLink !== "" && elementComments !== "") {
    //устанавливаю значения для элементов комментария
    newAvatar.src = elementLink;
    newName.textContent = elementName;
    newText.textContent = checkSpam(elementComments);

    //добавляю элементы в новый комментарий
    newComment.appendChild(newAvatar);
    newComment.appendChild(newName);
    newComment.appendChild(newText);

    //добавляю новый комментарий в контейнер
    chatContainer.appendChild(newComment);

    //очищаю значения инпутов
    userName.value = "";
    userLink.value = "";
    userComments.value = "";
  }
});
