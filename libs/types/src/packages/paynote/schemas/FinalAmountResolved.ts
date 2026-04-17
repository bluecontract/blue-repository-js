import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FinalAmountResolvedSchema = withTypeBlueId(
  blueIds['PayNote/Final Amount Resolved']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    finalAmount: z.number().optional(),
    name: z.string().optional(),
  })
);

export type FinalAmountResolved = z.infer<typeof FinalAmountResolvedSchema>;
