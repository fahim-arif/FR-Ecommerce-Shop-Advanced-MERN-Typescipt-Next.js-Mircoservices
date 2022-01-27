import Store from '../models/storeModel.js';

const getStores = async (req, res, next) => {
  const response = await Store.find();
  res.json(response);
};

const getStoreById = async (req, res, next) => {
  const id = req.params.id;
  const response = await Store.findById(id);
  res.json(response);
};

export {getStores, getStoreById};
