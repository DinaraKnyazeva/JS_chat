//выбираю элемент с id="name" (инпут где указано имя)
let userName = document.getElementById("name");
//выбираю элемент с id="link" (инпут где указана ссылка на аватар)
let userLink = document.getElementById("link");
//выбираю элемент с id="comments" (инпут c комментарием)
let userComments = document.getElementById("comments");
//выбираю элемент добавить комментарий
const button = document.querySelector("button");
//выбираю элемент окно формы
const windowForm = document.getElementById("form");

//добавляю событие-при нажатии на кнопку открывается форма
button.addEventListener("click", () => {
  windowForm.classList.add("open");
});

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
let chatContainer = document.querySelector(".chat__new-comment");

//обработка отправки формы
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //отменяем стандартное поведение браузера

  //создаю новый элемент "div"
  let newComment = document.createElement("div");

  //создаю элементы для нового комментария
  let newAvatar = document.createElement("img");
  let nowDate = document.createElement("p");
  let newName = document.createElement("p");
  let newText = document.createElement("p");

  //присваиваю классы элементам
  newComment.classList.add("chat__result");
  nowDate.classList.add("chat__date");
  newAvatar.classList.add("chat__avatar");
  newName.classList.add("chat__name");
  newText.classList.add("chat__text");

  //добавляю дату текущую
  let elementDate = new Date();

  //получаю значения из инпутов формы
  let elementName = userName.value;
  let elementLink = userLink.value;
  let elementComments = userComments.value;

  //получаю значения из инпутов yes/no
  let userRadioYes = document.getElementById("yes");
  let userRadioNo = document.getElementById("no");

  //добавляю аватары ч/з массив
  let arrAvatar = [
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
  ];

  //добавляю условие, если пользователь выбрал не показывать свое имя
  if (elementComments !== "") {
    //добавляю, если ссылка пустая, то рандомно подбирается аватар
    if (!elementLink) {
      const indexArr = Math.floor(Math.random() * arrAvatar.length);
      elementLink = arrAvatar[indexArr];
    }

    //добавляю условие для радио-инпута
    if (userRadioNo.checked || elementName === "") {
      newName.textContent = "Username";
    } else {
      newName.textContent = elementName;
    }

    //устанавливаю значения для элементов комментария
    newAvatar.src = elementLink;
    newText.textContent = checkSpam(elementComments);
    nowDate.textContent = elementDate;

    //добавляю элементы в новый комментарий
    newComment.appendChild(newAvatar);
    newComment.appendChild(nowDate);
    newComment.appendChild(newName);
    newComment.appendChild(newText);

    //добавляю новый комментарий в контейнер
    chatContainer.appendChild(newComment);

    //очищаю значения инпутов
    userName.value = "";
    userLink.value = "";
    userComments.value = "";
    //скрываю окно формы
    windowForm.classList.remove("open");
  }
});
