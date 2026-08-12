import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PayNoteCancelledSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Cancelled']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PayNoteCancelled = z.infer<typeof PayNoteCancelledSchema>;
