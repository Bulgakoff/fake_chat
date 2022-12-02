'use strict';
const noMessagesEl = document.querySelector(".noMessages");
const messagesEl = document.querySelector(".messages");
const textareaEl = document.querySelector("textarea");
const nameInputEl = document.querySelector("input");
const errorTextareaEl = document.querySelector(".errorTextarea");
const errorInputEl = document.querySelector(".errorInput");
const sendBtnEl = document.querySelector(".send");
const clearBtnEl = document.querySelector(".clear");

const messagesElClassName = 'message';

function getMessageMarkup(text, author, time) {
    return
    `<div class="${messagesElClassName}">
        <div>Сообщение :${text}</div>
        <div>Автор :${author}</div>
        <div> Время :${time}</div>
      </div>`;
}

function getTime() {
    const date = new Date();
    const sec = date.getSeconds();
    const minute = date.getMinutes();
    const hours = date.getHours();
    return `${hours}  : ${minute}  : ${sec} `

}

function hideNoMessageText() {
    noMessagesEl.style.display = 'none';
}

function showNoMessageText() {
    noMessagesEl.style.display = 'block';
}

sendBtnEl.addEventListener("click", function () {
    if (textareaEl.value === "") {
        errorTextareaEl.textContent = "message Error : Field can not be empty";
        return;
    } else {
        errorTextareaEl.textContent = "";
    }
    if (nameInputEl.textContent === "") {
        errorInputEl.textContent = "message Error : Field name can not be empty";
        return;
    } else {
        errorInputEl.textContent = "";
    }
    hideNoMessageText();
    const messageMarkup = getMessageMarkup(textareaEl.textContent, nameInputEl.value, getTime());
    messagesEl.insertAdjacentHTML("beforeend", messageMarkup);
});

clearBtnEl.addEventListener("click", function () {
    showNoMessageText();
    textareaEl.value = "";
    nameInputEl.value = "";
    const messageElems = document.querySelectorAll("." + messagesElClassName);
    messageElems.forEach(function (message) {
        message.remove();
    });
});