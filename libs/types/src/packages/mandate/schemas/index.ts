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
  DgcgZoP3VEPpGGpUsFXHesdjA7yErSra447QaCkaRCgD: DocumentResponderMandateSchema,
  '47V2fyZMejS7LMCqJ66MvJ6v7VcmLL1zyxGQM44svV4H': MandateSchema,
  '3HtuEaYgkn8rV9xZf1x5uY2v7S9WXbVkcV3rj3Sy6arJ': MandateActivatedSchema,
  AFmG8N66vjJCjfjpuvvowYeTpreb1GrdM8uHzEiDuWto: MandateAuthoritySchema,
  EbNsQWy645JPPuWhkDw3XcrQk1neH2Z8KBsTvUTCrrmk: MandateAuthorityConfirmedSchema,
  EcXZbNZ5BjMCBEwEaPExWjK6KLLrt3Aoxx5TNQiA5R1A: MandateTerminatedSchema,
  '333eCC8uWcMWgw8Ev2FfvZgJMUK9pw8LGUa1D1cYTSsQ': MandateValidationSchema,
  '7i8qhMJFPdWvw8h71W8PztE6PNC1TDc1xUD8yvYGcp4R': OperationMandateSchema,
  por6Zfmm5x6kxeeeoARgZRVLWrZaDkTU3Dybc2TncPx: StatusActiveSchema,
  '65Lj5NBD9BaeXbWq1qQYcCyxV3EoH7r3rj877KDzbWCP':
    StatusAuthorityConfirmedSchema,
  CMW7kGBbCw1uDmaV5ydLVnzRSo2iaBNDFTspMX9QdvZ2: StatusTerminatedSchema,
};
