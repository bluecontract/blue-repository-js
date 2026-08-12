import type { ZodTypeAny } from 'zod';
import { AddingParticipantRequestedSchema } from './AddingParticipantRequested';
import { AddingParticipantRespondedSchema } from './AddingParticipantResponded';
import { AgentSchema } from './Agent';
import { AllParticipantsReadySchema } from './AllParticipantsReady';
import { BootstrapFailedSchema } from './BootstrapFailed';
import { CallOperationAcceptedSchema } from './CallOperationAccepted';
import { CallOperationFailedSchema } from './CallOperationFailed';
import { CallOperationRequestedSchema } from './CallOperationRequested';
import { CallOperationRespondedSchema } from './CallOperationResponded';
import { DocumentInitialSnapshotRequestedSchema } from './DocumentInitialSnapshotRequested';
import { DocumentInitialSnapshotResolvedSchema } from './DocumentInitialSnapshotResolved';
import { DocumentInitialSnapshotUnresolvedSchema } from './DocumentInitialSnapshotUnresolved';
import { DocumentSessionBootstrapSchema } from './DocumentSessionBootstrap';
import { LLMAgentSchema } from './LLMAgent';
import { MyOSAdminActorSchema } from './MyOSAdminActor';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSAgentSchema } from './MyOSAgent';
import { MyOSAgentActorSchema } from './MyOSAgentActor';
import { MyOSAgentChannelSchema } from './MyOSAgentChannel';
import { MyOSAgentEventSchema } from './MyOSAgentEvent';
import { MyOSAgentOperationMandateSchema } from './MyOSAgentOperationMandate';
import { MyOSAgentOperationRuleSchema } from './MyOSAgentOperationRule';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
import { MyOSDocumentBootstrapMandateSchema } from './MyOSDocumentBootstrapMandate';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';
import { MyOSOperationCallRequestedSchema } from './MyOSOperationCallRequested';
import { MyOSParticipantsOrchestrationSchema } from './MyOSParticipantsOrchestration';
import { MyOSSessionInteractionSchema } from './MyOSSessionInteraction';
import { MyOSSessionSubscriptionEndedSchema } from './MyOSSessionSubscriptionEnded';
import { MyOSSessionSubscriptionFilterSchema } from './MyOSSessionSubscriptionFilter';
import { MyOSSessionSubscriptionMandateSchema } from './MyOSSessionSubscriptionMandate';
import { MyOSSessionSubscriptionRequestedSchema } from './MyOSSessionSubscriptionRequested';
import { MyOSSessionSubscriptionStartedSchema } from './MyOSSessionSubscriptionStarted';
import { MyOSSessionSubscriptionUpdateSchema } from './MyOSSessionSubscriptionUpdate';
import { MyOSTimelineSchema } from './MyOSTimeline';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { MyOSUserSchema } from './MyOSUser';
import { ParticipantSchema } from './Participant';
import { ParticipantActivatedSchema } from './ParticipantActivated';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';
import { ParticipantResolvedSchema } from './ParticipantResolved';
import { PaymentInitiatedSchema } from './PaymentInitiated';
import { PaymentInitiationAcceptedSchema } from './PaymentInitiationAccepted';
import { PaymentInitiationRejectedSchema } from './PaymentInitiationRejected';
import { PaymentInitiationRequestedSchema } from './PaymentInitiationRequested';
import { PaymentTargetPreparationFailedSchema } from './PaymentTargetPreparationFailed';
import { PaymentTargetPreparationRequestedSchema } from './PaymentTargetPreparationRequested';
import { PaymentTargetPreparedSchema } from './PaymentTargetPrepared';
import { PrincipalActorSchema } from './PrincipalActor';
import { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';
import { RemovingParticipantRespondedSchema } from './RemovingParticipantResponded';
import { SearchContractSchema } from './SearchContract';
import { SessionEpochAdvancedSchema } from './SessionEpochAdvanced';
import { SubscribeToSessionRequestedSchema } from './SubscribeToSessionRequested';
import { SubscriptionToSessionFailedSchema } from './SubscriptionToSessionFailed';
import { SubscriptionToSessionInitiatedSchema } from './SubscriptionToSessionInitiated';
import { SubscriptionToSessionRevokedSchema } from './SubscriptionToSessionRevoked';
import { SubscriptionUpdateSchema } from './SubscriptionUpdate';
import { TargetDocumentSessionStartedSchema } from './TargetDocumentSessionStarted';

export { AddingParticipantRequestedSchema } from './AddingParticipantRequested';
export { AddingParticipantRespondedSchema } from './AddingParticipantResponded';
export { AgentSchema } from './Agent';
export { AllParticipantsReadySchema } from './AllParticipantsReady';
export { BootstrapFailedSchema } from './BootstrapFailed';
export { CallOperationAcceptedSchema } from './CallOperationAccepted';
export { CallOperationFailedSchema } from './CallOperationFailed';
export { CallOperationRequestedSchema } from './CallOperationRequested';
export { CallOperationRespondedSchema } from './CallOperationResponded';
export { DocumentInitialSnapshotRequestedSchema } from './DocumentInitialSnapshotRequested';
export { DocumentInitialSnapshotResolvedSchema } from './DocumentInitialSnapshotResolved';
export { DocumentInitialSnapshotUnresolvedSchema } from './DocumentInitialSnapshotUnresolved';
export { DocumentSessionBootstrapSchema } from './DocumentSessionBootstrap';
export { LLMAgentSchema } from './LLMAgent';
export { MyOSAdminActorSchema } from './MyOSAdminActor';
export { MyOSAdminBaseSchema } from './MyOSAdminBase';
export { MyOSAgentSchema } from './MyOSAgent';
export { MyOSAgentActorSchema } from './MyOSAgentActor';
export { MyOSAgentChannelSchema } from './MyOSAgentChannel';
export { MyOSAgentEventSchema } from './MyOSAgentEvent';
export { MyOSAgentOperationMandateSchema } from './MyOSAgentOperationMandate';
export { MyOSAgentOperationRuleSchema } from './MyOSAgentOperationRule';
export { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
export { MyOSDocumentBootstrapMandateSchema } from './MyOSDocumentBootstrapMandate';
export { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';
export { MyOSOperationCallRequestedSchema } from './MyOSOperationCallRequested';
export { MyOSParticipantsOrchestrationSchema } from './MyOSParticipantsOrchestration';
export { MyOSSessionInteractionSchema } from './MyOSSessionInteraction';
export { MyOSSessionSubscriptionEndedSchema } from './MyOSSessionSubscriptionEnded';
export { MyOSSessionSubscriptionFilterSchema } from './MyOSSessionSubscriptionFilter';
export { MyOSSessionSubscriptionMandateSchema } from './MyOSSessionSubscriptionMandate';
export { MyOSSessionSubscriptionRequestedSchema } from './MyOSSessionSubscriptionRequested';
export { MyOSSessionSubscriptionStartedSchema } from './MyOSSessionSubscriptionStarted';
export { MyOSSessionSubscriptionUpdateSchema } from './MyOSSessionSubscriptionUpdate';
export { MyOSTimelineSchema } from './MyOSTimeline';
export { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
export { MyOSUserSchema } from './MyOSUser';
export { ParticipantSchema } from './Participant';
export { ParticipantActivatedSchema } from './ParticipantActivated';
export { ParticipantActivationStateSchema } from './ParticipantActivationState';
export { ParticipantResolvedSchema } from './ParticipantResolved';
export { PaymentInitiatedSchema } from './PaymentInitiated';
export { PaymentInitiationAcceptedSchema } from './PaymentInitiationAccepted';
export { PaymentInitiationRejectedSchema } from './PaymentInitiationRejected';
export { PaymentInitiationRequestedSchema } from './PaymentInitiationRequested';
export { PaymentTargetPreparationFailedSchema } from './PaymentTargetPreparationFailed';
export { PaymentTargetPreparationRequestedSchema } from './PaymentTargetPreparationRequested';
export { PaymentTargetPreparedSchema } from './PaymentTargetPrepared';
export { PrincipalActorSchema } from './PrincipalActor';
export { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';
export { RemovingParticipantRespondedSchema } from './RemovingParticipantResponded';
export { SearchContractSchema } from './SearchContract';
export { SessionEpochAdvancedSchema } from './SessionEpochAdvanced';
export { SubscribeToSessionRequestedSchema } from './SubscribeToSessionRequested';
export { SubscriptionToSessionFailedSchema } from './SubscriptionToSessionFailed';
export { SubscriptionToSessionInitiatedSchema } from './SubscriptionToSessionInitiated';
export { SubscriptionToSessionRevokedSchema } from './SubscriptionToSessionRevoked';
export { SubscriptionUpdateSchema } from './SubscriptionUpdate';
export { TargetDocumentSessionStartedSchema } from './TargetDocumentSessionStarted';

export const schemas: Record<string, ZodTypeAny> = {
  HEBuC9grhoHisjpjXHAgg2RZ494YHj4nKJWq7pQS6BxH:
    AddingParticipantRequestedSchema,
  tjcoZV6zPvpCGMFLgPM6wdgKgBvY2DW6oXhAxNAjvEX: AddingParticipantRespondedSchema,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': AgentSchema,
  BiV8zZSESjpgVqjsEXNYuzk54PUZYp69UtQhxrxK3vYC: AllParticipantsReadySchema,
  GiwuMm3gtbi79CVSUtHGZmpUnQma7EK6A17G9PRmh6jK: BootstrapFailedSchema,
  Pgk2ebYYmfu3iz2BKqw62zPvfUSLjEKvkLRYV9f38h2: CallOperationAcceptedSchema,
  BuXCotop9RSM1N15XeCm76Yow7hu8MJ193uR2S3qXo3Z: CallOperationFailedSchema,
  '5ch42xshMboo9SpPrrnAHgm7z9GogVwBDeZNQpiKiyBo': CallOperationRequestedSchema,
  '33kWg4MtTrwrHaUoYsMYWzWohKRfsiUvJYqXRPxuvj3z': CallOperationRespondedSchema,
  '8mzqf9vHdE91umxWwnGEdrPwCQ7Swb1RW2M6Ja3AFJoi':
    DocumentInitialSnapshotRequestedSchema,
  CspZcgeRB4kocozD7VC7SJaB2JLosf9vuQZQwSDXeYdC:
    DocumentInitialSnapshotResolvedSchema,
  '4S8HwNpWsPK9fXA5yVw3k6VY2XstXAd3xwVyZhDxHeuq':
    DocumentInitialSnapshotUnresolvedSchema,
  u88wJk4nH1X1vHUSMVMiFAbXMFTBwM63zBkqKx4voem: DocumentSessionBootstrapSchema,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgentSchema,
  '1ev2FjQCVqxyynB7o27PJmQo8bQmf9ECvvF2z5ekV1L': MyOSAdminActorSchema,
  EhoCY9nyytXDfs6gqMXjGmRSczXQVUPdotxm2uE8us1M: MyOSAdminBaseSchema,
  '6Fxxx58U6WKzA4WQPCLPmMMCCEb9QLFYdb8yMLZDVdXL': MyOSAgentSchema,
  C2Fyt8obT6QR8WWFCPF5G36VXZLwzaM1SLtMKKAp4pwd: MyOSAgentActorSchema,
  '2YzZXsXxQSeCKZ4Qrptrdrf9gy4Hwrfdvh8gpakpnDBL': MyOSAgentChannelSchema,
  BsNKTXtCKag31WrdujJg7PSqD4rWg9b57DqHPq14Tpn7: MyOSAgentEventSchema,
  '4gVHXg4Ab8bMvSVugpJDw5ewkbD8RZbiZriGFVVgAhGR':
    MyOSAgentOperationMandateSchema,
  '4GVCha7E7MKvusWcZ7K1K5yv8G4jdfE8eoD3nQ7FVuP8': MyOSAgentOperationRuleSchema,
  '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9': MyOSBalanceAccountSchema,
  '2cPeR9aSap7oU5jRtc8EGFnZJNGd1yyzPaEvZqgvBweJ':
    MyOSDocumentBootstrapMandateSchema,
  '3FcyLzeWjTqmYYg1Tmqu2en4SKfYbCFn8Shf3gDxo9xK':
    MyOSDocumentSessionReferenceSchema,
  '8i5HUmdgNR5LPEfyqrnMcu5DQG91zTtbaGWqDMbnjB6J':
    MyOSOperationCallRequestedSchema,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU':
    MyOSParticipantsOrchestrationSchema,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteractionSchema,
  DNCLa19AbeQGvLwDggSDbBKtUMiZ9AHbndAkXs3k4Bcg:
    MyOSSessionSubscriptionEndedSchema,
  '6fj4VDzQZwkBBPsYP4DGeSPbnHCQmX11PG3Vtk9pLRMF':
    MyOSSessionSubscriptionFilterSchema,
  BcEH2LbNNdXii9eunbyBeobQS5cHpqWgzt7uAHzy3nGf:
    MyOSSessionSubscriptionMandateSchema,
  '6t9DDsToShEmWq1bpN6VcFFDHa8AQ6pJDAQxhj4szk3p':
    MyOSSessionSubscriptionRequestedSchema,
  '21S91PEGg8mtBot7cAgpaoihdgwDavqSeF4Lc7xsFumq':
    MyOSSessionSubscriptionStartedSchema,
  '7HbYbDiXDXFvmhVZQzMmJygV59L5JseQ5Cg7w3eTCBFR':
    MyOSSessionSubscriptionUpdateSchema,
  '5VAQp5thYLkzp3FbvYGmVvmdLqqu6pV5vhNgD14XJwpX': MyOSTimelineSchema,
  '8dZK68CdFFjRKFf7dX9QDc55WUESNyeBsUSTF8tq8cki': MyOSTimelineChannelSchema,
  Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN: MyOSUserSchema,
  BDWxt7xTGsK2mZKinCxD4hENHUUfEtupZPtaYzwLmKJm: ParticipantSchema,
  AegvYi855FTYVE4WJ5pbUaF3LzNFsM71cpkwVbQ6yQYA: ParticipantActivatedSchema,
  ASa82RtPSXwdys7M5Xs5s3brTjYgJmQqJt2uyraQGrNA:
    ParticipantActivationStateSchema,
  '3cujh2pNfS1bvc1L5eWhLaaeBepXjByWZ75XF5erArKU': ParticipantResolvedSchema,
  BXUSED76pd6jBpdsgDwu1VRhAC9nTUXWc1GNsTH34muM: PaymentInitiatedSchema,
  '6z3QXWVP18NgmJuPuhLY7qYMZn1RdABuEMPJ9qWqwMdr':
    PaymentInitiationAcceptedSchema,
  '322SrnPM6fG8m2Rf2Erv7PV8uwt6VhmHHzfoUhn1XsAe':
    PaymentInitiationRejectedSchema,
  GKmknNqLyQJcYy3omn9kYVs5eYYDECTWJMWabYx1EkTm:
    PaymentInitiationRequestedSchema,
  '4HE4xsY2dhPk8bqWmtN9BYt4ygT9SNqxytNwBSMqcPYt':
    PaymentTargetPreparationFailedSchema,
  '2WpHsa3QF9eZttnm7jb3k7t3CEbz7iJKYjCMS7h4Ps7Z':
    PaymentTargetPreparationRequestedSchema,
  '7YXuPuRXd5GWBiPUWqohtpCrtHf8UHuQESGspC4xZcCe': PaymentTargetPreparedSchema,
  CtsH9hhbLAYcQYv5jYnNhaviKxkEdrwAg8b4KoxEU5Lw: PrincipalActorSchema,
  BcSFAt3ZtG3CdpNzKUKBodvz9cux8kwtbNNNPrrhYSja:
    RemovingParticipantRequestedSchema,
  '9RMo7whDiDzk2S1uJHCvyoWysg8iSTGgnTM1DT5bNzsH':
    RemovingParticipantRespondedSchema,
  DcMLEejNRRoP2vSHW66fdCnCRgnpt2y1f35rFfYk5koj: SearchContractSchema,
  '7WJnGdq3txEhXb6P2vXLAMUhPBCWQzHsz416cDfKGcUm': SessionEpochAdvancedSchema,
  GjCreNEXcoBSwyXnWtXbtDMJdtm9nKo8MJeVpn3633WC:
    SubscribeToSessionRequestedSchema,
  DrvBTSmmdE7QmmuNJTDxAqdEpgs5zHZy4RVEitWSF9ow:
    SubscriptionToSessionFailedSchema,
  '2BZP7zM9d8smzypNvs83o1iSe6AVNgh6kxrXuXboJGqM':
    SubscriptionToSessionInitiatedSchema,
  AoNPGfTStLU8tBWb49HfXPAqXaLSzUKUsJwJkV9Yp3N9:
    SubscriptionToSessionRevokedSchema,
  '8afv356wxUZxou95jDEYEgp5dL6VmnpFmYUjx3aDuFXi': SubscriptionUpdateSchema,
  J9a8qD8javfYK6nRDq9YZRA8LDuzZzq7QS7DB73Pm4Lv:
    TargetDocumentSessionStartedSchema,
};
