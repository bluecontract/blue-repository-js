import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const PayNoteSchema = withTypeBlueId(blueIds['PayNote/PayNote'])(
  z.object({
    "status": z.string().optional(),
    "currency": z.string().optional(),
    "amount": z.object({
        "total": z.number().int().optional(),
        "reserved": z.number().int().optional(),
        "captured": z.number().int().optional()
      }).optional(),
    "payNoteInitialStateDescription": z.object({
        "summary": z.string().optional(),
        "details": z.string().optional()
      }).optional()
  })
);

export type PayNote = z.infer<typeof PayNoteSchema>;
