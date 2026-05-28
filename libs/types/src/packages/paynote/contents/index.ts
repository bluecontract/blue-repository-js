import { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
import { FinalAmountResolved } from './FinalAmountResolved';
import { CaptureFundsRequested } from './CaptureFundsRequested';
import { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
import { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
import { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
import { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
import { PayNoteApproved } from './PayNoteApproved';
import { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
import { PayNoteDelivery } from './PayNoteDelivery';
import { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
import { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
import { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
import { PaymentReversalDeclined } from './PaymentReversalDeclined';
import { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
import { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
import { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
import { PaymentReversalLocked } from './PaymentReversalLocked';
import { FundsReserved } from './FundsReserved';
import { ReserveFundsRequested } from './ReserveFundsRequested';
import { TransactionInitiated } from './TransactionInitiated';
import { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
import { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
import { PaymentMandate } from './PaymentMandate';
import { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
import { FundsSecuringFailed } from './FundsSecuringFailed';
import { SettlementAmountSpecified } from './SettlementAmountSpecified';
import { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
import { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
import { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
import { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
import { ReservationDeclined } from './ReservationDeclined';
import { CardChargeCompleted } from './CardChargeCompleted';
import { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { CaptureFailed } from './CaptureFailed';
import { TransactionInitiationFailed } from './TransactionInitiationFailed';
import { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
import { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
import { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
import { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
import { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
import { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
import { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
import { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
import { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
import { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
import { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
import { ReservationReleaseRequested } from './ReservationReleaseRequested';
import { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
import { PayNoteAccepted } from './PayNoteAccepted';
import { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
import { PaymentCompleted } from './PaymentCompleted';
import { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
import { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
import { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
import { CardTransactionPayNote } from './CardTransactionPayNote';
import { PayNoteCancelled } from './PayNoteCancelled';
import { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
import { CardTransactionReport } from './CardTransactionReport';
import { PaymentCancellationFailed } from './PaymentCancellationFailed';
import { PaymentReversalFailed } from './PaymentReversalFailed';
import { PaymentCompletionLocked } from './PaymentCompletionLocked';
import { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
import { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
import { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
import { CardChargeResponded } from './CardChargeResponded';
import { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
import { PaymentMandateAttached } from './PaymentMandateAttached';
import { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
import { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
import { SecureFundsRequested } from './SecureFundsRequested';
import { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
import { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
import { CompletePaymentRequested } from './CompletePaymentRequested';
import { FundsSecured } from './FundsSecured';
import { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
import { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
import { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
import { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
import { SettlementAmountRejected } from './SettlementAmountRejected';
import { FundsSecuringDeclined } from './FundsSecuringDeclined';
import { TransactionIdentified } from './TransactionIdentified';
import { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
import { TransactionStatus } from './TransactionStatus';
import { PaymentCompletionFailed } from './PaymentCompletionFailed';
import { PayNoteRejected } from './PayNoteRejected';
import { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
import { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
import { CaptureDeclined } from './CaptureDeclined';
import { ReservationReleased } from './ReservationReleased';
import { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
import { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
import { PayNote } from './PayNote';
import { ChildPayNoteIssued } from './ChildPayNoteIssued';
import { CardTransactionDetails } from './CardTransactionDetails';
import { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
import { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { FundsCaptured } from './FundsCaptured';
import { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
import { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
import { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
import { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
import { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';

export { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
export { FinalAmountResolved } from './FinalAmountResolved';
export { CaptureFundsRequested } from './CaptureFundsRequested';
export { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
export { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
export { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
export { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
export { PayNoteApproved } from './PayNoteApproved';
export { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
export { PayNoteDelivery } from './PayNoteDelivery';
export { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
export { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
export { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
export { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
export { PaymentReversalDeclined } from './PaymentReversalDeclined';
export { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
export { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
export { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
export { PaymentReversalLocked } from './PaymentReversalLocked';
export { FundsReserved } from './FundsReserved';
export { ReserveFundsRequested } from './ReserveFundsRequested';
export { TransactionInitiated } from './TransactionInitiated';
export { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
export { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
export { PaymentMandate } from './PaymentMandate';
export { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
export { FundsSecuringFailed } from './FundsSecuringFailed';
export { SettlementAmountSpecified } from './SettlementAmountSpecified';
export { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
export { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
export { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
export { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
export { ReservationDeclined } from './ReservationDeclined';
export { CardChargeCompleted } from './CardChargeCompleted';
export { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
export { CaptureFailed } from './CaptureFailed';
export { TransactionInitiationFailed } from './TransactionInitiationFailed';
export { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
export { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
export { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
export { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
export { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
export { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
export { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
export { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
export { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
export { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
export { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
export { ReservationReleaseRequested } from './ReservationReleaseRequested';
export { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
export { PayNoteAccepted } from './PayNoteAccepted';
export { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
export { PaymentCompleted } from './PaymentCompleted';
export { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
export { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
export { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
export { CardTransactionPayNote } from './CardTransactionPayNote';
export { PayNoteCancelled } from './PayNoteCancelled';
export { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
export { CardTransactionReport } from './CardTransactionReport';
export { PaymentCancellationFailed } from './PaymentCancellationFailed';
export { PaymentReversalFailed } from './PaymentReversalFailed';
export { PaymentCompletionLocked } from './PaymentCompletionLocked';
export { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
export { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
export { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
export { CardChargeResponded } from './CardChargeResponded';
export { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
export { PaymentMandateAttached } from './PaymentMandateAttached';
export { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
export { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
export { SecureFundsRequested } from './SecureFundsRequested';
export { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
export { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
export { CompletePaymentRequested } from './CompletePaymentRequested';
export { FundsSecured } from './FundsSecured';
export { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
export { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
export { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
export { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
export { SettlementAmountRejected } from './SettlementAmountRejected';
export { FundsSecuringDeclined } from './FundsSecuringDeclined';
export { TransactionIdentified } from './TransactionIdentified';
export { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
export { TransactionStatus } from './TransactionStatus';
export { PaymentCompletionFailed } from './PaymentCompletionFailed';
export { PayNoteRejected } from './PayNoteRejected';
export { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
export { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
export { CaptureDeclined } from './CaptureDeclined';
export { ReservationReleased } from './ReservationReleased';
export { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
export { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
export { PayNote } from './PayNote';
export { ChildPayNoteIssued } from './ChildPayNoteIssued';
export { CardTransactionDetails } from './CardTransactionDetails';
export { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
export { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
export { FundsCaptured } from './FundsCaptured';
export { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
export { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
export { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
export { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
export { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';

export const contents: Record<string, unknown> = {
  '136wy9eVvz2GrQpBBFSS3VxGXKjw8xSh5M1GYxgTussB': LinkedPayNoteStarted,
  '14aYCUtepzJKAQ8rVtfNUcSebrBYbva3VBjhdtXgm4GV': FinalAmountResolved,
  '22tDCFoSnr3H8mpKoMcNWu6HFYRLJ8WVtA9HJJjZFTDp': CaptureFundsRequested,
  '23KuRV6NdYxuHeDMJX4cHK4imFDvn552wY4CBTP6k5m8':
    TransactionDetailsUpdateFailed,
  '27m5LHt8BGFbjCtbc8TmpjbRr4C5Yof9ivb95Q1qjGp5': LinkedPayNoteStartFailed,
  '2AggJktF7rdGkScmVmf58kzQ6x5SJQBVMq2LtthirY4b':
    PaymentMandateAttachmentFailed,
  '2dkYN3GYhWt5qVFk3Svcsqx3AumtupuDCir3Png3BnCn':
    CardTransactionCaptureUnlockRequested,
  '2FLMQNYESLh8W5ivBYejLnBsS8E5DiD2m8AjNTBK6yVy': PayNoteApproved,
  '2hDRCj9thcDsfKHHNy1hBKZG4fn8pEyWDVsaJQjouHZp': MerchantToCustomerPayNote,
  '2JTgRGneJ5yzunYmA1gq8gg1joCgygcsdjjLPuMehJ9i': PayNoteDelivery,
  '2kNE5ZeV6v5vzeq6WRAYLmCmdswhkigP5RQWLd8Po7Pc':
    TransactionDetailsUpdateRejected,
  '2UDXQuYTuwbbj6eXgvUxiSweq8Kz5yQqSuhFsjVASUBh': ChildPayNoteIssuanceDeclined,
  '2xgUeYahgLZCGnrNaVqsCbwEP9xnsaU8LKk3jcDtx8jw':
    PaymentReversedAfterCompletion,
  '3CuhNQR9wKoJgiFtEagaHcWskzPtsAsGgDwSfcjhSTz3': PayeeAssignmentRejected,
  '3JuJT2LrVdb7ZZyjZsEjh1N2hDtBedCrg3NLomPPyGvu': PaymentReversalDeclined,
  '3NTTDXW9VAaeU1W9s4FshMTZCNemsA5nPBWZgyF8qWpA': PayNoteCancellationRequested,
  '3VLavrr4LCLqo5FV1XxXhxUGryHBzBGQoFKTGWaXv7PM': PayNoteDeliveryFailed,
  '3ZL5qKgNJweUij3KwA6xp4KC1ReZ1AqXTFzhE1hCg5Hd':
    PaymentReversalLockChangeFailed,
  '455HeywDQjC8Kh6GtzqmVCRQMUQ2JtXj2sEabUr91CqN': PaymentReversalLocked,
  '4AegLZ1gGqhXWQ66prGJB4yWcoHfqpKes8kbkfURnvE4': FundsReserved,
  '4iRGNCp5PFihQDjMhCSMxkJq8NEqHqdiq68YPuEPqbZi': ReserveFundsRequested,
  '4wPjsVSUbGeWCPY2vSBEAsVAt4Vqr1LB1CpAr4XsxApi': TransactionInitiated,
  '4xd8eGnNyTRRrMQAgz6nvNtRgpiDthUr8BLs3ugBDKkV': PayNoteAcceptanceRequested,
  '5Ef9YNuRSVFdykdjoBVWb5QHSzerHE8RAPaq58ARGrt7':
    PaymentMandateSpendSettlementResponded,
  '5fBQHAnRCh6a5DwzJFV2f31yExvRhsnKNNMcuZnMHXry': PaymentMandate,
  '5vPSqDeCjrrSzKmCyDn3s7C6v1UbwThGCRk9Zc6VYojK': PaymentCancellationDeclined,
  '6d2zv3cUykVpodfq3nHnsJ62sJHjViw66JkmziQAYrRA': FundsSecuringFailed,
  '6eEzoRyTHDWRZn3nuTdivRNbnkM6YwQPVqXWrag5CJZr': SettlementAmountSpecified,
  '6ehbtZAKxK6XxA53wsANhCSBJVaenKw5TfwBgL63sydP':
    TransactionDetailsUpdateUnlockRequested,
  '6EwokAQarCKdRXuU2wpkCyHfXzhr1CgjY5feVomsYJob': PayNoteRejectedByClient,
  '6qCdP6iHAPsWcA5G2N28tthQnoCGxzJvdjmFRU7JB8m7':
    TransactionDetailsUpdateLocked,
  '6sVrGit3FwrSRnVr4kKLk3PJC33mqAPzzuDqbzCvordD': PaymentReversalUnlocked,
  '6TWWiE2AfszYPHtDFcBahzeiTSgsMmaivZbUncyCKcf4': ReservationDeclined,
  '6x3rEAr4r7E6TnmtGcKXmtofkZ5XbKWfWTtUjVBSjixb': CardChargeCompleted,
  '6xPfgoVRspFpZ1ftEsCFhDQt5vaPN4u9kfdAdzFzh8JS': IssueChildPayNoteRequested,
  '7pCJnj5CuTi5NppZ6hWK3wMSwGveGW9fB8ydWge9kfsr': CaptureFailed,
  '7zJ55EuAZbwtxHUt8gqKJVmjPpURbUCge9kGeLXprtmy': TransactionInitiationFailed,
  '7ZQKR5ExFxL3xj9vB5vrYnFP4DCnnPKSGJEcxtEKcDpR':
    StartCardTransactionMonitoringRequested,
  '8hhTj5tHF6SorKyCXtkyr6cendUne9A6eYJ225dJjLJW':
    PayNoteClientDecisionDiscarded,
  '8kwErWXi6Ts7gypBEL7EFpegWV43cxQ9EpodWfLTigeJ': PaymentReversalLockRequested,
  '8qwZofJMDX7VN4oTvXki8sRqjRztHm1AJKY69kiqKQJV':
    CardTransactionCaptureUnlocked,
  '8XH1vN2R5tLKQKRz4bJzv1JuEnare6Q4G4A49gpJXceW':
    TransactionIdentificationFailed,
  '9FTgniVVTmyp3f1Di3dL9c6izKbVEb6XFUnWng1mAiyb': TransactionDetailsUpdated,
  '9G6U8wzPxB5WjwMEeHmDGfzwhxok6hk3Usno6ESRETR3':
    ReverseCardChargeAndCaptureImmediatelyRequested,
  '9g76Ge68UF744b6KWgGkrAudVCdM8Ggs1YjVcZXXWmsS': FinalAmountResolutionRejected,
  '9h8QgAXNnpK8ekENXhGxvsqk74vXyBvdEbpHetsEYtQb':
    PaymentMandateSpendAuthorizationResponded,
  '9mACwX7GPNuwKycefkpa2sNJh3rAXjYuiEuTWfe5fBZf': ReverseCardChargeRequested,
  '9QmNQ9HyiNxJf4vGrGFSUQh2DdreV3awweaDdsB1n3CP': CardTransactionCaptureLocked,
  '9YGdHtuBwjtuUYgU7rxEr9eYPiXENcBbLPFwWUqmhSR9': ReservationReleaseRequested,
  Ae6M8hQ664pDy73x96xMABj3WnFuH6hkC61vcz8CNUQW:
    PaymentCompletionUnlockRequested,
  AKym7uykt3iv73tEfAP1k9f8dXpbp9i9dZNRhwfwhUYt: PayNoteAccepted,
  AnxxLd7NofAKrwNp22fvP4jQ24aAHKKvxsv4aXJgjziP:
    PaymentMandateSpendAuthorizationRequested,
  BaKeiFYCdzpGKobh6oq3y9ZwFA2pVgtCNn5CipfDRPDn: PaymentCompleted,
  BAmesvVsg5mMyv7ywqNfcKA9heQRAavcXi8UDN7wKnkP: PaymentCompletionLockRequested,
  BDLj2txke2Z35TyNhd4QyNa4C3dtqJcmpti5C5Y6Gvt5:
    TransactionDetailsUpdateUnlocked,
  BGFAz4x6LaxXTpTZyXzbE4kr4EDATVcpMgxgcH5UYzQn:
    CardTransactionCaptureLockRequested,
  BPCVqgc2J3NnYW2A8xMjGX8Wv5v5APpXuut8afiJTF3E: CardTransactionPayNote,
  BrrMLE9Gq3p36wSWxTeecJToXGziP2squb6omeb4CEFy: PayNoteCancelled,
  Bsb4uv9m6GU7T8Z6TwXQGZagFcVR8xn4EBNTR5bBZfgv: PaymentMandateSpendSettled,
  BVo3umEXBPKoCiDC7PrKQf5m3ENZGKt9xGgPTJJXCXcb: CardTransactionReport,
  BYm2KcRydg8r9LQEWTZhi6r1fTvnJGkxHUzSbZd5wQJZ: PaymentCancellationFailed,
  BzR72tUU9bspQ3JBm54rjg3A7XFJLSuscvYdyw5LWQ7o: PaymentReversalFailed,
  ChQAXUw8C752hUQ8TDDjLGnZHWEuw4yXqZTpNR54Soqr: PaymentCompletionLocked,
  CJXbcUUJuDYcDY63DDWatYNoww5HNyLG9tBiyK4kfqDr: PaymentCompletionDeclined,
  CL3RhUcWJG9JmKEENaZWewsYhmsSdTbFPaeW8jb1jZpj:
    CardTransactionMonitoringStarted,
  CLCm3e8rHeFTMWuV5A415fZZvVc9Xb9yj2p1eEMyTwrf:
    PaymentCancelledBeforeCompletion,
  CQa9Xv397jjXRmiW2mCmUv5ZQ2zQ7k4nvzwHUSod7Ao4: CardChargeResponded,
  CqwUgzcG2PdfPp4aK3XD11eQPmDXKkbPrck5nTpxczof:
    TransactionDetailsUpdateRequested,
  CS8Zf2Nmo9QsvDwvBbTbpq9VL1gJTXC4ix9tzgmHnXvN: PaymentMandateAttached,
  CvGySPArfCvAW8wES6mLHAxW275hVGaWYDGcnmvDroiw: LinkedCardChargeRequested,
  CWmwgreYPytk6uMhrPPQtwrEngyoMzmVCHCJwjESKxQe:
    PaymentCompletionLockChangeFailed,
  CznqsDr7E4sduFbmLQCEMhhtBfGY615JvZ7uPhUtoFRS: SecureFundsRequested,
  D3oNNKrhuezgtZwNQFVVeYSoQjamdb7cHzeJAitzSnMJ: LinkedPayNoteStartResponded,
  D5CBwemEH71dvFYLwngHXqQb3AfrX7vQ6qQQggA5w4kL:
    LinkedCardChargeAndCaptureImmediatelyRequested,
  DDRzktkPV3srozHVEzYUHdC9MX7Lzvq1HZ1enDEeYqfs: CompletePaymentRequested,
  Dhq87PEpVaYUJAkCHxWxmRcmgQGg8qkCWyuVo7rJhNrZ: FundsSecured,
  DLePv5DMMwmjZeEgDcCc8PFTyjT3C9XDDfA7CoM8GKjU:
    TransactionDetailsUpdateLockRequested,
  DrwZrgeKXZwsEQDJXdEaWQBivpSyZdb1nLjRMjjigov6:
    CardTransactionMonitoringRequestRejected,
  E3dhGvVJHtQkqkbX73GCmV8Nhw9wFjxuAr6GUjb78SZQ: ReservationReleaseDeclined,
  EHySZYfMJC3JDuuottDsKyE4d6Xof6eKCWrzMjg2LyUh: FinalAmountResolutionRequested,
  ELN3C1kMSaJ9yEE4Vkd3FRQbEwhgegwjSHA5c4v7hER: SettlementAmountRejected,
  Ep5q2Z4UEqUnMJGwb8CxbkjfFf5SYFsJf855LS68vWHw: FundsSecuringDeclined,
  FjaxYHKQ3DZ7h6ooFwVwD2Gs2WygLsw33xQ9vMLZzk8H: TransactionIdentified,
  FJFBLMQjKue73Ls3a3Hm4Bk51CqN4odCxZUwkioLWk8T: PayeeAssignmentRequested,
  FutWoAEUEb3wkmEm4YP4JGFPtu3B3PQ3m71BmnRFFnsQ: TransactionStatus,
  FXoL7smVn5Qr8rWaMiAkJX1tJYFf6pJQNCHyk9YEzsYj: PaymentCompletionFailed,
  G7UfGk3acE63TsiGzKM2xdSdW1ZUtmzGuMDypx9dXHVL: PayNoteRejected,
  G7VEB2qKr36H5CUdSCrFsw2LTkpEx7nfgaFWuD3UeFeq: PayeeAssignmentConfirmed,
  G9yQsyYfiwkDhap7VTq12yj26kGkgvPsX92cQp6rEbfx:
    CardTransactionMonitoringStopped,
  Ghp8jKdGRtcdYv5aLuukrGQazUiiWVkjGRswhkrfp8uA: CaptureDeclined,
  GNtXW3EQSFTwidGNPi2mKTwbGHQENDNUvM2ASkq1Av9Q: ReservationReleased,
  GoTKbpUrjeonNMKf7zyHm6TbD5tbJdqyRk4Etck1qU8N:
    TransactionDetailsUpdateLockChangeFailed,
  GPd6u4dQko5mDzWVgEJaJjsfffaykk29nv74drEM7rR6: ReverseAfterCompletionRequested,
  GS7qK6RBWAKdCFMy6hdeQNgmqeAkw5LrbcktFfnQdAxe: PayNote,
  GYpUo3MXjje9h9kCdKunkb4RQoU5uX1nq77uqe6jqjgU: ChildPayNoteIssued,
  GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT: CardTransactionDetails,
  H1bKjnbdLgF16E7YusAusW8JYyUHzmZKFk6p7tP6jFxy:
    CardTransactionCaptureLockChangeFailed,
  HAT49nMdc1VVbgDxTusZ9wRUFFcbw8qx9pjmoZwg59LS:
    ReserveFundsAndCaptureImmediatelyRequested,
  HFKZ6MnBdTMNRi72P1zqUEh2RgagBX4DP4MLknWvpwrL: FundsCaptured,
  Hp9rbhaVLQFEpBy9EZ6YuEh8PrXXciJkY8eUfwEg55YK: CancelBeforeCompletionRequested,
  HtsPop9z5R2EoW3TLKCSePnQUAj5wqryWuRWV1cwyBTt: PayNoteAcceptedByClient,
  HWbQL6dGkDfjPDU57aghQmWMtpi3ai9sTX4TmMnA2k3X: PaymentCompletionUnlocked,
  j48pW3ti66f4NoABqMAbaMkJKGztzsobPrUfXkVoSvB: PayNoteCancellationRejected,
  q6TEeYDbn4Vdd5zxDjN4Ddyay31ivB852TZCuL17ULb: PaymentReversalUnlockRequested,
};
