import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const LinkedCardChargeRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Linked Card Charge Requested']
)(
  RequestSchema.extend({
    amount: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentMandateDocumentId: zod.string().optional(),
    paynote: blueNodeField().optional(),
  })
);

export type LinkedCardChargeRequested = z.infer<
  typeof LinkedCardChargeRequestedSchema
>;
