import Joi from 'joi';

// Supabase 'roles' table schema description
export const roleFields = {
  id: 'uuid (auto)',
  title: 'string, unique, required',
  base_salary: 'numeric, required',
  created_at: 'timestamp (auto)'
};

// Joi validation schema for creating a role
export const createRoleSchema = Joi.object({
  title: Joi.string().trim().min(2).max(100).required(),
  base_salary: Joi.number().positive().required()
});