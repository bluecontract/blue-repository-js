import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { DocumentStatusSchema } from '../../conversation/schemas/DocumentStatus';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowSchema } from '../../conversation/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';
import { PayNoteSchema } from './PayNote';

export const PayNoteDeliverySchema = withTypeBlueId(
  blueIds['PayNote/PayNote Delivery']
)(
  z.object({
    cardTransactionDetails: CardTransactionDetailsSchema.optional(),
    clientAcceptedAt: TimestampSchema.optional(),
    clientDecisionStatus: z.string().optional(),
    clientRejectedAt: TimestampSchema.optional(),
    contracts: z
      .object({
        initialize: SequentialWorkflowSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        markPayNoteAcceptedByClient: OperationSchema.optional(),
        markPayNoteAcceptedByClientImpl:
          SequentialWorkflowOperationSchema.optional(),
        markPayNoteRejectedByClient: OperationSchema.optional(),
        markPayNoteRejectedByClientImpl:
          SequentialWorkflowOperationSchema.optional(),
        payNoteDeliverer: MyOSTimelineChannelSchema.optional(),
        payNoteReceiver: MyOSTimelineChannelSchema.optional(),
        payNoteSender: MyOSTimelineChannelSchema.optional(),
        reportDeliveryError: OperationSchema.optional(),
        reportDeliveryErrorImpl: SequentialWorkflowOperationSchema.optional(),
        updateTransactionIdentificationStatus: OperationSchema.optional(),
        updateTransactionIdentificationStatusImpl:
          SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    deliveryError: z.string().optional(),
    deliveryStatus: DocumentStatusSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    payNote: PayNoteSchema.optional(),
    transactionIdentificationStatus: z.string().optional(),
  })
);

export type PayNoteDelivery = z.infer<typeof PayNoteDeliverySchema>;
