export function removeNullishKeys(record: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(record).filter(
      ([_, value]) => value !== undefined && value !== null,
    ),
  );
}
