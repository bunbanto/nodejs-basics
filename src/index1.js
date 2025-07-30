// import path from 'node:path';
import fs from 'node:fs/promises';
// приклад для побудови шляху з його частин
// const somePath = path.join('some_folder', 'some_file.txt');
// somePath буде 'some_folder/some_file.txt' на MacOs

// somePath буде 'some_folder\\some_file.txt' на Windows

// приклад для побудови шляху із його частин
// const pathToWorkDir = path.join(process.cwd());  отримуємо шлях до кореневої директорії викликом метода process.cwd()
// const pathToFile = path.join(pathToWorkDir, 'some_folder', 'some_file.txt');  розширюємо шлях додатковими елементами
// pathToFile на MacOs буде __шлях до папки, де запущений процес__/some_folder/some_file.txt'
// pathToFile на Windows буде __шлях до папки, де запущений процес__\\some_folder\\some_file.txt'

// import fs from 'node:fs';

// const fileContent = fs.readFileSync('path_to_file');

//?------- Цей метод використовується для асинхронного читання даних із файлу.

(async () => {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('Вміст файлу:', data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

//?------- Цей метод використовується для асинхронного запису даних у файл.

// Записуємо дані у файл 'output.txt'
(async () => {
  const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();

//?------- Цей метод використовується для асинхронного додавання даних у кінець файлу.

// Додаємо дані до файлу 'output.txt'
(async () => {
  const data = 'Це дані, які ми додаємо до файлу.';
  try {
    await fs.appendFile('output.txt', data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
})();

//?------- Цей метод використовується для асинхронного перейменування або переміщення файлу чи каталогу.

// Перейменовуємо або переміщуємо файл чи каталог зі шляху 'oldfile.txt' до 'newfile.txt'
(async () => {
  try {
    await fs.rename('oldfile.txt', 'newfile.txt');
    console.log('Файл або каталог успішно перейменовано або переміщено.');
  } catch (err) {
    console.error('Помилка перейменування або переміщення:', err);
  }
})();

//?------- Цей метод використовується для асинхронного видалення файлу.

// Видаляємо файл за шляхом 'file.txt'
(async () => {
  try {
    await fs.unlink('file.txt');
    console.log('Файл успішно видалено.');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
})();

//?------- Цей метод використовується для асинхронного отримання списку файлів та каталогів у заданому каталозі.
// Отримуємо список файлів і каталогів у поточному каталозі
(async () => {
  try {
    const files = await fs.readdir('.');
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();

//?------- Можна також перевіряти наявність папок за допомогою цього методу (буде використовуватися далі в курсі)
// Перевіряємо доступність файлу або каталогу за вказаним шляхом
(async () => {
  const path = 'file.txt';
  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();
