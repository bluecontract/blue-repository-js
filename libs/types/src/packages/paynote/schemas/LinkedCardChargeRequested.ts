import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const LinkedCardChargeRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Linked Card Charge Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    paymentMandateDocumentId: z.string().optional(),
    paynote: blueNodeField().optional(),
  })
);

export type LinkedCardChargeRequested = z.infer<
  typeof LinkedCardChargeRequestedSchema
>;
