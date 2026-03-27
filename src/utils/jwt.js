import jwt from 'jsonwebtoken';

// 1. අලුත් Token එකක් සෑදීම (Login වීමේදී භාවිතා වේ)
export const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// 2. Token එක නිවැරදිදැයි බැලීම (Middleware වලදී භාවිතා වේ)
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};