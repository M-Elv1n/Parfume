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

  // добавления нового продукта
  addNewProduct("ByRedo BAL D'Afrique", "./img/women/ByRedoBAL.jpeg", 139, 335);
  addNewProduct("Parfums De Marly Valaya", "./img/women/Parfums.jpeg", 179, 409);
  addNewProduct("Lancôme Idole", "./img/women/Lancome.jpeg", 119, 270);
  addNewProduct("ByRedo Rose of no Man's Land", "./img/women/ByRedoRose.jpeg", 139, 335);

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