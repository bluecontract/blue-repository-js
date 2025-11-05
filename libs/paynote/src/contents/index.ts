import { settlementAmountRejected } from './SettlementAmountRejected';
import { reserveFundsAndCaptureImmediatelyRequested } from './ReserveFundsAndCaptureImmediatelyRequested';
import { reserveFundsRequested } from './ReserveFundsRequested';
import { settlementAmountSpecified } from './SettlementAmountSpecified';
import { reservationDeclined } from './ReservationDeclined';
import { issueChildPayNoteRequested } from './IssueChildPayNoteRequested';
import { reservationReleaseDeclined } from './ReservationReleaseDeclined';
import { payNoteCancelled } from './PayNoteCancelled';
import { payNote } from './PayNote';
import { payNoteRejected } from './PayNoteRejected';
import { fundsReserved } from './FundsReserved';
import { fundsCaptured } from './FundsCaptured';
import { payeeAssignmentRequested } from './PayeeAssignmentRequested';
import { reservationReleased } from './ReservationReleased';
import { childPayNoteIssuanceDeclined } from './ChildPayNoteIssuanceDeclined';
import { payNoteCancellationRequested } from './PayNoteCancellationRequested';
import { captureFundsRequested } from './CaptureFundsRequested';
import { childPayNoteIssued } from './ChildPayNoteIssued';
import { captureFailed } from './CaptureFailed';
import { captureDeclined } from './CaptureDeclined';
import { payNoteCancellationRejected } from './PayNoteCancellationRejected';
import { reservationReleaseRequested } from './ReservationReleaseRequested';
import { payNoteApproved } from './PayNoteApproved';

export const contents = {
  '3b3ePGPg5GzS6KYfqoDfgjWbjccXVnGzytbpFS53x4HM': settlementAmountRejected,
  '3XstDYFkqsUP5PdM6Z6mwspPzgdQMFtUpNyMsKPK2o6N':
    reserveFundsAndCaptureImmediatelyRequested,
  '3Y3TYmSfZMmPYKmF5i3eR8YcVPNP5Sic2bZN8xRnvMWm': reserveFundsRequested,
  '4pVAdZo93FHRRkAkshqCZW4pUvvV1ccczJZ2Lu4jkD1D': settlementAmountSpecified,
  '4xS8bmZQBGPENmaPfsrtYguYfq4hTtaZAXrefdyFNkKq': reservationDeclined,
  '53Dir2sGy1NHuCQXF6suGoDMxYacNhbcy23AKD89SghD': issueChildPayNoteRequested,
  '653sCbbRH3RiKhGjmVxh6wFVs4rn54wJRKDXRMKBZtjA': reservationReleaseDeclined,
  '96buyUXwhkak8xKoCR5nAW9tMuwzkevJFdELVvwKxR6Y': payNoteCancelled,
  '9qHSL1Fy6FjhZp9L3SQJ82K9JtZeeJQ7BU78gsHsieBw': payNote,
  AdKfkwRfzRUxUKSzhRfYANsaUBNnz4u6JFWR66qhzyZe: payNoteRejected,
  AopfdGqnwcxsw4mJzXbmjDMnASRtkce9BZB1n6QSRNXX: fundsReserved,
  BJvjorbC5ed5KTV7SxoV3CvrJXjrFPcFxY9QT4jHBbXi: fundsCaptured,
  BVLMcTzag3D2rvg8LoKQ3Htgoqsh77EAoiTLTxH5aVBE: payeeAssignmentRequested,
  CFqiZigjKE5JatANkaAkWw2NbgvEmb2BVEVPf3ckUrWg: reservationReleased,
  DFKVw43E36kimqj64FyiiVxE9yNuB22SETFx5M4WAi9m: childPayNoteIssuanceDeclined,
  DqiwzsNLbHCh6PaDF6wy6ZqBSF5JV5nAQSKFKTPRTbGB: payNoteCancellationRequested,
  DvxKVEFsDmgA1hcBDfh7t42NgTRLaxXjCrB48DufP3i3: captureFundsRequested,
  FAZCx2s5eq9zPV64LdHNFYbjjxD3ci1ZqyTcQk5WhXAs: childPayNoteIssued,
  FUh3TARSh4TjnWKAkM5ydjFWLWEmrFByKMBQzcgQfqRW: captureFailed,
  FzJqLm7Ek58LsVstJV2c37JfiMhRiWtjZNsiMz2ZfCYG: captureDeclined,
  GaYDPA7TTqWuoxioCYFPeyqomjH4g3YDtFxHv9yLRQ8A: payNoteCancellationRejected,
  GU8nkSnUuMs6632rHQyBndRtjDcMB9ZSbgwkGYcfGt97: reservationReleaseRequested,
  HQTUxErobqhSuhWo9DAC1WwaG9oYdjfmdKprGtV4TeEK: payNoteApproved,
} as const;
