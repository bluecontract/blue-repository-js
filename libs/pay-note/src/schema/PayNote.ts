import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineChannelSchema } from '@blue-repository/core-dev';

export const PayNoteSchema = withTypeBlueId(blueIds['PayNote'])(
  z.object({
    amount: z
      .object({
        captured: z.unknown().optional(),
        description: z.string().optional(),
        reserved: z.unknown().optional(),
        total: z.unknown().optional(),
      })
      .optional(),
    contracts: z
      .object({
        guarantorChannel: TimelineChannelSchema.optional(),
        payeeChannel: TimelineChannelSchema.optional(),
        payerChannel: TimelineChannelSchema.optional(),
      })
      .optional(),
    currency: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    payNoteInitialStateDescription: z
      .object({
        details: z.unknown().optional(),
        summary: z.unknown().optional(),
      })
      .optional(),
    status: z.unknown().optional(),
  })
);

export type PayNote = z.infer<typeof PayNoteSchema>;
