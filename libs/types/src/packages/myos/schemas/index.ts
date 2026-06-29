import type { ZodTypeAny } from 'zod';
import { AddingParticipantRequestedSchema } from './AddingParticipantRequested';
import { AddingParticipantRespondedSchema } from './AddingParticipantResponded';
import { AgentSchema } from './Agent';
import { AgentActorSchema } from './AgentActor';
import { AllParticipantsReadySchema } from './AllParticipantsReady';
import { AnchorAutomationTemplateSchema } from './AnchorAutomationTemplate';
import { BootstrapFailedSchema } from './BootstrapFailed';
import { CallOperationAcceptedSchema } from './CallOperationAccepted';
import { CallOperationFailedSchema } from './CallOperationFailed';
import { CallOperationRequestedSchema } from './CallOperationRequested';
import { CallOperationRespondedSchema } from './CallOperationResponded';
import { DocumentAnchorSchema } from './DocumentAnchor';
import { DocumentAnchorsSchema } from './DocumentAnchors';
import { DocumentInitialSnapshotRequestedSchema } from './DocumentInitialSnapshotRequested';
import { DocumentInitialSnapshotResolvedSchema } from './DocumentInitialSnapshotResolved';
import { DocumentInitialSnapshotUnresolvedSchema } from './DocumentInitialSnapshotUnresolved';
import { DocumentLinkSchema } from './DocumentLink';
import { DocumentLinksSchema } from './DocumentLinks';
import { DocumentSessionBootstrapSchema } from './DocumentSessionBootstrap';
import { DocumentTypeLinkSchema } from './DocumentTypeLink';
import { InformUserToInstallMyOSPackageSchema } from './InformUserToInstallMyOSPackage';
import { LinkSchema } from './Link';
import { LinkedDocumentsPermissionGrantRequestedSchema } from './LinkedDocumentsPermissionGrantRequested';
import { LinkedDocumentsPermissionGrantToAccountSchema } from './LinkedDocumentsPermissionGrantToAccount';
import { LinkedDocumentsPermissionGrantToDocumentSchema } from './LinkedDocumentsPermissionGrantToDocument';
import { LinkedDocumentsPermissionGrantedSchema } from './LinkedDocumentsPermissionGranted';
import { LinkedDocumentsPermissionGrantingInProgressSchema } from './LinkedDocumentsPermissionGrantingInProgress';
import { LinkedDocumentsPermissionInvalidSchema } from './LinkedDocumentsPermissionInvalid';
import { LinkedDocumentsPermissionRejectedSchema } from './LinkedDocumentsPermissionRejected';
import { LinkedDocumentsPermissionRevokeRequestedSchema } from './LinkedDocumentsPermissionRevokeRequested';
import { LinkedDocumentsPermissionRevokedSchema } from './LinkedDocumentsPermissionRevoked';
import { LinkedDocumentsPermissionRevokingInProgressSchema } from './LinkedDocumentsPermissionRevokingInProgress';
import { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';
import { LinkedDocumentsPermissionValidatedSchema } from './LinkedDocumentsPermissionValidated';
import { LLMAgentSchema } from './LLMAgent';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSAgentSchema } from './MyOSAgent';
import { MyOSAgentActorSchema } from './MyOSAgentActor';
import { MyOSAgentChannelSchema } from './MyOSAgentChannel';
import { MyOSAgentEventSchema } from './MyOSAgentEvent';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';
import { MyOSPackageSchema } from './MyOSPackage';
import { MyOSParticipantsOrchestrationSchema } from './MyOSParticipantsOrchestration';
import { MyOSPrincipalActorSchema } from './MyOSPrincipalActor';
import { MyOSSessionInteractionSchema } from './MyOSSessionInteraction';
import { MyOSSessionLinkSchema } from './MyOSSessionLink';
import { MyOSTimelineSchema } from './MyOSTimeline';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import { MyOSTimelineEntrySchema } from './MyOSTimelineEntry';
import { MyOSUserSchema } from './MyOSUser';
import { MyOSWorkerAgencySchema } from './MyOSWorkerAgency';
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
import { SingleDocumentPermissionGrantRequestedSchema } from './SingleDocumentPermissionGrantRequested';
import { SingleDocumentPermissionGrantRespondedSchema } from './SingleDocumentPermissionGrantResponded';
import { SingleDocumentPermissionGrantToAccountSchema } from './SingleDocumentPermissionGrantToAccount';
import { SingleDocumentPermissionGrantToDocumentSchema } from './SingleDocumentPermissionGrantToDocument';
import { SingleDocumentPermissionGrantedSchema } from './SingleDocumentPermissionGranted';
import { SingleDocumentPermissionGrantingInProgressSchema } from './SingleDocumentPermissionGrantingInProgress';
import { SingleDocumentPermissionInvalidSchema } from './SingleDocumentPermissionInvalid';
import { SingleDocumentPermissionRejectedSchema } from './SingleDocumentPermissionRejected';
import { SingleDocumentPermissionRevokeRequestedSchema } from './SingleDocumentPermissionRevokeRequested';
import { SingleDocumentPermissionRevokedSchema } from './SingleDocumentPermissionRevoked';
import { SingleDocumentPermissionRevokingInProgressSchema } from './SingleDocumentPermissionRevokingInProgress';
import { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';
import { SingleDocumentPermissionValidatedSchema } from './SingleDocumentPermissionValidated';
import { StartWorkerSessionRequestedSchema } from './StartWorkerSessionRequested';
import { SubscribeToSessionRequestedSchema } from './SubscribeToSessionRequested';
import { SubscriptionToSessionFailedSchema } from './SubscriptionToSessionFailed';
import { SubscriptionToSessionInitiatedSchema } from './SubscriptionToSessionInitiated';
import { SubscriptionToSessionRevokedSchema } from './SubscriptionToSessionRevoked';
import { SubscriptionUpdateSchema } from './SubscriptionUpdate';
import { TargetDocumentSessionStartedSchema } from './TargetDocumentSessionStarted';
import { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';
import { WorkerAgencyPermissionGrantSchema } from './WorkerAgencyPermissionGrant';
import { WorkerAgencyPermissionGrantRequestedSchema } from './WorkerAgencyPermissionGrantRequested';
import { WorkerAgencyPermissionGrantedSchema } from './WorkerAgencyPermissionGranted';
import { WorkerAgencyPermissionGrantingInProgressSchema } from './WorkerAgencyPermissionGrantingInProgress';
import { WorkerAgencyPermissionInvalidSchema } from './WorkerAgencyPermissionInvalid';
import { WorkerAgencyPermissionRejectedSchema } from './WorkerAgencyPermissionRejected';
import { WorkerAgencyPermissionRevokeRequestedSchema } from './WorkerAgencyPermissionRevokeRequested';
import { WorkerAgencyPermissionRevokedSchema } from './WorkerAgencyPermissionRevoked';
import { WorkerAgencyPermissionRevokingInProgressSchema } from './WorkerAgencyPermissionRevokingInProgress';
import { WorkerAgencyPermissionValidatedSchema } from './WorkerAgencyPermissionValidated';
import { WorkerSessionStartingSchema } from './WorkerSessionStarting';

export { AddingParticipantRequestedSchema } from './AddingParticipantRequested';
export { AddingParticipantRespondedSchema } from './AddingParticipantResponded';
export { AgentSchema } from './Agent';
export { AgentActorSchema } from './AgentActor';
export { AllParticipantsReadySchema } from './AllParticipantsReady';
export { AnchorAutomationTemplateSchema } from './AnchorAutomationTemplate';
export { BootstrapFailedSchema } from './BootstrapFailed';
export { CallOperationAcceptedSchema } from './CallOperationAccepted';
export { CallOperationFailedSchema } from './CallOperationFailed';
export { CallOperationRequestedSchema } from './CallOperationRequested';
export { CallOperationRespondedSchema } from './CallOperationResponded';
export { DocumentAnchorSchema } from './DocumentAnchor';
export { DocumentAnchorsSchema } from './DocumentAnchors';
export { DocumentInitialSnapshotRequestedSchema } from './DocumentInitialSnapshotRequested';
export { DocumentInitialSnapshotResolvedSchema } from './DocumentInitialSnapshotResolved';
export { DocumentInitialSnapshotUnresolvedSchema } from './DocumentInitialSnapshotUnresolved';
export { DocumentLinkSchema } from './DocumentLink';
export { DocumentLinksSchema } from './DocumentLinks';
export { DocumentSessionBootstrapSchema } from './DocumentSessionBootstrap';
export { DocumentTypeLinkSchema } from './DocumentTypeLink';
export { InformUserToInstallMyOSPackageSchema } from './InformUserToInstallMyOSPackage';
export { LinkSchema } from './Link';
export { LinkedDocumentsPermissionGrantRequestedSchema } from './LinkedDocumentsPermissionGrantRequested';
export { LinkedDocumentsPermissionGrantToAccountSchema } from './LinkedDocumentsPermissionGrantToAccount';
export { LinkedDocumentsPermissionGrantToDocumentSchema } from './LinkedDocumentsPermissionGrantToDocument';
export { LinkedDocumentsPermissionGrantedSchema } from './LinkedDocumentsPermissionGranted';
export { LinkedDocumentsPermissionGrantingInProgressSchema } from './LinkedDocumentsPermissionGrantingInProgress';
export { LinkedDocumentsPermissionInvalidSchema } from './LinkedDocumentsPermissionInvalid';
export { LinkedDocumentsPermissionRejectedSchema } from './LinkedDocumentsPermissionRejected';
export { LinkedDocumentsPermissionRevokeRequestedSchema } from './LinkedDocumentsPermissionRevokeRequested';
export { LinkedDocumentsPermissionRevokedSchema } from './LinkedDocumentsPermissionRevoked';
export { LinkedDocumentsPermissionRevokingInProgressSchema } from './LinkedDocumentsPermissionRevokingInProgress';
export { LinkedDocumentsPermissionSetSchema } from './LinkedDocumentsPermissionSet';
export { LinkedDocumentsPermissionValidatedSchema } from './LinkedDocumentsPermissionValidated';
export { LLMAgentSchema } from './LLMAgent';
export { MyOSAdminBaseSchema } from './MyOSAdminBase';
export { MyOSAgentSchema } from './MyOSAgent';
export { MyOSAgentActorSchema } from './MyOSAgentActor';
export { MyOSAgentChannelSchema } from './MyOSAgentChannel';
export { MyOSAgentEventSchema } from './MyOSAgentEvent';
export { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
export { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';
export { MyOSPackageSchema } from './MyOSPackage';
export { MyOSParticipantsOrchestrationSchema } from './MyOSParticipantsOrchestration';
export { MyOSPrincipalActorSchema } from './MyOSPrincipalActor';
export { MyOSSessionInteractionSchema } from './MyOSSessionInteraction';
export { MyOSSessionLinkSchema } from './MyOSSessionLink';
export { MyOSTimelineSchema } from './MyOSTimeline';
export { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
export { MyOSTimelineEntrySchema } from './MyOSTimelineEntry';
export { MyOSUserSchema } from './MyOSUser';
export { MyOSWorkerAgencySchema } from './MyOSWorkerAgency';
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
export { SingleDocumentPermissionGrantRequestedSchema } from './SingleDocumentPermissionGrantRequested';
export { SingleDocumentPermissionGrantRespondedSchema } from './SingleDocumentPermissionGrantResponded';
export { SingleDocumentPermissionGrantToAccountSchema } from './SingleDocumentPermissionGrantToAccount';
export { SingleDocumentPermissionGrantToDocumentSchema } from './SingleDocumentPermissionGrantToDocument';
export { SingleDocumentPermissionGrantedSchema } from './SingleDocumentPermissionGranted';
export { SingleDocumentPermissionGrantingInProgressSchema } from './SingleDocumentPermissionGrantingInProgress';
export { SingleDocumentPermissionInvalidSchema } from './SingleDocumentPermissionInvalid';
export { SingleDocumentPermissionRejectedSchema } from './SingleDocumentPermissionRejected';
export { SingleDocumentPermissionRevokeRequestedSchema } from './SingleDocumentPermissionRevokeRequested';
export { SingleDocumentPermissionRevokedSchema } from './SingleDocumentPermissionRevoked';
export { SingleDocumentPermissionRevokingInProgressSchema } from './SingleDocumentPermissionRevokingInProgress';
export { SingleDocumentPermissionSetSchema } from './SingleDocumentPermissionSet';
export { SingleDocumentPermissionValidatedSchema } from './SingleDocumentPermissionValidated';
export { StartWorkerSessionRequestedSchema } from './StartWorkerSessionRequested';
export { SubscribeToSessionRequestedSchema } from './SubscribeToSessionRequested';
export { SubscriptionToSessionFailedSchema } from './SubscriptionToSessionFailed';
export { SubscriptionToSessionInitiatedSchema } from './SubscriptionToSessionInitiated';
export { SubscriptionToSessionRevokedSchema } from './SubscriptionToSessionRevoked';
export { SubscriptionUpdateSchema } from './SubscriptionUpdate';
export { TargetDocumentSessionStartedSchema } from './TargetDocumentSessionStarted';
export { WorkerAgencyPermissionSchema } from './WorkerAgencyPermission';
export { WorkerAgencyPermissionGrantSchema } from './WorkerAgencyPermissionGrant';
export { WorkerAgencyPermissionGrantRequestedSchema } from './WorkerAgencyPermissionGrantRequested';
export { WorkerAgencyPermissionGrantedSchema } from './WorkerAgencyPermissionGranted';
export { WorkerAgencyPermissionGrantingInProgressSchema } from './WorkerAgencyPermissionGrantingInProgress';
export { WorkerAgencyPermissionInvalidSchema } from './WorkerAgencyPermissionInvalid';
export { WorkerAgencyPermissionRejectedSchema } from './WorkerAgencyPermissionRejected';
export { WorkerAgencyPermissionRevokeRequestedSchema } from './WorkerAgencyPermissionRevokeRequested';
export { WorkerAgencyPermissionRevokedSchema } from './WorkerAgencyPermissionRevoked';
export { WorkerAgencyPermissionRevokingInProgressSchema } from './WorkerAgencyPermissionRevokingInProgress';
export { WorkerAgencyPermissionValidatedSchema } from './WorkerAgencyPermissionValidated';
export { WorkerSessionStartingSchema } from './WorkerSessionStarting';

export const schemas: Record<string, ZodTypeAny> = {
  BmERQxQSUDw8vTBAR32U9XBcFGjdVfUfpfUhCm1xsxVV:
    AddingParticipantRequestedSchema,
  '8FUHrY9AzHbSvEMMPQn1H1ckFS94eL4LucpY5wXXCex2':
    AddingParticipantRespondedSchema,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': AgentSchema,
  '6HbWNKhkmhQMDxVww1mvQpvSy33G7anaeWPUohj3g1bC': AgentActorSchema,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: AllParticipantsReadySchema,
  '8eyv5ogjHbTqUeaJKWHMenLs3MaCnpGSQkbPrCqvk2Ga':
    AnchorAutomationTemplateSchema,
  FaZorE1FNvj9ar6rxL8jHRNYQ6WYo4hERoE35v7A5DnL: BootstrapFailedSchema,
  '9LGSHaRb9LsRx9DxMzj4LmSSWuUYQXNHEXupK4PJn2VR': CallOperationAcceptedSchema,
  '9PH8Hi8uwuUXerpg4FY2cYUeytYuAnuU1SLT2KQsnuU8': CallOperationFailedSchema,
  E4E5omD4zCzisFfJdF4iXrfe3RDAdNW4Kc5Fr5EQN4iV: CallOperationRequestedSchema,
  Cm4GjXHCv2s4zEhfqd15xTX2PwvAYSBzvYFkqaxfGfyF: CallOperationRespondedSchema,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: DocumentAnchorSchema,
  '6LzxLRpgV6a2HEZ98LXXF55BsfsTE8ChXghCZGBSJYSF': DocumentAnchorsSchema,
  '7A9voN4Bu8X7XhsvMT8ToP9Zdxj9Mnrp8MnfWfZCEwsq':
    DocumentInitialSnapshotRequestedSchema,
  '9gkE6ybqoLeFGySKvhWmAM9K6ARCWEeBoyEDY6jw8X3U':
    DocumentInitialSnapshotResolvedSchema,
  Bf61oBnvwND8vaGaNRPUN5jTahmej3G5NqBujgrttBgS:
    DocumentInitialSnapshotUnresolvedSchema,
  CfdjCV1cjPJCd5sBHLMzNUx3EtkgrmBekLxB5c9Qw1Qh: DocumentLinkSchema,
  HrFwCVPZz2sNinVETY4mk2sLLziGQWejTU2eWjxcUuuX: DocumentLinksSchema,
  AXm2gfBJnCdfyMsHuLKSZGJXDuZSPct9uZrU44Pxfuh1: DocumentSessionBootstrapSchema,
  '5z86Uk79T94VasXdy6RSWjZqVUmiEfwGVWrkGc9ZooLm': DocumentTypeLinkSchema,
  B7HmEAQxcEvr6CPyXwPZGLVGYcddcaajrDKgt5eEubQa:
    InformUserToInstallMyOSPackageSchema,
  '6EvULvymCkDo8S9SjWgvzB24sbqZotJo5opNqH7dNThP': LinkSchema,
  '7MTCgNo4iWnxoVhqJytiApkZYmrDPRZWUeCBPtfhZJma':
    LinkedDocumentsPermissionGrantRequestedSchema,
  EjXvZmBzbpZeTnVzA7fkTqpi35ExPQoELBz3ws84DJAx:
    LinkedDocumentsPermissionGrantToAccountSchema,
  '74ATu9uWcuAAUjMQJ6VHWApVa4WuyqRwpBNm47VhKKWi':
    LinkedDocumentsPermissionGrantToDocumentSchema,
  '3BWjDhnmpr8KeWsbW2wQhMZbHpznEGGqtiWWncGD3g9C':
    LinkedDocumentsPermissionGrantedSchema,
  '68GzR4FMz8CpGnNA8hKsdjBmbachEn59NPGAjt16LUfe':
    LinkedDocumentsPermissionGrantingInProgressSchema,
  Cm9gL7QQ4CDhi18VKg5PfK11Xy6CLVJawoa88BTTy9ZU:
    LinkedDocumentsPermissionInvalidSchema,
  BfjJ2xceqvneBqEHLGS5bMXiYeaQgbRbgRzBfYR4KZAJ:
    LinkedDocumentsPermissionRejectedSchema,
  BKyVzxDr2rJp7weHvuzyrgSJ42ATwN3SizPchqu7QMVc:
    LinkedDocumentsPermissionRevokeRequestedSchema,
  '41sbnfmpH1CZV21HwtNZtJiDw7ojLX1Fnkw6rpR1yw3a':
    LinkedDocumentsPermissionRevokedSchema,
  D5W2KYUFW1EYvFnevH4wWBwpXJbkYwpuX8NAhujrKspP:
    LinkedDocumentsPermissionRevokingInProgressSchema,
  DsDibGYwridS8uYoUcwFbBHa49UFAA7MtLNboXrXudmn:
    LinkedDocumentsPermissionSetSchema,
  Gqf8h8GKR98kdptTXPABstPSc5ezuKGRsTQ8w1QDcSnQ:
    LinkedDocumentsPermissionValidatedSchema,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgentSchema,
  cjPVQ6sifei7ryEsdwVhsYgHRXiAWMvaoQvrRo6LYRY: MyOSAdminBaseSchema,
  '6Fxxx58U6WKzA4WQPCLPmMMCCEb9QLFYdb8yMLZDVdXL': MyOSAgentSchema,
  C2Fyt8obT6QR8WWFCPF5G36VXZLwzaM1SLtMKKAp4pwd: MyOSAgentActorSchema,
  '2YzZXsXxQSeCKZ4Qrptrdrf9gy4Hwrfdvh8gpakpnDBL': MyOSAgentChannelSchema,
  BsNKTXtCKag31WrdujJg7PSqD4rWg9b57DqHPq14Tpn7: MyOSAgentEventSchema,
  '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9': MyOSBalanceAccountSchema,
  '3FcyLzeWjTqmYYg1Tmqu2en4SKfYbCFn8Shf3gDxo9xK':
    MyOSDocumentSessionReferenceSchema,
  FX9yvQWAiZMMwnUF1vY1HMumJNNg7ENP7ETxha1kvWkn: MyOSPackageSchema,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU':
    MyOSParticipantsOrchestrationSchema,
  G6EVpoRpQQb6f93eZtJPqDRAK47D1RXvUAmbXvhpsL6Y: MyOSPrincipalActorSchema,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteractionSchema,
  '8WDRmnnsa796qcz2VcYNiua5xdH8BFXbKq94NxUYviyE': MyOSSessionLinkSchema,
  '9TnFznYnqWWjHhGzcKngTLfq1a2H4sVd5EM4vfek2ec5': MyOSTimelineSchema,
  DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg: MyOSTimelineChannelSchema,
  '89jLhpA5iqiRuSLgvYKZirtczaxjwSXRkL9Q7GhxwPCu': MyOSTimelineEntrySchema,
  Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN: MyOSUserSchema,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': MyOSWorkerAgencySchema,
  BDWxt7xTGsK2mZKinCxD4hENHUUfEtupZPtaYzwLmKJm: ParticipantSchema,
  AegvYi855FTYVE4WJ5pbUaF3LzNFsM71cpkwVbQ6yQYA: ParticipantActivatedSchema,
  ASa82RtPSXwdys7M5Xs5s3brTjYgJmQqJt2uyraQGrNA:
    ParticipantActivationStateSchema,
  BswjhjkdTDksVCcc8ijoU2RWcPam7Rphcecc67HJjZRi: ParticipantResolvedSchema,
  DHqXopSXGku6L9dZCavpWgPyza6XjFXGDisVumLMrNkw: PaymentInitiatedSchema,
  theUsA9gT88zXXPPqnyeft1Zy77EAA9nD2t6YgfPSgF: PaymentInitiationAcceptedSchema,
  '9HDoFXbw9nUMLFdm9XmaUpcji51rL7brWBU1aFdRyCZg':
    PaymentInitiationRejectedSchema,
  '27Ab9oZDYKH8d4aXMuSoesnnPjpFk2344PKmzbZNEMv1':
    PaymentInitiationRequestedSchema,
  '7ov2LtAu257ETtdWgw7aMTYHypK9yKnswb8MZH9QCSRG':
    PaymentTargetPreparationFailedSchema,
  EQbhZiFJ15SPAP7VhdgX5YvfEgobZPuAUp6ddDoY3EBf:
    PaymentTargetPreparationRequestedSchema,
  GhnaLupM1b6ns5AQh6HYCrfi22ZKd5GFFMPkrYM5q6b9: PaymentTargetPreparedSchema,
  '6G8JLcJ9bT9VnThaxt4ZRDQYSrKiaYiByppnPiyhdNCW': PrincipalActorSchema,
  '89DqHza36mvWnBgbqWi2ttccLd5LZBCbTDxjQyEwvAxf':
    RemovingParticipantRequestedSchema,
  FRgzcswtDMu4uMomhtDgrCnH94TGbTbaE5ur3zKZn6v7:
    RemovingParticipantRespondedSchema,
  ACDXskXQ1cmM9uN8UCRKgH7fEHzqUW5XzyjKgsxgdujs: SearchContractSchema,
  '7WJnGdq3txEhXb6P2vXLAMUhPBCWQzHsz416cDfKGcUm': SessionEpochAdvancedSchema,
  Gdq4pzoEH32VQWBS4SwzUenYvWZHodLYVxd48WLLyLXz:
    SingleDocumentPermissionGrantRequestedSchema,
  EMeTTNatzYw9VUFK1NuUnJgrLaeJK3QAqDPaEEjuH7s3:
    SingleDocumentPermissionGrantRespondedSchema,
  '9P4Wq4Yr2K95zEkDvX56SU2V7SnFMrrwwt3sZ46QAQxW':
    SingleDocumentPermissionGrantToAccountSchema,
  DuS8JXr8UZwXXkZwCk1eRS1d9UZyC5e8KXQNiv8h4vHd:
    SingleDocumentPermissionGrantToDocumentSchema,
  BhoidQSUZC9uh8KHbkVEU87DhWgDRjH1mcKdgksTfmmf:
    SingleDocumentPermissionGrantedSchema,
  Duis7QaVJkoKiQ5v9HEroE47AST1pi5zJGcVkgFiie8N:
    SingleDocumentPermissionGrantingInProgressSchema,
  '7BEbHgR3h4y9HDLvxnKSMyGZZqYnA8Jm2cFuTMjDuCJg':
    SingleDocumentPermissionInvalidSchema,
  '9Z1H8t76uK3ixSpEMkKqT2xwZxXSgjbgoJSxchFXtW1V':
    SingleDocumentPermissionRejectedSchema,
  '5Jtu4jN8svHxkJkkkZdDQLVzk6vjxE4Reo4VTw4rwrn9':
    SingleDocumentPermissionRevokeRequestedSchema,
  '7Crww1rpdmSRAN5qhyX7PCrsKRpeCKmhkdN7zvC7PUw':
    SingleDocumentPermissionRevokedSchema,
  EXVwAGdA1kyuAy3PzJPwGxQXeqocP9aLarWXrkTPivbZ:
    SingleDocumentPermissionRevokingInProgressSchema,
  '9L2spAU6UyAkHicQ4vEqeWWoaEEndi1iVdt8Vdbpi4Yq':
    SingleDocumentPermissionSetSchema,
  '6rJFGtfmUHZyspx5UNtUvSjNn89XqmBHzmMRiQHjhPX3':
    SingleDocumentPermissionValidatedSchema,
  FWgJ8eninbRZvg2SWY4VxbfpvZvRxseALoAvwTu9bqVr:
    StartWorkerSessionRequestedSchema,
  '26txGATfFsYPSqn4rBNz2PTooVYNz6v9wt6drM7aPzh1':
    SubscribeToSessionRequestedSchema,
  '7Gm8HH81u9FDLmDXQvfGYLZsbyKCcoaJsfwM8o4y2wws':
    SubscriptionToSessionFailedSchema,
  D7h7D4D5yqrWfcw9xFLdu7T89jAox3WqTFxjojSewKbc:
    SubscriptionToSessionInitiatedSchema,
  '6ewyxdBpb5oNdVSBkXZSDK6aUaAnzc2ad453V7vjXHu6':
    SubscriptionToSessionRevokedSchema,
  '8afv356wxUZxou95jDEYEgp5dL6VmnpFmYUjx3aDuFXi': SubscriptionUpdateSchema,
  '4RvVyoEwATa2dtpRRoXbnRLbizq2vqeeMQVmqUrCd8JN':
    TargetDocumentSessionStartedSchema,
  GjxBN2eRsYCbipBAFk2eRneiDSs5rWS7eUzZBpPHz2JH: WorkerAgencyPermissionSchema,
  '3WVJvijwpp2paoRJHaLKJkaTmfWKaUrysfrFANkExCFH':
    WorkerAgencyPermissionGrantSchema,
  EZsC5otrFgURBbXJaGZ7Ngs1JoJfHnrGVhzfPkJ3Q9QB:
    WorkerAgencyPermissionGrantRequestedSchema,
  '2gARs6NQxJvmooDXL6dc7DPny9xthbGfJL32jr3Jm2Xw':
    WorkerAgencyPermissionGrantedSchema,
  GFWQTwkX47Ak8VtxuiqLmqKhPo417JnyE69jyEqKYseK:
    WorkerAgencyPermissionGrantingInProgressSchema,
  B1RnGH4azPberZAn1F3YrP5c2sGV939EpruSPBD2Kc1u:
    WorkerAgencyPermissionInvalidSchema,
  '8peU5ESm5XGhihLNdB59zsipFt6HsDQ9q4DpdNoQ1Q38':
    WorkerAgencyPermissionRejectedSchema,
  GeNaTohvYFC1xu9RLJS1buzqj1JpqyernRsvJiTiSTTY:
    WorkerAgencyPermissionRevokeRequestedSchema,
  X446Tm19S6csScutxaRp1Bo6gH3v3Vwq7nzHkWJg9ab:
    WorkerAgencyPermissionRevokedSchema,
  Aa41QanfXXraDaSAWXeh86RnktmonoaxMUajwNqcWabJ:
    WorkerAgencyPermissionRevokingInProgressSchema,
  J7ssmNEa6YpxrLFTqZfwgD4uiz3cSyNLNaC4WbnLEhj7:
    WorkerAgencyPermissionValidatedSchema,
  '9M6p6bQaBWNZYcfFccYwYQkS4QA31h3vkUEsJSVTPqdt': WorkerSessionStartingSchema,
};
