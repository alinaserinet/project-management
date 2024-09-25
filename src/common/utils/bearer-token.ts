export const generateBearerToken = (token?: string | null) => {
  return token ? `Bearer ${token}` : null;
};
