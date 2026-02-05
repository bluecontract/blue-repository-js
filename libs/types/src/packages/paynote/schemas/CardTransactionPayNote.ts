import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';
import { PayNoteSchema } from './PayNote';

export const CardTransactionPayNoteSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction PayNote']
)(
  PayNoteSchema.extend({
    cardTransactionDetails: CardTransactionDetailsSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CardTransactionPayNote = z.infer<
  typeof CardTransactionPayNoteSchema
>;
