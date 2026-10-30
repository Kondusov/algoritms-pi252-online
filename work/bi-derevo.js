// Класс для создания отдельного узла дерева
class Node {
  constructor(value) {
    this.value = value; // Значение узла
    this.left = null;   // Ссылка на левого потомка
    this.right = null;  // Ссылка на правого потомка
  }
}

// Класс для управления всем деревом
class BinarySearchTree {
  constructor() {
    this.root = null; // Корень дерева изначально пуст
  }

  // Метод для добавления нового значения
  insert(value) {
    const newNode = new Node(value);

    // Если дерево пустое, новый узел становится корнем
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Иначе ищем правильное место в дереве
    let currentNode = this.root;
    while (true) {
      // Если значение меньше текущего — идем налево
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } 
      // Если значение больше или равно — идем направо
      else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Симметричный обход (In-Order) для вывода элементов по возрастанию
  printInOrder(node = this.root) {
    if (node !== null) {
      this.printInOrder(node.left);   // Рекурсивно идем в левое дерево
      console.log(node.value);         // Печатаем значение узла
      this.printInOrder(node.right);  // Рекурсивно идем в правое дерево
    }
  }
  // === МЕТОД ДЛЯ ПОИСКА по значению ===
  search(value) {
    // Если дерево пустое, искать нечего
    if (this.root === null) return false;

    let currentNode = this.root;

    // Идем по дереву, пока не дойдем до конца (null)
    while (currentNode !== null) {
      // Нашли элемент
      if (value === currentNode.value) {
        return true; 
      }
      // Если искомое значение меньше текущего — идем влево
      else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } 
      // Если больше — идем вправо
      else {
        currentNode = currentNode.right;
      }
    }

    // Если прошли все дерево и не нашли значение
    return false;
  }
}

// === Пример использования ===
const bst = new BinarySearchTree();

// Наполняем дерево данными
bst.insert(15);
bst.insert(9);
bst.insert(20);
bst.insert(6);
bst.insert(12);

// Выводим элементы в консоль (они автоматически отсортируются)
console.log("Элементы дерева по возрастанию:");
bst.printInOrder();

// === Пример использования поиска ===
console.log(bst.search(12)); // Выведет: true
console.log(bst.search(7));  // Выведет: false