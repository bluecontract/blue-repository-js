import type { ZodTypeAny } from 'zod';
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

export const schemas: Record<string, ZodTypeAny> = {
  Hp9rbhaVLQFEpBy9EZ6YuEh8PrXXciJkY8eUfwEg55YK:
    CancelBeforeCompletionRequestedSchema,
  Ghp8jKdGRtcdYv5aLuukrGQazUiiWVkjGRswhkrfp8uA: CaptureDeclinedSchema,
  '7pCJnj5CuTi5NppZ6hWK3wMSwGveGW9fB8ydWge9kfsr': CaptureFailedSchema,
  '22tDCFoSnr3H8mpKoMcNWu6HFYRLJ8WVtA9HJJjZFTDp': CaptureFundsRequestedSchema,
  '6x3rEAr4r7E6TnmtGcKXmtofkZ5XbKWfWTtUjVBSjixb': CardChargeCompletedSchema,
  CQa9Xv397jjXRmiW2mCmUv5ZQ2zQ7k4nvzwHUSod7Ao4: CardChargeRespondedSchema,
  H1bKjnbdLgF16E7YusAusW8JYyUHzmZKFk6p7tP6jFxy:
    CardTransactionCaptureLockChangeFailedSchema,
  BGFAz4x6LaxXTpTZyXzbE4kr4EDATVcpMgxgcH5UYzQn:
    CardTransactionCaptureLockRequestedSchema,
  '9QmNQ9HyiNxJf4vGrGFSUQh2DdreV3awweaDdsB1n3CP':
    CardTransactionCaptureLockedSchema,
  '2dkYN3GYhWt5qVFk3Svcsqx3AumtupuDCir3Png3BnCn':
    CardTransactionCaptureUnlockRequestedSchema,
  '8qwZofJMDX7VN4oTvXki8sRqjRztHm1AJKY69kiqKQJV':
    CardTransactionCaptureUnlockedSchema,
  GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT: CardTransactionDetailsSchema,
  DrwZrgeKXZwsEQDJXdEaWQBivpSyZdb1nLjRMjjigov6:
    CardTransactionMonitoringRequestRejectedSchema,
  CL3RhUcWJG9JmKEENaZWewsYhmsSdTbFPaeW8jb1jZpj:
    CardTransactionMonitoringStartedSchema,
  G9yQsyYfiwkDhap7VTq12yj26kGkgvPsX92cQp6rEbfx:
    CardTransactionMonitoringStoppedSchema,
  BPCVqgc2J3NnYW2A8xMjGX8Wv5v5APpXuut8afiJTF3E: CardTransactionPayNoteSchema,
  BVo3umEXBPKoCiDC7PrKQf5m3ENZGKt9xGgPTJJXCXcb: CardTransactionReportSchema,
  '2UDXQuYTuwbbj6eXgvUxiSweq8Kz5yQqSuhFsjVASUBh':
    ChildPayNoteIssuanceDeclinedSchema,
  GYpUo3MXjje9h9kCdKunkb4RQoU5uX1nq77uqe6jqjgU: ChildPayNoteIssuedSchema,
  DDRzktkPV3srozHVEzYUHdC9MX7Lzvq1HZ1enDEeYqfs: CompletePaymentRequestedSchema,
  '9g76Ge68UF744b6KWgGkrAudVCdM8Ggs1YjVcZXXWmsS':
    FinalAmountResolutionRejectedSchema,
  EHySZYfMJC3JDuuottDsKyE4d6Xof6eKCWrzMjg2LyUh:
    FinalAmountResolutionRequestedSchema,
  '14aYCUtepzJKAQ8rVtfNUcSebrBYbva3VBjhdtXgm4GV': FinalAmountResolvedSchema,
  HFKZ6MnBdTMNRi72P1zqUEh2RgagBX4DP4MLknWvpwrL: FundsCapturedSchema,
  '4AegLZ1gGqhXWQ66prGJB4yWcoHfqpKes8kbkfURnvE4': FundsReservedSchema,
  Dhq87PEpVaYUJAkCHxWxmRcmgQGg8qkCWyuVo7rJhNrZ: FundsSecuredSchema,
  Ep5q2Z4UEqUnMJGwb8CxbkjfFf5SYFsJf855LS68vWHw: FundsSecuringDeclinedSchema,
  '6d2zv3cUykVpodfq3nHnsJ62sJHjViw66JkmziQAYrRA': FundsSecuringFailedSchema,
  '6xPfgoVRspFpZ1ftEsCFhDQt5vaPN4u9kfdAdzFzh8JS':
    IssueChildPayNoteRequestedSchema,
  D5CBwemEH71dvFYLwngHXqQb3AfrX7vQ6qQQggA5w4kL:
    LinkedCardChargeAndCaptureImmediatelyRequestedSchema,
  CvGySPArfCvAW8wES6mLHAxW275hVGaWYDGcnmvDroiw: LinkedCardChargeRequestedSchema,
  '27m5LHt8BGFbjCtbc8TmpjbRr4C5Yof9ivb95Q1qjGp5':
    LinkedPayNoteStartFailedSchema,
  D3oNNKrhuezgtZwNQFVVeYSoQjamdb7cHzeJAitzSnMJ:
    LinkedPayNoteStartRespondedSchema,
  '136wy9eVvz2GrQpBBFSS3VxGXKjw8xSh5M1GYxgTussB': LinkedPayNoteStartedSchema,
  '2hDRCj9thcDsfKHHNy1hBKZG4fn8pEyWDVsaJQjouHZp':
    MerchantToCustomerPayNoteSchema,
  G7VEB2qKr36H5CUdSCrFsw2LTkpEx7nfgaFWuD3UeFeq: PayeeAssignmentConfirmedSchema,
  '3CuhNQR9wKoJgiFtEagaHcWskzPtsAsGgDwSfcjhSTz3': PayeeAssignmentRejectedSchema,
  FJFBLMQjKue73Ls3a3Hm4Bk51CqN4odCxZUwkioLWk8T: PayeeAssignmentRequestedSchema,
  '5vPSqDeCjrrSzKmCyDn3s7C6v1UbwThGCRk9Zc6VYojK':
    PaymentCancellationDeclinedSchema,
  BYm2KcRydg8r9LQEWTZhi6r1fTvnJGkxHUzSbZd5wQJZ: PaymentCancellationFailedSchema,
  CLCm3e8rHeFTMWuV5A415fZZvVc9Xb9yj2p1eEMyTwrf:
    PaymentCancelledBeforeCompletionSchema,
  BaKeiFYCdzpGKobh6oq3y9ZwFA2pVgtCNn5CipfDRPDn: PaymentCompletedSchema,
  CJXbcUUJuDYcDY63DDWatYNoww5HNyLG9tBiyK4kfqDr: PaymentCompletionDeclinedSchema,
  FXoL7smVn5Qr8rWaMiAkJX1tJYFf6pJQNCHyk9YEzsYj: PaymentCompletionFailedSchema,
  CWmwgreYPytk6uMhrPPQtwrEngyoMzmVCHCJwjESKxQe:
    PaymentCompletionLockChangeFailedSchema,
  BAmesvVsg5mMyv7ywqNfcKA9heQRAavcXi8UDN7wKnkP:
    PaymentCompletionLockRequestedSchema,
  ChQAXUw8C752hUQ8TDDjLGnZHWEuw4yXqZTpNR54Soqr: PaymentCompletionLockedSchema,
  Ae6M8hQ664pDy73x96xMABj3WnFuH6hkC61vcz8CNUQW:
    PaymentCompletionUnlockRequestedSchema,
  HWbQL6dGkDfjPDU57aghQmWMtpi3ai9sTX4TmMnA2k3X: PaymentCompletionUnlockedSchema,
  '5fBQHAnRCh6a5DwzJFV2f31yExvRhsnKNNMcuZnMHXry': PaymentMandateSchema,
  CS8Zf2Nmo9QsvDwvBbTbpq9VL1gJTXC4ix9tzgmHnXvN: PaymentMandateAttachedSchema,
  '2AggJktF7rdGkScmVmf58kzQ6x5SJQBVMq2LtthirY4b':
    PaymentMandateAttachmentFailedSchema,
  AnxxLd7NofAKrwNp22fvP4jQ24aAHKKvxsv4aXJgjziP:
    PaymentMandateSpendAuthorizationRequestedSchema,
  '9h8QgAXNnpK8ekENXhGxvsqk74vXyBvdEbpHetsEYtQb':
    PaymentMandateSpendAuthorizationRespondedSchema,
  Bsb4uv9m6GU7T8Z6TwXQGZagFcVR8xn4EBNTR5bBZfgv:
    PaymentMandateSpendSettledSchema,
  '5Ef9YNuRSVFdykdjoBVWb5QHSzerHE8RAPaq58ARGrt7':
    PaymentMandateSpendSettlementRespondedSchema,
  '3JuJT2LrVdb7ZZyjZsEjh1N2hDtBedCrg3NLomPPyGvu': PaymentReversalDeclinedSchema,
  BzR72tUU9bspQ3JBm54rjg3A7XFJLSuscvYdyw5LWQ7o: PaymentReversalFailedSchema,
  '3ZL5qKgNJweUij3KwA6xp4KC1ReZ1AqXTFzhE1hCg5Hd':
    PaymentReversalLockChangeFailedSchema,
  '8kwErWXi6Ts7gypBEL7EFpegWV43cxQ9EpodWfLTigeJ':
    PaymentReversalLockRequestedSchema,
  '455HeywDQjC8Kh6GtzqmVCRQMUQ2JtXj2sEabUr91CqN': PaymentReversalLockedSchema,
  q6TEeYDbn4Vdd5zxDjN4Ddyay31ivB852TZCuL17ULb:
    PaymentReversalUnlockRequestedSchema,
  '6sVrGit3FwrSRnVr4kKLk3PJC33mqAPzzuDqbzCvordD': PaymentReversalUnlockedSchema,
  '2xgUeYahgLZCGnrNaVqsCbwEP9xnsaU8LKk3jcDtx8jw':
    PaymentReversedAfterCompletionSchema,
  GS7qK6RBWAKdCFMy6hdeQNgmqeAkw5LrbcktFfnQdAxe: PayNoteSchema,
  '4xd8eGnNyTRRrMQAgz6nvNtRgpiDthUr8BLs3ugBDKkV':
    PayNoteAcceptanceRequestedSchema,
  AKym7uykt3iv73tEfAP1k9f8dXpbp9i9dZNRhwfwhUYt: PayNoteAcceptedSchema,
  HtsPop9z5R2EoW3TLKCSePnQUAj5wqryWuRWV1cwyBTt: PayNoteAcceptedByClientSchema,
  '2FLMQNYESLh8W5ivBYejLnBsS8E5DiD2m8AjNTBK6yVy': PayNoteApprovedSchema,
  j48pW3ti66f4NoABqMAbaMkJKGztzsobPrUfXkVoSvB:
    PayNoteCancellationRejectedSchema,
  '3NTTDXW9VAaeU1W9s4FshMTZCNemsA5nPBWZgyF8qWpA':
    PayNoteCancellationRequestedSchema,
  BrrMLE9Gq3p36wSWxTeecJToXGziP2squb6omeb4CEFy: PayNoteCancelledSchema,
  '8hhTj5tHF6SorKyCXtkyr6cendUne9A6eYJ225dJjLJW':
    PayNoteClientDecisionDiscardedSchema,
  '2JTgRGneJ5yzunYmA1gq8gg1joCgygcsdjjLPuMehJ9i': PayNoteDeliverySchema,
  '3VLavrr4LCLqo5FV1XxXhxUGryHBzBGQoFKTGWaXv7PM': PayNoteDeliveryFailedSchema,
  G7UfGk3acE63TsiGzKM2xdSdW1ZUtmzGuMDypx9dXHVL: PayNoteRejectedSchema,
  '6EwokAQarCKdRXuU2wpkCyHfXzhr1CgjY5feVomsYJob': PayNoteRejectedByClientSchema,
  '6TWWiE2AfszYPHtDFcBahzeiTSgsMmaivZbUncyCKcf4': ReservationDeclinedSchema,
  E3dhGvVJHtQkqkbX73GCmV8Nhw9wFjxuAr6GUjb78SZQ:
    ReservationReleaseDeclinedSchema,
  '9YGdHtuBwjtuUYgU7rxEr9eYPiXENcBbLPFwWUqmhSR9':
    ReservationReleaseRequestedSchema,
  GNtXW3EQSFTwidGNPi2mKTwbGHQENDNUvM2ASkq1Av9Q: ReservationReleasedSchema,
  HAT49nMdc1VVbgDxTusZ9wRUFFcbw8qx9pjmoZwg59LS:
    ReserveFundsAndCaptureImmediatelyRequestedSchema,
  '4iRGNCp5PFihQDjMhCSMxkJq8NEqHqdiq68YPuEPqbZi': ReserveFundsRequestedSchema,
  GPd6u4dQko5mDzWVgEJaJjsfffaykk29nv74drEM7rR6:
    ReverseAfterCompletionRequestedSchema,
  '9G6U8wzPxB5WjwMEeHmDGfzwhxok6hk3Usno6ESRETR3':
    ReverseCardChargeAndCaptureImmediatelyRequestedSchema,
  '9mACwX7GPNuwKycefkpa2sNJh3rAXjYuiEuTWfe5fBZf':
    ReverseCardChargeRequestedSchema,
  CznqsDr7E4sduFbmLQCEMhhtBfGY615JvZ7uPhUtoFRS: SecureFundsRequestedSchema,
  ELN3C1kMSaJ9yEE4Vkd3FRQbEwhgegwjSHA5c4v7hER: SettlementAmountRejectedSchema,
  '6eEzoRyTHDWRZn3nuTdivRNbnkM6YwQPVqXWrag5CJZr':
    SettlementAmountSpecifiedSchema,
  '7ZQKR5ExFxL3xj9vB5vrYnFP4DCnnPKSGJEcxtEKcDpR':
    StartCardTransactionMonitoringRequestedSchema,
  '23KuRV6NdYxuHeDMJX4cHK4imFDvn552wY4CBTP6k5m8':
    TransactionDetailsUpdateFailedSchema,
  GoTKbpUrjeonNMKf7zyHm6TbD5tbJdqyRk4Etck1qU8N:
    TransactionDetailsUpdateLockChangeFailedSchema,
  DLePv5DMMwmjZeEgDcCc8PFTyjT3C9XDDfA7CoM8GKjU:
    TransactionDetailsUpdateLockRequestedSchema,
  '6qCdP6iHAPsWcA5G2N28tthQnoCGxzJvdjmFRU7JB8m7':
    TransactionDetailsUpdateLockedSchema,
  '2kNE5ZeV6v5vzeq6WRAYLmCmdswhkigP5RQWLd8Po7Pc':
    TransactionDetailsUpdateRejectedSchema,
  CqwUgzcG2PdfPp4aK3XD11eQPmDXKkbPrck5nTpxczof:
    TransactionDetailsUpdateRequestedSchema,
  '6ehbtZAKxK6XxA53wsANhCSBJVaenKw5TfwBgL63sydP':
    TransactionDetailsUpdateUnlockRequestedSchema,
  BDLj2txke2Z35TyNhd4QyNa4C3dtqJcmpti5C5Y6Gvt5:
    TransactionDetailsUpdateUnlockedSchema,
  '9FTgniVVTmyp3f1Di3dL9c6izKbVEb6XFUnWng1mAiyb':
    TransactionDetailsUpdatedSchema,
  '8XH1vN2R5tLKQKRz4bJzv1JuEnare6Q4G4A49gpJXceW':
    TransactionIdentificationFailedSchema,
  FjaxYHKQ3DZ7h6ooFwVwD2Gs2WygLsw33xQ9vMLZzk8H: TransactionIdentifiedSchema,
  '4wPjsVSUbGeWCPY2vSBEAsVAt4Vqr1LB1CpAr4XsxApi': TransactionInitiatedSchema,
  '7zJ55EuAZbwtxHUt8gqKJVmjPpURbUCge9kGeLXprtmy':
    TransactionInitiationFailedSchema,
  FutWoAEUEb3wkmEm4YP4JGFPtu3B3PQ3m71BmnRFFnsQ: TransactionStatusSchema,
};
