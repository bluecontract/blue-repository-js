import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  OperationSchema,
  SequentialWorkflowOperationSchema,
  TimelineChannelSchema,
} from '@blue-repository/core-dev';
import { MoneySchema } from './Money';

export const SmartTransferSchema = withTypeBlueId(blueIds['Smart Transfer'])(
  z.object({
    cancelled: z.boolean().optional(),
    captured: z.boolean().optional(),
    contracts: z
      .object({
        authorizeTransfer: OperationSchema.optional(),
        authorizeTransferImpl: SequentialWorkflowOperationSchema.optional(),
        bankChannel: TimelineChannelSchema.optional(),
        cancelTransfer: OperationSchema.optional(),
        cancelTransferImpl: SequentialWorkflowOperationSchema.optional(),
        captureTransfer: OperationSchema.optional(),
        captureTransferImpl: SequentialWorkflowOperationSchema.optional(),
        specifyPayeeAccountNumber: OperationSchema.optional(),
        specifyPayeeAccountNumberImpl:
          SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    payeeAccountNumber: z.string().optional(),
    payerAccountNumber: z.string().optional(),
    transferValue: MoneySchema.optional(),
  })
);

export type SmartTransfer = z.infer<typeof SmartTransferSchema>;
