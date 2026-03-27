import Joi from 'joi';

// Supabase 'attendance' table schema description
export const attendanceFields = {
  id: 'bigint (auto)',
  employee_id: 'uuid → employees.id',
  check_in: 'timestamp, required',
  check_out: 'timestamp, optional',
  status: 'string (Present, Late, On-Leave)',
  notes: 'text, optional'
};

// Joi validation schema for check-in
export const checkInSchema = Joi.object({
  employee_id: Joi.string().uuid().required(),
  status: Joi.string().valid('Present', 'Late', 'On-Leave').default('Present'),
  notes: Joi.string().trim().max(500).optional()
});