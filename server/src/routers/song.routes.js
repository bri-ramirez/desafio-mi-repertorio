import { Router } from 'express';
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} from '../controllers/song.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', updateById);
router.delete('/', deleteById);

export default router;
