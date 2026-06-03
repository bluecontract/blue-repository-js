import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { DocumentBootstrapRequestedSchema } from '../../coordination/schemas/DocumentBootstrapRequested';
import { DocumentStatusSchema } from '../../coordination/schemas/DocumentStatus';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

const zod = z as any;

export const PayNoteDeliverySchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Delivery']
)(
  zod.object({
    cardTransactionDetails: zod
      .lazy(() => CardTransactionDetailsSchema)
      .optional(),
    clientAcceptedAt: zod.lazy(() => TimestampSchema).optional(),
    clientDecisionStatus: zod.string().optional(),
    clientRejectedAt: zod.lazy(() => TimestampSchema).optional(),
    contracts: zod
      .object({
        acceptPayNote: zod.lazy(() => OperationSchema).optional(),
        acceptPayNoteImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        initialize: zod.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: blueNodeField().optional(),
        payNoteDeliverer: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        payNoteSender: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        rejectPayNote: zod.lazy(() => OperationSchema).optional(),
        rejectPayNoteImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        reportDeliveryError: zod.lazy(() => OperationSchema).optional(),
        reportDeliveryErrorImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        updateTransactionIdentificationStatus: zod
          .lazy(() => OperationSchema)
          .optional(),
        updateTransactionIdentificationStatusImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    deliveryError: zod.string().optional(),
    deliveryStatus: zod.lazy(() => DocumentStatusSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentMandateBootstrapRequest: zod
      .lazy(() => DocumentBootstrapRequestedSchema)
      .optional(),
    payNoteBootstrapRequest: zod
      .lazy(() => DocumentBootstrapRequestedSchema)
      .optional(),
    transactionIdentificationStatus: zod.string().optional(),
  })
);

export type PayNoteDelivery = z.infer<typeof PayNoteDeliverySchema>;
