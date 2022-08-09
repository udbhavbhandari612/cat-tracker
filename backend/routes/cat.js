import { Router } from "express";
import { v4 as uuid } from "uuid";
import { addCat, deleteCat, getCats, updateCat } from "../db-helper.js";

const cat = Router();

cat.get("/", (req, res) => {
  res.status(200).send(getCats());
});

cat.post("/", (req, res) => {
  const { cat } = req.body || {};
  const id = uuid();
  if (cat) addCat({ ...cat, id });
  res.status(200).send({ cat: { ...cat, id } });
});

cat.put("/", (req, res) => {
  const { id, timeZone } = req.body || {};
  let cat = {};
  if (id && timeZone) cat = updateCat(id, timeZone);
  res.status(200).send({ cat });
});

cat.delete("/", (req, res) => {
  const { id } = req.body || {};
  if (id) deleteCat(id);
  res.status(200).send(getCats());
});

export default cat;
