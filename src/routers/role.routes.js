import { Router } from 'express';
import * as roleController from '../controllers/role.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import validate from '../middlewares/validate.middleware.js';

const router = Router();

router.use(protect); // All role routes require authentication

router.get('/', roleController.getAll);
router.get('/:id', roleController.getById);
router.post('/', roleController.create);
router.put('/:id', roleController.update);
router.delete('/:id', roleController.remove);

export default router;
