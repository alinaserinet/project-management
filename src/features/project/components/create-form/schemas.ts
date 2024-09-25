import type { ZodType } from 'zod';
import { z } from 'zod';

import type { ProjectInput } from './types';

export const projectInputSchema: ZodType<ProjectInput> = z.object({
  name: z.string().min(1),
  description: z.string().min(10),
});

export type ProjectInputSchema = z.infer<typeof projectInputSchema>;
