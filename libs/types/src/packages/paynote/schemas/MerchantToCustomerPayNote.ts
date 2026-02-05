import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { PayNoteSchema } from './PayNote';

export const MerchantToCustomerPayNoteSchema = withTypeBlueId(
  blueIds['PayNote/Merchant To Customer PayNote']
)(
  PayNoteSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MerchantToCustomerPayNote = z.infer<
  typeof MerchantToCustomerPayNoteSchema
>;
