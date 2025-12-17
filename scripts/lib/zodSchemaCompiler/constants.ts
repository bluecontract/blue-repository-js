import { Properties } from '@blue-labs/language';

export const RESERVED_KEYS: ReadonlySet<string> = new Set<string>([
  ...Properties.OBJECT_SPECIFIC_KEYS,
  'schema',
]);
