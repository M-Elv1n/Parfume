const fs = require("fs");
const path = require("path");

// Путь к файлу productsWoman.json
const filePath = path.resolve(__dirname, "productsWoman.json");

// Чтение файла
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Ошибка чтения файла:", err);
    return;
  }

  // Преобразование JSON в объект JavaScript
  let products = JSON.parse(data);

  // Изменение ID всех продуктов
  for (let i = 0; i < products.length; i++) {
    products[i].id = i + 1;
  }

  // Преобразование объекта JavaScript обратно в JSON
  let newJSON = JSON.stringify(products, null, 4);

  // Запись изменений в файл
  fs.writeFile(filePath, newJSON, "utf8", (err) => {
    if (err) {
      console.error("Ошибка записи файла:", err);
      return;
    }
    console.log("ID всех продуктов успешно исправлены.");
  });
});