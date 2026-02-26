import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const LinkedCardChargeAndCaptureImmediatelyRequestedSchema =
  withTypeBlueId(
    blueIds['PayNote/Linked Card Charge and Capture Immediately Requested']
  )(
    RequestSchema.extend({
      amount: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      paymentMandateDocumentId: z.string().optional(),
      paynote: blueNodeField().optional(),
    })
  );

export type LinkedCardChargeAndCaptureImmediatelyRequested = z.infer<
  typeof LinkedCardChargeAndCaptureImmediatelyRequestedSchema
>;
