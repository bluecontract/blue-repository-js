import { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
import { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
import { PayNoteCancelled } from './PayNoteCancelled';
import { CardTransactionReport } from './CardTransactionReport';
import { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
import { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
import { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
import { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
import { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
import { ReservationReleased } from './ReservationReleased';
import { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
import { FundsCaptured } from './FundsCaptured';
import { CardChargeResponded } from './CardChargeResponded';
import { PayNote } from './PayNote';
import { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
import { FundsSecured } from './FundsSecured';
import { ReservationReleaseRequested } from './ReservationReleaseRequested';
import { PaymentReversalDeclined } from './PaymentReversalDeclined';
import { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
import { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
import { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
import { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
import { SettlementAmountSpecified } from './SettlementAmountSpecified';
import { FundsReserved } from './FundsReserved';
import { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
import { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
import { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
import { TransactionInitiationFailed } from './TransactionInitiationFailed';
import { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
import { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
import { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
import { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
import { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { CaptureFailed } from './CaptureFailed';
import { FundsSecuringFailed } from './FundsSecuringFailed';
import { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
import { PaymentReversalLocked } from './PaymentReversalLocked';
import { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
import { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
import { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
import { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
import { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
import { PaymentCompletionFailed } from './PaymentCompletionFailed';
import { TransactionInitiated } from './TransactionInitiated';
import { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
import { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
import { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
import { PayNoteApproved } from './PayNoteApproved';
import { FundsSecuringDeclined } from './FundsSecuringDeclined';
import { CompletePaymentRequested } from './CompletePaymentRequested';
import { CardTransactionPayNote } from './CardTransactionPayNote';
import { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
import { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
import { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
import { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
import { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
import { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
import { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
import { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
import { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
import { TransactionIdentified } from './TransactionIdentified';
import { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
import { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
import { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
import { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
import { ReserveFundsRequested } from './ReserveFundsRequested';
import { FinalAmountResolved } from './FinalAmountResolved';
import { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
import { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
import { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
import { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
import { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
import { ChildPayNoteIssued } from './ChildPayNoteIssued';
import { CardChargeCompleted } from './CardChargeCompleted';
import { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
import { ReservationDeclined } from './ReservationDeclined';
import { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
import { PayNoteDelivery } from './PayNoteDelivery';
import { TransactionStatus } from './TransactionStatus';
import { CardTransactionDetails } from './CardTransactionDetails';
import { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
import { SettlementAmountRejected } from './SettlementAmountRejected';
import { PayNoteAccepted } from './PayNoteAccepted';
import { PayNoteRejected } from './PayNoteRejected';
import { CaptureDeclined } from './CaptureDeclined';
import { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
import { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
import { SecureFundsRequested } from './SecureFundsRequested';
import { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
import { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
import { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
import { CaptureFundsRequested } from './CaptureFundsRequested';
import { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
import { PaymentCompletionLocked } from './PaymentCompletionLocked';
import { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
import { PaymentMandateAttached } from './PaymentMandateAttached';
import { PaymentReversalFailed } from './PaymentReversalFailed';
import { PaymentCancellationFailed } from './PaymentCancellationFailed';
import { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
import { PaymentCompleted } from './PaymentCompleted';
import { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
import { PaymentMandate } from './PaymentMandate';

export { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
export { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
export { PayNoteCancelled } from './PayNoteCancelled';
export { CardTransactionReport } from './CardTransactionReport';
export { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
export { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
export { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
export { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
export { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
export { ReservationReleased } from './ReservationReleased';
export { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
export { FundsCaptured } from './FundsCaptured';
export { CardChargeResponded } from './CardChargeResponded';
export { PayNote } from './PayNote';
export { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
export { FundsSecured } from './FundsSecured';
export { ReservationReleaseRequested } from './ReservationReleaseRequested';
export { PaymentReversalDeclined } from './PaymentReversalDeclined';
export { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
export { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
export { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
export { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
export { SettlementAmountSpecified } from './SettlementAmountSpecified';
export { FundsReserved } from './FundsReserved';
export { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
export { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
export { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
export { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
export { TransactionInitiationFailed } from './TransactionInitiationFailed';
export { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
export { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
export { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
export { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
export { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
export { CaptureFailed } from './CaptureFailed';
export { FundsSecuringFailed } from './FundsSecuringFailed';
export { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
export { PaymentReversalLocked } from './PaymentReversalLocked';
export { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
export { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
export { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
export { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
export { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
export { PaymentCompletionFailed } from './PaymentCompletionFailed';
export { TransactionInitiated } from './TransactionInitiated';
export { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
export { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
export { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
export { PayNoteApproved } from './PayNoteApproved';
export { FundsSecuringDeclined } from './FundsSecuringDeclined';
export { CompletePaymentRequested } from './CompletePaymentRequested';
export { CardTransactionPayNote } from './CardTransactionPayNote';
export { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
export { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
export { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
export { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
export { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
export { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
export { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
export { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
export { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
export { TransactionIdentified } from './TransactionIdentified';
export { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
export { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
export { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
export { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
export { ReserveFundsRequested } from './ReserveFundsRequested';
export { FinalAmountResolved } from './FinalAmountResolved';
export { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
export { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
export { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
export { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
export { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
export { ChildPayNoteIssued } from './ChildPayNoteIssued';
export { CardChargeCompleted } from './CardChargeCompleted';
export { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
export { ReservationDeclined } from './ReservationDeclined';
export { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
export { PayNoteDelivery } from './PayNoteDelivery';
export { TransactionStatus } from './TransactionStatus';
export { CardTransactionDetails } from './CardTransactionDetails';
export { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
export { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
export { SettlementAmountRejected } from './SettlementAmountRejected';
export { PayNoteAccepted } from './PayNoteAccepted';
export { PayNoteRejected } from './PayNoteRejected';
export { CaptureDeclined } from './CaptureDeclined';
export { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
export { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
export { SecureFundsRequested } from './SecureFundsRequested';
export { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
export { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
export { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
export { CaptureFundsRequested } from './CaptureFundsRequested';
export { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
export { PaymentCompletionLocked } from './PaymentCompletionLocked';
export { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
export { PaymentMandateAttached } from './PaymentMandateAttached';
export { PaymentReversalFailed } from './PaymentReversalFailed';
export { PaymentCancellationFailed } from './PaymentCancellationFailed';
export { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
export { PaymentCompleted } from './PaymentCompleted';
export { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
export { PaymentMandate } from './PaymentMandate';

export const contents: Record<string, unknown> = {
  '12zhLzvXiUjVQsbNQGRRZk15M1fc2WcohZ8Nbz7Wmd1m': PaymentMandateSpendSettled,
  '248pKkeKj3v9HctkWpzcJ1E4E9enbJoS5csiPDRER62U':
    StartCardTransactionMonitoringRequested,
  '29BnKeGGy1Z4ZQZk9tXccEtkjjjARP3xEw2sbxajtcn4': PayNoteCancelled,
  '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': CardTransactionReport,
  '2G6hwRBQbRA4D2n8vLPqD6hES44sGeh6kGF1uG88nn5R': PayNoteCancellationRequested,
  '2qhzWiZAVUTJvuAhexA8vRHrXWdWu7UGyAYPnfvEmTkV': PayNoteAcceptanceRequested,
  '2vV995BK1aDswPiZr8bXfwLvRbbprmFnhMa7aJGfg3Df': ReservationReleaseDeclined,
  '2Z77G9HMUNvJ6LRfvLMQBpshxbvGY3mCMskgpAEw4Rjo': ReverseCardChargeRequested,
  '369jQqbKxUNXz4yZHMgeomhtQUbAByuCCXCcXKaUSun9':
    TransactionDetailsUpdateLockChangeFailed,
  '36QzhH7XYNZRBqNotXqdoo7VGkgeZBUojDzADhd1e6RB': ReservationReleased,
  '3iWy5uSeaCr149THj4x9sAeb2AhTtkHFY9yCuqeV7LCT':
    TransactionDetailsUpdateRejected,
  '3j1NrjZiu7mn6pcTtqfFo7N2JEQGNWEh2dcxUDuSSVBS': FundsCaptured,
  '3ku2VCNwWmypxQWFi6bU595iVPXTsCjgbotAi5y4peEq': CardChargeResponded,
  '3QhCg6W39VGD66E7by4yNop1UYH198xEbVpqYcjLaatL': PayNote,
  '3qvrrxbTzsbhUsRtbfQuj6ffc6SgKNzfSihRqgN7wNY4':
    CardTransactionCaptureLockRequested,
  '3wSieJf5cYTa6o9CMcYAFNmVRS1mJe9wMeQ8Jmo3Xp3i': FundsSecured,
  '3YBnYuYiQh1DtRuci5eZexXuEPuorJar4KefKAJQdPZr': ReservationReleaseRequested,
  '3zqCf4fDYcC5ETzvGZA8Jasf1LXdujZTZyL88zL3EDSF': PaymentReversalDeclined,
  '42iMsNHFY4jUTy1yhZeEeZu9XZL4ZJqReRe191f1KHXf':
    PaymentReversedAfterCompletion,
  '43LubJTPxDs9RGM7bcXwZpyczAstFCsjCkFZgk9zvfAc':
    CardTransactionCaptureUnlocked,
  '44MphyKwNYqXzF8aS5WTmXZMQ4x35PViXyoy2Ks14G1Z':
    TransactionDetailsUpdateLocked,
  '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n':
    CardTransactionMonitoringStopped,
  '4dHGVnHSgn18Dj6VTYZE2359Ym67DLjfnwgDRcy5tHZH': SettlementAmountSpecified,
  '4p216aqzABWnVNxJY1MkkTU8fZ511S93hQYo1wwHYpKi': FundsReserved,
  '4paCVJn58VgBo65rXHr4SXHCnbjPa5zrrAxKW3HNRS7Q': IssueChildPayNoteRequested,
  '4QW85PM6t2McK3sxKqCsyhajZJv6WVk1AhBT45PGDLZb': MerchantToCustomerPayNote,
  '4qyUrMxKg5b3zPiB3kBwwy4Yh9fgD4DSqGeLTXh57b7i': PaymentCompletionUnlocked,
  '4rw9kwJRP7P5opfxz1AFAX3mp1wmPNf3qKBz1om9gr8A': FinalAmountResolutionRejected,
  '4RWHs3KE6EL4cyMHvhrxR7pm6wQcgW5wGefM5t7p8jn2': TransactionInitiationFailed,
  '4yJfdAuMrzyVQPsopWMfw24CiW2xj31jC4oCwhXmPG8V':
    ReverseCardChargeAndCaptureImmediatelyRequested,
  '5B6omzwwUauNNbarndynuCMyMCqZVu6ikTqnLocXZyWA': TransactionDetailsUpdated,
  '5c5mfwYpEs3LLawHVLWJVUFTgqdSMGBCHG6iPaTmqefJ':
    PaymentMandateSpendAuthorizationRequested,
  '5D8V9FiXun8bgUaNQapuvra3wvxLiHtoFEy7tzscSnR3':
    PaymentCompletionUnlockRequested,
  '5fW8b3vqSFGwaEvycu7CprBpmGEjW7QqT4vhmN6zX3sc': ChildPayNoteIssuanceDeclined,
  '5KLJjeRj56sm2a1dj6guTWGKw533bwqNsiioSmntdSjg': CaptureFailed,
  '5X9UpCYn4uR6vidaBwpsng98RsVMXjnweXeVgGPXkzQi': FundsSecuringFailed,
  '5ZefGb29XU9takV1ftp6aYkrrHs8q8AAfNJBW7Uy3ZyE': CardTransactionCaptureLocked,
  '6qKyexNfVD2WhQQ5FGuCoPGQF89SAigGgwyzbKXsPMRP': PaymentReversalLocked,
  '6TbnGA2HDUY27gUaZzGnS7Ts6vZoBXEpWsBjEnxPnU8H':
    PaymentReversalUnlockRequested,
  '6TjBq3kF5mqXq8zHgr7LegNWUNJDLuN31z7ZrN5doY8G':
    TransactionDetailsUpdateLockRequested,
  '79ZV4j1dHpE5nt9nGN141Pte8hDbKgsxSavm9RV9wu1U': PayeeAssignmentConfirmed,
  '7A765v3durX3otiybhEomfPAqtztUSt9Ywqef2dsyvLx':
    PaymentCompletionLockChangeFailed,
  '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': PayNoteRejectedByClient,
  '7nzmwZ5GYggD81cgK9aTduPVhznB8ay1k128CZA4nvzt': PaymentCompletionFailed,
  '7WG5MSrMMCeAEYwavUJ2eZQhYdYn2xZv5T8ZYoFyFA4Z': TransactionInitiated,
  '7yCCQs9S2nns1nD3UG572QKvxUss5roACewUWbz5NLNv':
    ReverseAfterCompletionRequested,
  '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb':
    TransactionIdentificationFailed,
  '83n64P9yoYMY7VNGrb1UKbmVsz3wwkZW8PAJqLz8AELJ':
    CardTransactionCaptureUnlockRequested,
  '8DVJqK8XnidDVa8ToiHg2C67LzszVMrV57yircF3zzyM': PayNoteApproved,
  '8x9kLwfX9bJdvChLgQjwhPBCAMDZrmRJPMdaWsKKkbjN': FundsSecuringDeclined,
  '8yMip2tqMRxoz6WvTAU7Hp4F5A285gMKPtvL6DX41Nqg': CompletePaymentRequested,
  '9Brtfgkzcbe9YP99asHvi7UHoHr3r3bgMn1vUHMZi8Pv': CardTransactionPayNote,
  '9GC9R5HceZYKm9LVaKFXKPC9GDUAffn2R4hHNqhDtUAm': LinkedPayNoteStartResponded,
  '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': PayNoteAcceptedByClient,
  '9wsCVU7Pw5BzQhN8RYZXJhiwJAEfBzCkLEWURkJymKsy':
    PaymentReversalLockChangeFailed,
  AmVVqD9dehBLXhwmyRtfH9XhdMVbc9i9YEqhsMJrPnpN: PayNoteCancellationRejected,
  ASnHnJCtcbdEsWa5wcbRpmoUBnw9yajf9vLpsovXyTXg:
    TransactionDetailsUpdateUnlocked,
  AygrNas7s1Gvg5zb7X1dVrufVNrGvUxPU7qgQHJ9QLzQ: PaymentCancellationDeclined,
  AyxFRqp7CDgStXG1ATYUBmAVD62QAF3S3ZV867Q9iBAk:
    PaymentMandateSpendSettlementResponded,
  B59nS1DoGFsTn13zqvfDFvLQ7j2G4NXTRGPByLFDNrFR: PaymentReversalLockRequested,
  BAQzcd8ik3X4PrWCMgJ48mVmXjv12Mi9a7RYURnEygrD: PayeeAssignmentRequested,
  BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: TransactionIdentified,
  Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp: PaymentMandateAttachmentFailed,
  BVVMg23GQoEyUwPxQj1uif1cxc1PgMd6reAdfkt1k77: PaymentCancelledBeforeCompletion,
  C1rwze4jUCYuRxvCJg4gV3c8D3bWUARp95n7X8mj8XAp: CancelBeforeCompletionRequested,
  C7CKgcCSaQqVjsmReDQvSyLkam6D1ACdHgm3phmccdUR: LinkedCardChargeRequested,
  C853sXni8pJeAfbHCtKB477n1BebwBAmL4SxiE3dy4fA: ReserveFundsRequested,
  CDwF6APqf9NVAn49dBfJsJVQU1gB4Ah2gbxs3T7DT3Fc: FinalAmountResolved,
  Cg8SSdLksJdyWoGcFvq4VvoGwMkcQY88rNdcA9qc734j:
    PaymentMandateSpendAuthorizationResponded,
  ChTzNgt57FAEoZKk7oo1kFSkP6paXTideC3woe52BgPU:
    CardTransactionMonitoringRequestRejected,
  CNeTiNQt2BgJ7GTVjPGrCxmiXLeTGxchmZNb6j4NRbtA:
    LinkedCardChargeAndCaptureImmediatelyRequested,
  CNUCbbLcR5bVJktXxLNFxziK781GPpASpHrZ3AbNbjF8: PaymentCompletionLockRequested,
  DAF5xuT1YvgntUkNuDt4q6ABX5ptgbxf2iJCpvajJbnn: LinkedPayNoteStartFailed,
  DB6iVUgsWh96zaypurZR5jT6EGdwELEteNPomRqo4ZY7: ChildPayNoteIssued,
  Dcw8D1XUmNrMBX2uHgJgJ3836Ued7vCy8oEP4aXekYPx: CardChargeCompleted,
  DDuuaogLyNgVHbSoJxxQcX5iZqWy6U9DAxjgtdzWRnWB: TransactionDetailsUpdateFailed,
  DhMGXZUUoZKjNmPbBKyY882k9rAnPK5F6Kup76KPLdKR: ReservationDeclined,
  DSszDxYtNpdSpnf56vs1oQ4bwbweRowhCLbkT7tvDQiV:
    CardTransactionCaptureLockChangeFailed,
  DT1xSSmLNv2iJSYAUYSaLumD2JJH27WjWF6KRxa9zRW5: PayNoteDelivery,
  DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: TransactionStatus,
  DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: CardTransactionDetails,
  ECtoQipB9ayV1n8sHZgZy8U8z3rEsUbj8nBDwoueyfTU:
    ReserveFundsAndCaptureImmediatelyRequested,
  EHxam7uVrzwbyKVGmHk4QcnKtcPaeM7JzZiiURXj7M33: PayeeAssignmentRejected,
  EqtTi4QsxYWoyLu4X2iptWAQTTAVHh77MUgdp8aUjtjC: SettlementAmountRejected,
  EWJLkS8q4TE5NWDh4qpQZMcbgGWdiePNkbZMCtGYVRAN: PayNoteAccepted,
  FJqmEa4mSV4FrJkeZn9KLbTZMBeULqaBkzEhceuoaLJG: PayNoteRejected,
  FKmgCVJYnpqy9KJ2fNhEsiPUQHRyoG9oUunkdrwhG65t: CaptureDeclined,
  FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE: PayNoteClientDecisionDiscarded,
  FVjUChq6akLbAux94Gs4Sv2VQ1JtQWqy1WekMUTyNXuv: PaymentReversalUnlocked,
  FVosfv6GQeWk8zJCHiZtC4D6LFxwU8Y8ARAFYX1rsxzd: SecureFundsRequested,
  Fz7b7rBDv2XZxFUHEgaYAFnVfrugVuDqkbaTpqvqEQKU: FinalAmountResolutionRequested,
  G2MqrvuVTgYpURszmzYEavQC7Ef8cQfjd931pE1gTTp2: LinkedPayNoteStarted,
  G7U3e8x6XcUiy65g9MAh4LV2PRts5Vsk8KFJ9BrqmXao:
    TransactionDetailsUpdateRequested,
  GcDzvd7qyECoWSi5XazBjyWp8AGq5aQrTNg49xKD3SoF: CaptureFundsRequested,
  GgzocgK2E91GPBsNsyJsAx2v1DsiQfFazpZqAYGuATv7:
    CardTransactionMonitoringStarted,
  GiarUWCiPuTZ2g7YfosXP17bTi1cH1ZqkguGcYKNqUvY: PaymentCompletionLocked,
  GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: PayNoteDeliveryFailed,
  Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: PaymentMandateAttached,
  HgRjnfFyp9156xXVSeXhzKWuZFQE4jVuL1WYD3Gbm98T: PaymentReversalFailed,
  HpeKXtecYHLk8Mm787Pof8hYgQ92SjRQzTDcUdFwrhZV: PaymentCancellationFailed,
  HqD5YrGeruxAeibVpGJwpqXRcmCuoSNWN2j48iRaJdoU:
    TransactionDetailsUpdateUnlockRequested,
  HRPugeYyuAMpDR4rKoDeDbJpewtFGgAPpFtwyw1T6Row: PaymentCompleted,
  HV1cMM1SfwUna62hDFcwaHwMgDN3QVVSVWWMqmr3Y4jx: PaymentCompletionDeclined,
  Zp9XUGFr6S4MPcfMarmfWo3uE8Bsh4UzUsgMNcKbh6V: PaymentMandate,
};
