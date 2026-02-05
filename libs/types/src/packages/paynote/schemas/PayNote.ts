import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { TimelineChannelSchema } from '../../conversation/schemas/TimelineChannel';
import { TransactionStatusSchema } from './TransactionStatus';

export const PayNoteSchema = withTypeBlueId(blueIds['PayNote/PayNote'])(
  z.object({
    amount: z
      .object({
        captured: z.number().optional(),
        description: z.string().optional(),
        reserved: z.number().optional(),
        total: z.number().optional(),
      })
      .optional(),
    contracts: z
      .object({
        guarantorChannel: TimelineChannelSchema.optional(),
        guarantorUpdate: OperationSchema.optional(),
        guarantorUpdateImpl: SequentialWorkflowOperationSchema.optional(),
        payeeChannel: TimelineChannelSchema.optional(),
        payerChannel: TimelineChannelSchema.optional(),
      })
      .optional(),
    currency: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    payNoteInitialStateDescription: z
      .object({
        details: z.string().optional(),
        summary: z.string().optional(),
      })
      .optional(),
    status: z.string().optional(),
    transactionStatus: TransactionStatusSchema.optional(),
  })
);

export type PayNote = z.infer<typeof PayNoteSchema>;
