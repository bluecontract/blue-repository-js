import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from './Event';

const zod = z as any;

export const CustomerConsentRevokedSchema: any = withTypeBlueId(
  blueIds['Coordination/Customer Consent Revoked']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    revokedAt: zod.lazy(() => TimestampSchema).optional(),
  })
);

export type CustomerConsentRevoked = z.infer<
  typeof CustomerConsentRevokedSchema
>;
