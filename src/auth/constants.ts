export const jwtConstants = {
  secret: process.env.JWT_SECRET_KEY,
  expiresIn: process.env.JWT_EXPIRES_IN,
  refresh: process.env.JWT_REFRESH_KEY,
};
