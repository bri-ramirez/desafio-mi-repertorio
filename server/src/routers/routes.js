import { Router } from 'express';
import songRoutes from './song.routes.js';

const router = Router();

router.use('/cancion', songRoutes);

export default router;
