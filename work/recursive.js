function printNumbers(current, max) {
  if (current > max) {
    return; // Базовый случай: вышли за пределы
  }
  console.log(current); // Действие на текущем шаге
  printNumbers(current + 1, max); // Рекурсивный вызов
}

printNumbers(1, 5);
// Выведет: 1, 2, 3, 4, 5
