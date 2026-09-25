function addElemHashTable(arr, key, val){
    if(arr.hasOwnProperty(key)){
        console.log('Такой элемент уже существует');
        arr[key] = val;
        console.log('Новое значение ключа '+ key+' = '+val); 
    }
    else{arr[key] = val}
    return arr;
}
arr1 = {
    'apple': 100,
    'banana': 200
}
addElemHashTable(arr1, 'lemon', 200);
addElemHashTable(arr1, 'tomato', 150);
addElemHashTable(arr1, 'lemon', 500);
console.log(arr1)