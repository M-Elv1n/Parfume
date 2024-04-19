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

  // Функция для добавления нового продукта
  function addNewProduct(name, image, price, oldPrice) {
    // Определение ID для нового продукта
    var newID = products.length + 1;

    // Создание объекта нового продукта
    var newProduct = {
      id: newID,
      name: name,
      image: image,
      price: price,
      oldprice: oldPrice,
    };

    // Добавление нового продукта в начало массива продуктов
    products.unshift(newProduct);

    // Возврат успешно добавленного продукта
    return newProduct;
  }

  // Пример добавления нового продукта
  addNewProduct("", "./img/women/23.jpeg", 12, 24);

  // Преобразование объекта JavaScript обратно в JSON
  let newJSON = JSON.stringify(products, null, 4);

  // Запись изменений в файл
  fs.writeFile(filePath, newJSON, "utf8", (err) => {
    if (err) {
      console.error("Ошибка записи файла:", err);
      return;
    }
    console.log("Новые продукты успешно добавлены в существующий файл.");
  });
});

