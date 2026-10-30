// 1. Создаем два множества (Set автоматически удаляет дубликаты)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 2. Объединение (Union) — все элементы из setA и setB
// Используем современный метод .union() (или спред-оператор [...setA, ...setB])
const unionSet = setA.union(setB);
console.log("Объединение:", [...unionSet]); 
// Результат: [1, 2, 3, 4, 5, 6]

// 3. Пересечение (Intersection) — только те элементы, которые есть в обоих множествах
const intersectionSet = setA.intersection(setB);
console.log("Пересечение:", [...intersectionSet]); 
// Результат: [3, 4]

// 4. Разность (Difference) — элементы, которые есть в setA, но отсутствуют в setB
const differenceSet = setA.difference(setB);
console.log("Разность (A \ B):", [...differenceSet]); 
// Результат: [1, 2]

// 5. Проверка наличия элемента (has)
console.log("Есть ли число 3 в setA?", setA.has(3)); 
// Результат: true

// 6. Добавление и удаление элементов
setA.add(10);    // добавляет число 10
setA.delete(1);  // удаляет число 1
console.log("setA после изменений:", [...setA]); 
// Результат: [2, 3, 4, 10]