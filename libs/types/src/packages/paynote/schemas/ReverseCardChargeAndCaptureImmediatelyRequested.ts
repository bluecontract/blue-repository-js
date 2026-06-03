import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const ReverseCardChargeAndCaptureImmediatelyRequestedSchema: any =
  withTypeBlueId(
    blueIds['PayNote/Reverse Card Charge and Capture Immediately Requested']
  )(
    RequestSchema.extend({
      amount: zod.number().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      paymentMandateDocumentId: zod.string().optional(),
      paynote: blueNodeField().optional(),
    })
  );

export type ReverseCardChargeAndCaptureImmediatelyRequested = z.infer<
  typeof ReverseCardChargeAndCaptureImmediatelyRequestedSchema
>;
