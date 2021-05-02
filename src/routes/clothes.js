'use strict';

const express = require('express');

const ClothesModel = require('../Models/clothes-model')
const clothes = new ClothesModel;

const router = express.Router();
// GET http://localhost:3333?name=Jason&plant=lots

router.get('/clothes', getAllClothes);
router.get('/clothes/:id', getOnePieceOfClothing);
router.put('/clothes', createOnePeiceOfClothes);
router.post('/clothes/:id', updateOnePeiceOfClothes);
router.delete('/clothes/:id', deleteOnePieceOfClothes);

function getAllClothes(req, res) {
  let allclothes = clothes.read();
  res.status(200).json(allclothes);
}
function getOnePieceOfClothing(req, res) {
  const id = parseInt(req.params.id);
  let onepeiceClothing = clothes.read(id);
  res.status(200).json(onepeiceClothing);
}
function createOnePeiceOfClothes(req, res) {
  let content = req.body;
  let createdClothes = clothes.create(content);
  res.status(201).json(createdClothes);
}
function updateOnePeiceOfClothes(req, res) {
  let content = req.body;
  const id = parseInt(req.params.id);
  let updatedClothes = clothes.update(id, content);
  res.status(200).json(updatedClothes);
}
function deleteOnePieceOfClothes(req, res) {
  const id = parseInt(req.params.id);
  let deletedclothes = clothes.delete(id);
  res.status(200).json(deletedclothes);
}

module.exports = router;