import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

const zod = z as any;

export const CardTransactionCaptureUnlockRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Transaction Capture Unlock Requested']
)(
  RequestSchema.extend({
    cardTransactionDetails: zod
      .lazy(() => CardTransactionDetailsSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CardTransactionCaptureUnlockRequested = z.infer<
  typeof CardTransactionCaptureUnlockRequestedSchema
>;
