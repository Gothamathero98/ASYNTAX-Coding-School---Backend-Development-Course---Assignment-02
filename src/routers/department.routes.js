import { Router } from 'express';
import * as departmentController from '../controllers/department.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(protect); // All department routes require authentication

router.get('/', departmentController.getAll);
router.get('/:id', departmentController.getById);
router.post('/', departmentController.create);
router.put('/:id', departmentController.update);
router.delete('/:id', departmentController.remove);

export default router;
