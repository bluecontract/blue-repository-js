import { TransactionInitiated } from './TransactionInitiated';
import { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
import { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
import { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
import { PayNoteDelivery } from './PayNoteDelivery';
import { CardTransactionReport } from './CardTransactionReport';
import { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
import { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
import { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
import { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
import { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
import { SettlementAmountRejected } from './SettlementAmountRejected';
import { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
import { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
import { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { ReserveFundsRequested } from './ReserveFundsRequested';
import { PaymentMandateAttached } from './PaymentMandateAttached';
import { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
import { SettlementAmountSpecified } from './SettlementAmountSpecified';
import { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
import { ReservationDeclined } from './ReservationDeclined';
import { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
import { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { PaymentReversalLocked } from './PaymentReversalLocked';
import { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
import { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
import { FundsSecuringFailed } from './FundsSecuringFailed';
import { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
import { TransactionIdentified } from './TransactionIdentified';
import { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
import { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
import { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
import { CompletePaymentRequested } from './CompletePaymentRequested';
import { PaymentCompleted } from './PaymentCompleted';
import { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
import { FinalAmountResolved } from './FinalAmountResolved';
import { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
import { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
import { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
import { FundsSecuringDeclined } from './FundsSecuringDeclined';
import { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
import { SecureFundsRequested } from './SecureFundsRequested';
import { PayNoteCancelled } from './PayNoteCancelled';
import { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
import { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
import { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
import { PayNoteRejected } from './PayNoteRejected';
import { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
import { PaymentCompletionFailed } from './PaymentCompletionFailed';
import { FundsReserved } from './FundsReserved';
import { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
import { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
import { FundsCaptured } from './FundsCaptured';
import { PaymentCompletionLocked } from './PaymentCompletionLocked';
import { PaymentMandate } from './PaymentMandate';
import { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
import { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
import { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
import { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
import { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
import { CardChargeResponded } from './CardChargeResponded';
import { ReservationReleased } from './ReservationReleased';
import { PayNoteAccepted } from './PayNoteAccepted';
import { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
import { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
import { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
import { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
import { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
import { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
import { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
import { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
import { CaptureFundsRequested } from './CaptureFundsRequested';
import { FundsSecured } from './FundsSecured';
import { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
import { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
import { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
import { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
import { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
import { PaymentCancellationFailed } from './PaymentCancellationFailed';
import { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
import { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
import { ChildPayNoteIssued } from './ChildPayNoteIssued';
import { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
import { PaymentReversalDeclined } from './PaymentReversalDeclined';
import { PaymentReversalFailed } from './PaymentReversalFailed';
import { TransactionInitiationFailed } from './TransactionInitiationFailed';
import { CaptureFailed } from './CaptureFailed';
import { TransactionStatus } from './TransactionStatus';
import { CaptureDeclined } from './CaptureDeclined';
import { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
import { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
import { CardTransactionPayNote } from './CardTransactionPayNote';
import { PayNote } from './PayNote';
import { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
import { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
import { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
import { ReservationReleaseRequested } from './ReservationReleaseRequested';
import { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
import { CardTransactionDetails } from './CardTransactionDetails';
import { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
import { PayNoteApproved } from './PayNoteApproved';
import { CardChargeCompleted } from './CardChargeCompleted';
import { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';

export { TransactionInitiated } from './TransactionInitiated';
export { TransactionDetailsUpdateLockChangeFailed } from './TransactionDetailsUpdateLockChangeFailed';
export { PaymentCompletionLockRequested } from './PaymentCompletionLockRequested';
export { TransactionDetailsUpdateFailed } from './TransactionDetailsUpdateFailed';
export { PayNoteDelivery } from './PayNoteDelivery';
export { CardTransactionReport } from './CardTransactionReport';
export { CardTransactionCaptureLockChangeFailed } from './CardTransactionCaptureLockChangeFailed';
export { LinkedCardChargeAndCaptureImmediatelyRequested } from './LinkedCardChargeAndCaptureImmediatelyRequested';
export { PaymentReversalLockRequested } from './PaymentReversalLockRequested';
export { PaymentReversalUnlockRequested } from './PaymentReversalUnlockRequested';
export { PayeeAssignmentConfirmed } from './PayeeAssignmentConfirmed';
export { SettlementAmountRejected } from './SettlementAmountRejected';
export { PayNoteAcceptanceRequested } from './PayNoteAcceptanceRequested';
export { FinalAmountResolutionRequested } from './FinalAmountResolutionRequested';
export { ReserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
export { ReserveFundsRequested } from './ReserveFundsRequested';
export { PaymentMandateAttached } from './PaymentMandateAttached';
export { CancelBeforeCompletionRequested } from './CancelBeforeCompletionRequested';
export { SettlementAmountSpecified } from './SettlementAmountSpecified';
export { PaymentCancellationDeclined } from './PaymentCancellationDeclined';
export { ReservationDeclined } from './ReservationDeclined';
export { CardTransactionCaptureUnlockRequested } from './CardTransactionCaptureUnlockRequested';
export { IssueChildPayNoteRequested } from './IssueChildPayNoteRequested';
export { PaymentReversalLocked } from './PaymentReversalLocked';
export { StartCardTransactionMonitoringRequested } from './StartCardTransactionMonitoringRequested';
export { ReservationReleaseDeclined } from './ReservationReleaseDeclined';
export { FundsSecuringFailed } from './FundsSecuringFailed';
export { PaymentMandateSpendSettled } from './PaymentMandateSpendSettled';
export { TransactionIdentified } from './TransactionIdentified';
export { PaymentMandateSpendAuthorizationResponded } from './PaymentMandateSpendAuthorizationResponded';
export { LinkedPayNoteStarted } from './LinkedPayNoteStarted';
export { PayNoteAcceptedByClient } from './PayNoteAcceptedByClient';
export { CompletePaymentRequested } from './CompletePaymentRequested';
export { PaymentCompleted } from './PaymentCompleted';
export { PaymentMandateSpendAuthorizationRequested } from './PaymentMandateSpendAuthorizationRequested';
export { FinalAmountResolved } from './FinalAmountResolved';
export { PaymentReversedAfterCompletion } from './PaymentReversedAfterCompletion';
export { LinkedPayNoteStartFailed } from './LinkedPayNoteStartFailed';
export { TransactionDetailsUpdateUnlocked } from './TransactionDetailsUpdateUnlocked';
export { FundsSecuringDeclined } from './FundsSecuringDeclined';
export { TransactionDetailsUpdateRequested } from './TransactionDetailsUpdateRequested';
export { SecureFundsRequested } from './SecureFundsRequested';
export { PayNoteCancelled } from './PayNoteCancelled';
export { PaymentCompletionDeclined } from './PaymentCompletionDeclined';
export { PaymentCancelledBeforeCompletion } from './PaymentCancelledBeforeCompletion';
export { TransactionDetailsUpdateUnlockRequested } from './TransactionDetailsUpdateUnlockRequested';
export { PayNoteRejected } from './PayNoteRejected';
export { ReverseAfterCompletionRequested } from './ReverseAfterCompletionRequested';
export { PaymentCompletionFailed } from './PaymentCompletionFailed';
export { FundsReserved } from './FundsReserved';
export { LinkedCardChargeRequested } from './LinkedCardChargeRequested';
export { CardTransactionMonitoringRequestRejected } from './CardTransactionMonitoringRequestRejected';
export { FundsCaptured } from './FundsCaptured';
export { PaymentCompletionLocked } from './PaymentCompletionLocked';
export { PaymentMandate } from './PaymentMandate';
export { LinkedPayNoteStartResponded } from './LinkedPayNoteStartResponded';
export { PaymentCompletionUnlockRequested } from './PaymentCompletionUnlockRequested';
export { PayeeAssignmentRequested } from './PayeeAssignmentRequested';
export { CardTransactionMonitoringStopped } from './CardTransactionMonitoringStopped';
export { PaymentCompletionUnlocked } from './PaymentCompletionUnlocked';
export { CardChargeResponded } from './CardChargeResponded';
export { ReservationReleased } from './ReservationReleased';
export { PayNoteAccepted } from './PayNoteAccepted';
export { PayeeAssignmentRejected } from './PayeeAssignmentRejected';
export { PaymentMandateSpendSettlementResponded } from './PaymentMandateSpendSettlementResponded';
export { PayNoteClientDecisionDiscarded } from './PayNoteClientDecisionDiscarded';
export { TransactionDetailsUpdateLockRequested } from './TransactionDetailsUpdateLockRequested';
export { ChildPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
export { PaymentCompletionLockChangeFailed } from './PaymentCompletionLockChangeFailed';
export { CardTransactionCaptureLockRequested } from './CardTransactionCaptureLockRequested';
export { CardTransactionCaptureUnlocked } from './CardTransactionCaptureUnlocked';
export { PayNoteCancellationRequested } from './PayNoteCancellationRequested';
export { CaptureFundsRequested } from './CaptureFundsRequested';
export { FundsSecured } from './FundsSecured';
export { PaymentReversalLockChangeFailed } from './PaymentReversalLockChangeFailed';
export { FinalAmountResolutionRejected } from './FinalAmountResolutionRejected';
export { PayNoteRejectedByClient } from './PayNoteRejectedByClient';
export { TransactionDetailsUpdateLocked } from './TransactionDetailsUpdateLocked';
export { TransactionDetailsUpdated } from './TransactionDetailsUpdated';
export { PaymentCancellationFailed } from './PaymentCancellationFailed';
export { CardTransactionCaptureLocked } from './CardTransactionCaptureLocked';
export { ReverseCardChargeAndCaptureImmediatelyRequested } from './ReverseCardChargeAndCaptureImmediatelyRequested';
export { ChildPayNoteIssued } from './ChildPayNoteIssued';
export { ReverseCardChargeRequested } from './ReverseCardChargeRequested';
export { PaymentReversalDeclined } from './PaymentReversalDeclined';
export { PaymentReversalFailed } from './PaymentReversalFailed';
export { TransactionInitiationFailed } from './TransactionInitiationFailed';
export { CaptureFailed } from './CaptureFailed';
export { TransactionStatus } from './TransactionStatus';
export { CaptureDeclined } from './CaptureDeclined';
export { PayNoteCancellationRejected } from './PayNoteCancellationRejected';
export { CardTransactionMonitoringStarted } from './CardTransactionMonitoringStarted';
export { CardTransactionPayNote } from './CardTransactionPayNote';
export { PayNote } from './PayNote';
export { MerchantToCustomerPayNote } from './MerchantToCustomerPayNote';
export { PayNoteDeliveryFailed } from './PayNoteDeliveryFailed';
export { PaymentMandateAttachmentFailed } from './PaymentMandateAttachmentFailed';
export { ReservationReleaseRequested } from './ReservationReleaseRequested';
export { TransactionIdentificationFailed } from './TransactionIdentificationFailed';
export { CardTransactionDetails } from './CardTransactionDetails';
export { PaymentReversalUnlocked } from './PaymentReversalUnlocked';
export { PayNoteApproved } from './PayNoteApproved';
export { CardChargeCompleted } from './CardChargeCompleted';
export { TransactionDetailsUpdateRejected } from './TransactionDetailsUpdateRejected';

export const contents = {
  '14UHCXtf9XLpi3Z3n4xbo1dmXRzfXnDEH23iVaechxzh': TransactionInitiated,
  '1j22qLMeLkRgtwiMHWXJNopKeBHdACS4vELfLxc1mnA':
    TransactionDetailsUpdateLockChangeFailed,
  '2aevbSbcGTCXR2n3Kftbsoo9yV4jHw9MFpbsRUDrMBDL':
    PaymentCompletionLockRequested,
  '2dmAPySotyaWEPRLBYMiooqrqa3v42pyrHYvWskMMsMb':
    TransactionDetailsUpdateFailed,
  '2eBsi15koVLa2rXUBiiNGduAQuGj4SzeRf9Xjr5YJaDT': PayNoteDelivery,
  '2ibvMNB7oxcpkYpxpag2HLC81sRs3PUBFtqjbqN7ET8X': CardTransactionReport,
  '2LFkmyxDFSdNqM8mr6Md3LF54V15fFGL1s5fTnUfCpUH':
    CardTransactionCaptureLockChangeFailed,
  '2LqGeXL7WWYQJMqviyseKCekpY3wYdB6K1f9sqakBUY7':
    LinkedCardChargeAndCaptureImmediatelyRequested,
  '2qrvwZRrYWZvZZncsQHNbcQRXQDhoFQPcUsVxoT34L69': PaymentReversalLockRequested,
  '2xFW6D91Vx628zDGqPwyEPQAdUnmvm9G8Eki5pMeHWi4':
    PaymentReversalUnlockRequested,
  '34v52X6nVj6muiD11W8nohLFn7DjT2RiaRYwjRNpq4v3': PayeeAssignmentConfirmed,
  '3b3ePGPg5GzS6KYfqoDfgjWbjccXVnGzytbpFS53x4HM': SettlementAmountRejected,
  '3kyFUyupzb49ZoxVHnUhVe4XAbEN1Hpy8zN9Dx75GNyc': PayNoteAcceptanceRequested,
  '3RkEm1oNz9wYn7CEvReyLduk71eU5e8psAeGyLXwZxr6':
    FinalAmountResolutionRequested,
  '3XstDYFkqsUP5PdM6Z6mwspPzgdQMFtUpNyMsKPK2o6N':
    ReserveFundsAndCaptureImmediatelyRequested,
  '3Y3TYmSfZMmPYKmF5i3eR8YcVPNP5Sic2bZN8xRnvMWm': ReserveFundsRequested,
  '49TYrHpnk2gepJiGduJP3afrnT2DJ6kDxqF4Y9M4C4t7': PaymentMandateAttached,
  '4oyKGB49m8MuAFdxgHZauwhDFvdBgziHnb9CCGeKNqEc':
    CancelBeforeCompletionRequested,
  '4pVAdZo93FHRRkAkshqCZW4pUvvV1ccczJZ2Lu4jkD1D': SettlementAmountSpecified,
  '4witPJDjFKHNHyucepuDn9KXyUTTqZQTVsKHvcrVbGvY': PaymentCancellationDeclined,
  '4xS8bmZQBGPENmaPfsrtYguYfq4hTtaZAXrefdyFNkKq': ReservationDeclined,
  '531sxtH5rD9ter3EzwBTcn9GMdA7RAYFwmSQRzxCru8z':
    CardTransactionCaptureUnlockRequested,
  '53Dir2sGy1NHuCQXF6suGoDMxYacNhbcy23AKD89SghD': IssueChildPayNoteRequested,
  '5fKdfddLui1nNGHq2hKyEZm8pR6vaN7BRcuomWJPj82Z': PaymentReversalLocked,
  '649PKUqAakwi2JwDwHyypfWb4VmrrBAeEqzSU6FDWfgm':
    StartCardTransactionMonitoringRequested,
  '653sCbbRH3RiKhGjmVxh6wFVs4rn54wJRKDXRMKBZtjA': ReservationReleaseDeclined,
  '67BprL1WeSSpJDKawcnaNC6VF2vz68JQ5qrVfi37biBA': FundsSecuringFailed,
  '6aPqmL9AQV31CCV576ZmEcUgysbdbQAfAig9J5VYeR6v': PaymentMandateSpendSettled,
  '6gQWKeJHZEbBo13Vvyf2nsdg7TA9kLSYdzMaJgySPG7V': TransactionIdentified,
  '6UFd89oNox3PCpeVFaaCXwbGDp3k3Qc56e4DktnK3F8P':
    PaymentMandateSpendAuthorizationResponded,
  '6vnMMWuq6qJ1hxLqL1P2ckCqC9JtJF3QNW8s7rMTgZ4Q': LinkedPayNoteStarted,
  '6VQC585V4SdpyA5hCeQQGM178bbeW3D2WcKt8ZCWK9s3': PayNoteAcceptedByClient,
  '6yEDRKSGUFUhLMYf3anEytTjjV4PneHnzmqcwtFQ2m4T': CompletePaymentRequested,
  '72eeCYvygiChLj529TP1HKKBaYyB5TBa15Y3cn3JGsak': PaymentCompleted,
  '7EKvVzbT63C2taKWfLf9J2BiVL7BCL6Ld86tH8b9kmxF':
    PaymentMandateSpendAuthorizationRequested,
  '7oKW3Fozo1KUPgxo4PdF6jJJQ83z11mBbpZF2xCENGDX': FinalAmountResolved,
  '81whmkSDanPULQUi4sMuVkxiWDLHb3VPC5PeLfJCXCGo':
    PaymentReversedAfterCompletion,
  '8dggwonfALwrTSRhg8g8ncXFXierke2mogtEZQXHab64': LinkedPayNoteStartFailed,
  '8H1L8VGE9vXzbGgrv5RNkpYXngf43futPHQvnJ4SJD2B':
    TransactionDetailsUpdateUnlocked,
  '8PufMmsuBgpX5YCpiS7XuiCFUWDan1fN8c3TLLwh57gL': FundsSecuringDeclined,
  '8tAYAsJki2mJb2qRu2H6dEYT2e3qQDqCFx2ugqtirLPU':
    TransactionDetailsUpdateRequested,
  '94M8FmSvYDJYBZwDvCuVYRQmYxD1Ek6cQSTMKEYYXbY6': SecureFundsRequested,
  '96buyUXwhkak8xKoCR5nAW9tMuwzkevJFdELVvwKxR6Y': PayNoteCancelled,
  '9AL8hghruGSH1ibFSYE8N7xoPLWLkktTCMFRkdoNsfTN': PaymentCompletionDeclined,
  '9hvBQjesbYZPkZSaikm5avp7sFjTHsjRkQS2gas1u49p':
    PaymentCancelledBeforeCompletion,
  '9xTYCggegp9Ci5AGfDk9avuKax1FC5EvwADrXtpLSebR':
    TransactionDetailsUpdateUnlockRequested,
  AdKfkwRfzRUxUKSzhRfYANsaUBNnz4u6JFWR66qhzyZe: PayNoteRejected,
  AG1PERDv5Vzxx3GTpeDKpEdMD3bPbMcijHndAPPdH8zc: ReverseAfterCompletionRequested,
  An4JGf9zvSwEtYPJjZaWRnHaPXXvmyHg7oNLmJRKuxSV: PaymentCompletionFailed,
  AopfdGqnwcxsw4mJzXbmjDMnASRtkce9BZB1n6QSRNXX: FundsReserved,
  Aq4dNFtLHLWYfCS7aqAgWwGi48MgbQmp2EZJtDBN7FSg: LinkedCardChargeRequested,
  B2iherBskP5f4x7x31GahNmsJtyzian6ZN92b8kE1E5q:
    CardTransactionMonitoringRequestRejected,
  BJvjorbC5ed5KTV7SxoV3CvrJXjrFPcFxY9QT4jHBbXi: FundsCaptured,
  BKBtKSbxAxg1vyg2ZcghVANjaS4viMxUFY2un6TDPWbw: PaymentCompletionLocked,
  BKKgKnHFhLmmUxq4WRvhV7HYZNu6ngDEce1LvHjZimJr: PaymentMandate,
  BQioEtRPYv2fWVryRsSYQc1Vnp9eyX3CYDrNY1hEy1Ye: LinkedPayNoteStartResponded,
  BqygExH4phfPLuES2VLGpYL2gDenFFCcukPXzC1PmQtM:
    PaymentCompletionUnlockRequested,
  BVLMcTzag3D2rvg8LoKQ3Htgoqsh77EAoiTLTxH5aVBE: PayeeAssignmentRequested,
  BYdTyyLphWQNKo1GBcnE1jQuaPyXexNnfzkXhMiRqmUr:
    CardTransactionMonitoringStopped,
  BZxWkxpxVygutoo7KuBd7C63nZwYDuPXFhffXhZ319z9: PaymentCompletionUnlocked,
  CFoaaYn29o7Mg7VaN7bkM87KrfE8fvnVYWkGXd6YnQ7S: CardChargeResponded,
  CFqiZigjKE5JatANkaAkWw2NbgvEmb2BVEVPf3ckUrWg: ReservationReleased,
  CfSpcRXYk2qwu1vNs9LL8rycBsxzL2R4LGyDdrDzwCjh: PayNoteAccepted,
  CNFxs2PfxjDh7HNCaehyxNJ8zAdLbmgTcH12rU8VA7yi: PayeeAssignmentRejected,
  CoGAMipt8rhmnkMgKsyZ5aendkHvFc4muC6pVgrUT1rJ:
    PaymentMandateSpendSettlementResponded,
  Da7ZSyWgvMyTfwDVhAgCkGf3H8dwHhouHsHgNzg3DZ2j: PayNoteClientDecisionDiscarded,
  DFFyom6z2nbWmFyoi3DLngRJKgLXXF4inq7hmZX7eShJ:
    TransactionDetailsUpdateLockRequested,
  DFKVw43E36kimqj64FyiiVxE9yNuB22SETFx5M4WAi9m: ChildPayNoteIssuanceDeclined,
  DG24you4q9reWwc93JPhCK21WoAtP8w9Y6HThyWmL41e:
    PaymentCompletionLockChangeFailed,
  DhxGBjA6Gow9E6ZKZ49SdziihHZ4PeXxFNatSqmesKZu:
    CardTransactionCaptureLockRequested,
  DiowRXdCBw83YCn5Pwcg2YABaVQZ1p4Wk1L9DJfajqp5: CardTransactionCaptureUnlocked,
  DqiwzsNLbHCh6PaDF6wy6ZqBSF5JV5nAQSKFKTPRTbGB: PayNoteCancellationRequested,
  DvxKVEFsDmgA1hcBDfh7t42NgTRLaxXjCrB48DufP3i3: CaptureFundsRequested,
  DvxVaiLspGpmTY5SiZDb85sJLcvzBCoJCjCHSAmVFbGT: FundsSecured,
  DYUz7mcFpgQdRNwwsSSBdDe3CYtfRbAeAUiEv6tuLDhy: PaymentReversalLockChangeFailed,
  E6zFPqoEmEdP9xFa1A9FDSsDJDb7BaR7tXakVD7RN8oH: FinalAmountResolutionRejected,
  EGRRGwNnReqfQQhKnML28DWz9MvvC3B5JgbBrCUxrZ3G: PayNoteRejectedByClient,
  eoi7pHyfDPfN9EkHcCNMekiZubrBa9EyywmnWrGUsGb: TransactionDetailsUpdateLocked,
  EsyQj8xWb1Kf2ESjDq1UR6PK2hx4fpnyGiEWJ14ttC8a: TransactionDetailsUpdated,
  ExfGtqDcSr7RkvA7XzdV5B1MVc7CPacHpanjGBtGhjyk: PaymentCancellationFailed,
  EXoQHkYEDQdhGd3AeXBryzxmCTXsvTjXTfZmjwuqqbHt: CardTransactionCaptureLocked,
  F4gfZeY8P8dkfwNSbEfq7xQ8axiHdfqgzGQQr3HLDyzC:
    ReverseCardChargeAndCaptureImmediatelyRequested,
  FAZCx2s5eq9zPV64LdHNFYbjjxD3ci1ZqyTcQk5WhXAs: ChildPayNoteIssued,
  Fg5CEPi8Dbr1vBwGjzf8PbQNfuWfPP7HcLFChYwpRJq5: ReverseCardChargeRequested,
  Fk96a7GFSo2c3w7xWzaqnYhXXhLAAxj9Dwao8Hg9sdX: PaymentReversalDeclined,
  FNZQJMETUdV57VFyWHGPdQVPSjWsvGj7u4n2oKYbgAaH: PaymentReversalFailed,
  FSfMCJpFDcB9zNfrd4gDhaDXpFhaSNToGbAdxSkw55V7: TransactionInitiationFailed,
  FUh3TARSh4TjnWKAkM5ydjFWLWEmrFByKMBQzcgQfqRW: CaptureFailed,
  FutWoAEUEb3wkmEm4YP4JGFPtu3B3PQ3m71BmnRFFnsQ: TransactionStatus,
  FzJqLm7Ek58LsVstJV2c37JfiMhRiWtjZNsiMz2ZfCYG: CaptureDeclined,
  GaYDPA7TTqWuoxioCYFPeyqomjH4g3YDtFxHv9yLRQ8A: PayNoteCancellationRejected,
  GcKHzzeu5qehMo1JLGN7X5tSzrHM2iJoscN2qmkB5RPm:
    CardTransactionMonitoringStarted,
  GDmDBkzVuvpkNZHrUgNmpijC9rfq8YQ8f29nHHH9aC2X: CardTransactionPayNote,
  GJkuHuw2e1cTzoS2A2nuzK9Hg64yedbFb6ayrcqz7u1d: PayNote,
  GT1pxgc28u4M6dkNtKJJWbex7wAaJ66nAut6b9tj97t4: MerchantToCustomerPayNote,
  GtFG4Nt2fAamUZi9fSZNotab3BEUuv236LuPAcErVj5y: PayNoteDeliveryFailed,
  GTwsVrbVb31sMub1vvU2KyY2nA8ekKWYDoqNAB1m4Vh2: PaymentMandateAttachmentFailed,
  GU8nkSnUuMs6632rHQyBndRtjDcMB9ZSbgwkGYcfGt97: ReservationReleaseRequested,
  GvFQ71MZS1CrHvSopnTkSz8DBX2is4meMR5tpF5WmwCC: TransactionIdentificationFailed,
  GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT: CardTransactionDetails,
  HPLY55rtyD7BVZaHWhB9iUP7AoFTykn6ZCF3K3BaBbVu: PaymentReversalUnlocked,
  HQTUxErobqhSuhWo9DAC1WwaG9oYdjfmdKprGtV4TeEK: PayNoteApproved,
  Hrz9kzWXTXDfK2XEkRJtHqdKzHaQq919NcRL8QMAvEEQ: CardChargeCompleted,
  tF2fYwf8b7HwErSWAduxWXoV8v7pMQPHVCsSZhZzhmT: TransactionDetailsUpdateRejected,
} as const;
