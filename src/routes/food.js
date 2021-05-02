'use strict';

const express = require('express');

const foodModel = require('../Models/food-model')
const food = new foodModel;

const router = express.Router();
// GET http://localhost:3333?name=Jason&plant=lots

router.get('/food', getAllFood);
router.get('/food/:id', getOnePieceOfFood);
router.put('/food', createOnePeiceOfFood);
router.post('/food/:id', updateOnePeiceOfFood);
router.delete('/food/:id', deleteOnePieceOfFood);

function getAllFood(req, res) {
  let allfood = food.read();
  res.status(200).json(allfood);
}
function getOnePieceOfFood(req, res) {
  const id = parseInt(req.params.id);
  let onepeiceFood = food.read(id);
  res.status(200).json(onepeiceFood);
}
function createOnePeiceOfFood(req, res) {
  let content = req.body;
  let createdFood = food.create(content);
  res.status(201).json(createdFood);
}
function updateOnePeiceOfFood(req, res) {
  let content = req.body;
  const id = parseInt(req.params.id);
  let updatedFood = food.update(id, content);
  res.status(200).json(updatedFood);
}
function deleteOnePieceOfFood(req, res) {
  const id = parseInt(req.params.id);
  let deletedfood = food.delete(id);
  res.status(200).json(deletedfood);
}

module.exports = router;