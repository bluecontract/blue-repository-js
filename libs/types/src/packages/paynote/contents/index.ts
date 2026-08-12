import { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
import { PaymentMandate } from './PaymentMandate';
import { CardTransactionReport } from './CardTransactionReport';
import { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
import { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
import { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
import { CardTransactionPayNote } from './CardTransactionPayNote';
import { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
import { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
import { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
import { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
import { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
import { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
import { CaptureFailed } from './CaptureFailed';
import { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
import { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
import { TransactionInitiated } from './TransactionInitiated';
import { ReservationReleaseRequested } from './ReservationReleaseRequested';
import { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
import { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
import { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { ReservationDeclined } from './ReservationDeclined';
import { FundsCaptured } from './FundsCaptured';
import { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
import { PaymentCompletionLocked } from './PaymentCompletionLocked';
import { ReservationReleased } from './ReservationReleased';
import { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
import { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
import { PayNoteAccepted } from './PayNoteAccepted';
import { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { FinalAmountResolved } from './FinalAmountResolved';
import { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
import { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
import { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
import { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
import { ChildPayNoteIssued } from './ChildPayNoteIssued';
import { FundsReserved } from './FundsReserved';
import { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
import { PaymentReversalLocked } from './PaymentReversalLocked';
import { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
import { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
import { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
import { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
import { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
import { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
import { SettlementAmountRejected } from './SettlementAmountRejected';
import { CardChargeResponded } from './CardChargeResponded';
import { CardChargeCompleted } from './CardChargeCompleted';
import { CompletePaymentRequested } from './CompletePaymentRequested';
import { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
import { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
import { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
import { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
import { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
import { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
import { PaymentCompleted } from './PaymentCompleted';
import { FundsSecuringFailed } from './FundsSecuringFailed';
import { SettlementAmountSpecified } from './SettlementAmountSpecified';
import { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
import { PayNoteDelivery } from './PayNoteDelivery';
import { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
import { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
import { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
import { TransactionIdentified } from './TransactionIdentified';
import { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
import { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
import { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
import { ReserveFundsRequested } from './ReserveFundsRequested';
import { FundsSecuringDeclined } from './FundsSecuringDeclined';
import { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
import { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
import { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
import { PayNoteRejected } from './PayNoteRejected';
import { FundsSecured } from './FundsSecured';
import { CaptureDeclined } from './CaptureDeclined';
import { PayNoteCancelled } from './PayNoteCancelled';
import { PayNote } from './PayNote';
import { TransactionStatus } from './TransactionStatus';
import { CardTransactionDetails } from './CardTransactionDetails';
import { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
import { PaymentCompletionFailed } from './PaymentCompletionFailed';
import { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
import { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
import { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
import { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
import { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
import { SecureFundsRequested } from './SecureFundsRequested';
import { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
import { PaymentCancellationFailed } from './PaymentCancellationFailed';
import { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
import { CaptureFundsRequested } from './CaptureFundsRequested';
import { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
import { PaymentReversalFailed } from './PaymentReversalFailed';
import { PaymentMandateAttached } from './PaymentMandateAttached';
import { TransactionInitiationFailed } from './TransactionInitiationFailed';
import { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
import { PaymentReversalDeclined } from './PaymentReversalDeclined';
import { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
import { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
import { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
import { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
import { PayNoteApproved } from './PayNoteApproved';
import { PaymentCompletionDeclined } from './PaymentCompletionDeclined';

export { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
export { PaymentMandate } from './PaymentMandate';
export { CardTransactionReport } from './CardTransactionReport';
export { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
export { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
export { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
export { CardTransactionPayNote } from './CardTransactionPayNote';
export { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
export { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
export { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
export { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
export { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
export { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
export { CaptureFailed } from './CaptureFailed';
export { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
export { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
export { TransactionInitiated } from './TransactionInitiated';
export { ReservationReleaseRequested } from './ReservationReleaseRequested';
export { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
export { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
export { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
export { ReservationDeclined } from './ReservationDeclined';
export { FundsCaptured } from './FundsCaptured';
export { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
export { PaymentCompletionLocked } from './PaymentCompletionLocked';
export { ReservationReleased } from './ReservationReleased';
export { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
export { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
export { PayNoteAccepted } from './PayNoteAccepted';
export { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
export { FinalAmountResolved } from './FinalAmountResolved';
export { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
export { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
export { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
export { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
export { ChildPayNoteIssued } from './ChildPayNoteIssued';
export { FundsReserved } from './FundsReserved';
export { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
export { PaymentReversalLocked } from './PaymentReversalLocked';
export { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
export { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
export { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
export { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
export { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
export { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
export { SettlementAmountRejected } from './SettlementAmountRejected';
export { CardChargeResponded } from './CardChargeResponded';
export { CardChargeCompleted } from './CardChargeCompleted';
export { CompletePaymentRequested } from './CompletePaymentRequested';
export { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
export { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
export { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
export { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
export { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
export { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
export { PaymentCompleted } from './PaymentCompleted';
export { FundsSecuringFailed } from './FundsSecuringFailed';
export { SettlementAmountSpecified } from './SettlementAmountSpecified';
export { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
export { PayNoteDelivery } from './PayNoteDelivery';
export { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
export { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
export { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
export { TransactionIdentified } from './TransactionIdentified';
export { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
export { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
export { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
export { ReserveFundsRequested } from './ReserveFundsRequested';
export { FundsSecuringDeclined } from './FundsSecuringDeclined';
export { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
export { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
export { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
export { PayNoteRejected } from './PayNoteRejected';
export { FundsSecured } from './FundsSecured';
export { CaptureDeclined } from './CaptureDeclined';
export { PayNoteCancelled } from './PayNoteCancelled';
export { PayNote } from './PayNote';
export { TransactionStatus } from './TransactionStatus';
export { CardTransactionDetails } from './CardTransactionDetails';
export { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
export { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
export { PaymentCompletionFailed } from './PaymentCompletionFailed';
export { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
export { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
export { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
export { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
export { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
export { SecureFundsRequested } from './SecureFundsRequested';
export { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
export { PaymentCancellationFailed } from './PaymentCancellationFailed';
export { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
export { CaptureFundsRequested } from './CaptureFundsRequested';
export { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
export { PaymentReversalFailed } from './PaymentReversalFailed';
export { PaymentMandateAttached } from './PaymentMandateAttached';
export { TransactionInitiationFailed } from './TransactionInitiationFailed';
export { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
export { PaymentReversalDeclined } from './PaymentReversalDeclined';
export { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
export { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
export { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
export { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
export { PayNoteApproved } from './PayNoteApproved';
export { PaymentCompletionDeclined } from './PaymentCompletionDeclined';

export const contents: Record<string, unknown> = {
  '248pKkeKj3v9HctkWpzcJ1E4E9enbJoS5csiPDRER62U':
    StartCardTransactionMonitoringRequested,
  '25WNYVoRMxNwVV1gBiMnBNgT1nQBpkC8wbqCTeR8SfLm': PaymentMandate,
  '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': CardTransactionReport,
  '2FrLTP891JHVyWKycAy5DkXS1VwAd8piEvX1vZvng2WF': PaymentReversalUnlocked,
  '2G6hwRBQbRA4D2n8vLPqD6hES44sGeh6kGF1uG88nn5R': PayNoteCancellationRequested,
  '2k1DzCTuqeUdyjxgw2zJRaK8JjVK9b6af5mVVp9ncKtS': PayeeAssignmentConfirmed,
  '2nVsh9M7cDVU49yMKzG83dc217YcDtT3CchwKtG56sfx': CardTransactionPayNote,
  '2PvRXbCWSaToP2BiFrEQHdTZ8W1F5TzNeCsK1rbhd4iE': TransactionDetailsUpdated,
  '2qhzWiZAVUTJvuAhexA8vRHrXWdWu7UGyAYPnfvEmTkV': PayNoteAcceptanceRequested,
  '2Z77G9HMUNvJ6LRfvLMQBpshxbvGY3mCMskgpAEw4Rjo': ReverseCardChargeRequested,
  '3CvQdp7L5VYsjdP9Wj4tjaobejkpv6VQCry4LoT2vMYw': PaymentCompletionUnlocked,
  '3D5EMr4Yu2pD4z1CSUsj7kKPa28NGq6BDwU8jhFufZir': PaymentCancellationDeclined,
  '3EntoP5XrNopV3NbvmE3G5JVTS2jEBJShutsCeFVpBqw':
    PaymentMandateSpendAuthorizationResponded,
  '3GqEaQb64A2UsJWDAYzR8Y94evNcTbYGrMMSkrV6jh66': CaptureFailed,
  '3qvrrxbTzsbhUsRtbfQuj6ffc6SgKNzfSihRqgN7wNY4':
    CardTransactionCaptureLockRequested,
  '3RZadMqVG2EviCJh3Wn8oXt3oKcE3HxDyPhxPMwjThCH': LinkedPayNoteStartFailed,
  '3u8MNZmeGVfDWPSDAy4YKrLvjGrKixetC82z5VCj5Nxh': TransactionInitiated,
  '3YBnYuYiQh1DtRuci5eZexXuEPuorJar4KefKAJQdPZr': ReservationReleaseRequested,
  '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n':
    CardTransactionMonitoringStopped,
  '4aL3Eedbq7FQBp2GKABQkxd5uSDmTMjttLYRsiiA3aXf':
    CardTransactionMonitoringStarted,
  '4paCVJn58VgBo65rXHr4SXHCnbjPa5zrrAxKW3HNRS7Q': IssueChildPayNoteRequested,
  '4RVCxhJGerHqGBUAHtbednRRuSimU65xQVzypH52ip3r': ReservationDeclined,
  '4TN6BMNe4JV6eurzctJtHNd4qsNFPCYaqyXwWep8WosQ': FundsCaptured,
  '4yJfdAuMrzyVQPsopWMfw24CiW2xj31jC4oCwhXmPG8V':
    ReverseCardChargeAndCaptureImmediatelyRequested,
  '5ay51sajCxDRM5w88w7vKqaFPQN2yqok2wMmFQynLLn': PaymentCompletionLocked,
  '5BxbdjDKM6H1Gn6F2SDyeqJJRdViCEKJM8EwwocaR2hj': ReservationReleased,
  '5c5mfwYpEs3LLawHVLWJVUFTgqdSMGBCHG6iPaTmqefJ':
    PaymentMandateSpendAuthorizationRequested,
  '5D8V9FiXun8bgUaNQapuvra3wvxLiHtoFEy7tzscSnR3':
    PaymentCompletionUnlockRequested,
  '5YLDihBUWvCz7kpaJgmhorvo7b5sdPv2AENZE7TQ7vSC': PayNoteAccepted,
  '6KJJ8aRFozjWL2jATzUBeZ8bf6ffnVJYB1oYoJm8rtnv': ChildPayNoteIssuanceDeclined,
  '6LmhFAV7hQwAAS1GFeDkuy6ZPhuSAedBoREUDiTLbS8M': FinalAmountResolved,
  '6Py2znvZpXUQqqLuNCd8GZ8VPNmc2XLQud4FejiLmwn4': CardTransactionCaptureLocked,
  '6sJCbUQpaQxcBRSkTzKgMkmphhb6c3RoJERaZWvFTWex': ReservationReleaseDeclined,
  '6TbnGA2HDUY27gUaZzGnS7Ts6vZoBXEpWsBjEnxPnU8H':
    PaymentReversalUnlockRequested,
  '6TjBq3kF5mqXq8zHgr7LegNWUNJDLuN31z7ZrN5doY8G':
    TransactionDetailsUpdateLockRequested,
  '6Zkpg7wGfH7H58zxKT4hacHoQJtbstamHY6L3qVpLbRW': ChildPayNoteIssued,
  '74nvQ2mXtTaqVVaRkY251t8pa8J7HKJz15rpG2YDTNCZ': FundsReserved,
  '7eWohnCAiaeDM9w3Ta53HFzNfZ632TRi1QvEC4CWq5dp':
    TransactionDetailsUpdateLocked,
  '7HHy9Zt3Ma5w7HRFHJRLK87L2F3zZsC8rWYXjWjcuzS7': PaymentReversalLocked,
  '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': PayNoteRejectedByClient,
  '7jwuPsyHbqN5oQpxQoqsoUqXv7E9KYQnbv5ksQjysvnV':
    CardTransactionMonitoringRequestRejected,
  '7yCCQs9S2nns1nD3UG572QKvxUss5roACewUWbz5NLNv':
    ReverseAfterCompletionRequested,
  '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb':
    TransactionIdentificationFailed,
  '83n64P9yoYMY7VNGrb1UKbmVsz3wwkZW8PAJqLz8AELJ':
    CardTransactionCaptureUnlockRequested,
  '8FNgHyEe5NQxjPGPcdM3FmfGGJkUHAZEP2vLXD4Acism':
    CardTransactionCaptureUnlocked,
  '8Q5JVBmN6NJZHRHkkKQi2FViSNu17Fpuc4rn71ZLxzL': SettlementAmountRejected,
  '8r9J1CGqM1A3iuspzGef8BK6eQQ8SdxUxFDDNrQhoHL3': CardChargeResponded,
  '8Y3WD4MKxvq88zKDySGnW5cqLn5jJB3PweUSyemmBvoF': CardChargeCompleted,
  '8yMip2tqMRxoz6WvTAU7Hp4F5A285gMKPtvL6DX41Nqg': CompletePaymentRequested,
  '9Een3TcB61qehAjz4NcDdPeBGztoq78JGH6KuhfYjhsZ': FinalAmountResolutionRejected,
  '9Ly4TDBSioFwQGRYZjXFrYToUKYmFsK935PRcVTFwkqA':
    TransactionDetailsUpdateUnlocked,
  '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': PayNoteAcceptedByClient,
  '9TqRBQi3CZa6npdsjk1xZmx3Fx8rNu3mLGdKRsUpPxyp':
    PaymentCancelledBeforeCompletion,
  '9VcJjyJbZEFyZmE8a2iPJGrr3DMtvmLzPLyoN7YpBFPr': PayNoteCancellationRejected,
  A1Ra7o2G3gF5RCJzKax5ftXky5TQrPcvjPmMipvv3PA7: LinkedPayNoteStarted,
  A6ju5jCNdPU83nB2EJ19VE2r3d1XPgWQygPcohuRzxMa: PaymentCompleted,
  AcV3s6B6heDQVQEMEA4xgtRY3VUtUxqKSVuioBt2pFLp: FundsSecuringFailed,
  AULn96cKLpm7hWzE6SZsXMrW1d4Ffy2ATpUWAHdzxbfh: SettlementAmountSpecified,
  AUyPeDTYbjKsLYHVka8VzsH6mPR3wDDunfCFgzuimFTD:
    PaymentCompletionLockChangeFailed,
  B1P1db2a4FrXduvD2gU8Bipp48SpK19yFHw3JgKcJgqg: PayNoteDelivery,
  B59nS1DoGFsTn13zqvfDFvLQ7j2G4NXTRGPByLFDNrFR: PaymentReversalLockRequested,
  B9jHNiJW5Dm5vBR3mM9LDSeaYLGw67pKvwMVrrnrLUxq: PayeeAssignmentRejected,
  BAQzcd8ik3X4PrWCMgJ48mVmXjv12Mi9a7RYURnEygrD: PayeeAssignmentRequested,
  BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: TransactionIdentified,
  Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp: PaymentMandateAttachmentFailed,
  C1rwze4jUCYuRxvCJg4gV3c8D3bWUARp95n7X8mj8XAp: CancelBeforeCompletionRequested,
  C7CKgcCSaQqVjsmReDQvSyLkam6D1ACdHgm3phmccdUR: LinkedCardChargeRequested,
  C853sXni8pJeAfbHCtKB477n1BebwBAmL4SxiE3dy4fA: ReserveFundsRequested,
  CBGbBbRr8BXEZeWeTHtNucALN7jcjHBsHgV8wCkqzgFg: FundsSecuringDeclined,
  CLStrVwhFuEXAd4aurmgiHZgBH6RwzmGrN4VTkMA8t4U: TransactionDetailsUpdateFailed,
  CNeTiNQt2BgJ7GTVjPGrCxmiXLeTGxchmZNb6j4NRbtA:
    LinkedCardChargeAndCaptureImmediatelyRequested,
  CNUCbbLcR5bVJktXxLNFxziK781GPpASpHrZ3AbNbjF8: PaymentCompletionLockRequested,
  CoL6y3nodmB6mpWixGtNSiNCSQKQn7tJXouUE5Q9aaF: PayNoteRejected,
  D4GFzYxsfR62ScEkmAAfM5EbRRvZWT3Sw6HjUjLLDugu: FundsSecured,
  DD8bR9NDJgQRVkvsFgWUhCQ7i1NfM55jxhiuhj2QKGm: CaptureDeclined,
  DHPD6TjPRGDbnXFfNwmjySBzANJtfFKy3YpnP3gRxrNp: PayNoteCancelled,
  DivLdwvVivwHNakzhjFjoG8bpwZLcyxFMinziyEkpWc8: PayNote,
  DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: TransactionStatus,
  DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: CardTransactionDetails,
  ECtoQipB9ayV1n8sHZgZy8U8z3rEsUbj8nBDwoueyfTU:
    ReserveFundsAndCaptureImmediatelyRequested,
  ENBm1kYyC3HHvnA59LZ8X7UDdZpS7875SpHmj8zBs35d: PaymentMandateSpendSettled,
  Ex5Js1G5Q28DiqxHpMkcnPg69efQZWJqUZmTy6Rkenit: PaymentCompletionFailed,
  FCNBRG6pXurxfM9qaBYEQGBLYZEq8iLBf7qpmjf5nrHT: MerchantToCustomerPayNote,
  FdqDUfAWCuXX76FATG65canUKGYJChbbzhUfnx3U87eH:
    TransactionDetailsUpdateLockChangeFailed,
  Fms2mDEn9zx1eQgPKmTKcfYejFZ9SZrgNqP7eWVmReDi:
    PaymentMandateSpendSettlementResponded,
  FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE: PayNoteClientDecisionDiscarded,
  FRi3kr6DcW6i7R65yh9YCDhVcU6mCyf2JkEVDkBkZsFa: PaymentReversalLockChangeFailed,
  FVosfv6GQeWk8zJCHiZtC4D6LFxwU8Y8ARAFYX1rsxzd: SecureFundsRequested,
  Fz7b7rBDv2XZxFUHEgaYAFnVfrugVuDqkbaTpqvqEQKU: FinalAmountResolutionRequested,
  FzLb75BhpSDKvmnvLRp5VHC7WxszSJWhDUeLYFsG7kyK: PaymentCancellationFailed,
  G7U3e8x6XcUiy65g9MAh4LV2PRts5Vsk8KFJ9BrqmXao:
    TransactionDetailsUpdateRequested,
  GcDzvd7qyECoWSi5XazBjyWp8AGq5aQrTNg49xKD3SoF: CaptureFundsRequested,
  GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: PayNoteDeliveryFailed,
  GodTmBkeiAhmTYR9gCF4zMnYYauDz2SgUFhwHGCFXRXU: PaymentReversalFailed,
  Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: PaymentMandateAttached,
  GuqdDWWRhjXQaHEk45Gdfgia1m6Dp5FS3bEaYXCDe16y: TransactionInitiationFailed,
  H87zNkATo81RUE1xGUAePKv4hDGYU8xMWgFzCbTJKcxD: LinkedPayNoteStartResponded,
  HBT721eA6MjEL4s9T3ZkmTR3GtSAMQ4yYpXQRt1v4Huh: PaymentReversalDeclined,
  HmvA8ekVgFNVUGbUt5b7mCrcZVPs77hgYJvrCinK2Lwk:
    CardTransactionCaptureLockChangeFailed,
  HqD5YrGeruxAeibVpGJwpqXRcmCuoSNWN2j48iRaJdoU:
    TransactionDetailsUpdateUnlockRequested,
  J3JY5m2ZQL6nJpeT1fvWxpUb4iuLzrh19fSY1zzbWesE: PaymentReversedAfterCompletion,
  J6Eku9sEFgBuG19nxYTWzvdyM9fDbxf59waQj5hz712H:
    TransactionDetailsUpdateRejected,
  JCohMWXJsPs5J9tmpx62U1yJUxxnmeXo7LVCWJm1HBxe: PayNoteApproved,
  Zi87ggCGvyvyC6BkE6fGfRApCKSEWvwZBzq6kr66Gxz: PaymentCompletionDeclined,
};
