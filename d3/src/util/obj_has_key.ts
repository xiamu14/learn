export const objHasKey = (obj: Record<string, any>, key: string) =>
  Object.prototype.hasOwnProperty.call(obj, key);
