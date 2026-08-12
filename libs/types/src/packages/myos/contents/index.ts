import { MyOSAdminActor } from './MyOSAdminActor';
import { MyOSSessionSubscriptionStarted } from './MyOSSessionSubscriptionStarted';
import { SubscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
import { MyOSDocumentBootstrapMandate } from './MyOSDocumentBootstrapMandate';
import { PaymentTargetPreparationRequested } from './PaymentTargetPreparationRequested';
import { MyOSAgentChannel } from './MyOSAgentChannel';
import { PaymentInitiationRejected } from './PaymentInitiationRejected';
import { CallOperationResponded } from './CallOperationResponded';
import { ParticipantResolved } from './ParticipantResolved';
import { MyOSDocumentSessionReference } from './MyOSDocumentSessionReference';
import { MyOSAgentOperationRule } from './MyOSAgentOperationRule';
import { MyOSAgentOperationMandate } from './MyOSAgentOperationMandate';
import { PaymentTargetPreparationFailed } from './PaymentTargetPreparationFailed';
import { DocumentInitialSnapshotUnresolved } from './DocumentInitialSnapshotUnresolved';
import { CallOperationRequested } from './CallOperationRequested';
import { MyOSTimeline } from './MyOSTimeline';
import { MyOSSessionSubscriptionFilter } from './MyOSSessionSubscriptionFilter';
import { MyOSAgent } from './MyOSAgent';
import { MyOSSessionSubscriptionRequested } from './MyOSSessionSubscriptionRequested';
import { MyOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
import { PaymentInitiationAccepted } from './PaymentInitiationAccepted';
import { MyOSSessionSubscriptionUpdate } from './MyOSSessionSubscriptionUpdate';
import { SessionEpochAdvanced } from './SessionEpochAdvanced';
import { PaymentTargetPrepared } from './PaymentTargetPrepared';
import { SubscriptionUpdate } from './SubscriptionUpdate';
import { MyOSTimelineChannel } from './MyOSTimelineChannel';
import { MyOSOperationCallRequested } from './MyOSOperationCallRequested';
import { DocumentInitialSnapshotRequested } from './DocumentInitialSnapshotRequested';
import { Agent } from './Agent';
import { MyOSBalanceAccount } from './MyOSBalanceAccount';
import { RemovingParticipantResponded } from './RemovingParticipantResponded';
import { ParticipantActivated } from './ParticipantActivated';
import { SubscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
import { ParticipantActivationState } from './ParticipantActivationState';
import { MyOSSessionSubscriptionMandate } from './MyOSSessionSubscriptionMandate';
import { RemovingParticipantRequested } from './RemovingParticipantRequested';
import { Participant } from './Participant';
import { AllParticipantsReady } from './AllParticipantsReady';
import { MyOSAgentEvent } from './MyOSAgentEvent';
import { CallOperationFailed } from './CallOperationFailed';
import { PaymentInitiated } from './PaymentInitiated';
import { MyOSAgentActor } from './MyOSAgentActor';
import { MyOSSessionInteraction } from './MyOSSessionInteraction';
import { DocumentInitialSnapshotResolved } from './DocumentInitialSnapshotResolved';
import { PrincipalActor } from './PrincipalActor';
import { MyOSUser } from './MyOSUser';
import { SearchContract } from './SearchContract';
import { LLMAgent } from './LLMAgent';
import { MyOSSessionSubscriptionEnded } from './MyOSSessionSubscriptionEnded';
import { SubscriptionToSessionFailed } from './SubscriptionToSessionFailed';
import { MyOSAdminBase } from './MyOSAdminBase';
import { BootstrapFailed } from './BootstrapFailed';
import { SubscribeToSessionRequested } from './SubscribeToSessionRequested';
import { PaymentInitiationRequested } from './PaymentInitiationRequested';
import { AddingParticipantRequested } from './AddingParticipantRequested';
import { TargetDocumentSessionStarted } from './TargetDocumentSessionStarted';
import { CallOperationAccepted } from './CallOperationAccepted';
import { AddingParticipantResponded } from './AddingParticipantResponded';
import { DocumentSessionBootstrap } from './DocumentSessionBootstrap';

export { MyOSAdminActor } from './MyOSAdminActor';
export { MyOSSessionSubscriptionStarted } from './MyOSSessionSubscriptionStarted';
export { SubscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
export { MyOSDocumentBootstrapMandate } from './MyOSDocumentBootstrapMandate';
export { PaymentTargetPreparationRequested } from './PaymentTargetPreparationRequested';
export { MyOSAgentChannel } from './MyOSAgentChannel';
export { PaymentInitiationRejected } from './PaymentInitiationRejected';
export { CallOperationResponded } from './CallOperationResponded';
export { ParticipantResolved } from './ParticipantResolved';
export { MyOSDocumentSessionReference } from './MyOSDocumentSessionReference';
export { MyOSAgentOperationRule } from './MyOSAgentOperationRule';
export { MyOSAgentOperationMandate } from './MyOSAgentOperationMandate';
export { PaymentTargetPreparationFailed } from './PaymentTargetPreparationFailed';
export { DocumentInitialSnapshotUnresolved } from './DocumentInitialSnapshotUnresolved';
export { CallOperationRequested } from './CallOperationRequested';
export { MyOSTimeline } from './MyOSTimeline';
export { MyOSSessionSubscriptionFilter } from './MyOSSessionSubscriptionFilter';
export { MyOSAgent } from './MyOSAgent';
export { MyOSSessionSubscriptionRequested } from './MyOSSessionSubscriptionRequested';
export { MyOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
export { PaymentInitiationAccepted } from './PaymentInitiationAccepted';
export { MyOSSessionSubscriptionUpdate } from './MyOSSessionSubscriptionUpdate';
export { SessionEpochAdvanced } from './SessionEpochAdvanced';
export { PaymentTargetPrepared } from './PaymentTargetPrepared';
export { SubscriptionUpdate } from './SubscriptionUpdate';
export { MyOSTimelineChannel } from './MyOSTimelineChannel';
export { MyOSOperationCallRequested } from './MyOSOperationCallRequested';
export { DocumentInitialSnapshotRequested } from './DocumentInitialSnapshotRequested';
export { Agent } from './Agent';
export { MyOSBalanceAccount } from './MyOSBalanceAccount';
export { RemovingParticipantResponded } from './RemovingParticipantResponded';
export { ParticipantActivated } from './ParticipantActivated';
export { SubscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
export { ParticipantActivationState } from './ParticipantActivationState';
export { MyOSSessionSubscriptionMandate } from './MyOSSessionSubscriptionMandate';
export { RemovingParticipantRequested } from './RemovingParticipantRequested';
export { Participant } from './Participant';
export { AllParticipantsReady } from './AllParticipantsReady';
export { MyOSAgentEvent } from './MyOSAgentEvent';
export { CallOperationFailed } from './CallOperationFailed';
export { PaymentInitiated } from './PaymentInitiated';
export { MyOSAgentActor } from './MyOSAgentActor';
export { MyOSSessionInteraction } from './MyOSSessionInteraction';
export { DocumentInitialSnapshotResolved } from './DocumentInitialSnapshotResolved';
export { PrincipalActor } from './PrincipalActor';
export { MyOSUser } from './MyOSUser';
export { SearchContract } from './SearchContract';
export { LLMAgent } from './LLMAgent';
export { MyOSSessionSubscriptionEnded } from './MyOSSessionSubscriptionEnded';
export { SubscriptionToSessionFailed } from './SubscriptionToSessionFailed';
export { MyOSAdminBase } from './MyOSAdminBase';
export { BootstrapFailed } from './BootstrapFailed';
export { SubscribeToSessionRequested } from './SubscribeToSessionRequested';
export { PaymentInitiationRequested } from './PaymentInitiationRequested';
export { AddingParticipantRequested } from './AddingParticipantRequested';
export { TargetDocumentSessionStarted } from './TargetDocumentSessionStarted';
export { CallOperationAccepted } from './CallOperationAccepted';
export { AddingParticipantResponded } from './AddingParticipantResponded';
export { DocumentSessionBootstrap } from './DocumentSessionBootstrap';

export const contents: Record<string, unknown> = {
  '1ev2FjQCVqxyynB7o27PJmQo8bQmf9ECvvF2z5ekV1L': MyOSAdminActor,
  '21S91PEGg8mtBot7cAgpaoihdgwDavqSeF4Lc7xsFumq':
    MyOSSessionSubscriptionStarted,
  '2BZP7zM9d8smzypNvs83o1iSe6AVNgh6kxrXuXboJGqM':
    SubscriptionToSessionInitiated,
  '2cPeR9aSap7oU5jRtc8EGFnZJNGd1yyzPaEvZqgvBweJ': MyOSDocumentBootstrapMandate,
  '2WpHsa3QF9eZttnm7jb3k7t3CEbz7iJKYjCMS7h4Ps7Z':
    PaymentTargetPreparationRequested,
  '2YzZXsXxQSeCKZ4Qrptrdrf9gy4Hwrfdvh8gpakpnDBL': MyOSAgentChannel,
  '322SrnPM6fG8m2Rf2Erv7PV8uwt6VhmHHzfoUhn1XsAe': PaymentInitiationRejected,
  '33kWg4MtTrwrHaUoYsMYWzWohKRfsiUvJYqXRPxuvj3z': CallOperationResponded,
  '3cujh2pNfS1bvc1L5eWhLaaeBepXjByWZ75XF5erArKU': ParticipantResolved,
  '3FcyLzeWjTqmYYg1Tmqu2en4SKfYbCFn8Shf3gDxo9xK': MyOSDocumentSessionReference,
  '4GVCha7E7MKvusWcZ7K1K5yv8G4jdfE8eoD3nQ7FVuP8': MyOSAgentOperationRule,
  '4gVHXg4Ab8bMvSVugpJDw5ewkbD8RZbiZriGFVVgAhGR': MyOSAgentOperationMandate,
  '4HE4xsY2dhPk8bqWmtN9BYt4ygT9SNqxytNwBSMqcPYt':
    PaymentTargetPreparationFailed,
  '4S8HwNpWsPK9fXA5yVw3k6VY2XstXAd3xwVyZhDxHeuq':
    DocumentInitialSnapshotUnresolved,
  '5ch42xshMboo9SpPrrnAHgm7z9GogVwBDeZNQpiKiyBo': CallOperationRequested,
  '5VAQp5thYLkzp3FbvYGmVvmdLqqu6pV5vhNgD14XJwpX': MyOSTimeline,
  '6fj4VDzQZwkBBPsYP4DGeSPbnHCQmX11PG3Vtk9pLRMF': MyOSSessionSubscriptionFilter,
  '6Fxxx58U6WKzA4WQPCLPmMMCCEb9QLFYdb8yMLZDVdXL': MyOSAgent,
  '6t9DDsToShEmWq1bpN6VcFFDHa8AQ6pJDAQxhj4szk3p':
    MyOSSessionSubscriptionRequested,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU': MyOSParticipantsOrchestration,
  '6z3QXWVP18NgmJuPuhLY7qYMZn1RdABuEMPJ9qWqwMdr': PaymentInitiationAccepted,
  '7HbYbDiXDXFvmhVZQzMmJygV59L5JseQ5Cg7w3eTCBFR': MyOSSessionSubscriptionUpdate,
  '7WJnGdq3txEhXb6P2vXLAMUhPBCWQzHsz416cDfKGcUm': SessionEpochAdvanced,
  '7YXuPuRXd5GWBiPUWqohtpCrtHf8UHuQESGspC4xZcCe': PaymentTargetPrepared,
  '8afv356wxUZxou95jDEYEgp5dL6VmnpFmYUjx3aDuFXi': SubscriptionUpdate,
  '8dZK68CdFFjRKFf7dX9QDc55WUESNyeBsUSTF8tq8cki': MyOSTimelineChannel,
  '8i5HUmdgNR5LPEfyqrnMcu5DQG91zTtbaGWqDMbnjB6J': MyOSOperationCallRequested,
  '8mzqf9vHdE91umxWwnGEdrPwCQ7Swb1RW2M6Ja3AFJoi':
    DocumentInitialSnapshotRequested,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': Agent,
  '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9': MyOSBalanceAccount,
  '9RMo7whDiDzk2S1uJHCvyoWysg8iSTGgnTM1DT5bNzsH': RemovingParticipantResponded,
  AegvYi855FTYVE4WJ5pbUaF3LzNFsM71cpkwVbQ6yQYA: ParticipantActivated,
  AoNPGfTStLU8tBWb49HfXPAqXaLSzUKUsJwJkV9Yp3N9: SubscriptionToSessionRevoked,
  ASa82RtPSXwdys7M5Xs5s3brTjYgJmQqJt2uyraQGrNA: ParticipantActivationState,
  BcEH2LbNNdXii9eunbyBeobQS5cHpqWgzt7uAHzy3nGf: MyOSSessionSubscriptionMandate,
  BcSFAt3ZtG3CdpNzKUKBodvz9cux8kwtbNNNPrrhYSja: RemovingParticipantRequested,
  BDWxt7xTGsK2mZKinCxD4hENHUUfEtupZPtaYzwLmKJm: Participant,
  BiV8zZSESjpgVqjsEXNYuzk54PUZYp69UtQhxrxK3vYC: AllParticipantsReady,
  BsNKTXtCKag31WrdujJg7PSqD4rWg9b57DqHPq14Tpn7: MyOSAgentEvent,
  BuXCotop9RSM1N15XeCm76Yow7hu8MJ193uR2S3qXo3Z: CallOperationFailed,
  BXUSED76pd6jBpdsgDwu1VRhAC9nTUXWc1GNsTH34muM: PaymentInitiated,
  C2Fyt8obT6QR8WWFCPF5G36VXZLwzaM1SLtMKKAp4pwd: MyOSAgentActor,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteraction,
  CspZcgeRB4kocozD7VC7SJaB2JLosf9vuQZQwSDXeYdC: DocumentInitialSnapshotResolved,
  CtsH9hhbLAYcQYv5jYnNhaviKxkEdrwAg8b4KoxEU5Lw: PrincipalActor,
  Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN: MyOSUser,
  DcMLEejNRRoP2vSHW66fdCnCRgnpt2y1f35rFfYk5koj: SearchContract,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgent,
  DNCLa19AbeQGvLwDggSDbBKtUMiZ9AHbndAkXs3k4Bcg: MyOSSessionSubscriptionEnded,
  DrvBTSmmdE7QmmuNJTDxAqdEpgs5zHZy4RVEitWSF9ow: SubscriptionToSessionFailed,
  EhoCY9nyytXDfs6gqMXjGmRSczXQVUPdotxm2uE8us1M: MyOSAdminBase,
  GiwuMm3gtbi79CVSUtHGZmpUnQma7EK6A17G9PRmh6jK: BootstrapFailed,
  GjCreNEXcoBSwyXnWtXbtDMJdtm9nKo8MJeVpn3633WC: SubscribeToSessionRequested,
  GKmknNqLyQJcYy3omn9kYVs5eYYDECTWJMWabYx1EkTm: PaymentInitiationRequested,
  HEBuC9grhoHisjpjXHAgg2RZ494YHj4nKJWq7pQS6BxH: AddingParticipantRequested,
  J9a8qD8javfYK6nRDq9YZRA8LDuzZzq7QS7DB73Pm4Lv: TargetDocumentSessionStarted,
  Pgk2ebYYmfu3iz2BKqw62zPvfUSLjEKvkLRYV9f38h2: CallOperationAccepted,
  tjcoZV6zPvpCGMFLgPM6wdgKgBvY2DW6oXhAxNAjvEX: AddingParticipantResponded,
  u88wJk4nH1X1vHUSMVMiFAbXMFTBwM63zBkqKx4voem: DocumentSessionBootstrap,
};
