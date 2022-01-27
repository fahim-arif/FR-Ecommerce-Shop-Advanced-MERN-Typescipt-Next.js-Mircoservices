import express from 'express';
const router = express.Router();

import {getStores, getStoreById} from '../controllers/storeController.js';

router.get('/', getStores)

router.get('/:id', getStoreById)

export default router;