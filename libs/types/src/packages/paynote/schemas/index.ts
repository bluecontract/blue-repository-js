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
  C1rwze4jUCYuRxvCJg4gV3c8D3bWUARp95n7X8mj8XAp:
    CancelBeforeCompletionRequestedSchema,
  FKmgCVJYnpqy9KJ2fNhEsiPUQHRyoG9oUunkdrwhG65t: CaptureDeclinedSchema,
  '5KLJjeRj56sm2a1dj6guTWGKw533bwqNsiioSmntdSjg': CaptureFailedSchema,
  GcDzvd7qyECoWSi5XazBjyWp8AGq5aQrTNg49xKD3SoF: CaptureFundsRequestedSchema,
  Dcw8D1XUmNrMBX2uHgJgJ3836Ued7vCy8oEP4aXekYPx: CardChargeCompletedSchema,
  '3ku2VCNwWmypxQWFi6bU595iVPXTsCjgbotAi5y4peEq': CardChargeRespondedSchema,
  DSszDxYtNpdSpnf56vs1oQ4bwbweRowhCLbkT7tvDQiV:
    CardTransactionCaptureLockChangeFailedSchema,
  '3qvrrxbTzsbhUsRtbfQuj6ffc6SgKNzfSihRqgN7wNY4':
    CardTransactionCaptureLockRequestedSchema,
  '5ZefGb29XU9takV1ftp6aYkrrHs8q8AAfNJBW7Uy3ZyE':
    CardTransactionCaptureLockedSchema,
  '83n64P9yoYMY7VNGrb1UKbmVsz3wwkZW8PAJqLz8AELJ':
    CardTransactionCaptureUnlockRequestedSchema,
  '43LubJTPxDs9RGM7bcXwZpyczAstFCsjCkFZgk9zvfAc':
    CardTransactionCaptureUnlockedSchema,
  DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: CardTransactionDetailsSchema,
  ChTzNgt57FAEoZKk7oo1kFSkP6paXTideC3woe52BgPU:
    CardTransactionMonitoringRequestRejectedSchema,
  GgzocgK2E91GPBsNsyJsAx2v1DsiQfFazpZqAYGuATv7:
    CardTransactionMonitoringStartedSchema,
  '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n':
    CardTransactionMonitoringStoppedSchema,
  '9Brtfgkzcbe9YP99asHvi7UHoHr3r3bgMn1vUHMZi8Pv': CardTransactionPayNoteSchema,
  '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': CardTransactionReportSchema,
  '5fW8b3vqSFGwaEvycu7CprBpmGEjW7QqT4vhmN6zX3sc':
    ChildPayNoteIssuanceDeclinedSchema,
  DB6iVUgsWh96zaypurZR5jT6EGdwELEteNPomRqo4ZY7: ChildPayNoteIssuedSchema,
  '8yMip2tqMRxoz6WvTAU7Hp4F5A285gMKPtvL6DX41Nqg':
    CompletePaymentRequestedSchema,
  '4rw9kwJRP7P5opfxz1AFAX3mp1wmPNf3qKBz1om9gr8A':
    FinalAmountResolutionRejectedSchema,
  Fz7b7rBDv2XZxFUHEgaYAFnVfrugVuDqkbaTpqvqEQKU:
    FinalAmountResolutionRequestedSchema,
  CDwF6APqf9NVAn49dBfJsJVQU1gB4Ah2gbxs3T7DT3Fc: FinalAmountResolvedSchema,
  '3j1NrjZiu7mn6pcTtqfFo7N2JEQGNWEh2dcxUDuSSVBS': FundsCapturedSchema,
  '4p216aqzABWnVNxJY1MkkTU8fZ511S93hQYo1wwHYpKi': FundsReservedSchema,
  '3wSieJf5cYTa6o9CMcYAFNmVRS1mJe9wMeQ8Jmo3Xp3i': FundsSecuredSchema,
  '8x9kLwfX9bJdvChLgQjwhPBCAMDZrmRJPMdaWsKKkbjN': FundsSecuringDeclinedSchema,
  '5X9UpCYn4uR6vidaBwpsng98RsVMXjnweXeVgGPXkzQi': FundsSecuringFailedSchema,
  '4paCVJn58VgBo65rXHr4SXHCnbjPa5zrrAxKW3HNRS7Q':
    IssueChildPayNoteRequestedSchema,
  CNeTiNQt2BgJ7GTVjPGrCxmiXLeTGxchmZNb6j4NRbtA:
    LinkedCardChargeAndCaptureImmediatelyRequestedSchema,
  C7CKgcCSaQqVjsmReDQvSyLkam6D1ACdHgm3phmccdUR: LinkedCardChargeRequestedSchema,
  DAF5xuT1YvgntUkNuDt4q6ABX5ptgbxf2iJCpvajJbnn: LinkedPayNoteStartFailedSchema,
  '9GC9R5HceZYKm9LVaKFXKPC9GDUAffn2R4hHNqhDtUAm':
    LinkedPayNoteStartRespondedSchema,
  G2MqrvuVTgYpURszmzYEavQC7Ef8cQfjd931pE1gTTp2: LinkedPayNoteStartedSchema,
  '4QW85PM6t2McK3sxKqCsyhajZJv6WVk1AhBT45PGDLZb':
    MerchantToCustomerPayNoteSchema,
  '79ZV4j1dHpE5nt9nGN141Pte8hDbKgsxSavm9RV9wu1U':
    PayeeAssignmentConfirmedSchema,
  EHxam7uVrzwbyKVGmHk4QcnKtcPaeM7JzZiiURXj7M33: PayeeAssignmentRejectedSchema,
  BAQzcd8ik3X4PrWCMgJ48mVmXjv12Mi9a7RYURnEygrD: PayeeAssignmentRequestedSchema,
  AygrNas7s1Gvg5zb7X1dVrufVNrGvUxPU7qgQHJ9QLzQ:
    PaymentCancellationDeclinedSchema,
  HpeKXtecYHLk8Mm787Pof8hYgQ92SjRQzTDcUdFwrhZV: PaymentCancellationFailedSchema,
  BVVMg23GQoEyUwPxQj1uif1cxc1PgMd6reAdfkt1k77:
    PaymentCancelledBeforeCompletionSchema,
  HRPugeYyuAMpDR4rKoDeDbJpewtFGgAPpFtwyw1T6Row: PaymentCompletedSchema,
  HV1cMM1SfwUna62hDFcwaHwMgDN3QVVSVWWMqmr3Y4jx: PaymentCompletionDeclinedSchema,
  '7nzmwZ5GYggD81cgK9aTduPVhznB8ay1k128CZA4nvzt': PaymentCompletionFailedSchema,
  '7A765v3durX3otiybhEomfPAqtztUSt9Ywqef2dsyvLx':
    PaymentCompletionLockChangeFailedSchema,
  CNUCbbLcR5bVJktXxLNFxziK781GPpASpHrZ3AbNbjF8:
    PaymentCompletionLockRequestedSchema,
  GiarUWCiPuTZ2g7YfosXP17bTi1cH1ZqkguGcYKNqUvY: PaymentCompletionLockedSchema,
  '5D8V9FiXun8bgUaNQapuvra3wvxLiHtoFEy7tzscSnR3':
    PaymentCompletionUnlockRequestedSchema,
  '4qyUrMxKg5b3zPiB3kBwwy4Yh9fgD4DSqGeLTXh57b7i':
    PaymentCompletionUnlockedSchema,
  Zp9XUGFr6S4MPcfMarmfWo3uE8Bsh4UzUsgMNcKbh6V: PaymentMandateSchema,
  Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: PaymentMandateAttachedSchema,
  Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp:
    PaymentMandateAttachmentFailedSchema,
  '5c5mfwYpEs3LLawHVLWJVUFTgqdSMGBCHG6iPaTmqefJ':
    PaymentMandateSpendAuthorizationRequestedSchema,
  Cg8SSdLksJdyWoGcFvq4VvoGwMkcQY88rNdcA9qc734j:
    PaymentMandateSpendAuthorizationRespondedSchema,
  '12zhLzvXiUjVQsbNQGRRZk15M1fc2WcohZ8Nbz7Wmd1m':
    PaymentMandateSpendSettledSchema,
  AyxFRqp7CDgStXG1ATYUBmAVD62QAF3S3ZV867Q9iBAk:
    PaymentMandateSpendSettlementRespondedSchema,
  '3zqCf4fDYcC5ETzvGZA8Jasf1LXdujZTZyL88zL3EDSF': PaymentReversalDeclinedSchema,
  HgRjnfFyp9156xXVSeXhzKWuZFQE4jVuL1WYD3Gbm98T: PaymentReversalFailedSchema,
  '9wsCVU7Pw5BzQhN8RYZXJhiwJAEfBzCkLEWURkJymKsy':
    PaymentReversalLockChangeFailedSchema,
  B59nS1DoGFsTn13zqvfDFvLQ7j2G4NXTRGPByLFDNrFR:
    PaymentReversalLockRequestedSchema,
  '6qKyexNfVD2WhQQ5FGuCoPGQF89SAigGgwyzbKXsPMRP': PaymentReversalLockedSchema,
  '6TbnGA2HDUY27gUaZzGnS7Ts6vZoBXEpWsBjEnxPnU8H':
    PaymentReversalUnlockRequestedSchema,
  FVjUChq6akLbAux94Gs4Sv2VQ1JtQWqy1WekMUTyNXuv: PaymentReversalUnlockedSchema,
  '42iMsNHFY4jUTy1yhZeEeZu9XZL4ZJqReRe191f1KHXf':
    PaymentReversedAfterCompletionSchema,
  '3QhCg6W39VGD66E7by4yNop1UYH198xEbVpqYcjLaatL': PayNoteSchema,
  '2qhzWiZAVUTJvuAhexA8vRHrXWdWu7UGyAYPnfvEmTkV':
    PayNoteAcceptanceRequestedSchema,
  EWJLkS8q4TE5NWDh4qpQZMcbgGWdiePNkbZMCtGYVRAN: PayNoteAcceptedSchema,
  '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': PayNoteAcceptedByClientSchema,
  '8DVJqK8XnidDVa8ToiHg2C67LzszVMrV57yircF3zzyM': PayNoteApprovedSchema,
  AmVVqD9dehBLXhwmyRtfH9XhdMVbc9i9YEqhsMJrPnpN:
    PayNoteCancellationRejectedSchema,
  '2G6hwRBQbRA4D2n8vLPqD6hES44sGeh6kGF1uG88nn5R':
    PayNoteCancellationRequestedSchema,
  '29BnKeGGy1Z4ZQZk9tXccEtkjjjARP3xEw2sbxajtcn4': PayNoteCancelledSchema,
  FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE:
    PayNoteClientDecisionDiscardedSchema,
  DT1xSSmLNv2iJSYAUYSaLumD2JJH27WjWF6KRxa9zRW5: PayNoteDeliverySchema,
  GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: PayNoteDeliveryFailedSchema,
  FJqmEa4mSV4FrJkeZn9KLbTZMBeULqaBkzEhceuoaLJG: PayNoteRejectedSchema,
  '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': PayNoteRejectedByClientSchema,
  DhMGXZUUoZKjNmPbBKyY882k9rAnPK5F6Kup76KPLdKR: ReservationDeclinedSchema,
  '2vV995BK1aDswPiZr8bXfwLvRbbprmFnhMa7aJGfg3Df':
    ReservationReleaseDeclinedSchema,
  '3YBnYuYiQh1DtRuci5eZexXuEPuorJar4KefKAJQdPZr':
    ReservationReleaseRequestedSchema,
  '36QzhH7XYNZRBqNotXqdoo7VGkgeZBUojDzADhd1e6RB': ReservationReleasedSchema,
  ECtoQipB9ayV1n8sHZgZy8U8z3rEsUbj8nBDwoueyfTU:
    ReserveFundsAndCaptureImmediatelyRequestedSchema,
  C853sXni8pJeAfbHCtKB477n1BebwBAmL4SxiE3dy4fA: ReserveFundsRequestedSchema,
  '7yCCQs9S2nns1nD3UG572QKvxUss5roACewUWbz5NLNv':
    ReverseAfterCompletionRequestedSchema,
  '4yJfdAuMrzyVQPsopWMfw24CiW2xj31jC4oCwhXmPG8V':
    ReverseCardChargeAndCaptureImmediatelyRequestedSchema,
  '2Z77G9HMUNvJ6LRfvLMQBpshxbvGY3mCMskgpAEw4Rjo':
    ReverseCardChargeRequestedSchema,
  FVosfv6GQeWk8zJCHiZtC4D6LFxwU8Y8ARAFYX1rsxzd: SecureFundsRequestedSchema,
  EqtTi4QsxYWoyLu4X2iptWAQTTAVHh77MUgdp8aUjtjC: SettlementAmountRejectedSchema,
  '4dHGVnHSgn18Dj6VTYZE2359Ym67DLjfnwgDRcy5tHZH':
    SettlementAmountSpecifiedSchema,
  '248pKkeKj3v9HctkWpzcJ1E4E9enbJoS5csiPDRER62U':
    StartCardTransactionMonitoringRequestedSchema,
  DDuuaogLyNgVHbSoJxxQcX5iZqWy6U9DAxjgtdzWRnWB:
    TransactionDetailsUpdateFailedSchema,
  '369jQqbKxUNXz4yZHMgeomhtQUbAByuCCXCcXKaUSun9':
    TransactionDetailsUpdateLockChangeFailedSchema,
  '6TjBq3kF5mqXq8zHgr7LegNWUNJDLuN31z7ZrN5doY8G':
    TransactionDetailsUpdateLockRequestedSchema,
  '44MphyKwNYqXzF8aS5WTmXZMQ4x35PViXyoy2Ks14G1Z':
    TransactionDetailsUpdateLockedSchema,
  '3iWy5uSeaCr149THj4x9sAeb2AhTtkHFY9yCuqeV7LCT':
    TransactionDetailsUpdateRejectedSchema,
  G7U3e8x6XcUiy65g9MAh4LV2PRts5Vsk8KFJ9BrqmXao:
    TransactionDetailsUpdateRequestedSchema,
  HqD5YrGeruxAeibVpGJwpqXRcmCuoSNWN2j48iRaJdoU:
    TransactionDetailsUpdateUnlockRequestedSchema,
  ASnHnJCtcbdEsWa5wcbRpmoUBnw9yajf9vLpsovXyTXg:
    TransactionDetailsUpdateUnlockedSchema,
  '5B6omzwwUauNNbarndynuCMyMCqZVu6ikTqnLocXZyWA':
    TransactionDetailsUpdatedSchema,
  '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb':
    TransactionIdentificationFailedSchema,
  BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: TransactionIdentifiedSchema,
  '7WG5MSrMMCeAEYwavUJ2eZQhYdYn2xZv5T8ZYoFyFA4Z': TransactionInitiatedSchema,
  '4RWHs3KE6EL4cyMHvhrxR7pm6wQcgW5wGefM5t7p8jn2':
    TransactionInitiationFailedSchema,
  DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: TransactionStatusSchema,
};
