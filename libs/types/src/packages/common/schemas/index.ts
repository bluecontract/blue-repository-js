import { CurrencySchema } from './Currency';
import { NamedEventSchema } from './NamedEvent';
import { TimestampSchema } from './Timestamp';

export { CurrencySchema } from './Currency';
export { NamedEventSchema } from './NamedEvent';
export { TimestampSchema } from './Timestamp';

export const schemas = {
  CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc: CurrencySchema,
  GrD4wCAmKoK8rm8Pztmv9GkFBRwJy4zpDUzDWHtsEJCX: NamedEventSchema,
  GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs: TimestampSchema,
} as const;
