arr = ['hello', 'goodMonning', 'bye'];
arr = ['hello', 'goodMonning', [[56,8,2],2,3]];
console.log(arr[2][2]); // вернет 3
console.log(arr[2][0][1]); // вернет 8
arr[3] = 'Привет';
arr[arr.length] = 'Пока';
arr.push('все дома');
console.log(arr);
console.log(arr[0]);
arrObj = new Array(2,2);
arrObjstring = new Array('2');
arrObjO = new Array(2);
console.log(arrObj);
console.log(arrObjstring);
console.log(arrObjO);