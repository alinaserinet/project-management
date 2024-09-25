import type { ID } from '@common/types';

export function keyById<T extends { id: ID }>(array?: T[]) {
  if (!array?.length) return {} as Record<string, T>;

  return array.reduce<Record<string, T>>((obj, value) => {
    return {
      ...obj,
      [value.id]: value,
    };
  }, {});
}
