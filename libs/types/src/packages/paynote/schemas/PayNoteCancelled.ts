import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayNoteCancelledSchema = withTypeBlueId(blueIds['PayNote/PayNote Cancelled'])(
  ResponseSchema.extend({})
);

export type PayNoteCancelled = z.infer<typeof PayNoteCancelledSchema>;
