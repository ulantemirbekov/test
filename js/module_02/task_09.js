console.log('Module_02 Task_09');

console.log('-----');

'use strict';

// const allLogins = ['lorem', '12345', 'hola', 'salam'];
// console.log(allLogins);

function isLoginValid (login, min = 4, max = 16) {
  if (login.length >= min && login.length <= max) {
    return true;
  }
    return false;
}

// console.log(isLoginValid('lorem'));

function isLoginUnique  (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
}

// console.log(isLoginUnique(allLogins, 'lorem'));

function addLogin (allLogins, login) {
  
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      message = SUCCESS;
      allLogins.push(login);
    } else {
      message = REFUSAL;
    }
  }
  else {
    message = ERROR;
  }
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax')); 
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles')); 
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast')); 
// 'Ошибка! Логин должен быть от 4 до 16 символов' 
