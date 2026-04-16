import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FundsSecuringFailedSchema = withTypeBlueId(
  blueIds['PayNote/Funds Securing Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type FundsSecuringFailed = z.infer<typeof FundsSecuringFailedSchema>;
