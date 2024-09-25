import type { ID } from './id';

export type NoId<T extends { id: ID }> = Omit<T, 'id'>;
