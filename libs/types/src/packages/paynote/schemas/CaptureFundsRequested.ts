import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const CaptureFundsRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Capture Funds Requested']
)(
  RequestSchema.extend({
    amount: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CaptureFundsRequested = z.infer<typeof CaptureFundsRequestedSchema>;
