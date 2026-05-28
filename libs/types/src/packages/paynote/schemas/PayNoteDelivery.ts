import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { DocumentBootstrapRequestedSchema } from '../../coordination/schemas/DocumentBootstrapRequested';
import { DocumentStatusSchema } from '../../coordination/schemas/DocumentStatus';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

export const PayNoteDeliverySchema = withTypeBlueId(
  blueIds['PayNote/PayNote Delivery']
)(
  z.object({
    cardTransactionDetails: z
      .lazy(() => CardTransactionDetailsSchema)
      .optional(),
    clientAcceptedAt: z.lazy(() => TimestampSchema).optional(),
    clientDecisionStatus: z.string().optional(),
    clientRejectedAt: z.lazy(() => TimestampSchema).optional(),
    contracts: z
      .object({
        acceptPayNote: z.lazy(() => OperationSchema).optional(),
        acceptPayNoteImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        initialize: z.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: z
          .lazy(() => LifecycleEventChannelSchema)
          .optional(),
        payNoteDeliverer: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        payNoteSender: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        rejectPayNote: z.lazy(() => OperationSchema).optional(),
        rejectPayNoteImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        reportDeliveryError: z.lazy(() => OperationSchema).optional(),
        reportDeliveryErrorImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        updateTransactionIdentificationStatus: z
          .lazy(() => OperationSchema)
          .optional(),
        updateTransactionIdentificationStatusImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    deliveryError: z.string().optional(),
    deliveryStatus: z.lazy(() => DocumentStatusSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    paymentMandateBootstrapRequest: z
      .lazy(() => DocumentBootstrapRequestedSchema)
      .optional(),
    payNoteBootstrapRequest: z
      .lazy(() => DocumentBootstrapRequestedSchema)
      .optional(),
    transactionIdentificationStatus: z.string().optional(),
  })
);

export type PayNoteDelivery = z.infer<typeof PayNoteDeliverySchema>;
