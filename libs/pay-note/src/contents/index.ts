import { payNoteRejected } from './PayNoteRejected';
import { payNoteCancellationRejected } from './PayNoteCancellationRejected';
import { settlementAmountRejected } from './SettlementAmountRejected';
import { payNoteCancellationRequested } from './PayNoteCancellationRequested';
import { payNoteApproved } from './PayNoteApproved';
import { captureFundsRequested } from './CaptureFundsRequested';
import { payNote } from './PayNote';
import { reserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { reservationReleaseDeclined } from './ReservationReleaseDeclined';
import { childPayNoteIssued } from './ChildPayNoteIssued';
import { issueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { reserveFundsRequested } from './ReserveFundsRequested';
import { settlementAmountSpecified } from './SettlementAmountSpecified';
import { reservationDeclined } from './ReservationDeclined';
import { captureDeclined } from './CaptureDeclined';
import { captureFailed } from './CaptureFailed';
import { payeeAssignmentRequested } from './PayeeAssignmentRequested';
import { payNoteCancelled } from './PayNoteCancelled';
import { reservationReleaseRequested } from './ReservationReleaseRequested';
import { childPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { fundsCaptured } from './FundsCaptured';
import { reservationReleased } from './ReservationReleased';
import { fundsReserved } from './FundsReserved';

export const contents = {
  '2uKanEAwYZAXKZTXyY8SjNZQsNxaZiQYuX3SPqFcafv3': payNoteRejected,
  '3h1WzesH4E4P9Wt9UDKt7dvA65CpZHBgRyNEn7e3m4DE': payNoteCancellationRejected,
  '3iaVo5XBQ9YWfE66wuYJMLCvmMVhqYzGoKPwYWBDYGZx': settlementAmountRejected,
  '3NEYPUnq7MpehoSLU7L3PQVwTSG755MGQCKkagGps6Xw': payNoteCancellationRequested,
  '6rUUK1FshkYaquowa59ENc2BS6Ua4G6mDhDzmtzytNZH': payNoteApproved,
  '7DvvtJgq7F2rLQd56SaSzy5qRtdNoEmDx3m486ip3hUW': captureFundsRequested,
  '8ckiLyxLCyvFbFKvK9oZpYqxCxtKtFpnnnn24bynCWLa': payNote,
  '8gELiMueXzubWytSnFAvHitbLvjzTAvGxJyqPptTmoip':
    reserveFundsAndCaptureImmediatelyRequested,
  '8tVCt8s2vWY7fz1K9ygm6qQAd1LmxsGFACmL4pc6rrg9': reservationReleaseDeclined,
  '9Dp2HwMPHRV1t7zWztECCnsqX3m49R5BmL2kHDWh84q6': childPayNoteIssued,
  AwRe1pQnpSJsjjWszV9bJCgEkCrwxrm3ZYWhsgzK2YxM: issueChildPayNoteRequested,
  BCw2RY5ktLGesa34AgVeQURrCKCMr1sFvR8joV3nLRGu: reserveFundsRequested,
  C4yezmvwdWsC81aHczBgHcPevvcqqEWm4UVkJA9KwKaV: settlementAmountSpecified,
  C73n3ZCWuyRH4koCCPoHg4evWS6B1XRDxKVVBufyE7RJ: reservationDeclined,
  CJYSB3zHpiqNymMqZLZJSc7JGnqJFgY1EkWbRKamUm4o: captureDeclined,
  E9uruYo1G1AoqNYGSpabKi7RgsYgCMynuK3geY9i9B41: captureFailed,
  ENEHpfdsvWjnv4vAZNyYWFEg3HgxSXs8U2YfHKqJ4WVM: payeeAssignmentRequested,
  GZWb3RnKzNjmfg4fxM2YJchNAZcgYtS6jz2wKjuKEjfQ: payNoteCancelled,
  H8tDykjjUtC5PhN2RHNnFTHQDNZjjRYPTYH5j3TRTXsR: reservationReleaseRequested,
  HA61aYUygJk5dPUCskANAeNy3HEPMoTgKitg3AqR2iaU: childPayNoteIssuanceDeclined,
  HtzNzp9FzHRSaDswPKY33FyrExnDY8iGe3AqZwoLCRMx: fundsCaptured,
  Q1zF1sG7gfC67sA5249RjxZtMarHTP5fYqZpGEPxQRU: reservationReleased,
  uDrjv9EtBXEohm7teXEULfeHVqnKMdyfbezHKBoRUmT: fundsReserved,
} as const;
