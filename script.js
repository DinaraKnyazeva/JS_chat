//выбираю элемент с id="name" (инпут где указано имя)
let userName = document.getElementById("name");
//выбираю элемент с id="link" (инпут где указана ссылка на аватар)
let userLink = document.getElementById("link");

//выбираю элемент с id="comments" (инпут c комментарием)
let userComments = document.getElementById("comments");

// function capitalizeFully(str) {
//   return str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
//     return a.toUpperCase();
//   });
// }

//проверка и преобразование имени
userName.addEventListener("blur", () => {
  let elementName = userName.value.replace(/\s+/g, " ").trim();
  elementName = elementName
    .toLowerCase()
    .replace(/\b\w/g, (l) => l.toUpperCase());
  // elementName.value = capitalizeFully(elementName);
  userName.value = elementName;
});

let elementLink = userLink.value;
let elementComments = userComments.value;
console.log(elementName);
