import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MoneySchema } from './Money';
import {
  OperationSchema,
  SequentialWorkflowOperationSchema,
  TimelineChannelSchema,
} from '@blue-repository/core-dev';

export const SmartTransferSchema = withTypeBlueId(blueIds['Smart Transfer'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    payerAccountNumber: z.string().optional(),
    payeeAccountNumber: z.string().optional(),
    captured: z.boolean().optional(),
    transferValue: MoneySchema.optional(),
    cancelled: z.boolean().optional(),
    contracts: z
      .object({
        authorizeTransferImpl: SequentialWorkflowOperationSchema.optional(),
        captureTransfer: OperationSchema.optional(),
        captureTransferImpl: SequentialWorkflowOperationSchema.optional(),
        specifyPayeeAccountNumber: OperationSchema.optional(),
        cancelTransfer: OperationSchema.optional(),
        specifyPayeeAccountNumberImpl:
          SequentialWorkflowOperationSchema.optional(),
        cancelTransferImpl: SequentialWorkflowOperationSchema.optional(),
        authorizeTransfer: OperationSchema.optional(),
        bankChannel: TimelineChannelSchema.optional(),
      })
      .optional(),
  })
);

export type SmartTransfer = z.infer<typeof SmartTransferSchema>;
