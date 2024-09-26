import { removeNullishKeys } from '@common/utils';
import axios from 'axios';

interface HttpClientParams {
  headers?: Record<string, string | null>;
}

export const createHttpClient = (params?: HttpClientParams) => {
  const { headers } = params ?? { headers: {} };

  const defaultHeaders: Record<string, string> = removeNullishKeys(
    headers ?? {},
  );

  return axios.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL ?? new Error('missing base url env'),
    timeout: +import.meta.env.VITE_API_TIMEOUT || 3000,
    headers: {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    },
  });
};
