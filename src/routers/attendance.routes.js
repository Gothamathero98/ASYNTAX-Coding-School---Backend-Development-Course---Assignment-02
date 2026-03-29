import { Router } from 'express';
import * as attendanceController from '../controllers/attendance.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(protect); // All attendance routes require authentication

router.post('/check-in', attendanceController.checkIn);
router.post('/check-out', attendanceController.checkOut);
router.get('/employee/:employee_id', attendanceController.getByEmployee);
router.get('/date', attendanceController.getByDate);
router.post('/mark-absent', attendanceController.markAbsent);

export default router;
