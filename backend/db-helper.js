import fs from "fs";

export function getCats() {
  return readCats();
}

export function addCat(cat) {
  const cats = readCats();
  cats.push(cat);
  writeCats(cats);
}

export function updateCat(catId, timeZone) {
  const cats = readCats();
  const cat = cats.find((c) => c.id === catId);
  if (cat) {
    cat.timeZone = timeZone;
  }
  writeCats(cats);
}

export function deleteCat(catId) {
  const cats = readCats();
  cats.splice(
    cats.findIndex((c) => c.id === catId),
    1
  );
  writeCats(cats);
}

const readCats = () => {
  const res = fs.readFileSync("db.json");
  return JSON.parse(res);
};
const writeCats = (cats) => {
  fs.writeFileSync("db.json", JSON.stringify(cats));
};

export function populateCats() {
  const cats = [
    {
      id: "50d85d70-b16c-47c8-b14c-81cbbc8b34d3",
      name: "Spot",
      color: "white",
      timeZone: "America/Los_Angeles",
    },
  ];
  return writeCats(cats);
}
