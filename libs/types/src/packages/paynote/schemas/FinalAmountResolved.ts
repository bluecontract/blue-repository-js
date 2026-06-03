import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const FinalAmountResolvedSchema: any = withTypeBlueId(
  blueIds['PayNote/Final Amount Resolved']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    finalAmount: zod.number().optional(),
    name: zod.string().optional(),
  })
);

export type FinalAmountResolved = z.infer<typeof FinalAmountResolvedSchema>;
