import { SubscribeToSessionRequested } from './SubscribeToSessionRequested';
import { PaymentInitiationRequested } from './PaymentInitiationRequested';
import { DocumentSessionBootstrap } from './DocumentSessionBootstrap';
import { WorkerAgencyPermissionGranted } from './WorkerAgencyPermissionGranted';
import { MyOSAgentChannel } from './MyOSAgentChannel';
import { LinkedDocumentsPermissionGranted } from './LinkedDocumentsPermissionGranted';
import { MyOSDocumentSessionReference } from './MyOSDocumentSessionReference';
import { LinkedDocumentsPermissionRevoked } from './LinkedDocumentsPermissionRevoked';
import { MyOSWorkerAgency } from './MyOSWorkerAgency';
import { TargetDocumentSessionStarted } from './TargetDocumentSessionStarted';
import { SingleDocumentPermissionRevokeRequested } from './SingleDocumentPermissionRevokeRequested';
import { LinkedDocumentsPermissionGrantToDocument } from './LinkedDocumentsPermissionGrantToDocument';
import { SingleDocumentPermissionGrantToDocument } from './SingleDocumentPermissionGrantToDocument';
import { DocumentTypeLink } from './DocumentTypeLink';
import { LinkedDocumentsPermissionGrantingInProgress } from './LinkedDocumentsPermissionGrantingInProgress';
import { Link } from './Link';
import { SubscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
import { MyOSAgent } from './MyOSAgent';
import { PrincipalActor } from './PrincipalActor';
import { AgentActor } from './AgentActor';
import { DocumentAnchors } from './DocumentAnchors';
import { SingleDocumentPermissionValidated } from './SingleDocumentPermissionValidated';
import { MyOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
import { DocumentInitialSnapshotRequested } from './DocumentInitialSnapshotRequested';
import { SingleDocumentPermissionInvalid } from './SingleDocumentPermissionInvalid';
import { SingleDocumentPermissionRevoked } from './SingleDocumentPermissionRevoked';
import { SubscriptionToSessionFailed } from './SubscriptionToSessionFailed';
import { LinkedDocumentsPermissionGrantRequested } from './LinkedDocumentsPermissionGrantRequested';
import { PaymentTargetPreparationFailed } from './PaymentTargetPreparationFailed';
import { SessionEpochAdvanced } from './SessionEpochAdvanced';
import { RemovingParticipantRequested } from './RemovingParticipantRequested';
import { MyOSTimelineEntry } from './MyOSTimelineEntry';
import { SubscriptionUpdate } from './SubscriptionUpdate';
import { AnchorAutomationTemplate } from './AnchorAutomationTemplate';
import { AddingParticipantResponded } from './AddingParticipantResponded';
import { WorkerAgencyPermissionRejected } from './WorkerAgencyPermissionRejected';
import { Agent } from './Agent';
import { MyOSSessionLink } from './MyOSSessionLink';
import { MyOSBalanceAccount } from './MyOSBalanceAccount';
import { DocumentInitialSnapshotResolved } from './DocumentInitialSnapshotResolved';
import { PaymentInitiationRejected } from './PaymentInitiationRejected';
import { SingleDocumentPermissionSet } from './SingleDocumentPermissionSet';
import { CallOperationAccepted } from './CallOperationAccepted';
import { WorkerSessionStarting } from './WorkerSessionStarting';
import { CallOperationFailed } from './CallOperationFailed';
import { MyOSTimeline } from './MyOSTimeline';
import { LinkedDocumentsPermissionGrantToAccount } from './LinkedDocumentsPermissionGrantToAccount';
import { SingleDocumentPermissionRejected } from './SingleDocumentPermissionRejected';
import { WorkerAgencyPermissionRevokingInProgress } from './WorkerAgencyPermissionRevokingInProgress';
import { SearchContract } from './SearchContract';
import { ParticipantActivated } from './ParticipantActivated';
import { ParticipantActivationState } from './ParticipantActivationState';
import { WorkerAgencyPermissionInvalid } from './WorkerAgencyPermissionInvalid';
import { InformUserToInstallMyOSPackage } from './InformUserToInstallMyOSPackage';
import { Participant } from './Participant';
import { DocumentInitialSnapshotUnresolved } from './DocumentInitialSnapshotUnresolved';
import { LinkedDocumentsPermissionRejected } from './LinkedDocumentsPermissionRejected';
import { SingleDocumentPermissionGranted } from './SingleDocumentPermissionGranted';
import { WorkerAgencyPermissionGrant } from './WorkerAgencyPermissionGrant';
import { LinkedDocumentsPermissionRevokeRequested } from './LinkedDocumentsPermissionRevokeRequested';
import { AddingParticipantRequested } from './AddingParticipantRequested';
import { MyOSAgentEvent } from './MyOSAgentEvent';
import { ParticipantResolved } from './ParticipantResolved';
import { MyOSAgentActor } from './MyOSAgentActor';
import { MyOSSessionInteraction } from './MyOSSessionInteraction';
import { DocumentLink } from './DocumentLink';
import { CallOperationResponded } from './CallOperationResponded';
import { LinkedDocumentsPermissionInvalid } from './LinkedDocumentsPermissionInvalid';
import { MyOSUser } from './MyOSUser';
import { LinkedDocumentsPermissionRevokingInProgress } from './LinkedDocumentsPermissionRevokingInProgress';
import { SubscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
import { PaymentInitiated } from './PaymentInitiated';
import { LLMAgent } from './LLMAgent';
import { LinkedDocumentsPermissionSet } from './LinkedDocumentsPermissionSet';
import { SingleDocumentPermissionGrantingInProgress } from './SingleDocumentPermissionGrantingInProgress';
import { MyOSTimelineChannel } from './MyOSTimelineChannel';
import { CallOperationRequested } from './CallOperationRequested';
import { SingleDocumentPermissionGrantResponded } from './SingleDocumentPermissionGrantResponded';
import { PaymentTargetPreparationRequested } from './PaymentTargetPreparationRequested';
import { SingleDocumentPermissionRevokingInProgress } from './SingleDocumentPermissionRevokingInProgress';
import { WorkerAgencyPermissionGrantRequested } from './WorkerAgencyPermissionGrantRequested';
import { BootstrapFailed } from './BootstrapFailed';
import { AllParticipantsReady } from './AllParticipantsReady';
import { MyOSAdminBase } from './MyOSAdminBase';
import { RemovingParticipantResponded } from './RemovingParticipantResponded';
import { StartWorkerSessionRequested } from './StartWorkerSessionRequested';
import { MyOSPackage } from './MyOSPackage';
import { SingleDocumentPermissionGrantToAccount } from './SingleDocumentPermissionGrantToAccount';
import { MyOSPrincipalActor } from './MyOSPrincipalActor';
import { SingleDocumentPermissionGrantRequested } from './SingleDocumentPermissionGrantRequested';
import { WorkerAgencyPermissionRevokeRequested } from './WorkerAgencyPermissionRevokeRequested';
import { WorkerAgencyPermissionGrantingInProgress } from './WorkerAgencyPermissionGrantingInProgress';
import { PaymentTargetPrepared } from './PaymentTargetPrepared';
import { WorkerAgencyPermission } from './WorkerAgencyPermission';
import { LinkedDocumentsPermissionValidated } from './LinkedDocumentsPermissionValidated';
import { DocumentLinks } from './DocumentLinks';
import { DocumentAnchor } from './DocumentAnchor';
import { WorkerAgencyPermissionValidated } from './WorkerAgencyPermissionValidated';
import { PaymentInitiationAccepted } from './PaymentInitiationAccepted';
import { WorkerAgencyPermissionRevoked } from './WorkerAgencyPermissionRevoked';

export { SubscribeToSessionRequested } from './SubscribeToSessionRequested';
export { PaymentInitiationRequested } from './PaymentInitiationRequested';
export { DocumentSessionBootstrap } from './DocumentSessionBootstrap';
export { WorkerAgencyPermissionGranted } from './WorkerAgencyPermissionGranted';
export { MyOSAgentChannel } from './MyOSAgentChannel';
export { LinkedDocumentsPermissionGranted } from './LinkedDocumentsPermissionGranted';
export { MyOSDocumentSessionReference } from './MyOSDocumentSessionReference';
export { LinkedDocumentsPermissionRevoked } from './LinkedDocumentsPermissionRevoked';
export { MyOSWorkerAgency } from './MyOSWorkerAgency';
export { TargetDocumentSessionStarted } from './TargetDocumentSessionStarted';
export { SingleDocumentPermissionRevokeRequested } from './SingleDocumentPermissionRevokeRequested';
export { LinkedDocumentsPermissionGrantToDocument } from './LinkedDocumentsPermissionGrantToDocument';
export { SingleDocumentPermissionGrantToDocument } from './SingleDocumentPermissionGrantToDocument';
export { DocumentTypeLink } from './DocumentTypeLink';
export { LinkedDocumentsPermissionGrantingInProgress } from './LinkedDocumentsPermissionGrantingInProgress';
export { Link } from './Link';
export { SubscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
export { MyOSAgent } from './MyOSAgent';
export { PrincipalActor } from './PrincipalActor';
export { AgentActor } from './AgentActor';
export { DocumentAnchors } from './DocumentAnchors';
export { SingleDocumentPermissionValidated } from './SingleDocumentPermissionValidated';
export { MyOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
export { DocumentInitialSnapshotRequested } from './DocumentInitialSnapshotRequested';
export { SingleDocumentPermissionInvalid } from './SingleDocumentPermissionInvalid';
export { SingleDocumentPermissionRevoked } from './SingleDocumentPermissionRevoked';
export { SubscriptionToSessionFailed } from './SubscriptionToSessionFailed';
export { LinkedDocumentsPermissionGrantRequested } from './LinkedDocumentsPermissionGrantRequested';
export { PaymentTargetPreparationFailed } from './PaymentTargetPreparationFailed';
export { SessionEpochAdvanced } from './SessionEpochAdvanced';
export { RemovingParticipantRequested } from './RemovingParticipantRequested';
export { MyOSTimelineEntry } from './MyOSTimelineEntry';
export { SubscriptionUpdate } from './SubscriptionUpdate';
export { AnchorAutomationTemplate } from './AnchorAutomationTemplate';
export { AddingParticipantResponded } from './AddingParticipantResponded';
export { WorkerAgencyPermissionRejected } from './WorkerAgencyPermissionRejected';
export { Agent } from './Agent';
export { MyOSSessionLink } from './MyOSSessionLink';
export { MyOSBalanceAccount } from './MyOSBalanceAccount';
export { DocumentInitialSnapshotResolved } from './DocumentInitialSnapshotResolved';
export { PaymentInitiationRejected } from './PaymentInitiationRejected';
export { SingleDocumentPermissionSet } from './SingleDocumentPermissionSet';
export { CallOperationAccepted } from './CallOperationAccepted';
export { WorkerSessionStarting } from './WorkerSessionStarting';
export { CallOperationFailed } from './CallOperationFailed';
export { MyOSTimeline } from './MyOSTimeline';
export { LinkedDocumentsPermissionGrantToAccount } from './LinkedDocumentsPermissionGrantToAccount';
export { SingleDocumentPermissionRejected } from './SingleDocumentPermissionRejected';
export { WorkerAgencyPermissionRevokingInProgress } from './WorkerAgencyPermissionRevokingInProgress';
export { SearchContract } from './SearchContract';
export { ParticipantActivated } from './ParticipantActivated';
export { ParticipantActivationState } from './ParticipantActivationState';
export { WorkerAgencyPermissionInvalid } from './WorkerAgencyPermissionInvalid';
export { InformUserToInstallMyOSPackage } from './InformUserToInstallMyOSPackage';
export { Participant } from './Participant';
export { DocumentInitialSnapshotUnresolved } from './DocumentInitialSnapshotUnresolved';
export { LinkedDocumentsPermissionRejected } from './LinkedDocumentsPermissionRejected';
export { SingleDocumentPermissionGranted } from './SingleDocumentPermissionGranted';
export { WorkerAgencyPermissionGrant } from './WorkerAgencyPermissionGrant';
export { LinkedDocumentsPermissionRevokeRequested } from './LinkedDocumentsPermissionRevokeRequested';
export { AddingParticipantRequested } from './AddingParticipantRequested';
export { MyOSAgentEvent } from './MyOSAgentEvent';
export { ParticipantResolved } from './ParticipantResolved';
export { MyOSAgentActor } from './MyOSAgentActor';
export { MyOSSessionInteraction } from './MyOSSessionInteraction';
export { DocumentLink } from './DocumentLink';
export { CallOperationResponded } from './CallOperationResponded';
export { LinkedDocumentsPermissionInvalid } from './LinkedDocumentsPermissionInvalid';
export { MyOSUser } from './MyOSUser';
export { LinkedDocumentsPermissionRevokingInProgress } from './LinkedDocumentsPermissionRevokingInProgress';
export { SubscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
export { PaymentInitiated } from './PaymentInitiated';
export { LLMAgent } from './LLMAgent';
export { LinkedDocumentsPermissionSet } from './LinkedDocumentsPermissionSet';
export { SingleDocumentPermissionGrantingInProgress } from './SingleDocumentPermissionGrantingInProgress';
export { MyOSTimelineChannel } from './MyOSTimelineChannel';
export { CallOperationRequested } from './CallOperationRequested';
export { SingleDocumentPermissionGrantResponded } from './SingleDocumentPermissionGrantResponded';
export { PaymentTargetPreparationRequested } from './PaymentTargetPreparationRequested';
export { SingleDocumentPermissionRevokingInProgress } from './SingleDocumentPermissionRevokingInProgress';
export { WorkerAgencyPermissionGrantRequested } from './WorkerAgencyPermissionGrantRequested';
export { BootstrapFailed } from './BootstrapFailed';
export { AllParticipantsReady } from './AllParticipantsReady';
export { MyOSAdminBase } from './MyOSAdminBase';
export { RemovingParticipantResponded } from './RemovingParticipantResponded';
export { StartWorkerSessionRequested } from './StartWorkerSessionRequested';
export { MyOSPackage } from './MyOSPackage';
export { SingleDocumentPermissionGrantToAccount } from './SingleDocumentPermissionGrantToAccount';
export { MyOSPrincipalActor } from './MyOSPrincipalActor';
export { SingleDocumentPermissionGrantRequested } from './SingleDocumentPermissionGrantRequested';
export { WorkerAgencyPermissionRevokeRequested } from './WorkerAgencyPermissionRevokeRequested';
export { WorkerAgencyPermissionGrantingInProgress } from './WorkerAgencyPermissionGrantingInProgress';
export { PaymentTargetPrepared } from './PaymentTargetPrepared';
export { WorkerAgencyPermission } from './WorkerAgencyPermission';
export { LinkedDocumentsPermissionValidated } from './LinkedDocumentsPermissionValidated';
export { DocumentLinks } from './DocumentLinks';
export { DocumentAnchor } from './DocumentAnchor';
export { WorkerAgencyPermissionValidated } from './WorkerAgencyPermissionValidated';
export { PaymentInitiationAccepted } from './PaymentInitiationAccepted';
export { WorkerAgencyPermissionRevoked } from './WorkerAgencyPermissionRevoked';

export const contents: Record<string, unknown> = {
  '26txGATfFsYPSqn4rBNz2PTooVYNz6v9wt6drM7aPzh1': SubscribeToSessionRequested,
  '27Ab9oZDYKH8d4aXMuSoesnnPjpFk2344PKmzbZNEMv1': PaymentInitiationRequested,
  '2dBmPQaE1M3vCs75rg3ksDuBLwBP7qAujt189F2t8ZNi': DocumentSessionBootstrap,
  '2gARs6NQxJvmooDXL6dc7DPny9xthbGfJL32jr3Jm2Xw': WorkerAgencyPermissionGranted,
  '2YzZXsXxQSeCKZ4Qrptrdrf9gy4Hwrfdvh8gpakpnDBL': MyOSAgentChannel,
  '3BWjDhnmpr8KeWsbW2wQhMZbHpznEGGqtiWWncGD3g9C':
    LinkedDocumentsPermissionGranted,
  '3FcyLzeWjTqmYYg1Tmqu2en4SKfYbCFn8Shf3gDxo9xK': MyOSDocumentSessionReference,
  '41sbnfmpH1CZV21HwtNZtJiDw7ojLX1Fnkw6rpR1yw3a':
    LinkedDocumentsPermissionRevoked,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': MyOSWorkerAgency,
  '4RvVyoEwATa2dtpRRoXbnRLbizq2vqeeMQVmqUrCd8JN': TargetDocumentSessionStarted,
  '5Jtu4jN8svHxkJkkkZdDQLVzk6vjxE4Reo4VTw4rwrn9':
    SingleDocumentPermissionRevokeRequested,
  '5oupQbnbuoBTUDvTSy58EKZkra3cBjvAcdiZSLchcwiv':
    LinkedDocumentsPermissionGrantToDocument,
  '5VgEnZgpBjkyNiRjwdgjR6fvAWY4DnuSEWfT5dH5ZWPZ':
    SingleDocumentPermissionGrantToDocument,
  '5z86Uk79T94VasXdy6RSWjZqVUmiEfwGVWrkGc9ZooLm': DocumentTypeLink,
  '68GzR4FMz8CpGnNA8hKsdjBmbachEn59NPGAjt16LUfe':
    LinkedDocumentsPermissionGrantingInProgress,
  '6EvULvymCkDo8S9SjWgvzB24sbqZotJo5opNqH7dNThP': Link,
  '6ewyxdBpb5oNdVSBkXZSDK6aUaAnzc2ad453V7vjXHu6': SubscriptionToSessionRevoked,
  '6Fxxx58U6WKzA4WQPCLPmMMCCEb9QLFYdb8yMLZDVdXL': MyOSAgent,
  '6G8JLcJ9bT9VnThaxt4ZRDQYSrKiaYiByppnPiyhdNCW': PrincipalActor,
  '6HbWNKhkmhQMDxVww1mvQpvSy33G7anaeWPUohj3g1bC': AgentActor,
  '6LzxLRpgV6a2HEZ98LXXF55BsfsTE8ChXghCZGBSJYSF': DocumentAnchors,
  '6rJFGtfmUHZyspx5UNtUvSjNn89XqmBHzmMRiQHjhPX3':
    SingleDocumentPermissionValidated,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU': MyOSParticipantsOrchestration,
  '7A9voN4Bu8X7XhsvMT8ToP9Zdxj9Mnrp8MnfWfZCEwsq':
    DocumentInitialSnapshotRequested,
  '7BEbHgR3h4y9HDLvxnKSMyGZZqYnA8Jm2cFuTMjDuCJg':
    SingleDocumentPermissionInvalid,
  '7Crww1rpdmSRAN5qhyX7PCrsKRpeCKmhkdN7zvC7PUw':
    SingleDocumentPermissionRevoked,
  '7Gm8HH81u9FDLmDXQvfGYLZsbyKCcoaJsfwM8o4y2wws': SubscriptionToSessionFailed,
  '7MTCgNo4iWnxoVhqJytiApkZYmrDPRZWUeCBPtfhZJma':
    LinkedDocumentsPermissionGrantRequested,
  '7ov2LtAu257ETtdWgw7aMTYHypK9yKnswb8MZH9QCSRG':
    PaymentTargetPreparationFailed,
  '7WJnGdq3txEhXb6P2vXLAMUhPBCWQzHsz416cDfKGcUm': SessionEpochAdvanced,
  '89DqHza36mvWnBgbqWi2ttccLd5LZBCbTDxjQyEwvAxf': RemovingParticipantRequested,
  '89jLhpA5iqiRuSLgvYKZirtczaxjwSXRkL9Q7GhxwPCu': MyOSTimelineEntry,
  '8afv356wxUZxou95jDEYEgp5dL6VmnpFmYUjx3aDuFXi': SubscriptionUpdate,
  '8eyv5ogjHbTqUeaJKWHMenLs3MaCnpGSQkbPrCqvk2Ga': AnchorAutomationTemplate,
  '8FUHrY9AzHbSvEMMPQn1H1ckFS94eL4LucpY5wXXCex2': AddingParticipantResponded,
  '8peU5ESm5XGhihLNdB59zsipFt6HsDQ9q4DpdNoQ1Q38':
    WorkerAgencyPermissionRejected,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': Agent,
  '8WDRmnnsa796qcz2VcYNiua5xdH8BFXbKq94NxUYviyE': MyOSSessionLink,
  '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9': MyOSBalanceAccount,
  '9gkE6ybqoLeFGySKvhWmAM9K6ARCWEeBoyEDY6jw8X3U':
    DocumentInitialSnapshotResolved,
  '9HDoFXbw9nUMLFdm9XmaUpcji51rL7brWBU1aFdRyCZg': PaymentInitiationRejected,
  '9L2spAU6UyAkHicQ4vEqeWWoaEEndi1iVdt8Vdbpi4Yq': SingleDocumentPermissionSet,
  '9LGSHaRb9LsRx9DxMzj4LmSSWuUYQXNHEXupK4PJn2VR': CallOperationAccepted,
  '9M6p6bQaBWNZYcfFccYwYQkS4QA31h3vkUEsJSVTPqdt': WorkerSessionStarting,
  '9PH8Hi8uwuUXerpg4FY2cYUeytYuAnuU1SLT2KQsnuU8': CallOperationFailed,
  '9TnFznYnqWWjHhGzcKngTLfq1a2H4sVd5EM4vfek2ec5': MyOSTimeline,
  '9xWDERguu2qHQbNsnp3oqVos9otazHfd51DXLnLsDU3D':
    LinkedDocumentsPermissionGrantToAccount,
  '9Z1H8t76uK3ixSpEMkKqT2xwZxXSgjbgoJSxchFXtW1V':
    SingleDocumentPermissionRejected,
  Aa41QanfXXraDaSAWXeh86RnktmonoaxMUajwNqcWabJ:
    WorkerAgencyPermissionRevokingInProgress,
  ACDXskXQ1cmM9uN8UCRKgH7fEHzqUW5XzyjKgsxgdujs: SearchContract,
  AegvYi855FTYVE4WJ5pbUaF3LzNFsM71cpkwVbQ6yQYA: ParticipantActivated,
  ASa82RtPSXwdys7M5Xs5s3brTjYgJmQqJt2uyraQGrNA: ParticipantActivationState,
  B1RnGH4azPberZAn1F3YrP5c2sGV939EpruSPBD2Kc1u: WorkerAgencyPermissionInvalid,
  B7HmEAQxcEvr6CPyXwPZGLVGYcddcaajrDKgt5eEubQa: InformUserToInstallMyOSPackage,
  BDWxt7xTGsK2mZKinCxD4hENHUUfEtupZPtaYzwLmKJm: Participant,
  Bf61oBnvwND8vaGaNRPUN5jTahmej3G5NqBujgrttBgS:
    DocumentInitialSnapshotUnresolved,
  BfjJ2xceqvneBqEHLGS5bMXiYeaQgbRbgRzBfYR4KZAJ:
    LinkedDocumentsPermissionRejected,
  BhoidQSUZC9uh8KHbkVEU87DhWgDRjH1mcKdgksTfmmf: SingleDocumentPermissionGranted,
  Biu1tXvUm4CpghgorjFVaqYAkSfkP1cKKenHuuFCTNhv: WorkerAgencyPermissionGrant,
  BKyVzxDr2rJp7weHvuzyrgSJ42ATwN3SizPchqu7QMVc:
    LinkedDocumentsPermissionRevokeRequested,
  BmERQxQSUDw8vTBAR32U9XBcFGjdVfUfpfUhCm1xsxVV: AddingParticipantRequested,
  BsNKTXtCKag31WrdujJg7PSqD4rWg9b57DqHPq14Tpn7: MyOSAgentEvent,
  BswjhjkdTDksVCcc8ijoU2RWcPam7Rphcecc67HJjZRi: ParticipantResolved,
  C2Fyt8obT6QR8WWFCPF5G36VXZLwzaM1SLtMKKAp4pwd: MyOSAgentActor,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteraction,
  CfdjCV1cjPJCd5sBHLMzNUx3EtkgrmBekLxB5c9Qw1Qh: DocumentLink,
  Cm4GjXHCv2s4zEhfqd15xTX2PwvAYSBzvYFkqaxfGfyF: CallOperationResponded,
  Cm9gL7QQ4CDhi18VKg5PfK11Xy6CLVJawoa88BTTy9ZU:
    LinkedDocumentsPermissionInvalid,
  Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN: MyOSUser,
  D5W2KYUFW1EYvFnevH4wWBwpXJbkYwpuX8NAhujrKspP:
    LinkedDocumentsPermissionRevokingInProgress,
  D7h7D4D5yqrWfcw9xFLdu7T89jAox3WqTFxjojSewKbc: SubscriptionToSessionInitiated,
  DHqXopSXGku6L9dZCavpWgPyza6XjFXGDisVumLMrNkw: PaymentInitiated,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgent,
  DsDibGYwridS8uYoUcwFbBHa49UFAA7MtLNboXrXudmn: LinkedDocumentsPermissionSet,
  Duis7QaVJkoKiQ5v9HEroE47AST1pi5zJGcVkgFiie8N:
    SingleDocumentPermissionGrantingInProgress,
  DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg: MyOSTimelineChannel,
  E4E5omD4zCzisFfJdF4iXrfe3RDAdNW4Kc5Fr5EQN4iV: CallOperationRequested,
  EMeTTNatzYw9VUFK1NuUnJgrLaeJK3QAqDPaEEjuH7s3:
    SingleDocumentPermissionGrantResponded,
  EQbhZiFJ15SPAP7VhdgX5YvfEgobZPuAUp6ddDoY3EBf:
    PaymentTargetPreparationRequested,
  EXVwAGdA1kyuAy3PzJPwGxQXeqocP9aLarWXrkTPivbZ:
    SingleDocumentPermissionRevokingInProgress,
  EZsC5otrFgURBbXJaGZ7Ngs1JoJfHnrGVhzfPkJ3Q9QB:
    WorkerAgencyPermissionGrantRequested,
  FaZorE1FNvj9ar6rxL8jHRNYQ6WYo4hERoE35v7A5DnL: BootstrapFailed,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: AllParticipantsReady,
  FMWYekdjwkDnoM2YfHmwuUATHZovSgmDEvSVTmyVmbHc: MyOSAdminBase,
  FRgzcswtDMu4uMomhtDgrCnH94TGbTbaE5ur3zKZn6v7: RemovingParticipantResponded,
  FWgJ8eninbRZvg2SWY4VxbfpvZvRxseALoAvwTu9bqVr: StartWorkerSessionRequested,
  FX9yvQWAiZMMwnUF1vY1HMumJNNg7ENP7ETxha1kvWkn: MyOSPackage,
  FxpvkuGSyrxhhvn8uToqkS33oiprrbTLBWLn2bWg8TqP:
    SingleDocumentPermissionGrantToAccount,
  G6EVpoRpQQb6f93eZtJPqDRAK47D1RXvUAmbXvhpsL6Y: MyOSPrincipalActor,
  Gdq4pzoEH32VQWBS4SwzUenYvWZHodLYVxd48WLLyLXz:
    SingleDocumentPermissionGrantRequested,
  GeNaTohvYFC1xu9RLJS1buzqj1JpqyernRsvJiTiSTTY:
    WorkerAgencyPermissionRevokeRequested,
  GFWQTwkX47Ak8VtxuiqLmqKhPo417JnyE69jyEqKYseK:
    WorkerAgencyPermissionGrantingInProgress,
  GhnaLupM1b6ns5AQh6HYCrfi22ZKd5GFFMPkrYM5q6b9: PaymentTargetPrepared,
  GjxBN2eRsYCbipBAFk2eRneiDSs5rWS7eUzZBpPHz2JH: WorkerAgencyPermission,
  Gqf8h8GKR98kdptTXPABstPSc5ezuKGRsTQ8w1QDcSnQ:
    LinkedDocumentsPermissionValidated,
  HrFwCVPZz2sNinVETY4mk2sLLziGQWejTU2eWjxcUuuX: DocumentLinks,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: DocumentAnchor,
  J7ssmNEa6YpxrLFTqZfwgD4uiz3cSyNLNaC4WbnLEhj7: WorkerAgencyPermissionValidated,
  theUsA9gT88zXXPPqnyeft1Zy77EAA9nD2t6YgfPSgF: PaymentInitiationAccepted,
  X446Tm19S6csScutxaRp1Bo6gH3v3Vwq7nzHkWJg9ab: WorkerAgencyPermissionRevoked,
};
