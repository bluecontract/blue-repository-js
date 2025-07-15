import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MoneySchema } from './Money';

export const TransferAuthorizationRequestedSchema = withTypeBlueId(
  blueIds['Transfer Authorization Requested']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    transferValue: MoneySchema.optional(),
  })
);

export type TransferAuthorizationRequested = z.infer<
  typeof TransferAuthorizationRequestedSchema
>;
