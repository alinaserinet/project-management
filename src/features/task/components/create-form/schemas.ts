import type { ZodType } from 'zod';
import { z } from 'zod';

import type { TaskInput } from './types';

export const taskInputSchema: ZodType<TaskInput> = z.object({
  title: z.string().min(3),
  description: z.string(),
  date: z
    .string()
    .regex(/^(20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, {
      message: "Invalid date format. Expected 'YYYY-MM-DD'.",
    }),
});

export type TaskInputSchema = z.infer<typeof taskInputSchema>;
