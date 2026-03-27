import Joi from "joi";

// Documents the Supabase 'employees' table schema
export const employeeFields = {
    Id: 'uuid (auto)',
    first_name: 'string (required)',
    last_name: 'string (required)',
    email: 'string (required, unique)',
    phone: 'string (required)',
    department_Id: 'uuid (required, foreign key to Department)',
    role_Id: 'uuid (required, foreign key to Role)',
    hire_date: 'date (required)',
    salary: 'numeric (required)',
    is_active: 'boolean (default: true)',
    created_at: 'timestamp (auto)',
    updated_at: 'timestamp (auto)',
};

// Joi validation schema for create

export const createEmployeeSchema = Joi.object({
    first_name: Joi.string().trim().min(2).max(60).required(),
    last_name: Joi.string().trim().min(2).max(60).required(),
    email: Joi.string().email().lowercase().required(),
    phone: Joi.string().optional(),
    department_id: Joi.string().uuid().required(),
    role_id: Joi.string().uuid().required(),
    hire_date: Joi.date().iso().required(),
    salary: Joi.number().positive().required(),
});
