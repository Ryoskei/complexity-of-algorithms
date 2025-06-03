// Примеры различных нотаций Big O в JavaScript

// O(1) - Константная сложность
// Время выполнения не зависит от размера входных данных
function constantTimeExample(array, index) {
    return array[index]; // Просто получаем элемент массива по индексу
}

// O(log n) - Логарифмическая сложность
// Время выполнения растет логарифмически с увеличением размера данных
function binarySearch(array, target) {
    let left = 0; // Левая граница поиска
    let right = array.length - 1; // Правая граница поиска

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Находим середину
        
        if (array[mid] === target) {
            return mid; // Элемент найден
        }
        
        if (array[mid] < target) {
            left = mid + 1; // Ищем в правой половине
        } else {
            right = mid - 1; // Ищем в левой половине
        }
    }
    
    return -1; // Элемент не найден
}

// O(n) - Линейная сложность
// Время выполнения прямо пропорционально размеру входных данных
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Возвращаем индекс найденного элемента
        }
    }
    return -1; // Элемент не найден
}

// O(n log n) - Линейно-логарифмическая сложность
// Комбинирует линейную и логарифмическую сложность
function mergeSort(array) {
    // Базовый случай: массив из 1 элемента уже отсортирован
    if (array.length <= 1) {
        return array;
    }

    // Разделяем массив на две половины
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    // Рекурсивно сортируем обе половины и объединяем результаты
    return merge(mergeSort(left), mergeSort(right));
}

// Вспомогательная функция для слияния двух отсортированных массивов
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Сравниваем элементы из обоих массивов и добавляем меньший
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Добавляем оставшиеся элементы
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// O(n^2) - Квадратичная сложность
// Время выполнения пропорционально квадрату размера входных данных
function bubbleSort(array) {
    const n = array.length;
    
    // Внешний цикл проходит по всему массиву
    for (let i = 0; i < n; i++) {
        // Внутренний цикл сравнивает соседние элементы
        for (let j = 0; j < n - i - 1; j++) {
            // Если текущий элемент больше следующего, меняем их местами
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    
    return array;
}

// O(n^3) - Кубическая сложность
// Время выполнения пропорционально кубу размера входных данных
function matrixMultiplication(matrix1, matrix2) {
    const n = matrix1.length;
    // Создаем результирующую матрицу, заполненную нулями
    const result = Array(n).fill().map(() => Array(n).fill(0));

    // Три вложенных цикла для умножения матриц
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

// O(n!) - Факториальная сложность
// Время выполнения растет факториально с увеличением размера входных данных
function generatePermutations(array) {
    // Базовый случай: массив из 1 элемента
    if (array.length <= 1) {
        return [array];
    }

    const result = [];
    // Для каждого элемента в массиве
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        // Получаем оставшиеся элементы
        const remaining = array.slice(0, i).concat(array.slice(i + 1));
        // Рекурсивно генерируем перестановки для оставшихся элементов
        const remainingPerms = generatePermutations(remaining);

        // Добавляем текущий элемент к каждой перестановке
        for (const perm of remainingPerms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}

// Примеры использования с комментариями результатов
console.log('O(1) Пример:', constantTimeExample([1, 2, 3, 4, 5], 2)); // Выведет: 3

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('O(log n) Пример:', binarySearch(sortedArray, 7)); // Выведет: 6 (индекс числа 7)

const unsortedArray = [5, 2, 8, 1, 9];
console.log('O(n) Пример:', linearSearch(unsortedArray, 8)); // Выведет: 2 (индекс числа 8)

console.log('O(n log n) Пример:', mergeSort([5, 2, 8, 1, 9])); // Выведет: [1, 2, 5, 8, 9]

console.log('O(n^2) Пример:', bubbleSort([5, 2, 8, 1, 9])); // Выведет: [1, 2, 5, 8, 9]

const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
console.log('O(n^3) Пример:', matrixMultiplication(matrix1, matrix2)); // Выведет: [[19, 22], [43, 50]]

console.log('O(n!) Пример:', generatePermutations([1, 2, 3])); // Выведет все возможные перестановки чисел 1, 2, 3 