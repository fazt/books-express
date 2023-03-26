import fs from "fs";

export function readData(jsonFilePath) {
  const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
  return JSON.parse(jsonData);
}

function saveData(data) {
  const jsonString = JSON.stringify(data);
  fs.writeFileSync("books.json", jsonString, "utf-8");
}

export function addItem(newItem) {
  let data = readData("books.json");
  data.push(newItem);
  saveData(data);
}

export function deleteItem(id) {
  let data = readData("books.json");
  data = data.filter((item) => item.id !== id);
  saveData(data);
}
