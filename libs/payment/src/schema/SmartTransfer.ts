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
    cancelled: z.unknown().optional(),
    captured: z.unknown().optional(),
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
    payeeAccountNumber: z.unknown().optional(),
    payerAccountNumber: z.unknown().optional(),
    transferValue: MoneySchema.optional(),
  })
);

export type SmartTransfer = z.infer<typeof SmartTransferSchema>;
