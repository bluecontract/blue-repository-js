import { issueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { childPayNoteIssued } from './ChildPayNoteIssued';
import { payNoteCancellationRequested } from './PayNoteCancellationRequested';
import { payNoteCancellationRejected } from './PayNoteCancellationRejected';
import { reservationReleased } from './ReservationReleased';
import { reserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { reservationDeclined } from './ReservationDeclined';
import { reserveFundsRequested } from './ReserveFundsRequested';
import { payNoteApproved } from './PayNoteApproved';
import { reservationReleaseDeclined } from './ReservationReleaseDeclined';
import { captureFailed } from './CaptureFailed';
import { fundsCaptured } from './FundsCaptured';
import { payNoteRejected } from './PayNoteRejected';
import { reservationReleaseRequested } from './ReservationReleaseRequested';
import { fundsReserved } from './FundsReserved';
import { payeeAssignmentRequested } from './PayeeAssignmentRequested';
import { settlementAmountSpecified } from './SettlementAmountSpecified';
import { payNoteCancelled } from './PayNoteCancelled';
import { settlementAmountRejected } from './SettlementAmountRejected';
import { captureDeclined } from './CaptureDeclined';
import { payNote } from './PayNote';
import { captureFundsRequested } from './CaptureFundsRequested';
import { childPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';

export const contents = {
  '2kyqyRcXAxZNPs25A2cQhZVGHExhLwCby2jPacZJVSCw': issueChildPayNoteRequested,
  '2n9kBVx8cd1Uryn78xxCsV3BuLrXbFybjEzRFdQrA2fZ': childPayNoteIssued,
  '3x6EjT3NtWhL17KP3r6ycMrzjNpFfvNkFEAQNCovMoBe': payNoteCancellationRequested,
  '4LmMqg33jtry8y2eBQr7EH2E8bCKR7LoFKKHniVaPuPX': payNoteCancellationRejected,
  '4mLcMf3ojUMrrxo76GnQVk1xNimu3VKSfigbM4tMXpoh': reservationReleased,
  '5jhkzewzgezLvL2RWR4bEh5syguyXh5DZG43jDEy2cEk':
    reserveFundsAndCaptureImmediatelyRequested,
  '61Dy8SJk1wwbT1zNd4HheAMVLx94FJ5KSUZBdxntWwHg': reservationDeclined,
  '6rv9CDANY6vQ26xmr2VFcf558SJMrYtR9bPCFpbW255H': reserveFundsRequested,
  '6yxAqffyrpZ8aAqnYBo123xokkEhyKsnWdjRn58rhXcd': payNoteApproved,
  '7ddiCneFSKL7dY1CnqDMojT5Ea6WqLw1Z9wwtUS98qSL': reservationReleaseDeclined,
  '7e8Cjd8A9oaqdezkQMs9PqWnY85ohaEdGCQB51jQ4dtQ': captureFailed,
  '7ETquYPCBGb3n4M4pyDYxsrdYYEnxqyBMhZJa3d3qPLj': fundsCaptured,
  '7gnBj4SwQxdspuAet78hSHzqNsoWmp16ymBFJ6uxryJL': payNoteRejected,
  '7LvjKQUDzSbCkKHy4bCYQZbcsNGtTT1uFqQSEJxxjxXv': reservationReleaseRequested,
  '8ubcVvoWVqDusMwN7R4ieiSXxT96bZAmD8ZiuajEoLp': fundsReserved,
  BheCgyvn1SDY6P9NxpvPjcPWBvpZC1pPvvHJX6vjdwat: payeeAssignmentRequested,
  CnP6doD4jwCR85CiLB3DLxQ6rDacguYRcZ8XufvRMddw: settlementAmountSpecified,
  F6HDUeVwJHrMe1sNN7ccc7SUDMydQqWynn1PGKuTxFL3: payNoteCancelled,
  FczEBnWJ9C6bpLzKDLZz2h8mcw5Y2MtsccmC2s3mLw5r: settlementAmountRejected,
  FmcUrzfkuyS9RZozCG89hhQw4gyEHzzi72tUzjMshWJH: captureDeclined,
  JCXDb7vYdfmrvoSoypDsxzxtcPJHJPeip4wUkt1AetEr: payNote,
  LUv8pw7KMgUYpfdeLV2inyjcS6j3mAPYJPQLHFSVBcb: captureFundsRequested,
  nGXUAS8gZdkyxcKkBjsBsaLgZC3YWG6KkZU3PfNM4rj: childPayNoteIssuanceDeclined,
} as const;
