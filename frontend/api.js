// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Helper function for API calls
async function apiCall(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'API Error');
    }

    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// ===== ඉතිරි API Functions =====

// Auth APIs
export const authAPI = {
  register: (name, email, password) =>
    apiCall('/auth/register', 'POST', { name, email, password }),
  
  login: (email, password) =>
    apiCall('/auth/login', 'POST', { email, password }),
  
  logout: () =>
    apiCall('/auth/logout', 'POST'),
  
  getProfile: () =>
    apiCall('/auth/me', 'GET'),
  
  changePassword: (oldPassword, newPassword) =>
    apiCall('/auth/change-password', 'PUT', { oldPassword, newPassword })
};

// Employee APIs
export const employeeAPI = {
  getAll: (page = 1, limit = 10) =>
    apiCall(`/employees?page=${page}&limit=${limit}`, 'GET'),
  
  getById: (id) =>
    apiCall(`/employees/${id}`, 'GET'),
  
  create: (data) =>
    apiCall('/employees', 'POST', data),
  
  update: (id, data) =>
    apiCall(`/employees/${id}`, 'PUT', data),
  
  delete: (id) =>
    apiCall(`/employees/${id}`, 'DELETE')
};

// Department APIs
export const departmentAPI = {
  getAll: () =>
    apiCall('/departments', 'GET'),
  
  getById: (id) =>
    apiCall(`/departments/${id}`, 'GET'),
  
  create: (data) =>
    apiCall('/departments', 'POST', data),
  
  update: (id, data) =>
    apiCall(`/departments/${id}`, 'PUT', data),
  
  delete: (id) =>
    apiCall(`/departments/${id}`, 'DELETE')
};

// Role APIs
export const roleAPI = {
  getAll: () =>
    apiCall('/roles', 'GET'),
  
  getById: (id) =>
    apiCall(`/roles/${id}`, 'GET'),
  
  create: (data) =>
    apiCall('/roles', 'POST', data),
  
  update: (id, data) =>
    apiCall(`/roles/${id}`, 'PUT', data),
  
  delete: (id) =>
    apiCall(`/roles/${id}`, 'DELETE')
};

// Attendance APIs
export const attendanceAPI = {
  checkIn: (employee_id) =>
    apiCall('/attendance/check-in', 'POST', { employee_id }),
  
  checkOut: (employee_id) =>
    apiCall('/attendance/check-out', 'POST', { employee_id }),
  
  getByEmployee: (employee_id) =>
    apiCall(`/attendance/employee/${employee_id}`, 'GET'),
  
  getByDate: (date) =>
    apiCall(`/attendance/date?date=${date}`, 'GET'),
  
  markAbsent: (employee_id, date) =>
    apiCall('/attendance/mark-absent', 'POST', { employee_id, date })
};

// Local Storage Helper
export const auth = {
  setToken: (token) => localStorage.setItem('token', token),
  getToken: () => localStorage.getItem('token'),
  removeToken: () => localStorage.removeItem('token'),
  isAuthenticated: () => !!localStorage.getItem('token')
};

// Alert Helper
export function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.innerHTML = `
    ${message}
    <span class="alert-close" onclick="this.parentElement.style.display='none';">&times;</span>
  `;
  
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(alertDiv, container.firstChild);
    setTimeout(() => alertDiv.remove(), 5000);
  }
}
