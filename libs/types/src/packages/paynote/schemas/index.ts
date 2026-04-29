import { CancelBeforeCompletionRequestedSchema } from './CancelBeforeCompletionRequested';
import { CaptureDeclinedSchema } from './CaptureDeclined';
import { CaptureFailedSchema } from './CaptureFailed';
import { CaptureFundsRequestedSchema } from './CaptureFundsRequested';
import { CardChargeCompletedSchema } from './CardChargeCompleted';
import { CardChargeRespondedSchema } from './CardChargeResponded';
import { CardTransactionCaptureLockChangeFailedSchema } from './CardTransactionCaptureLockChangeFailed';
import { CardTransactionCaptureLockRequestedSchema } from './CardTransactionCaptureLockRequested';
import { CardTransactionCaptureLockedSchema } from './CardTransactionCaptureLocked';
import { CardTransactionCaptureUnlockRequestedSchema } from './CardTransactionCaptureUnlockRequested';
import { CardTransactionCaptureUnlockedSchema } from './CardTransactionCaptureUnlocked';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';
import { CardTransactionMonitoringRequestRejectedSchema } from './CardTransactionMonitoringRequestRejected';
import { CardTransactionMonitoringStartedSchema } from './CardTransactionMonitoringStarted';
import { CardTransactionMonitoringStoppedSchema } from './CardTransactionMonitoringStopped';
import { CardTransactionPayNoteSchema } from './CardTransactionPayNote';
import { CardTransactionReportSchema } from './CardTransactionReport';
import { ChildPayNoteIssuanceDeclinedSchema } from './ChildPayNoteIssuanceDeclined';
import { ChildPayNoteIssuedSchema } from './ChildPayNoteIssued';
import { CompletePaymentRequestedSchema } from './CompletePaymentRequested';
import { FinalAmountResolutionRejectedSchema } from './FinalAmountResolutionRejected';
import { FinalAmountResolutionRequestedSchema } from './FinalAmountResolutionRequested';
import { FinalAmountResolvedSchema } from './FinalAmountResolved';
import { FundsCapturedSchema } from './FundsCaptured';
import { FundsReservedSchema } from './FundsReserved';
import { FundsSecuredSchema } from './FundsSecured';
import { FundsSecuringDeclinedSchema } from './FundsSecuringDeclined';
import { FundsSecuringFailedSchema } from './FundsSecuringFailed';
import { IssueChildPayNoteRequestedSchema } from './IssueChildPayNoteRequested';
import { LinkedCardChargeAndCaptureImmediatelyRequestedSchema } from './LinkedCardChargeAndCaptureImmediatelyRequested';
import { LinkedCardChargeRequestedSchema } from './LinkedCardChargeRequested';
import { LinkedPayNoteStartFailedSchema } from './LinkedPayNoteStartFailed';
import { LinkedPayNoteStartRespondedSchema } from './LinkedPayNoteStartResponded';
import { LinkedPayNoteStartedSchema } from './LinkedPayNoteStarted';
import { MerchantToCustomerPayNoteSchema } from './MerchantToCustomerPayNote';
import { PayeeAssignmentConfirmedSchema } from './PayeeAssignmentConfirmed';
import { PayeeAssignmentRejectedSchema } from './PayeeAssignmentRejected';
import { PayeeAssignmentRequestedSchema } from './PayeeAssignmentRequested';
import { PaymentCancellationDeclinedSchema } from './PaymentCancellationDeclined';
import { PaymentCancellationFailedSchema } from './PaymentCancellationFailed';
import { PaymentCancelledBeforeCompletionSchema } from './PaymentCancelledBeforeCompletion';
import { PaymentCompletedSchema } from './PaymentCompleted';
import { PaymentCompletionDeclinedSchema } from './PaymentCompletionDeclined';
import { PaymentCompletionFailedSchema } from './PaymentCompletionFailed';
import { PaymentCompletionLockChangeFailedSchema } from './PaymentCompletionLockChangeFailed';
import { PaymentCompletionLockRequestedSchema } from './PaymentCompletionLockRequested';
import { PaymentCompletionLockedSchema } from './PaymentCompletionLocked';
import { PaymentCompletionUnlockRequestedSchema } from './PaymentCompletionUnlockRequested';
import { PaymentCompletionUnlockedSchema } from './PaymentCompletionUnlocked';
import { PaymentMandateSchema } from './PaymentMandate';
import { PaymentMandateAttachedSchema } from './PaymentMandateAttached';
import { PaymentMandateAttachmentFailedSchema } from './PaymentMandateAttachmentFailed';
import { PaymentMandateSpendAuthorizationRequestedSchema } from './PaymentMandateSpendAuthorizationRequested';
import { PaymentMandateSpendAuthorizationRespondedSchema } from './PaymentMandateSpendAuthorizationResponded';
import { PaymentMandateSpendSettledSchema } from './PaymentMandateSpendSettled';
import { PaymentMandateSpendSettlementRespondedSchema } from './PaymentMandateSpendSettlementResponded';
import { PaymentReversalDeclinedSchema } from './PaymentReversalDeclined';
import { PaymentReversalFailedSchema } from './PaymentReversalFailed';
import { PaymentReversalLockChangeFailedSchema } from './PaymentReversalLockChangeFailed';
import { PaymentReversalLockRequestedSchema } from './PaymentReversalLockRequested';
import { PaymentReversalLockedSchema } from './PaymentReversalLocked';
import { PaymentReversalUnlockRequestedSchema } from './PaymentReversalUnlockRequested';
import { PaymentReversalUnlockedSchema } from './PaymentReversalUnlocked';
import { PaymentReversedAfterCompletionSchema } from './PaymentReversedAfterCompletion';
import { PayNoteSchema } from './PayNote';
import { PayNoteAcceptanceRequestedSchema } from './PayNoteAcceptanceRequested';
import { PayNoteAcceptedSchema } from './PayNoteAccepted';
import { PayNoteAcceptedByClientSchema } from './PayNoteAcceptedByClient';
import { PayNoteApprovedSchema } from './PayNoteApproved';
import { PayNoteCancellationRejectedSchema } from './PayNoteCancellationRejected';
import { PayNoteCancellationRequestedSchema } from './PayNoteCancellationRequested';
import { PayNoteCancelledSchema } from './PayNoteCancelled';
import { PayNoteClientDecisionDiscardedSchema } from './PayNoteClientDecisionDiscarded';
import { PayNoteDeliverySchema } from './PayNoteDelivery';
import { PayNoteDeliveryFailedSchema } from './PayNoteDeliveryFailed';
import { PayNoteRejectedSchema } from './PayNoteRejected';
import { PayNoteRejectedByClientSchema } from './PayNoteRejectedByClient';
import { ReservationDeclinedSchema } from './ReservationDeclined';
import { ReservationReleaseDeclinedSchema } from './ReservationReleaseDeclined';
import { ReservationReleaseRequestedSchema } from './ReservationReleaseRequested';
import { ReservationReleasedSchema } from './ReservationReleased';
import { ReserveFundsAndCaptureImmediatelyRequestedSchema } from './ReserveFundsAndCaptureImmediatelyRequested';
import { ReserveFundsRequestedSchema } from './ReserveFundsRequested';
import { ReverseAfterCompletionRequestedSchema } from './ReverseAfterCompletionRequested';
import { ReverseCardChargeAndCaptureImmediatelyRequestedSchema } from './ReverseCardChargeAndCaptureImmediatelyRequested';
import { ReverseCardChargeRequestedSchema } from './ReverseCardChargeRequested';
import { SecureFundsRequestedSchema } from './SecureFundsRequested';
import { SettlementAmountRejectedSchema } from './SettlementAmountRejected';
import { SettlementAmountSpecifiedSchema } from './SettlementAmountSpecified';
import { StartCardTransactionMonitoringRequestedSchema } from './StartCardTransactionMonitoringRequested';
import { TransactionDetailsUpdateFailedSchema } from './TransactionDetailsUpdateFailed';
import { TransactionDetailsUpdateLockChangeFailedSchema } from './TransactionDetailsUpdateLockChangeFailed';
import { TransactionDetailsUpdateLockRequestedSchema } from './TransactionDetailsUpdateLockRequested';
import { TransactionDetailsUpdateLockedSchema } from './TransactionDetailsUpdateLocked';
import { TransactionDetailsUpdateRejectedSchema } from './TransactionDetailsUpdateRejected';
import { TransactionDetailsUpdateRequestedSchema } from './TransactionDetailsUpdateRequested';
import { TransactionDetailsUpdateUnlockRequestedSchema } from './TransactionDetailsUpdateUnlockRequested';
import { TransactionDetailsUpdateUnlockedSchema } from './TransactionDetailsUpdateUnlocked';
import { TransactionDetailsUpdatedSchema } from './TransactionDetailsUpdated';
import { TransactionIdentificationFailedSchema } from './TransactionIdentificationFailed';
import { TransactionIdentifiedSchema } from './TransactionIdentified';
import { TransactionInitiatedSchema } from './TransactionInitiated';
import { TransactionInitiationFailedSchema } from './TransactionInitiationFailed';
import { TransactionStatusSchema } from './TransactionStatus';

export { CancelBeforeCompletionRequestedSchema } from './CancelBeforeCompletionRequested';
export { CaptureDeclinedSchema } from './CaptureDeclined';
export { CaptureFailedSchema } from './CaptureFailed';
export { CaptureFundsRequestedSchema } from './CaptureFundsRequested';
export { CardChargeCompletedSchema } from './CardChargeCompleted';
export { CardChargeRespondedSchema } from './CardChargeResponded';
export { CardTransactionCaptureLockChangeFailedSchema } from './CardTransactionCaptureLockChangeFailed';
export { CardTransactionCaptureLockRequestedSchema } from './CardTransactionCaptureLockRequested';
export { CardTransactionCaptureLockedSchema } from './CardTransactionCaptureLocked';
export { CardTransactionCaptureUnlockRequestedSchema } from './CardTransactionCaptureUnlockRequested';
export { CardTransactionCaptureUnlockedSchema } from './CardTransactionCaptureUnlocked';
export { CardTransactionDetailsSchema } from './CardTransactionDetails';
export { CardTransactionMonitoringRequestRejectedSchema } from './CardTransactionMonitoringRequestRejected';
export { CardTransactionMonitoringStartedSchema } from './CardTransactionMonitoringStarted';
export { CardTransactionMonitoringStoppedSchema } from './CardTransactionMonitoringStopped';
export { CardTransactionPayNoteSchema } from './CardTransactionPayNote';
export { CardTransactionReportSchema } from './CardTransactionReport';
export { ChildPayNoteIssuanceDeclinedSchema } from './ChildPayNoteIssuanceDeclined';
export { ChildPayNoteIssuedSchema } from './ChildPayNoteIssued';
export { CompletePaymentRequestedSchema } from './CompletePaymentRequested';
export { FinalAmountResolutionRejectedSchema } from './FinalAmountResolutionRejected';
export { FinalAmountResolutionRequestedSchema } from './FinalAmountResolutionRequested';
export { FinalAmountResolvedSchema } from './FinalAmountResolved';
export { FundsCapturedSchema } from './FundsCaptured';
export { FundsReservedSchema } from './FundsReserved';
export { FundsSecuredSchema } from './FundsSecured';
export { FundsSecuringDeclinedSchema } from './FundsSecuringDeclined';
export { FundsSecuringFailedSchema } from './FundsSecuringFailed';
export { IssueChildPayNoteRequestedSchema } from './IssueChildPayNoteRequested';
export { LinkedCardChargeAndCaptureImmediatelyRequestedSchema } from './LinkedCardChargeAndCaptureImmediatelyRequested';
export { LinkedCardChargeRequestedSchema } from './LinkedCardChargeRequested';
export { LinkedPayNoteStartFailedSchema } from './LinkedPayNoteStartFailed';
export { LinkedPayNoteStartRespondedSchema } from './LinkedPayNoteStartResponded';
export { LinkedPayNoteStartedSchema } from './LinkedPayNoteStarted';
export { MerchantToCustomerPayNoteSchema } from './MerchantToCustomerPayNote';
export { PayeeAssignmentConfirmedSchema } from './PayeeAssignmentConfirmed';
export { PayeeAssignmentRejectedSchema } from './PayeeAssignmentRejected';
export { PayeeAssignmentRequestedSchema } from './PayeeAssignmentRequested';
export { PaymentCancellationDeclinedSchema } from './PaymentCancellationDeclined';
export { PaymentCancellationFailedSchema } from './PaymentCancellationFailed';
export { PaymentCancelledBeforeCompletionSchema } from './PaymentCancelledBeforeCompletion';
export { PaymentCompletedSchema } from './PaymentCompleted';
export { PaymentCompletionDeclinedSchema } from './PaymentCompletionDeclined';
export { PaymentCompletionFailedSchema } from './PaymentCompletionFailed';
export { PaymentCompletionLockChangeFailedSchema } from './PaymentCompletionLockChangeFailed';
export { PaymentCompletionLockRequestedSchema } from './PaymentCompletionLockRequested';
export { PaymentCompletionLockedSchema } from './PaymentCompletionLocked';
export { PaymentCompletionUnlockRequestedSchema } from './PaymentCompletionUnlockRequested';
export { PaymentCompletionUnlockedSchema } from './PaymentCompletionUnlocked';
export { PaymentMandateSchema } from './PaymentMandate';
export { PaymentMandateAttachedSchema } from './PaymentMandateAttached';
export { PaymentMandateAttachmentFailedSchema } from './PaymentMandateAttachmentFailed';
export { PaymentMandateSpendAuthorizationRequestedSchema } from './PaymentMandateSpendAuthorizationRequested';
export { PaymentMandateSpendAuthorizationRespondedSchema } from './PaymentMandateSpendAuthorizationResponded';
export { PaymentMandateSpendSettledSchema } from './PaymentMandateSpendSettled';
export { PaymentMandateSpendSettlementRespondedSchema } from './PaymentMandateSpendSettlementResponded';
export { PaymentReversalDeclinedSchema } from './PaymentReversalDeclined';
export { PaymentReversalFailedSchema } from './PaymentReversalFailed';
export { PaymentReversalLockChangeFailedSchema } from './PaymentReversalLockChangeFailed';
export { PaymentReversalLockRequestedSchema } from './PaymentReversalLockRequested';
export { PaymentReversalLockedSchema } from './PaymentReversalLocked';
export { PaymentReversalUnlockRequestedSchema } from './PaymentReversalUnlockRequested';
export { PaymentReversalUnlockedSchema } from './PaymentReversalUnlocked';
export { PaymentReversedAfterCompletionSchema } from './PaymentReversedAfterCompletion';
export { PayNoteSchema } from './PayNote';
export { PayNoteAcceptanceRequestedSchema } from './PayNoteAcceptanceRequested';
export { PayNoteAcceptedSchema } from './PayNoteAccepted';
export { PayNoteAcceptedByClientSchema } from './PayNoteAcceptedByClient';
export { PayNoteApprovedSchema } from './PayNoteApproved';
export { PayNoteCancellationRejectedSchema } from './PayNoteCancellationRejected';
export { PayNoteCancellationRequestedSchema } from './PayNoteCancellationRequested';
export { PayNoteCancelledSchema } from './PayNoteCancelled';
export { PayNoteClientDecisionDiscardedSchema } from './PayNoteClientDecisionDiscarded';
export { PayNoteDeliverySchema } from './PayNoteDelivery';
export { PayNoteDeliveryFailedSchema } from './PayNoteDeliveryFailed';
export { PayNoteRejectedSchema } from './PayNoteRejected';
export { PayNoteRejectedByClientSchema } from './PayNoteRejectedByClient';
export { ReservationDeclinedSchema } from './ReservationDeclined';
export { ReservationReleaseDeclinedSchema } from './ReservationReleaseDeclined';
export { ReservationReleaseRequestedSchema } from './ReservationReleaseRequested';
export { ReservationReleasedSchema } from './ReservationReleased';
export { ReserveFundsAndCaptureImmediatelyRequestedSchema } from './ReserveFundsAndCaptureImmediatelyRequested';
export { ReserveFundsRequestedSchema } from './ReserveFundsRequested';
export { ReverseAfterCompletionRequestedSchema } from './ReverseAfterCompletionRequested';
export { ReverseCardChargeAndCaptureImmediatelyRequestedSchema } from './ReverseCardChargeAndCaptureImmediatelyRequested';
export { ReverseCardChargeRequestedSchema } from './ReverseCardChargeRequested';
export { SecureFundsRequestedSchema } from './SecureFundsRequested';
export { SettlementAmountRejectedSchema } from './SettlementAmountRejected';
export { SettlementAmountSpecifiedSchema } from './SettlementAmountSpecified';
export { StartCardTransactionMonitoringRequestedSchema } from './StartCardTransactionMonitoringRequested';
export { TransactionDetailsUpdateFailedSchema } from './TransactionDetailsUpdateFailed';
export { TransactionDetailsUpdateLockChangeFailedSchema } from './TransactionDetailsUpdateLockChangeFailed';
export { TransactionDetailsUpdateLockRequestedSchema } from './TransactionDetailsUpdateLockRequested';
export { TransactionDetailsUpdateLockedSchema } from './TransactionDetailsUpdateLocked';
export { TransactionDetailsUpdateRejectedSchema } from './TransactionDetailsUpdateRejected';
export { TransactionDetailsUpdateRequestedSchema } from './TransactionDetailsUpdateRequested';
export { TransactionDetailsUpdateUnlockRequestedSchema } from './TransactionDetailsUpdateUnlockRequested';
export { TransactionDetailsUpdateUnlockedSchema } from './TransactionDetailsUpdateUnlocked';
export { TransactionDetailsUpdatedSchema } from './TransactionDetailsUpdated';
export { TransactionIdentificationFailedSchema } from './TransactionIdentificationFailed';
export { TransactionIdentifiedSchema } from './TransactionIdentified';
export { TransactionInitiatedSchema } from './TransactionInitiated';
export { TransactionInitiationFailedSchema } from './TransactionInitiationFailed';
export { TransactionStatusSchema } from './TransactionStatus';

export const schemas = {
  '4oyKGB49m8MuAFdxgHZauwhDFvdBgziHnb9CCGeKNqEc':
    CancelBeforeCompletionRequestedSchema,
  FzJqLm7Ek58LsVstJV2c37JfiMhRiWtjZNsiMz2ZfCYG: CaptureDeclinedSchema,
  FUh3TARSh4TjnWKAkM5ydjFWLWEmrFByKMBQzcgQfqRW: CaptureFailedSchema,
  DvxKVEFsDmgA1hcBDfh7t42NgTRLaxXjCrB48DufP3i3: CaptureFundsRequestedSchema,
  Hrz9kzWXTXDfK2XEkRJtHqdKzHaQq919NcRL8QMAvEEQ: CardChargeCompletedSchema,
  CFoaaYn29o7Mg7VaN7bkM87KrfE8fvnVYWkGXd6YnQ7S: CardChargeRespondedSchema,
  '2LFkmyxDFSdNqM8mr6Md3LF54V15fFGL1s5fTnUfCpUH':
    CardTransactionCaptureLockChangeFailedSchema,
  DhxGBjA6Gow9E6ZKZ49SdziihHZ4PeXxFNatSqmesKZu:
    CardTransactionCaptureLockRequestedSchema,
  EXoQHkYEDQdhGd3AeXBryzxmCTXsvTjXTfZmjwuqqbHt:
    CardTransactionCaptureLockedSchema,
  '531sxtH5rD9ter3EzwBTcn9GMdA7RAYFwmSQRzxCru8z':
    CardTransactionCaptureUnlockRequestedSchema,
  DiowRXdCBw83YCn5Pwcg2YABaVQZ1p4Wk1L9DJfajqp5:
    CardTransactionCaptureUnlockedSchema,
  GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT: CardTransactionDetailsSchema,
  B2iherBskP5f4x7x31GahNmsJtyzian6ZN92b8kE1E5q:
    CardTransactionMonitoringRequestRejectedSchema,
  GcKHzzeu5qehMo1JLGN7X5tSzrHM2iJoscN2qmkB5RPm:
    CardTransactionMonitoringStartedSchema,
  BYdTyyLphWQNKo1GBcnE1jQuaPyXexNnfzkXhMiRqmUr:
    CardTransactionMonitoringStoppedSchema,
  '5D6BCVZDK6Q3RyigNTTNCEht3QJ4stSL5RsbYdfsPnMq': CardTransactionPayNoteSchema,
  '2ibvMNB7oxcpkYpxpag2HLC81sRs3PUBFtqjbqN7ET8X': CardTransactionReportSchema,
  DFKVw43E36kimqj64FyiiVxE9yNuB22SETFx5M4WAi9m:
    ChildPayNoteIssuanceDeclinedSchema,
  FAZCx2s5eq9zPV64LdHNFYbjjxD3ci1ZqyTcQk5WhXAs: ChildPayNoteIssuedSchema,
  '6yEDRKSGUFUhLMYf3anEytTjjV4PneHnzmqcwtFQ2m4T':
    CompletePaymentRequestedSchema,
  E6zFPqoEmEdP9xFa1A9FDSsDJDb7BaR7tXakVD7RN8oH:
    FinalAmountResolutionRejectedSchema,
  '3RkEm1oNz9wYn7CEvReyLduk71eU5e8psAeGyLXwZxr6':
    FinalAmountResolutionRequestedSchema,
  '7oKW3Fozo1KUPgxo4PdF6jJJQ83z11mBbpZF2xCENGDX': FinalAmountResolvedSchema,
  BJvjorbC5ed5KTV7SxoV3CvrJXjrFPcFxY9QT4jHBbXi: FundsCapturedSchema,
  AopfdGqnwcxsw4mJzXbmjDMnASRtkce9BZB1n6QSRNXX: FundsReservedSchema,
  DvxVaiLspGpmTY5SiZDb85sJLcvzBCoJCjCHSAmVFbGT: FundsSecuredSchema,
  '8PufMmsuBgpX5YCpiS7XuiCFUWDan1fN8c3TLLwh57gL': FundsSecuringDeclinedSchema,
  '67BprL1WeSSpJDKawcnaNC6VF2vz68JQ5qrVfi37biBA': FundsSecuringFailedSchema,
  '53Dir2sGy1NHuCQXF6suGoDMxYacNhbcy23AKD89SghD':
    IssueChildPayNoteRequestedSchema,
  '2LqGeXL7WWYQJMqviyseKCekpY3wYdB6K1f9sqakBUY7':
    LinkedCardChargeAndCaptureImmediatelyRequestedSchema,
  Aq4dNFtLHLWYfCS7aqAgWwGi48MgbQmp2EZJtDBN7FSg: LinkedCardChargeRequestedSchema,
  '8dggwonfALwrTSRhg8g8ncXFXierke2mogtEZQXHab64':
    LinkedPayNoteStartFailedSchema,
  BQioEtRPYv2fWVryRsSYQc1Vnp9eyX3CYDrNY1hEy1Ye:
    LinkedPayNoteStartRespondedSchema,
  '6vnMMWuq6qJ1hxLqL1P2ckCqC9JtJF3QNW8s7rMTgZ4Q': LinkedPayNoteStartedSchema,
  '9svWm1o5mEHXiryFfhieELTRWENeUEsp1SivMWPmifXs':
    MerchantToCustomerPayNoteSchema,
  '34v52X6nVj6muiD11W8nohLFn7DjT2RiaRYwjRNpq4v3':
    PayeeAssignmentConfirmedSchema,
  CNFxs2PfxjDh7HNCaehyxNJ8zAdLbmgTcH12rU8VA7yi: PayeeAssignmentRejectedSchema,
  BVLMcTzag3D2rvg8LoKQ3Htgoqsh77EAoiTLTxH5aVBE: PayeeAssignmentRequestedSchema,
  '4witPJDjFKHNHyucepuDn9KXyUTTqZQTVsKHvcrVbGvY':
    PaymentCancellationDeclinedSchema,
  ExfGtqDcSr7RkvA7XzdV5B1MVc7CPacHpanjGBtGhjyk: PaymentCancellationFailedSchema,
  '9hvBQjesbYZPkZSaikm5avp7sFjTHsjRkQS2gas1u49p':
    PaymentCancelledBeforeCompletionSchema,
  '72eeCYvygiChLj529TP1HKKBaYyB5TBa15Y3cn3JGsak': PaymentCompletedSchema,
  '9AL8hghruGSH1ibFSYE8N7xoPLWLkktTCMFRkdoNsfTN':
    PaymentCompletionDeclinedSchema,
  An4JGf9zvSwEtYPJjZaWRnHaPXXvmyHg7oNLmJRKuxSV: PaymentCompletionFailedSchema,
  DG24you4q9reWwc93JPhCK21WoAtP8w9Y6HThyWmL41e:
    PaymentCompletionLockChangeFailedSchema,
  '2aevbSbcGTCXR2n3Kftbsoo9yV4jHw9MFpbsRUDrMBDL':
    PaymentCompletionLockRequestedSchema,
  BKBtKSbxAxg1vyg2ZcghVANjaS4viMxUFY2un6TDPWbw: PaymentCompletionLockedSchema,
  BqygExH4phfPLuES2VLGpYL2gDenFFCcukPXzC1PmQtM:
    PaymentCompletionUnlockRequestedSchema,
  BZxWkxpxVygutoo7KuBd7C63nZwYDuPXFhffXhZ319z9: PaymentCompletionUnlockedSchema,
  BAcWp1auMPeb8VAkkswfKBAuLzP3RHuAVrhdHXc2KfUB: PaymentMandateSchema,
  '49TYrHpnk2gepJiGduJP3afrnT2DJ6kDxqF4Y9M4C4t7': PaymentMandateAttachedSchema,
  GTwsVrbVb31sMub1vvU2KyY2nA8ekKWYDoqNAB1m4Vh2:
    PaymentMandateAttachmentFailedSchema,
  '7EKvVzbT63C2taKWfLf9J2BiVL7BCL6Ld86tH8b9kmxF':
    PaymentMandateSpendAuthorizationRequestedSchema,
  '6UFd89oNox3PCpeVFaaCXwbGDp3k3Qc56e4DktnK3F8P':
    PaymentMandateSpendAuthorizationRespondedSchema,
  '6aPqmL9AQV31CCV576ZmEcUgysbdbQAfAig9J5VYeR6v':
    PaymentMandateSpendSettledSchema,
  CoGAMipt8rhmnkMgKsyZ5aendkHvFc4muC6pVgrUT1rJ:
    PaymentMandateSpendSettlementRespondedSchema,
  Fk96a7GFSo2c3w7xWzaqnYhXXhLAAxj9Dwao8Hg9sdX: PaymentReversalDeclinedSchema,
  FNZQJMETUdV57VFyWHGPdQVPSjWsvGj7u4n2oKYbgAaH: PaymentReversalFailedSchema,
  DYUz7mcFpgQdRNwwsSSBdDe3CYtfRbAeAUiEv6tuLDhy:
    PaymentReversalLockChangeFailedSchema,
  '2qrvwZRrYWZvZZncsQHNbcQRXQDhoFQPcUsVxoT34L69':
    PaymentReversalLockRequestedSchema,
  '5fKdfddLui1nNGHq2hKyEZm8pR6vaN7BRcuomWJPj82Z': PaymentReversalLockedSchema,
  '2xFW6D91Vx628zDGqPwyEPQAdUnmvm9G8Eki5pMeHWi4':
    PaymentReversalUnlockRequestedSchema,
  HPLY55rtyD7BVZaHWhB9iUP7AoFTykn6ZCF3K3BaBbVu: PaymentReversalUnlockedSchema,
  '81whmkSDanPULQUi4sMuVkxiWDLHb3VPC5PeLfJCXCGo':
    PaymentReversedAfterCompletionSchema,
  emSg8pWstEHBtnbUPNu7rmqMzWskDCUbyggteUdk32w: PayNoteSchema,
  '3kyFUyupzb49ZoxVHnUhVe4XAbEN1Hpy8zN9Dx75GNyc':
    PayNoteAcceptanceRequestedSchema,
  CfSpcRXYk2qwu1vNs9LL8rycBsxzL2R4LGyDdrDzwCjh: PayNoteAcceptedSchema,
  '6VQC585V4SdpyA5hCeQQGM178bbeW3D2WcKt8ZCWK9s3': PayNoteAcceptedByClientSchema,
  HQTUxErobqhSuhWo9DAC1WwaG9oYdjfmdKprGtV4TeEK: PayNoteApprovedSchema,
  GaYDPA7TTqWuoxioCYFPeyqomjH4g3YDtFxHv9yLRQ8A:
    PayNoteCancellationRejectedSchema,
  DqiwzsNLbHCh6PaDF6wy6ZqBSF5JV5nAQSKFKTPRTbGB:
    PayNoteCancellationRequestedSchema,
  '96buyUXwhkak8xKoCR5nAW9tMuwzkevJFdELVvwKxR6Y': PayNoteCancelledSchema,
  Da7ZSyWgvMyTfwDVhAgCkGf3H8dwHhouHsHgNzg3DZ2j:
    PayNoteClientDecisionDiscardedSchema,
  '8NU68ai4UMAsKXphbR5sH8FythK6AE7eDUMEFzDEWMKR': PayNoteDeliverySchema,
  GtFG4Nt2fAamUZi9fSZNotab3BEUuv236LuPAcErVj5y: PayNoteDeliveryFailedSchema,
  AdKfkwRfzRUxUKSzhRfYANsaUBNnz4u6JFWR66qhzyZe: PayNoteRejectedSchema,
  EGRRGwNnReqfQQhKnML28DWz9MvvC3B5JgbBrCUxrZ3G: PayNoteRejectedByClientSchema,
  '4xS8bmZQBGPENmaPfsrtYguYfq4hTtaZAXrefdyFNkKq': ReservationDeclinedSchema,
  '653sCbbRH3RiKhGjmVxh6wFVs4rn54wJRKDXRMKBZtjA':
    ReservationReleaseDeclinedSchema,
  GU8nkSnUuMs6632rHQyBndRtjDcMB9ZSbgwkGYcfGt97:
    ReservationReleaseRequestedSchema,
  CFqiZigjKE5JatANkaAkWw2NbgvEmb2BVEVPf3ckUrWg: ReservationReleasedSchema,
  '3XstDYFkqsUP5PdM6Z6mwspPzgdQMFtUpNyMsKPK2o6N':
    ReserveFundsAndCaptureImmediatelyRequestedSchema,
  '3Y3TYmSfZMmPYKmF5i3eR8YcVPNP5Sic2bZN8xRnvMWm': ReserveFundsRequestedSchema,
  AG1PERDv5Vzxx3GTpeDKpEdMD3bPbMcijHndAPPdH8zc:
    ReverseAfterCompletionRequestedSchema,
  F4gfZeY8P8dkfwNSbEfq7xQ8axiHdfqgzGQQr3HLDyzC:
    ReverseCardChargeAndCaptureImmediatelyRequestedSchema,
  Fg5CEPi8Dbr1vBwGjzf8PbQNfuWfPP7HcLFChYwpRJq5:
    ReverseCardChargeRequestedSchema,
  '94M8FmSvYDJYBZwDvCuVYRQmYxD1Ek6cQSTMKEYYXbY6': SecureFundsRequestedSchema,
  '3b3ePGPg5GzS6KYfqoDfgjWbjccXVnGzytbpFS53x4HM':
    SettlementAmountRejectedSchema,
  '4pVAdZo93FHRRkAkshqCZW4pUvvV1ccczJZ2Lu4jkD1D':
    SettlementAmountSpecifiedSchema,
  '649PKUqAakwi2JwDwHyypfWb4VmrrBAeEqzSU6FDWfgm':
    StartCardTransactionMonitoringRequestedSchema,
  '2dmAPySotyaWEPRLBYMiooqrqa3v42pyrHYvWskMMsMb':
    TransactionDetailsUpdateFailedSchema,
  '1j22qLMeLkRgtwiMHWXJNopKeBHdACS4vELfLxc1mnA':
    TransactionDetailsUpdateLockChangeFailedSchema,
  DFFyom6z2nbWmFyoi3DLngRJKgLXXF4inq7hmZX7eShJ:
    TransactionDetailsUpdateLockRequestedSchema,
  eoi7pHyfDPfN9EkHcCNMekiZubrBa9EyywmnWrGUsGb:
    TransactionDetailsUpdateLockedSchema,
  tF2fYwf8b7HwErSWAduxWXoV8v7pMQPHVCsSZhZzhmT:
    TransactionDetailsUpdateRejectedSchema,
  '8tAYAsJki2mJb2qRu2H6dEYT2e3qQDqCFx2ugqtirLPU':
    TransactionDetailsUpdateRequestedSchema,
  '9xTYCggegp9Ci5AGfDk9avuKax1FC5EvwADrXtpLSebR':
    TransactionDetailsUpdateUnlockRequestedSchema,
  '8H1L8VGE9vXzbGgrv5RNkpYXngf43futPHQvnJ4SJD2B':
    TransactionDetailsUpdateUnlockedSchema,
  EsyQj8xWb1Kf2ESjDq1UR6PK2hx4fpnyGiEWJ14ttC8a: TransactionDetailsUpdatedSchema,
  GvFQ71MZS1CrHvSopnTkSz8DBX2is4meMR5tpF5WmwCC:
    TransactionIdentificationFailedSchema,
  '6gQWKeJHZEbBo13Vvyf2nsdg7TA9kLSYdzMaJgySPG7V': TransactionIdentifiedSchema,
  '14UHCXtf9XLpi3Z3n4xbo1dmXRzfXnDEH23iVaechxzh': TransactionInitiatedSchema,
  FSfMCJpFDcB9zNfrd4gDhaDXpFhaSNToGbAdxSkw55V7:
    TransactionInitiationFailedSchema,
  FutWoAEUEb3wkmEm4YP4JGFPtu3B3PQ3m71BmnRFFnsQ: TransactionStatusSchema,
} as const;
