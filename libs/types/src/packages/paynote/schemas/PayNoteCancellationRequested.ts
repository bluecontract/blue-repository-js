import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PayNoteCancellationRequestedSchema = withTypeBlueId(blueIds['PayNote/PayNote Cancellation Requested'])(
  RequestSchema.extend({
    "childPayNote": blueNodeField().optional()
  })
);

export type PayNoteCancellationRequested = z.infer<typeof PayNoteCancellationRequestedSchema>;
