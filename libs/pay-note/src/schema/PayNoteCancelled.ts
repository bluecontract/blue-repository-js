import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const PayNoteCancelledSchema = withTypeBlueId(
  blueIds['PayNote Cancelled']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteCancelled = z.infer<typeof PayNoteCancelledSchema>;
