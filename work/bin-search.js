function binarySearch(arr, target){
    let left = 0;
    let rigth = arr.length -1;
    while(left<=rigth){
        const mid = Math.floor((left+rigth)/2);
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]>target){
            rigth = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return -1;
}


// Пример использования:
const numbers = [1, 3, 5, 7, 11, 13, 17, 19];
console.log(binarySearch(numbers, 11)); // Выведет: 4 (индекс числа 11)
console.log(binarySearch(numbers, 4));  // Выведет: -1 (элемент отсутствует)
