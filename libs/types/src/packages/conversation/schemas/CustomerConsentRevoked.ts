import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from './Event';

export const CustomerConsentRevokedSchema = withTypeBlueId(
  blueIds['Conversation/Customer Consent Revoked']
)(
  EventSchema.extend({
    name: z.string().optional(),
    reason: z.string().optional(),
    revokedAt: TimestampSchema.optional(),
  })
);

export type CustomerConsentRevoked = z.infer<
  typeof CustomerConsentRevokedSchema
>;
