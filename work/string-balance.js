
function stringBalance(str){
    let flag = 0;
    let arrSymbols = str.split('');
    //console.log(arrSymbols);
    for (key of arrSymbols){
        if(key == '(') flag++;
        if(key == ')') flag--;
        if(flag < 0) return 'Строка не сбалансирована';
    }
    if(flag == 0) return 'Строка сбалансирована';
    else  return 'Строка не сбалансирована';
}
let user_str = 'Текст со скобками (текст), всё.';
let user_str2 = 'Текст со скобками (текст, всё.';
let user_str3 = 'Текст со скобками )текст(, всё.';
let user_str4 = 'Текст со скобками (текст), всё).';

console.log(stringBalance(user_str));
console.log(stringBalance(user_str2));
console.log(stringBalance(user_str3));
console.log(stringBalance(user_str4));