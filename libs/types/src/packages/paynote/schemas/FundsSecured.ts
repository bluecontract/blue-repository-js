import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FundsSecuredSchema = withTypeBlueId(
  blueIds['PayNote/Funds Secured']
)(
  ResponseSchema.extend({
    amountSecured: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type FundsSecured = z.infer<typeof FundsSecuredSchema>;
