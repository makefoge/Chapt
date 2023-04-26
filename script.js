// Получаем ссылки на элементы DOM
const chatRoomNameInput = document.getElementById("chat-room-name");
const createChatRoomButton = document.getElementById("create-chat-room-button");

// Обрабатываем нажатие кнопки "Create"
createChatRoomButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Получаем имя чата из поля ввода
  const chatRoomName = chatRoomNameInput.value;

  // Создаем объект чата
  const chatRoom = {
    name: chatRoomName,
    admin: "Admin User" // Можно указать имя администратора
  };

  // Сохраняем объект чата в локальном хранилище браузера
  localStorage.setItem("chatRoom", JSON.stringify(chatRoom));

  // Переходим на страницу чата
  window.location.href = "chat.html";
});
// Получаем объект чата из локального хранилища браузера
const chatRoom = JSON.parse(localStorage.getItem("chatRoom"));

// Отображаем имя чата и имя администратора на странице
const chatRoomNameElement = document.getElementById("chat-room-name");
chatRoomNameElement.textContent = chatRoom.name;

const chatRoomAdminElement = document.getElementById("chat-room-admin");
chatRoomAdminElement.textContent = chatRoom.admin;
var username = new URLSearchParams(window.location.search).get("username");
