import type { ZodTypeAny } from 'zod';
import { DocumentResponderMandateSchema } from './DocumentResponderMandate';
import { MandateSchema } from './Mandate';
import { MandateActivatedSchema } from './MandateActivated';
import { MandateAuthoritySchema } from './MandateAuthority';
import { MandateAuthorityConfirmedSchema } from './MandateAuthorityConfirmed';
import { MandateTerminatedSchema } from './MandateTerminated';
import { MandateValidationSchema } from './MandateValidation';
import { OperationMandateSchema } from './OperationMandate';
import { StatusActiveSchema } from './StatusActive';
import { StatusAuthorityConfirmedSchema } from './StatusAuthorityConfirmed';
import { StatusTerminatedSchema } from './StatusTerminated';

export { DocumentResponderMandateSchema } from './DocumentResponderMandate';
export { MandateSchema } from './Mandate';
export { MandateActivatedSchema } from './MandateActivated';
export { MandateAuthoritySchema } from './MandateAuthority';
export { MandateAuthorityConfirmedSchema } from './MandateAuthorityConfirmed';
export { MandateTerminatedSchema } from './MandateTerminated';
export { MandateValidationSchema } from './MandateValidation';
export { OperationMandateSchema } from './OperationMandate';
export { StatusActiveSchema } from './StatusActive';
export { StatusAuthorityConfirmedSchema } from './StatusAuthorityConfirmed';
export { StatusTerminatedSchema } from './StatusTerminated';

export const schemas: Record<string, ZodTypeAny> = {
  '6FGzRQMZUyhSXUnrfVA16sc1mMwvGHtAxQizdJps46HB':
    DocumentResponderMandateSchema,
  G1G5Rp4bmcmvDrnM53JjXF3YXLwdBFqpqVZtXynrjZPC: MandateSchema,
  '3HtuEaYgkn8rV9xZf1x5uY2v7S9WXbVkcV3rj3Sy6arJ': MandateActivatedSchema,
  '4EeyF2BwPQRnPnfoVnZmeii9Yg3vGJTmMHDk9F7QgkQn': MandateAuthoritySchema,
  FrxKioNPTEtuWkvxdeFQ66SbPAEUFg19veQMG1J6xo9J: MandateAuthorityConfirmedSchema,
  C3Y1zAyhCiu9wJ23gYg6vqFnVQyXKZeiHow9CzJ4W9t7: MandateTerminatedSchema,
  '333eCC8uWcMWgw8Ev2FfvZgJMUK9pw8LGUa1D1cYTSsQ': MandateValidationSchema,
  '2KjGsrrDZStp598xhisMdNskb6wdehS173WvZN3vhHAV': OperationMandateSchema,
  por6Zfmm5x6kxeeeoARgZRVLWrZaDkTU3Dybc2TncPx: StatusActiveSchema,
  '65Lj5NBD9BaeXbWq1qQYcCyxV3EoH7r3rj877KDzbWCP':
    StatusAuthorityConfirmedSchema,
  CMW7kGBbCw1uDmaV5ydLVnzRSo2iaBNDFTspMX9QdvZ2: StatusTerminatedSchema,
};
