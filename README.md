# js.game
На языке C# или JavaScript в соответствии со своей группой реализовать скрипт, который реализует обобщенную игру камень-ножницы-бумага (любое число произвольных комбинаций).
При запуске параметрами командной строки (аргументы метода Main в случае C#, process.argv под Node.js) передаётся нечётное число >=3 неповторяющихся строк (при неправильно заданных аргументах необходимо вывести аккуратное сообщение об ошибке — что именно неверно, пример как правильно). Все сообщения на английском языке. Эти строки — это ходы (например, Камень Ножницы Бумага или Камень Ножницы Бумага Ящерица Спок или 1 2 3 4 5 6 7 8 9).
https://www.npmjs.com/package/random-number-csprng
Важно: ходы передаются аргументами командной строки, вы их не парсите из потока ввода (например, ход может содержать пробел, но для вашего кода это не должно иметь никакого значения).
Победа определяется так — половина следующих по кругу выигрывает, половина предыдущих по кругу проигрывает (семантика строк не важна, в какой последовательности что пользователь ввел, в такую игру и играет, даже если по его порядку камень проигрывает ножницам — для вас содержимое строк не важно).
Скрипт генерирует криптографически стойкий случайный ключ случайный ключ (RandomNumberGenerator в C# или что-то вроде https://www.npmjs.com/package/random-number-csprng) длиной не менее 256 бит, делает свой ход, вычисляет HMAC (на базе SHA2 или SHA3) от хода со сгенерированным ключом, показывает пользователя HMAC. После этого пользователь получает "меню" 1 - Камень, 2 - Ножницы, ...., 0 - Exit. Пользователь делает свой выбор (при некорректном вводе опять отображается "меню"). Скрипт показывает кто победил, ход компьютера и исходный ключ.
@everyone Перечитайте абзац выше, последовательность критически важна (в другой последовательности просто нет смысла, например, показывать ключ до хода пользователя или HMAC вместо ключа).
Таким образом, пользователь может проверить, что компьютер играет честно (не поменял свой ход после хода пользователя).
При выборе опции "help" в терминале нужно отобразить таблицу, определяющую какой ход выигрывает.
Генерация таблицы должна быть вынесена в отдельный класс, определение "правил" кто победил должно быть в отдельном классе, функции генерации ключа и HMAC должны быть в отдельном классе (всего 4 класса). По максимуму следует использовать базовые библиотеки классов и сторонние библиотеки, а не изобретать велосипед. Помощь нужно оформлить в виде таблицы N + 1 на N + 1, где N - число ходов (определяется числом переданных в скрипт аргументов). +1 потому, чтобы добавить заголовок для строк и заголовок для колонок (содержат название хода). В ячейках может быть Win/Lose/Draw.
ЧИСЛО ХОДОВ МОЖЕТ БЫТЬ ЛЮБЫМ (нечетным > 1, зависит от переданных параметров), не зашито в коде.
Пример:
>node rps.js rock paper scissors lizard Spock
HMAC: FAAC40C71B4B12BF0EF5556EEB7C06925D5AE405D447E006BB8A06565338D411
Available moves:
1 - rock
2 - paper
3 - scissors
4 - lizard
5 - Spock
0 - exit
? - help
Enter your move: 2
Your move: paper
Computer move: rock
You win!
HMAC key: BD9BE48334BB9C5EC263953DA54727F707E95544739FCE7359C267E734E380A2