import catchAsync from '../utils/catchAsync.js';
import { sendSuccess } from '../utils/responseHandler.js';
import * as attendanceService from '../services/attendence.service.js';

export const checkIn = catchAsync(async (req, res) => {
    const data = await attendanceService.checkIn(req.body.employee_id);
    sendSuccess(res, data, 'Checked in successfully', 201);
});

export const checkOut = catchAsync(async (req, res) => {
    const data = await attendanceService.checkOut(req.body.employee_id);
    sendSuccess(res, data, 'Checked out successfully');
});

export const getByEmployee = catchAsync(async (req, res) => {
    const data = await attendanceService.getAttendanceByEmployee(req.params.employee_id);
    sendSuccess(res, data, 'Attendance records retrieved');
});

export const getByDate = catchAsync(async (req, res) => {
    const data = await attendanceService.getAttendanceByDate(req.query.date);
    sendSuccess(res, data, 'Attendance records retrieved');
});

export const markAbsent = catchAsync(async (req, res) => {
    const data = await attendanceService.markAbsent(req.body.employee_id, req.body.date);
    sendSuccess(res, data, 'Marked as absent');
});
