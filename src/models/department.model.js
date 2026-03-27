import Joi from 'joi';

// Supabase 'departments' table schema description
export const departmentFields = {
  id: 'uuid (auto)',
  name: 'string, unique, required',
  location: 'string, optional',
  created_at: 'timestamp (auto)'
};

// Joi validation schema for creating a department
export const createDepartmentSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  location: Joi.string().trim().max(255).optional()
});