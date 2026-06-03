import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const ReverseCardChargeRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Reverse Card Charge Requested']
)(
  RequestSchema.extend({
    amount: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentMandateDocumentId: zod.string().optional(),
    paynote: blueNodeField().optional(),
  })
);

export type ReverseCardChargeRequested = z.infer<
  typeof ReverseCardChargeRequestedSchema
>;
