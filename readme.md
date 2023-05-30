1. Создайте функцию InsertWordInto которая принимает 1 параметр в типе string. Этот параметр может содержать набор слов разделенных пробелом, одно слово или пустую строку.
2. Функция InsertWordInto возвращает новую функцию которая, также, принимает 1 параметр (не пустую строку)
3. Вызов внутренней функции вставляет значения своего аргумента в любое место (начало, конец) строки которая была передана во внешнюю функцию.
4. Если внутренняя функция вставляет слово в середину строки, то, она может вставлять слова только вместо пробелов, не изменяя при этом сами слова.
5. Слово которое вставляется в строку должно иметь пробелы с каждой стороны.




const insert = insertWordInto('hello world')
const result = insert('Odesa') // -> 'hello Odesa world'
const secondResult = insert('Odesa') // -> 'Odesa hello world'
const thirdResult = insert('Odesa') // -> 'hello world Odesa'

// optional
const fourthResult = insert('Odesa') // -> 'Odesa hello world': лише н