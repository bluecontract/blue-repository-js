import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentSchema } from './Document';

export const PaymentSchema = withTypeBlueId(blueIds['Common/Payment'])(
  DocumentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Payment = z.infer<typeof PaymentSchema>;
