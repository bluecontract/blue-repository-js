import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CardTransactionDetailsSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Transaction Details']
)(
  zod.object({
    authorizationCode: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    retrievalReferenceNumber: zod.string().optional(),
    systemTraceAuditNumber: zod.string().optional(),
    transmissionDateTime: zod.string().optional(),
  })
);

export type CardTransactionDetails = z.infer<
  typeof CardTransactionDetailsSchema
>;
