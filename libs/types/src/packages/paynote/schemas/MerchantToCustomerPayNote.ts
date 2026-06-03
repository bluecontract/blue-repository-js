import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { PayNoteSchema } from './PayNote';

const zod = z as any;

export const MerchantToCustomerPayNoteSchema: any = withTypeBlueId(
  blueIds['PayNote/Merchant To Customer PayNote']
)(
  PayNoteSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MerchantToCustomerPayNote = z.infer<
  typeof MerchantToCustomerPayNoteSchema
>;
