import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';
import { PayNoteSchema } from './PayNote';

const zod = z as any;

export const CardTransactionPayNoteSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Transaction PayNote']
)(
  PayNoteSchema.extend({
    cardTransactionDetails: zod
      .lazy(() => CardTransactionDetailsSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CardTransactionPayNote = z.infer<
  typeof CardTransactionPayNoteSchema
>;
