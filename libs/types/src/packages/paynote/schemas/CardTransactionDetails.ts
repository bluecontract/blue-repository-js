import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CardTransactionDetailsSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Details']
)(
  z.object({
    authorizationCode: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    retrievalReferenceNumber: z.string().optional(),
    systemTraceAuditNumber: z.string().optional(),
    transmissionDateTime: z.string().optional(),
  })
);

export type CardTransactionDetails = z.infer<
  typeof CardTransactionDetailsSchema
>;
