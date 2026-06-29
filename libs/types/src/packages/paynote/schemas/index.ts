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
  '3q7ZoYNpX5GoVScYTqzom7YQ1fTCPZeegmdvRZvTVee1':
    CancelBeforeCompletionRequestedSchema,
  Fco4nFxgHFP38LD59gHmiTrKyqJAG5B623gShceqRYyF: CaptureDeclinedSchema,
  '9UCqtGPAjKMd77NN7G4oTL6DKKimkLoT5V69AiUh6knx': CaptureFailedSchema,
  '8WUtwwVnvBXPJwa1b9ewP5xiCRZt9z8XrDzs1fNzN1UL': CaptureFundsRequestedSchema,
  DeNXwMeUPHywS5dnywPdkm8TS6qXYuvm1jBU81r8vicY: CardChargeCompletedSchema,
  BChX2KCCV8bAaVpcxk2AMGyL5EBWkMN7A6MXqYx23kna: CardChargeRespondedSchema,
  BVWamaKm2AEt9FEN5HZKuGWseEzeWPJeyJHbCFq4AGbz:
    CardTransactionCaptureLockChangeFailedSchema,
  '3WUS7fRk3isWgjSnFGXta9HMkGmj2zg6898rbLH5G5iz':
    CardTransactionCaptureLockRequestedSchema,
  DMqN5PRMtERwhanUamBCYfELwGNxSq5aLXQDStPNFBio:
    CardTransactionCaptureLockedSchema,
  GRKRovDGMJjtV4dtaUmmUJEojNCwyosV6hZtmsjPzs4d:
    CardTransactionCaptureUnlockRequestedSchema,
  FKW7FJk8UxqKkYsPfGBwv3sWdBrgiaV1emVVWj1RFTA6:
    CardTransactionCaptureUnlockedSchema,
  DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: CardTransactionDetailsSchema,
  '9gABqM7a7rkmcy1hymgajNEvYRKff7GUbHQuWPx1Qt9k':
    CardTransactionMonitoringRequestRejectedSchema,
  CyqbBE2DCyFLhMSpyy5n48JHVUcWhzFVKV4mf5pMP86p:
    CardTransactionMonitoringStartedSchema,
  '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n':
    CardTransactionMonitoringStoppedSchema,
  '2hS59JMnNLk7RxR8P6YrEU4vcFDZRyGFUYDoqunuRCoR': CardTransactionPayNoteSchema,
  '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': CardTransactionReportSchema,
  '7TZfFGcCm89ELP9am43qpyEfGSEMpup6fPkEjQEKiVNw':
    ChildPayNoteIssuanceDeclinedSchema,
  Han6ZfnAh4BUecEKcFoQo36EdoSHxyNtDdtt6bHer3aM: ChildPayNoteIssuedSchema,
  GaCbTkHKYc8bbvCwR7zCU7V29HGvoiMR3EU6HULign51: CompletePaymentRequestedSchema,
  '72A3S6dDAqoMPUbC1EUUoCCsnfecvpS1L3cYevSydsai':
    FinalAmountResolutionRejectedSchema,
  '3fe87zG5NdKpGKCwWistwuomDgVR56uoo9QyvwbqrA3k':
    FinalAmountResolutionRequestedSchema,
  wi22d16wHycXs4G9op3SEHvcR2rK3JTedywGewUt27F: FinalAmountResolvedSchema,
  '8nn7phpXTbkJDdtcUoWifGAu3sUG85atgLLU8QcupWmw': FundsCapturedSchema,
  '5PasMX8MMx5Z4Jwr63W5w7tA7E7gGCVzYrrKkJGvU8xX': FundsReservedSchema,
  BRCYCbhWLNL4eV9PPiXyR9jD5vUwZJM1QzVRitbzgttG: FundsSecuredSchema,
  F9uGVcesweVvK72Uw95r5uoC3N9rK7wEqrLesNF2dg6t: FundsSecuringDeclinedSchema,
  BWyf1rwHSCFApt6cTx1pq758Cwkmf6ip1XdEBg4QnCv8: FundsSecuringFailedSchema,
  '2BGKdGTmrSuS7j7wE2bneyopsfgj5MwLLeU21CodKn4p':
    IssueChildPayNoteRequestedSchema,
  '5EzstBLEcdv1qNVo8JYzxRd7T6P8fyZ5HrgN2fxz6CdX':
    LinkedCardChargeAndCaptureImmediatelyRequestedSchema,
  '8btGPWw748VG2tHnj248YNV6EirmDg8oJWAN5UmzcwEo':
    LinkedCardChargeRequestedSchema,
  FRcHiifo1E2aQMx1YEMfD2wBTLFAhX4hHCAr4rAHruCS: LinkedPayNoteStartFailedSchema,
  '25NBCk2eHaVrp8z8c81y75HAiL55nNZRSZ7uxDsHEGuX':
    LinkedPayNoteStartRespondedSchema,
  BrueWfkUx7usLz6HqUq1vLUZtab8cYcuPuHzthmhip8E: LinkedPayNoteStartedSchema,
  EzHXBDH1qMKUa8CRVwLbmHrSZZBEfZWvMNYyEnSuLLsF: MerchantToCustomerPayNoteSchema,
  '44BS4uToUQLVy8cFfUjbxr99ozR6fiAtCtC3Wd38VPwd':
    PayeeAssignmentConfirmedSchema,
  '3zCHLCtMCUoM1LiZP7skhLwZ5NGcTmVLQbdfPkDuv4q4': PayeeAssignmentRejectedSchema,
  D17BbAFgz2YXvNegams28sxZqtqNKFepEMbPHrfed4bF: PayeeAssignmentRequestedSchema,
  '7QLdg1jcp7zdZHW8TMek1KRhdhpjmXNyJv83qmMLedkp':
    PaymentCancellationDeclinedSchema,
  '3PohjSUMX4izceADM8gpy4Mg9988TNPWX9fKGrMBtZ8a':
    PaymentCancellationFailedSchema,
  EUw3vUNYpwxKrtvF9FE7jwGzMo7NByVZcLuaTi8Pks7X:
    PaymentCancelledBeforeCompletionSchema,
  '5hNfvS7YBGdFfwoUt214LTTk8NSsVETTwDfDTzqcWihu': PaymentCompletedSchema,
  os4PgmBBxgt26WMaUg4XC4kmHkHygU5WL6PD5bHhShL: PaymentCompletionDeclinedSchema,
  '6NZSd6JgMDdXikYHCDkeQ6aJsWCvMaznrRWdAaGRxnAL': PaymentCompletionFailedSchema,
  WAYPYNWJEBL2TPtMuk8R3HYXcSR1itCizbyQoKwg2bn:
    PaymentCompletionLockChangeFailedSchema,
  Gom5w2zMmTCErVF7vgKzSbE1HKv6xfsYzwXJEq3FanhA:
    PaymentCompletionLockRequestedSchema,
  GnhJBCKaSH7HSDuD2LihE7ds3Dcddfg8ueDEcaC5VV2Q: PaymentCompletionLockedSchema,
  '9t7hUWWXDow4cJfSuG88zruU6YasQeQz1J8jGwcvwthf':
    PaymentCompletionUnlockRequestedSchema,
  BGqFuh1FHNRvBYfqDegotUCuCkZUyHPi4cMzfzZMEsGH: PaymentCompletionUnlockedSchema,
  CGQTbEzX4HVwRKhD8qc9pSEgmVPJFRf5ermrcasyiu3P: PaymentMandateSchema,
  Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: PaymentMandateAttachedSchema,
  Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp:
    PaymentMandateAttachmentFailedSchema,
  '8jsJ7UY8wiQvDtpsjqXvnrQUMhqXZhfF6EKBzhtkUKqo':
    PaymentMandateSpendAuthorizationRequestedSchema,
  F1JQhT1Fxn5QMcvtTUn95qvi7tTggAhv3nvQmHExUTuH:
    PaymentMandateSpendAuthorizationRespondedSchema,
  '7MrYz5SYkcN9b479w4R4M3JzsgWYuuJBhSfMLwSPdetk':
    PaymentMandateSpendSettledSchema,
  CNxDfzH62fY9mtj71BTaZZNsyGLpS2RinaB6K34tibbh:
    PaymentMandateSpendSettlementRespondedSchema,
  HsMuLH95bFaoqknkp6z3ZxMZyAmP21Qx9aYBTtc41zES: PaymentReversalDeclinedSchema,
  Aa45Pf6wk1T9YFxjxBk7fVRygZk9XQ7FWvXquQyLdGZH: PaymentReversalFailedSchema,
  '2a2gKUm58bHAhhod7QW8ET32tB1UsNAMcfTCkP6i42TM':
    PaymentReversalLockChangeFailedSchema,
  '2qv8FU2sy1vXRuuVFKjr4e564Khe1iT1j9YDTfffK3Ti':
    PaymentReversalLockRequestedSchema,
  '4VMcLbCnPdsVT5VozPcgoQhEi9HyxKwoWZw92PdHSBQZ': PaymentReversalLockedSchema,
  AWvMe8pZ3sK5ihyXirhd3KUyxsJkAJPyARigaj2ujF6F:
    PaymentReversalUnlockRequestedSchema,
  G2Nsw7CtbAig3r87U1GJSV8Rhvvg86gmS6dwP657ZTNF: PaymentReversalUnlockedSchema,
  BZL11BoCdd5wXZ1XGwPqckiCzfinoVLNUpmFt4cXGEQ8:
    PaymentReversedAfterCompletionSchema,
  BKG9wBym4uT1s1Zd62mhVVNPshWpDf8Dgt6oqgTJMPCV: PayNoteSchema,
  B2iduV8cAcvAuNCJ7HDZuR5N1YJETbdeohZF1EEXhTZE:
    PayNoteAcceptanceRequestedSchema,
  Hcg9rpEFRbEcsVyx2Doq7MHZx9bhP4J32x3jA74AgTz7: PayNoteAcceptedSchema,
  '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': PayNoteAcceptedByClientSchema,
  GqsXg52deb5uuCQyUo4XnRWHwPAhpyW7muCpfdnpo4fj: PayNoteApprovedSchema,
  HqAkxbtsXiTe2YVKh3ohbQTQMit7yLrgRS84ttoHpNe9:
    PayNoteCancellationRejectedSchema,
  '3RY8mx3eh39FJDi6wBK95ZLr9vq8aXNWy7ynX95hCR8z':
    PayNoteCancellationRequestedSchema,
  '8Qtt1QxdAecmYSHjLU9GPQC2NDm8TGnaQvfPz7himXK2': PayNoteCancelledSchema,
  FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE:
    PayNoteClientDecisionDiscardedSchema,
  EBVUtjFi2vMrdLXL3bKET1daRicUEgRXcYRDr8U1mX7T: PayNoteDeliverySchema,
  GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: PayNoteDeliveryFailedSchema,
  '9XRGf45TaohQEHutFaNYPHkYYe2NWsyXsSsv2UoTfm6L': PayNoteRejectedSchema,
  '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': PayNoteRejectedByClientSchema,
  EK3i61s8rDuLgcTEZVFSctMBe5egvZPyjjGvUoLhwLie: ReservationDeclinedSchema,
  HhyRVknmhGnXhGBT53hKCioV6Roq1gEb14DAR6Gwu8r9:
    ReservationReleaseDeclinedSchema,
  '9wv1GB7j71PTZFYmatANzxk34KPaCeouB4yc4AxYirrU':
    ReservationReleaseRequestedSchema,
  CP7T2PwEUP3xDiT6qMxNacVrigJFMKYFPLZCEkSdoddu: ReservationReleasedSchema,
  ApRvaTP7YHK4q4acrZFTtrsRLxqHSiEp4d6vVZ8sGFup:
    ReserveFundsAndCaptureImmediatelyRequestedSchema,
  DEmon8pFkVCLcStZFXVz5FyrorbjnKHNdVfyRBNKKLp1: ReserveFundsRequestedSchema,
  FzBVMWWfDew8fdnxss4ABMm2ESMqS79dBP4fmwA4CtA4:
    ReverseAfterCompletionRequestedSchema,
  '8Yvq4VCuntJBda3PDdVi2GEnCpi1UHVUZhmZBt4599aa':
    ReverseCardChargeAndCaptureImmediatelyRequestedSchema,
  '5ZqjnjtJJMxKao4htfHUAJGTbPedxv9HMdELRsXaR8mR':
    ReverseCardChargeRequestedSchema,
  '3LxPRfuHdLUsCMZciUSsFXLyLoJUDjCYreAgFb24zJQr': SecureFundsRequestedSchema,
  ByF1yfP9y8HBLFWZ6qzYhYnuujUEpEvx4AFUsgKVfjWZ: SettlementAmountRejectedSchema,
  A67ddLVzitXDJTFNC3hg4fp4a52aUHjvtLsKkqE5v3ZH: SettlementAmountSpecifiedSchema,
  DaZpPPmySzsqr4TNuxQaQunmNgbcMZCz3amwe57N6pnm:
    StartCardTransactionMonitoringRequestedSchema,
  '2ZtTQ2b9sFY65w4f4wWYQctRGj9o9ApkRb6tMXyiUqMb':
    TransactionDetailsUpdateFailedSchema,
  AGmjYB8hJAL9JUR3vsoqktdA7RcivcsjgoGjxQq3RQgj:
    TransactionDetailsUpdateLockChangeFailedSchema,
  ARgyNXBQ7CxMxtsnZhyGv62H45uRN4rd7L74RUzyCgcz:
    TransactionDetailsUpdateLockRequestedSchema,
  '8rhab2RQZiMZ4zqT85vNKR2zVCk9ZfCXGMLWERMnWF7R':
    TransactionDetailsUpdateLockedSchema,
  '3BD7DPACFH2DZWxs9kb8YCBNypzJYMzctkyu6GZDsf85':
    TransactionDetailsUpdateRejectedSchema,
  B2MMGSbvPhSodiLY7RPngBv9G87VSkgxgC2SF8DzA733:
    TransactionDetailsUpdateRequestedSchema,
  FAvCxgQqrzAckkXgEU6UXfnntsq8V1V2tfEiHYtuZBPs:
    TransactionDetailsUpdateUnlockRequestedSchema,
  '9MDjTe2agSVnBooUFpMSzXenPYPgTC7Z4CvTB9nkyCyc':
    TransactionDetailsUpdateUnlockedSchema,
  '28nyzzqFkwjPojUURBiBoHQeGb4B74JGQSe5Ly5zXjK3':
    TransactionDetailsUpdatedSchema,
  '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb':
    TransactionIdentificationFailedSchema,
  BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: TransactionIdentifiedSchema,
  '75FqpZhMunC4H25PrrsmNRCRGoLj5UJ1Ldc4eVsHqjGM': TransactionInitiatedSchema,
  AAEsZ5p6qEHZYr4ZP9oFMyYvJkFNbF6miqtnnYYkovTE:
    TransactionInitiationFailedSchema,
  DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: TransactionStatusSchema,
};
