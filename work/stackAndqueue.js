function queue(arr, add, exit=0){
    if(exit!=0){arr.shift();}
    else{
        arr.push(add);
    }
    return arr;
}

arr1 = [];

console.log(queue(arr1, 1));
console.log(queue(arr1, 2));
console.log(queue(arr1, 3));
console.log(queue(arr1, 4));
console.log(queue(arr1, 5));
console.log(queue(arr1, 6));
console.log(queue(arr1, 4, true));

function stack(arr, add, exit=0){
    if(exit!=0){arr.pop();}
    else{
        arr.push(add);
    }
    return arr;
}

console.log(stack(arr1, 1));
console.log(stack(arr1, 2));
console.log(stack(arr1, 3));
console.log(stack(arr1, 4));
console.log(stack(arr1, 5));
console.log(stack(arr1, 6));
queue(arr1, 4, true);