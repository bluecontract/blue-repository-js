import { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
import { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
import { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
import { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { CardTransactionReport } from './CardTransactionReport';
import { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
import { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
import { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
import { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
import { SecureFundsRequested } from './SecureFundsRequested';
import { PaymentCancellationFailed } from './PaymentCancellationFailed';
import { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
import { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
import { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
import { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
import { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
import { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
import { PaymentReversalLocked } from './PaymentReversalLocked';
import { CardTransactionPayNote } from './CardTransactionPayNote';
import { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
import { PaymentCompleted } from './PaymentCompleted';
import { FundsReserved } from './FundsReserved';
import { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
import { PayNote } from './PayNote';
import { PaymentCompletionFailed } from './PaymentCompletionFailed';
import { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
import { TransactionInitiated } from './TransactionInitiated';
import { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
import { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
import { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
import { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
import { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
import { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
import { FundsCaptured } from './FundsCaptured';
import { PayNoteCancelled } from './PayNoteCancelled';
import { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
import { CaptureFundsRequested } from './CaptureFundsRequested';
import { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
import { PayNoteDelivery } from './PayNoteDelivery';
import { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
import { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
import { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
import { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
import { CaptureFailed } from './CaptureFailed';
import { ReservationReleaseRequested } from './ReservationReleaseRequested';
import { PayNoteRejected } from './PayNoteRejected';
import { SettlementAmountSpecified } from './SettlementAmountSpecified';
import { PaymentReversalFailed } from './PaymentReversalFailed';
import { TransactionInitiationFailed } from './TransactionInitiationFailed';
import { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
import { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
import { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
import { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
import { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
import { CardChargeResponded } from './CardChargeResponded';
import { TransactionIdentified } from './TransactionIdentified';
import { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
import { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
import { FundsSecured } from './FundsSecured';
import { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
import { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
import { FundsSecuringFailed } from './FundsSecuringFailed';
import { SettlementAmountRejected } from './SettlementAmountRejected';
import { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
import { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
import { ReservationReleased } from './ReservationReleased';
import { PaymentMandate } from './PaymentMandate';
import { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
import { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
import { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
import { ReserveFundsRequested } from './ReserveFundsRequested';
import { CardChargeCompleted } from './CardChargeCompleted';
import { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
import { TransactionStatus } from './TransactionStatus';
import { CardTransactionDetails } from './CardTransactionDetails';
import { ReservationDeclined } from './ReservationDeclined';
import { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
import { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
import { FundsSecuringDeclined } from './FundsSecuringDeclined';
import { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
import { CaptureDeclined } from './CaptureDeclined';
import { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
import { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
import { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
import { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
import { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
import { CompletePaymentRequested } from './CompletePaymentRequested';
import { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
import { PaymentCompletionLocked } from './PaymentCompletionLocked';
import { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
import { PayNoteApproved } from './PayNoteApproved';
import { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
import { PaymentMandateAttached } from './PaymentMandateAttached';
import { ChildPayNoteIssued } from './ChildPayNoteIssued';
import { PayNoteAccepted } from './PayNoteAccepted';
import { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
import { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
import { PaymentReversalDeclined } from './PaymentReversalDeclined';
import { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
import { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
import { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
import { FinalAmountResolved } from './FinalAmountResolved';

export { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
export { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
export { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
export { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
export { CardTransactionReport } from './CardTransactionReport';
export { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
export { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
export { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';
export { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
export { SecureFundsRequested } from './SecureFundsRequested';
export { PaymentCancellationFailed } from './PaymentCancellationFailed';
export { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
export { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
export { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
export { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
export { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
export { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
export { PaymentReversalLocked } from './PaymentReversalLocked';
export { CardTransactionPayNote } from './CardTransactionPayNote';
export { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
export { PaymentCompleted } from './PaymentCompleted';
export { FundsReserved } from './FundsReserved';
export { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
export { PayNote } from './PayNote';
export { PaymentCompletionFailed } from './PaymentCompletionFailed';
export { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
export { TransactionInitiated } from './TransactionInitiated';
export { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
export { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
export { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
export { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
export { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
export { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
export { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
export { FundsCaptured } from './FundsCaptured';
export { PayNoteCancelled } from './PayNoteCancelled';
export { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
export { CaptureFundsRequested } from './CaptureFundsRequested';
export { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
export { PayNoteDelivery } from './PayNoteDelivery';
export { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
export { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
export { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
export { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
export { CaptureFailed } from './CaptureFailed';
export { ReservationReleaseRequested } from './ReservationReleaseRequested';
export { PayNoteRejected } from './PayNoteRejected';
export { SettlementAmountSpecified } from './SettlementAmountSpecified';
export { PaymentReversalFailed } from './PaymentReversalFailed';
export { TransactionInitiationFailed } from './TransactionInitiationFailed';
export { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
export { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
export { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
export { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
export { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
export { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
export { CardChargeResponded } from './CardChargeResponded';
export { TransactionIdentified } from './TransactionIdentified';
export { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
export { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
export { FundsSecured } from './FundsSecured';
export { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
export { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
export { FundsSecuringFailed } from './FundsSecuringFailed';
export { SettlementAmountRejected } from './SettlementAmountRejected';
export { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
export { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
export { ReservationReleased } from './ReservationReleased';
export { PaymentMandate } from './PaymentMandate';
export { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
export { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
export { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
export { ReserveFundsRequested } from './ReserveFundsRequested';
export { CardChargeCompleted } from './CardChargeCompleted';
export { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
export { TransactionStatus } from './TransactionStatus';
export { CardTransactionDetails } from './CardTransactionDetails';
export { ReservationDeclined } from './ReservationDeclined';
export { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
export { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
export { FundsSecuringDeclined } from './FundsSecuringDeclined';
export { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
export { CaptureDeclined } from './CaptureDeclined';
export { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
export { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
export { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
export { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
export { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
export { CompletePaymentRequested } from './CompletePaymentRequested';
export { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
export { PaymentCompletionLocked } from './PaymentCompletionLocked';
export { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
export { PayNoteApproved } from './PayNoteApproved';
export { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
export { PaymentMandateAttached } from './PaymentMandateAttached';
export { ChildPayNoteIssued } from './ChildPayNoteIssued';
export { PayNoteAccepted } from './PayNoteAccepted';
export { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
export { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
export { PaymentReversalDeclined } from './PaymentReversalDeclined';
export { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
export { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
export { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
export { FinalAmountResolved } from './FinalAmountResolved';

export const contents: Record<string, unknown> = {
  '25NBCk2eHaVrp8z8c81y75HAiL55nNZRSZ7uxDsHEGuX': LinkedPayNoteStartResponded,
  '28nyzzqFkwjPojUURBiBoHQeGb4B74JGQSe5Ly5zXjK3': TransactionDetailsUpdated,
  '2a2gKUm58bHAhhod7QW8ET32tB1UsNAMcfTCkP6i42TM':
    PaymentReversalLockChangeFailed,
  '2BGKdGTmrSuS7j7wE2bneyopsfgj5MwLLeU21CodKn4p': IssueChildPayNoteRequested,
  '2eNmDqhcQGV7Z7cJ6EJ9WnnpVKrqCuJrYfyiz1sfSPxC': CardTransactionReport,
  '2qv8FU2sy1vXRuuVFKjr4e564Khe1iT1j9YDTfffK3Ti': PaymentReversalLockRequested,
  '2ZtTQ2b9sFY65w4f4wWYQctRGj9o9ApkRb6tMXyiUqMb':
    TransactionDetailsUpdateFailed,
  '3BD7DPACFH2DZWxs9kb8YCBNypzJYMzctkyu6GZDsf85':
    TransactionDetailsUpdateRejected,
  '3fe87zG5NdKpGKCwWistwuomDgVR56uoo9QyvwbqrA3k':
    FinalAmountResolutionRequested,
  '3LxPRfuHdLUsCMZciUSsFXLyLoJUDjCYreAgFb24zJQr': SecureFundsRequested,
  '3PohjSUMX4izceADM8gpy4Mg9988TNPWX9fKGrMBtZ8a': PaymentCancellationFailed,
  '3q7ZoYNpX5GoVScYTqzom7YQ1fTCPZeegmdvRZvTVee1':
    CancelBeforeCompletionRequested,
  '3RY8mx3eh39FJDi6wBK95ZLr9vq8aXNWy7ynX95hCR8z': PayNoteCancellationRequested,
  '3WUS7fRk3isWgjSnFGXta9HMkGmj2zg6898rbLH5G5iz':
    CardTransactionCaptureLockRequested,
  '3zCHLCtMCUoM1LiZP7skhLwZ5NGcTmVLQbdfPkDuv4q4': PayeeAssignmentRejected,
  '44BS4uToUQLVy8cFfUjbxr99ozR6fiAtCtC3Wd38VPwd': PayeeAssignmentConfirmed,
  '45LGaTEkpqKVCXfgjbdq4kEeQ64qV5TsgYVCiQev9J9n':
    CardTransactionMonitoringStopped,
  '4VMcLbCnPdsVT5VozPcgoQhEi9HyxKwoWZw92PdHSBQZ': PaymentReversalLocked,
  '5aVPumax9MbaaEVd1kyZEoTu2vtZHDffWP8R1ALP7vV': CardTransactionPayNote,
  '5EzstBLEcdv1qNVo8JYzxRd7T6P8fyZ5HrgN2fxz6CdX':
    LinkedCardChargeAndCaptureImmediatelyRequested,
  '5hNfvS7YBGdFfwoUt214LTTk8NSsVETTwDfDTzqcWihu': PaymentCompleted,
  '5PasMX8MMx5Z4Jwr63W5w7tA7E7gGCVzYrrKkJGvU8xX': FundsReserved,
  '5ZqjnjtJJMxKao4htfHUAJGTbPedxv9HMdELRsXaR8mR': ReverseCardChargeRequested,
  '65VJYRpw1HsFXXrG3n9jff3DnRgkzqbM8P73SVPszG3q': PayNote,
  '6NZSd6JgMDdXikYHCDkeQ6aJsWCvMaznrRWdAaGRxnAL': PaymentCompletionFailed,
  '72A3S6dDAqoMPUbC1EUUoCCsnfecvpS1L3cYevSydsai': FinalAmountResolutionRejected,
  '75FqpZhMunC4H25PrrsmNRCRGoLj5UJ1Ldc4eVsHqjGM': TransactionInitiated,
  '7jrHNe8HAs3LiLz5hmTZsAHCNwEaVNXQHf5ZomHVyVZC': PayNoteRejectedByClient,
  '7MrYz5SYkcN9b479w4R4M3JzsgWYuuJBhSfMLwSPdetk': PaymentMandateSpendSettled,
  '7QLdg1jcp7zdZHW8TMek1KRhdhpjmXNyJv83qmMLedkp': PaymentCancellationDeclined,
  '7TZfFGcCm89ELP9am43qpyEfGSEMpup6fPkEjQEKiVNw': ChildPayNoteIssuanceDeclined,
  '7zoVbzvzqxvKAcvdbSSxGPR4RxjQ9iNip3WhU52bRBtb':
    TransactionIdentificationFailed,
  '8btGPWw748VG2tHnj248YNV6EirmDg8oJWAN5UmzcwEo': LinkedCardChargeRequested,
  '8jsJ7UY8wiQvDtpsjqXvnrQUMhqXZhfF6EKBzhtkUKqo':
    PaymentMandateSpendAuthorizationRequested,
  '8nn7phpXTbkJDdtcUoWifGAu3sUG85atgLLU8QcupWmw': FundsCaptured,
  '8Qtt1QxdAecmYSHjLU9GPQC2NDm8TGnaQvfPz7himXK2': PayNoteCancelled,
  '8rhab2RQZiMZ4zqT85vNKR2zVCk9ZfCXGMLWERMnWF7R':
    TransactionDetailsUpdateLocked,
  '8WUtwwVnvBXPJwa1b9ewP5xiCRZt9z8XrDzs1fNzN1UL': CaptureFundsRequested,
  '8Yvq4VCuntJBda3PDdVi2GEnCpi1UHVUZhmZBt4599aa':
    ReverseCardChargeAndCaptureImmediatelyRequested,
  '983dg6ddoprdRNVHuwExmWLhA1DpG4Cz4oLYutMxhHvg': PayNoteDelivery,
  '9gABqM7a7rkmcy1hymgajNEvYRKff7GUbHQuWPx1Qt9k':
    CardTransactionMonitoringRequestRejected,
  '9MDjTe2agSVnBooUFpMSzXenPYPgTC7Z4CvTB9nkyCyc':
    TransactionDetailsUpdateUnlocked,
  '9ST1DLJxByDzvtdeJt8SFeZadSYokstVbWYcGVXnrEzk': PayNoteAcceptedByClient,
  '9t7hUWWXDow4cJfSuG88zruU6YasQeQz1J8jGwcvwthf':
    PaymentCompletionUnlockRequested,
  '9UCqtGPAjKMd77NN7G4oTL6DKKimkLoT5V69AiUh6knx': CaptureFailed,
  '9wv1GB7j71PTZFYmatANzxk34KPaCeouB4yc4AxYirrU': ReservationReleaseRequested,
  '9XRGf45TaohQEHutFaNYPHkYYe2NWsyXsSsv2UoTfm6L': PayNoteRejected,
  A67ddLVzitXDJTFNC3hg4fp4a52aUHjvtLsKkqE5v3ZH: SettlementAmountSpecified,
  Aa45Pf6wk1T9YFxjxBk7fVRygZk9XQ7FWvXquQyLdGZH: PaymentReversalFailed,
  AAEsZ5p6qEHZYr4ZP9oFMyYvJkFNbF6miqtnnYYkovTE: TransactionInitiationFailed,
  AGmjYB8hJAL9JUR3vsoqktdA7RcivcsjgoGjxQq3RQgj:
    TransactionDetailsUpdateLockChangeFailed,
  ApRvaTP7YHK4q4acrZFTtrsRLxqHSiEp4d6vVZ8sGFup:
    ReserveFundsAndCaptureImmediatelyRequested,
  ARgyNXBQ7CxMxtsnZhyGv62H45uRN4rd7L74RUzyCgcz:
    TransactionDetailsUpdateLockRequested,
  AWvMe8pZ3sK5ihyXirhd3KUyxsJkAJPyARigaj2ujF6F: PaymentReversalUnlockRequested,
  B2iduV8cAcvAuNCJ7HDZuR5N1YJETbdeohZF1EEXhTZE: PayNoteAcceptanceRequested,
  B2MMGSbvPhSodiLY7RPngBv9G87VSkgxgC2SF8DzA733:
    TransactionDetailsUpdateRequested,
  BChX2KCCV8bAaVpcxk2AMGyL5EBWkMN7A6MXqYx23kna: CardChargeResponded,
  BDeXDAG91B72CFtoPcDUk3odhFMBhiueneS1RcM4nbPf: TransactionIdentified,
  BGqFuh1FHNRvBYfqDegotUCuCkZUyHPi4cMzfzZMEsGH: PaymentCompletionUnlocked,
  Bini6FefW5nZTkMuiVtPCbxWPfATrtYWpSDfwEvEcXTp: PaymentMandateAttachmentFailed,
  BRCYCbhWLNL4eV9PPiXyR9jD5vUwZJM1QzVRitbzgttG: FundsSecured,
  BrueWfkUx7usLz6HqUq1vLUZtab8cYcuPuHzthmhip8E: LinkedPayNoteStarted,
  BVWamaKm2AEt9FEN5HZKuGWseEzeWPJeyJHbCFq4AGbz:
    CardTransactionCaptureLockChangeFailed,
  BWyf1rwHSCFApt6cTx1pq758Cwkmf6ip1XdEBg4QnCv8: FundsSecuringFailed,
  ByF1yfP9y8HBLFWZ6qzYhYnuujUEpEvx4AFUsgKVfjWZ: SettlementAmountRejected,
  BZL11BoCdd5wXZ1XGwPqckiCzfinoVLNUpmFt4cXGEQ8: PaymentReversedAfterCompletion,
  CNxDfzH62fY9mtj71BTaZZNsyGLpS2RinaB6K34tibbh:
    PaymentMandateSpendSettlementResponded,
  CP7T2PwEUP3xDiT6qMxNacVrigJFMKYFPLZCEkSdoddu: ReservationReleased,
  CtbsuXntvrM28GGveCCe4Ks2xKTTmBvkMBAetSqXRCia: PaymentMandate,
  CyqbBE2DCyFLhMSpyy5n48JHVUcWhzFVKV4mf5pMP86p:
    CardTransactionMonitoringStarted,
  D17BbAFgz2YXvNegams28sxZqtqNKFepEMbPHrfed4bF: PayeeAssignmentRequested,
  DaZpPPmySzsqr4TNuxQaQunmNgbcMZCz3amwe57N6pnm:
    StartCardTransactionMonitoringRequested,
  DEmon8pFkVCLcStZFXVz5FyrorbjnKHNdVfyRBNKKLp1: ReserveFundsRequested,
  DeNXwMeUPHywS5dnywPdkm8TS6qXYuvm1jBU81r8vicY: CardChargeCompleted,
  DMqN5PRMtERwhanUamBCYfELwGNxSq5aLXQDStPNFBio: CardTransactionCaptureLocked,
  DtMSkzcFRUytFjeQEB5ZSEnu1jewVNMuHbN6sDWKjQ7d: TransactionStatus,
  DVykYmmbhDsjsNQCjETGqumKJW5doNkkk6K6R4xeFWTV: CardTransactionDetails,
  EK3i61s8rDuLgcTEZVFSctMBe5egvZPyjjGvUoLhwLie: ReservationDeclined,
  EUw3vUNYpwxKrtvF9FE7jwGzMo7NByVZcLuaTi8Pks7X:
    PaymentCancelledBeforeCompletion,
  F1JQhT1Fxn5QMcvtTUn95qvi7tTggAhv3nvQmHExUTuH:
    PaymentMandateSpendAuthorizationResponded,
  F9uGVcesweVvK72Uw95r5uoC3N9rK7wEqrLesNF2dg6t: FundsSecuringDeclined,
  FAvCxgQqrzAckkXgEU6UXfnntsq8V1V2tfEiHYtuZBPs:
    TransactionDetailsUpdateUnlockRequested,
  Fco4nFxgHFP38LD59gHmiTrKyqJAG5B623gShceqRYyF: CaptureDeclined,
  FKW7FJk8UxqKkYsPfGBwv3sWdBrgiaV1emVVWj1RFTA6: CardTransactionCaptureUnlocked,
  FR7p4QLk7jBBdXGzTwYN2KAeBx6gVGf9kTyF4pn45wLE: PayNoteClientDecisionDiscarded,
  FRcHiifo1E2aQMx1YEMfD2wBTLFAhX4hHCAr4rAHruCS: LinkedPayNoteStartFailed,
  FzBVMWWfDew8fdnxss4ABMm2ESMqS79dBP4fmwA4CtA4: ReverseAfterCompletionRequested,
  G2Nsw7CtbAig3r87U1GJSV8Rhvvg86gmS6dwP657ZTNF: PaymentReversalUnlocked,
  GaCbTkHKYc8bbvCwR7zCU7V29HGvoiMR3EU6HULign51: CompletePaymentRequested,
  GJhhepPZcpJxJjNrFscPYJCaUQN8EgvXVZDobduzhSKy: PayNoteDeliveryFailed,
  GnhJBCKaSH7HSDuD2LihE7ds3Dcddfg8ueDEcaC5VV2Q: PaymentCompletionLocked,
  Gom5w2zMmTCErVF7vgKzSbE1HKv6xfsYzwXJEq3FanhA: PaymentCompletionLockRequested,
  GqsXg52deb5uuCQyUo4XnRWHwPAhpyW7muCpfdnpo4fj: PayNoteApproved,
  GRKRovDGMJjtV4dtaUmmUJEojNCwyosV6hZtmsjPzs4d:
    CardTransactionCaptureUnlockRequested,
  Gs1jHaTTnb8cv6VH6GKwnDAzBPkRjH81wRj28zqkGtz7: PaymentMandateAttached,
  Han6ZfnAh4BUecEKcFoQo36EdoSHxyNtDdtt6bHer3aM: ChildPayNoteIssued,
  Hcg9rpEFRbEcsVyx2Doq7MHZx9bhP4J32x3jA74AgTz7: PayNoteAccepted,
  HhyRVknmhGnXhGBT53hKCioV6Roq1gEb14DAR6Gwu8r9: ReservationReleaseDeclined,
  HqAkxbtsXiTe2YVKh3ohbQTQMit7yLrgRS84ttoHpNe9: PayNoteCancellationRejected,
  HsMuLH95bFaoqknkp6z3ZxMZyAmP21Qx9aYBTtc41zES: PaymentReversalDeclined,
  HY6PWoQGPqoJHmBMZyF8BEkovMzsz1dewfoeCAJ8urpA: MerchantToCustomerPayNote,
  os4PgmBBxgt26WMaUg4XC4kmHkHygU5WL6PD5bHhShL: PaymentCompletionDeclined,
  WAYPYNWJEBL2TPtMuk8R3HYXcSR1itCizbyQoKwg2bn:
    PaymentCompletionLockChangeFailed,
  wi22d16wHycXs4G9op3SEHvcR2rK3JTedywGewUt27F: FinalAmountResolved,
};
