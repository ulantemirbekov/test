console.log('Module_02 Task_04');

console.log('-----');

function formatString (string, maxLength = 40) {
    // console.log(string);
    length = string.length;
    // console.log(length);

    if (length <= maxLength) {
        return string;
    } else {
        return string.slice(0, maxLength) + '...';
    }
  
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

msg = formatString ('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, error.', 27);
console.log(msg);

// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.

// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов
// и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.