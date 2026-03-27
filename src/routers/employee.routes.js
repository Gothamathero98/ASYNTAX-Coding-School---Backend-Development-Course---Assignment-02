import { Router } from 'express';
import * as employeeController from '../controllers/employee.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import validate from '../middlewares/validate.middleware.js';
import { createEmployeeSchema } from '../models/employee.model.js';

const router = Router();

router.use(protect); // All employee routes require authentication
router.get( '/', employeeController.getAll);
router.get( '/:id', employeeController.getById);
router.post('/', validate(createEmployeeSchema), employeeController.create);
router.put( '/:id', employeeController.update);
router.delete('/:id', employeeController.remove);

export default router;