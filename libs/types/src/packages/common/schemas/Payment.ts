import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

const zod = z as any;

export const PaymentSchema: any = withTypeBlueId(blueIds['Common/Payment'])(
  DocumentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Payment = z.infer<typeof PaymentSchema>;
