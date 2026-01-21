import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

export const CardTransactionCaptureLockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Capture Lock Requested']
)(
  RequestSchema.extend({
    cardTransactionDetails: CardTransactionDetailsSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CardTransactionCaptureLockRequested = z.infer<
  typeof CardTransactionCaptureLockRequestedSchema
>;
