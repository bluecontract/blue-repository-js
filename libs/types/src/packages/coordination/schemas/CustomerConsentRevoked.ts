import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from './Event';

export const CustomerConsentRevokedSchema = withTypeBlueId(
  blueIds['Coordination/Customer Consent Revoked']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    revokedAt: z.lazy(() => TimestampSchema).optional(),
  })
);

export type CustomerConsentRevoked = z.infer<
  typeof CustomerConsentRevokedSchema
>;
