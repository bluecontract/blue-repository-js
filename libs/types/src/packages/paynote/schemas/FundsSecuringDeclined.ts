import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const FundsSecuringDeclinedSchema: any = withTypeBlueId(
  blueIds['PayNote/Funds Securing Declined']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type FundsSecuringDeclined = z.infer<typeof FundsSecuringDeclinedSchema>;
