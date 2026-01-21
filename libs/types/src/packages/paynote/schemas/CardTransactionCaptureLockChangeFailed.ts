import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CardTransactionCaptureLockChangeFailedSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Capture Lock Change Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type CardTransactionCaptureLockChangeFailed = z.infer<
  typeof CardTransactionCaptureLockChangeFailedSchema
>;
