import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { SearchContractSchema } from '../../myos/schemas/SearchContract';

const zod = z as any;

export const PayNoteSchema: any = withTypeBlueId(blueIds['PayNote/PayNote'])(
  zod.object({
    amount: zod
      .object({
        completed: zod.number().optional(),
        description: zod.string().optional(),
        expectedTotal: zod.number().optional(),
        finalResolved: zod.number().optional(),
        reversed: zod.number().optional(),
        secured: zod.number().optional(),
      })
      .optional(),
    contracts: zod
      .object({
        acceptPayNote: zod.lazy(() => OperationSchema).optional(),
        acceptPayNoteImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        cancelBeforeCompletion: zod.lazy(() => OperationSchema).optional(),
        cancelBeforeCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        completePayment: zod.lazy(() => OperationSchema).optional(),
        completePaymentImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        confirmPayeeAssignment: zod.lazy(() => OperationSchema).optional(),
        confirmPayeeAssignmentImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        confirmTransactionDetailsUpdated: zod
          .lazy(() => OperationSchema)
          .optional(),
        confirmTransactionDetailsUpdatedImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineCancelBeforeCompletion: zod
          .lazy(() => OperationSchema)
          .optional(),
        declineCancelBeforeCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineCompletePayment: zod.lazy(() => OperationSchema).optional(),
        declineCompletePaymentImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineReverseAfterCompletion: zod
          .lazy(() => OperationSchema)
          .optional(),
        declineReverseAfterCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineSecureFunds: zod.lazy(() => OperationSchema).optional(),
        declineSecureFundsImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failCancelBeforeCompletion: zod.lazy(() => OperationSchema).optional(),
        failCancelBeforeCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failCompletePayment: zod.lazy(() => OperationSchema).optional(),
        failCompletePaymentImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failPaymentCompletionLockChange: zod
          .lazy(() => OperationSchema)
          .optional(),
        failPaymentCompletionLockChangeImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failPaymentReversalLockChange: zod
          .lazy(() => OperationSchema)
          .optional(),
        failPaymentReversalLockChangeImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failReverseAfterCompletion: zod.lazy(() => OperationSchema).optional(),
        failReverseAfterCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failSecureFunds: zod.lazy(() => OperationSchema).optional(),
        failSecureFundsImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failTransactionDetailsUpdate: zod
          .lazy(() => OperationSchema)
          .optional(),
        failTransactionDetailsUpdateImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failTransactionDetailsUpdateLockChange: zod
          .lazy(() => OperationSchema)
          .optional(),
        failTransactionDetailsUpdateLockChangeImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        guarantorChannel: blueNodeField().optional(),
        initialize: zod.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: blueNodeField().optional(),
        lockPaymentCompletion: zod.lazy(() => OperationSchema).optional(),
        lockPaymentCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        lockPaymentReversal: zod.lazy(() => OperationSchema).optional(),
        lockPaymentReversalImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        lockTransactionDetailsUpdate: zod
          .lazy(() => OperationSchema)
          .optional(),
        lockTransactionDetailsUpdateImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        payeeChannel: blueNodeField().optional(),
        payerChannel: blueNodeField().optional(),
        recordTransactionInitiated: zod.lazy(() => OperationSchema).optional(),
        recordTransactionInitiatedImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        recordTransactionInitiationFailed: zod
          .lazy(() => OperationSchema)
          .optional(),
        recordTransactionInitiationFailedImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectFinalAmountResolution: zod.lazy(() => OperationSchema).optional(),
        rejectFinalAmountResolutionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectPayeeAssignment: zod.lazy(() => OperationSchema).optional(),
        rejectPayeeAssignmentImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectPayNote: zod.lazy(() => OperationSchema).optional(),
        rejectPayNoteImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectTransactionDetailsUpdate: zod
          .lazy(() => OperationSchema)
          .optional(),
        rejectTransactionDetailsUpdateImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        resolveFinalAmount: zod.lazy(() => OperationSchema).optional(),
        resolveFinalAmountImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        reverseAfterCompletion: zod.lazy(() => OperationSchema).optional(),
        reverseAfterCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        search: zod.lazy(() => SearchContractSchema).optional(),
        secureFunds: zod.lazy(() => OperationSchema).optional(),
        secureFundsImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        unlockPaymentCompletion: zod.lazy(() => OperationSchema).optional(),
        unlockPaymentCompletionImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        unlockPaymentReversal: zod.lazy(() => OperationSchema).optional(),
        unlockPaymentReversalImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        unlockTransactionDetailsUpdate: zod
          .lazy(() => OperationSchema)
          .optional(),
        unlockTransactionDetailsUpdateImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    controls: zod
      .object({
        completionLocked: zod.boolean().optional(),
        reversalLocked: zod.boolean().optional(),
        transactionDetailsUpdateLocked: zod.boolean().optional(),
      })
      .optional(),
    currency: zod.lazy(() => CurrencySchema).optional(),
    description: zod.string().optional(),
    kind: zod.string().optional(),
    name: zod.string().optional(),
    payNoteInitialStateDescription: zod
      .object({
        details: zod.string().optional(),
        summary: zod.string().optional(),
      })
      .optional(),
    status: zod.string().optional(),
    transactionDetails: blueNodeField().optional(),
  })
);

export type PayNote = z.infer<typeof PayNoteSchema>;
