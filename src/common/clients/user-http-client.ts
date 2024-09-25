import { getAccessToken } from '@common/storages';
import { generateBearerToken } from '@common/utils';

import { createHttpClient } from './http-client';

export const userHttpClient = createHttpClient({
  headers: { Authorization: generateBearerToken(getAccessToken()) },
});
