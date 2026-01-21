import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

export const CardTransactionCaptureUnlockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Capture Unlock Requested']
)(
  RequestSchema.extend({
    cardTransactionDetails: CardTransactionDetailsSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CardTransactionCaptureUnlockRequested = z.infer<
  typeof CardTransactionCaptureUnlockRequestedSchema
>;
