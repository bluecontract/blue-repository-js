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
  DD8bR9NDJgQRVkvsFgWUhCQ7i1NfM55jxhiuhj2QKGm: CaptureDeclinedSchema,
  '3GqEaQb64A2UsJWDAYzR8Y94evNcTbYGrMMSkrV6jh66': CaptureFailedSchema,
  GcDzvd7qyECoWSi5XazBjyWp8AGq5aQrTNg49xKD3SoF: CaptureFundsRequestedSchema,
  '8Y3WD4MKxvq88zKDySGnW5cqLn5jJB3PweUSyemmBvoF': CardChargeCompletedSchema,
  '8r9J1CGqM1A3iuspzGef8BK6eQQ8SdxUxFDDNrQhoHL3': CardChargeRespondedSchema,
  HmvA8ekVgFNVUGbUt5b7mCrcZVPs77hgYJvrCinK2Lwk:
    CardTransactionCaptureLockChangeFailedSchema,
  '3qvrrxbTzsbhUsRtbfQuj6ffc6SgKNzfSihRqgN7wNY4':
    CardTransactionCaptureLockRequestedSchema,
  '6Py2znvZpXUQqqLuNCd8GZ8VPNmc2XLQud4FejiLmwn4':
    CardTransactionCaptureLockedSchema,
  '83n64P9yoYMY7VNGrb1UKbmVsz3wwkZW8PAJqLz8AELJ':
    CardTransactionCaptureUnlockRequestedSchema,
  '8FNgHyEe5NQxjPGPcdM3FmfGGJkUHAZEP2vLXD4Acism':
    CardTransactionCaptureUnlockedSchema,
  DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: CardTransactionDetailsSchema,
  '7jwuPsyHbqN5oQpxQoqsoUqXv7E9KYQnbv5ksQjysvnV':
    CardTransactionMonitoringRequestRejectedSchema,
  '4aL3Eedbq7FQBp2GKABQkxd5uSDmTMjttLYRsiiA3aXf':
    CardTransactionMonitoringStartedSchema,
  '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n':
    CardTransactionMonitoringStoppedSchema,
  '2nVsh9M7cDVU49yMKzG83dc217YcDtT3CchwKtG56sfx': CardTransactionPayNoteSchema,
  '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': CardTransactionReportSchema,
  '6KJJ8aRFozjWL2jATzUBeZ8bf6ffnVJYB1oYoJm8rtnv':
    ChildPayNoteIssuanceDeclinedSchema,
  '6Zkpg7wGfH7H58zxKT4hacHoQJtbstamHY6L3qVpLbRW': ChildPayNoteIssuedSchema,
  '8yMip2tqMRxoz6WvTAU7Hp4F5A285gMKPtvL6DX41Nqg':
    CompletePaymentRequestedSchema,
  '9Een3TcB61qehAjz4NcDdPeBGztoq78JGH6KuhfYjhsZ':
    FinalAmountResolutionRejectedSchema,
  Fz7b7rBDv2XZxFUHEgaYAFnVfrugVuDqkbaTpqvqEQKU:
    FinalAmountResolutionRequestedSchema,
  '6LmhFAV7hQwAAS1GFeDkuy6ZPhuSAedBoREUDiTLbS8M': FinalAmountResolvedSchema,
  '4TN6BMNe4JV6eurzctJtHNd4qsNFPCYaqyXwWep8WosQ': FundsCapturedSchema,
  '74nvQ2mXtTaqVVaRkY251t8pa8J7HKJz15rpG2YDTNCZ': FundsReservedSchema,
  D4GFzYxsfR62ScEkmAAfM5EbRRvZWT3Sw6HjUjLLDugu: FundsSecuredSchema,
  CBGbBbRr8BXEZeWeTHtNucALN7jcjHBsHgV8wCkqzgFg: FundsSecuringDeclinedSchema,
  AcV3s6B6heDQVQEMEA4xgtRY3VUtUxqKSVuioBt2pFLp: FundsSecuringFailedSchema,
  '4paCVJn58VgBo65rXHr4SXHCnbjPa5zrrAxKW3HNRS7Q':
    IssueChildPayNoteRequestedSchema,
  CNeTiNQt2BgJ7GTVjPGrCxmiXLeTGxchmZNb6j4NRbtA:
    LinkedCardChargeAndCaptureImmediatelyRequestedSchema,
  C7CKgcCSaQqVjsmReDQvSyLkam6D1ACdHgm3phmccdUR: LinkedCardChargeRequestedSchema,
  '3RZadMqVG2EviCJh3Wn8oXt3oKcE3HxDyPhxPMwjThCH':
    LinkedPayNoteStartFailedSchema,
  H87zNkATo81RUE1xGUAePKv4hDGYU8xMWgFzCbTJKcxD:
    LinkedPayNoteStartRespondedSchema,
  A1Ra7o2G3gF5RCJzKax5ftXky5TQrPcvjPmMipvv3PA7: LinkedPayNoteStartedSchema,
  FCNBRG6pXurxfM9qaBYEQGBLYZEq8iLBf7qpmjf5nrHT: MerchantToCustomerPayNoteSchema,
  '2k1DzCTuqeUdyjxgw2zJRaK8JjVK9b6af5mVVp9ncKtS':
    PayeeAssignmentConfirmedSchema,
  B9jHNiJW5Dm5vBR3mM9LDSeaYLGw67pKvwMVrrnrLUxq: PayeeAssignmentRejectedSchema,
  BAQzcd8ik3X4PrWCMgJ48mVmXjv12Mi9a7RYURnEygrD: PayeeAssignmentRequestedSchema,
  '3D5EMr4Yu2pD4z1CSUsj7kKPa28NGq6BDwU8jhFufZir':
    PaymentCancellationDeclinedSchema,
  FzLb75BhpSDKvmnvLRp5VHC7WxszSJWhDUeLYFsG7kyK: PaymentCancellationFailedSchema,
  '9TqRBQi3CZa6npdsjk1xZmx3Fx8rNu3mLGdKRsUpPxyp':
    PaymentCancelledBeforeCompletionSchema,
  A6ju5jCNdPU83nB2EJ19VE2r3d1XPgWQygPcohuRzxMa: PaymentCompletedSchema,
  Zi87ggCGvyvyC6BkE6fGfRApCKSEWvwZBzq6kr66Gxz: PaymentCompletionDeclinedSchema,
  Ex5Js1G5Q28DiqxHpMkcnPg69efQZWJqUZmTy6Rkenit: PaymentCompletionFailedSchema,
  AUyPeDTYbjKsLYHVka8VzsH6mPR3wDDunfCFgzuimFTD:
    PaymentCompletionLockChangeFailedSchema,
  CNUCbbLcR5bVJktXxLNFxziK781GPpASpHrZ3AbNbjF8:
    PaymentCompletionLockRequestedSchema,
  '5ay51sajCxDRM5w88w7vKqaFPQN2yqok2wMmFQynLLn': PaymentCompletionLockedSchema,
  '5D8V9FiXun8bgUaNQapuvra3wvxLiHtoFEy7tzscSnR3':
    PaymentCompletionUnlockRequestedSchema,
  '3CvQdp7L5VYsjdP9Wj4tjaobejkpv6VQCry4LoT2vMYw':
    PaymentCompletionUnlockedSchema,
  '25WNYVoRMxNwVV1gBiMnBNgT1nQBpkC8wbqCTeR8SfLm': PaymentMandateSchema,
  Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: PaymentMandateAttachedSchema,
  Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp:
    PaymentMandateAttachmentFailedSchema,
  '5c5mfwYpEs3LLawHVLWJVUFTgqdSMGBCHG6iPaTmqefJ':
    PaymentMandateSpendAuthorizationRequestedSchema,
  '3EntoP5XrNopV3NbvmE3G5JVTS2jEBJShutsCeFVpBqw':
    PaymentMandateSpendAuthorizationRespondedSchema,
  ENBm1kYyC3HHvnA59LZ8X7UDdZpS7875SpHmj8zBs35d:
    PaymentMandateSpendSettledSchema,
  Fms2mDEn9zx1eQgPKmTKcfYejFZ9SZrgNqP7eWVmReDi:
    PaymentMandateSpendSettlementRespondedSchema,
  HBT721eA6MjEL4s9T3ZkmTR3GtSAMQ4yYpXQRt1v4Huh: PaymentReversalDeclinedSchema,
  GodTmBkeiAhmTYR9gCF4zMnYYauDz2SgUFhwHGCFXRXU: PaymentReversalFailedSchema,
  FRi3kr6DcW6i7R65yh9YCDhVcU6mCyf2JkEVDkBkZsFa:
    PaymentReversalLockChangeFailedSchema,
  B59nS1DoGFsTn13zqvfDFvLQ7j2G4NXTRGPByLFDNrFR:
    PaymentReversalLockRequestedSchema,
  '7HHy9Zt3Ma5w7HRFHJRLK87L2F3zZsC8rWYXjWjcuzS7': PaymentReversalLockedSchema,
  '6TbnGA2HDUY27gUaZzGnS7Ts6vZoBXEpWsBjEnxPnU8H':
    PaymentReversalUnlockRequestedSchema,
  '2FrLTP891JHVyWKycAy5DkXS1VwAd8piEvX1vZvng2WF': PaymentReversalUnlockedSchema,
  J3JY5m2ZQL6nJpeT1fvWxpUb4iuLzrh19fSY1zzbWesE:
    PaymentReversedAfterCompletionSchema,
  DivLdwvVivwHNakzhjFjoG8bpwZLcyxFMinziyEkpWc8: PayNoteSchema,
  '2qhzWiZAVUTJvuAhexA8vRHrXWdWu7UGyAYPnfvEmTkV':
    PayNoteAcceptanceRequestedSchema,
  '5YLDihBUWvCz7kpaJgmhorvo7b5sdPv2AENZE7TQ7vSC': PayNoteAcceptedSchema,
  '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': PayNoteAcceptedByClientSchema,
  JCohMWXJsPs5J9tmpx62U1yJUxxnmeXo7LVCWJm1HBxe: PayNoteApprovedSchema,
  '9VcJjyJbZEFyZmE8a2iPJGrr3DMtvmLzPLyoN7YpBFPr':
    PayNoteCancellationRejectedSchema,
  '2G6hwRBQbRA4D2n8vLPqD6hES44sGeh6kGF1uG88nn5R':
    PayNoteCancellationRequestedSchema,
  DHPD6TjPRGDbnXFfNwmjySBzANJtfFKy3YpnP3gRxrNp: PayNoteCancelledSchema,
  FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE:
    PayNoteClientDecisionDiscardedSchema,
  B1P1db2a4FrXduvD2gU8Bipp48SpK19yFHw3JgKcJgqg: PayNoteDeliverySchema,
  GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: PayNoteDeliveryFailedSchema,
  CoL6y3nodmB6mpWixGtNSiNCSQKQn7tJXouUE5Q9aaF: PayNoteRejectedSchema,
  '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': PayNoteRejectedByClientSchema,
  '4RVCxhJGerHqGBUAHtbednRRuSimU65xQVzypH52ip3r': ReservationDeclinedSchema,
  '6sJCbUQpaQxcBRSkTzKgMkmphhb6c3RoJERaZWvFTWex':
    ReservationReleaseDeclinedSchema,
  '3YBnYuYiQh1DtRuci5eZexXuEPuorJar4KefKAJQdPZr':
    ReservationReleaseRequestedSchema,
  '5BxbdjDKM6H1Gn6F2SDyeqJJRdViCEKJM8EwwocaR2hj': ReservationReleasedSchema,
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
  '8Q5JVBmN6NJZHRHkkKQi2FViSNu17Fpuc4rn71ZLxzL': SettlementAmountRejectedSchema,
  AULn96cKLpm7hWzE6SZsXMrW1d4Ffy2ATpUWAHdzxbfh: SettlementAmountSpecifiedSchema,
  '248pKkeKj3v9HctkWpzcJ1E4E9enbJoS5csiPDRER62U':
    StartCardTransactionMonitoringRequestedSchema,
  CLStrVwhFuEXAd4aurmgiHZgBH6RwzmGrN4VTkMA8t4U:
    TransactionDetailsUpdateFailedSchema,
  FdqDUfAWCuXX76FATG65canUKGYJChbbzhUfnx3U87eH:
    TransactionDetailsUpdateLockChangeFailedSchema,
  '6TjBq3kF5mqXq8zHgr7LegNWUNJDLuN31z7ZrN5doY8G':
    TransactionDetailsUpdateLockRequestedSchema,
  '7eWohnCAiaeDM9w3Ta53HFzNfZ632TRi1QvEC4CWq5dp':
    TransactionDetailsUpdateLockedSchema,
  J6Eku9sEFgBuG19nxYTWzvdyM9fDbxf59waQj5hz712H:
    TransactionDetailsUpdateRejectedSchema,
  G7U3e8x6XcUiy65g9MAh4LV2PRts5Vsk8KFJ9BrqmXao:
    TransactionDetailsUpdateRequestedSchema,
  HqD5YrGeruxAeibVpGJwpqXRcmCuoSNWN2j48iRaJdoU:
    TransactionDetailsUpdateUnlockRequestedSchema,
  '9Ly4TDBSioFwQGRYZjXFrYToUKYmFsK935PRcVTFwkqA':
    TransactionDetailsUpdateUnlockedSchema,
  '2PvRXbCWSaToP2BiFrEQHdTZ8W1F5TzNeCsK1rbhd4iE':
    TransactionDetailsUpdatedSchema,
  '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb':
    TransactionIdentificationFailedSchema,
  BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: TransactionIdentifiedSchema,
  '3u8MNZmeGVfDWPSDAy4YKrLvjGrKixetC82z5VCj5Nxh': TransactionInitiatedSchema,
  GuqdDWWRhjXQaHEk45Gdfgia1m6Dp5FS3bEaYXCDe16y:
    TransactionInitiationFailedSchema,
  DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: TransactionStatusSchema,
};
