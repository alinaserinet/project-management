import type { ProjectInput } from '@project/components/create-form/types.ts';
import type { ZodType } from 'zod';
import { z } from 'zod';

export const projectInputSchema: ZodType<ProjectInput> = z.object({
  name: z.string().min(1),
  description: z.string().min(10),
});

export type ProjectInputSchema = z.infer<typeof projectInputSchema>;
