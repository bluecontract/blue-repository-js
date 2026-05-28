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
import { ChatGPTConnectorAgentSchema } from './ChatGPTConnectorAgent';
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
export { ChatGPTConnectorAgentSchema } from './ChatGPTConnectorAgent';
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
  '64nzNQj2VjnjPwDz58sQEKWHxYj4pMek7zx56cehVswy':
    AddingParticipantRequestedSchema,
  FUiUHqx8xVVAey1EztoguwrzTysUC8K8yUQrAzAM7AwJ:
    AddingParticipantRespondedSchema,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': AgentSchema,
  '4cmSq5dc11j8xtpsfZAwsuP5FiCA7o4LQ3VyeKCwsU6x': AgentActorSchema,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: AllParticipantsReadySchema,
  '8eyv5ogjHbTqUeaJKWHMenLs3MaCnpGSQkbPrCqvk2Ga':
    AnchorAutomationTemplateSchema,
  '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo': BootstrapFailedSchema,
  EEkjPEAbvuHvqWme4XY6C3ti65dyHhEGSPknRQPrydmR: CallOperationAcceptedSchema,
  BVQuX53S36JxtTteebPh9fLPG7P44VZ7MjBag7efAtc8: CallOperationFailedSchema,
  '6FcjvaWHHTmGycQ97B2EvAoPeLCHownJZbeL5Aw7tfrJ': CallOperationRequestedSchema,
  HzUo1Z5WD7M9YYuUfVtZ2ZJHRwcoroeFVXTNTKoevmfc: CallOperationRespondedSchema,
  '6RGwZfzmVxnM1SgpbauuvTAZaN1CTyNCGwnTRSCBhBXQ': ChatGPTConnectorAgentSchema,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: DocumentAnchorSchema,
  '7Usvk6dZMVqas3yqs23ZEXn1zu1YDPjgYiZFNYaw3puH': DocumentAnchorsSchema,
  BcH85vwUmnacT3ysx4tKyddth7U3SjHNEwqoovxKfdvi:
    DocumentInitialSnapshotRequestedSchema,
  CKx4gpSEa3k6oAY6NgZmcTTgCEqnwjJLd41qsWZKLi4t:
    DocumentInitialSnapshotResolvedSchema,
  BqUTCgDTJHsV3HVovTMPnZQtyYQH6NTYApnnaLXVVLF6:
    DocumentInitialSnapshotUnresolvedSchema,
  BFxgEnovNHQ693YR2YvALi4FP8vjcwSQiX63LiLwjUhk: DocumentLinkSchema,
  '4cmrbevB6K23ZenjqwmNxpnaw6RF4VB3wkP7XB59V7W5': DocumentLinksSchema,
  AP71nQ7g7Geo6LEKJ9cQVBhZJUDdcKY8z8S2bAw62RAU: DocumentSessionBootstrapSchema,
  D9Ret9Hmz5TWxzuJEeauWEuZVPkPL7hcHYsSNY1cZ5zX: DocumentTypeLinkSchema,
  CrGV4ZYjvPvMqrgNQAfgZCUnFjFW6HDjYNdon2chLKU3:
    InformUserToInstallMyOSPackageSchema,
  D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD: LinkSchema,
  '5Px7DM11jwCays8RBCH6or3y5VkZkuvP9PRqoS7WAeRm':
    LinkedDocumentsPermissionGrantRequestedSchema,
  B5KWLeHZ2AFskZ14MpJwiMztLrgT54Mq2iuQDwfXLwzE:
    LinkedDocumentsPermissionGrantToAccountSchema,
  '482BxrFaNYD9Speaeds3DLEoEBpCY1mb5uNSdHzyrkLr':
    LinkedDocumentsPermissionGrantToDocumentSchema,
  D7GG9bxpGZQiqAv9ofbh1aG7suN3KmUM3YkKX9o2nX7B:
    LinkedDocumentsPermissionGrantedSchema,
  '5LwiL17sotDa6GZMterYF2EbxP1TLtJkHD3cp8Ng4wco':
    LinkedDocumentsPermissionGrantingInProgressSchema,
  '4JMVYn4GU5hEc6f9PVuTUD7zr4mUgeTyCF54rkjsYUFE':
    LinkedDocumentsPermissionInvalidSchema,
  '5UBYb9HeYha5jBw6h3S82toBYphEVFiy3pvQR4LeW8Jw':
    LinkedDocumentsPermissionRejectedSchema,
  Exjts5mZB8Z8sLyt79KSJozXFpgJJktEsX8ZHGjE6jNt:
    LinkedDocumentsPermissionRevokeRequestedSchema,
  BB1AP49xKCLdA52DmW9xmJddTnqhEHBDsWndyurcfciK:
    LinkedDocumentsPermissionRevokedSchema,
  '4iratLtSnVR7yxwyJdKc85ThJdQvMPZ9GLE7ukz1PTqH':
    LinkedDocumentsPermissionRevokingInProgressSchema,
  '75CyJPe82hSjV9T2tsir5R3343vhqvG41w2EzFhCp5Y9':
    LinkedDocumentsPermissionSetSchema,
  AuKN3wv7WZXJdonpPqP9TJCBqTfBssMj4f2G1ffyAs6E:
    LinkedDocumentsPermissionValidatedSchema,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgentSchema,
  Gm9rGd9RJMvBcPCwN7ybywVAtMAAngeAB82DZ2cQ6bAE: MyOSAdminBaseSchema,
  '8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5': MyOSAgentSchema,
  Bbz3i3jxymcWiX9Vtp9HbYkFchBqkeyPETfoGjTRsGHc: MyOSAgentActorSchema,
  '4fYuD2ZdTQpm5T6Xtibge9SKkNA8RrvDVmKmArrToQQW': MyOSAgentChannelSchema,
  GiYocGMGQcneiMPm4NH9MxVj7Fr4jwg2BUAMzwZcWRNR: MyOSAgentEventSchema,
  '3WA2ppJtUKib2upsEARBgCNJuHXSqHJjm38uLtZf6dNb': MyOSBalanceAccountSchema,
  '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9':
    MyOSDocumentSessionReferenceSchema,
  '5cg55kgH8ckRVji4oWSBBxthJQFYmB5Lb1Pea7achyNr': MyOSPackageSchema,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU':
    MyOSParticipantsOrchestrationSchema,
  '6yMrRewkCoJrhutyLg8bGA4s2nrALnv3SoHUbLUwiGzD': MyOSPrincipalActorSchema,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteractionSchema,
  d1vQ8ZTPcQc5KeuU6tzWaVukWRVtKjQL4hbvbpC22rB: MyOSSessionLinkSchema,
  '12b7StrRyA33gnKbKcBQZqfLUYTnBoiQFFN3MsDRYp4Y': MyOSTimelineSchema,
  '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh': MyOSTimelineChannelSchema,
  Bopi2AeKczd6Vnfxs6XMyH7YVfwDfEgZVSRUz2HeMKPA: MyOSTimelineEntrySchema,
  '6VqxRuWBPVJ8qTBPWxYKaSi5UB3zb8Y9vadtxbsL4vzJ': MyOSUserSchema,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': MyOSWorkerAgencySchema,
  phD9k4YTUgGjWeLPKqXNNn6S1PmqSeBJfVscAnUwFhQ: ParticipantSchema,
  EQhLKv5EAcFriegGYEP7ykwbjeyzFoaTxeizzuTd8VDq: ParticipantActivatedSchema,
  CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB:
    ParticipantActivationStateSchema,
  EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz: ParticipantResolvedSchema,
  F77xdQBBFMbFbG1ubRR8iibsYpCrFFzxi1uCaCa582K8: PaymentInitiatedSchema,
  HjZnELunK888XmJ4Vu4mBBKRFn2WcUEpweEnZgVAHWDA: PaymentInitiationAcceptedSchema,
  JBjbkyj3pQCAKK1nZuT4EdeB1DCSXUyHug5anmkeB61X: PaymentInitiationRejectedSchema,
  GVAHasyD4DPb3Ri1tD14jyhfzSsfs4n1svD8NF2jU4XH:
    PaymentInitiationRequestedSchema,
  '8xv37mGF2Awx5dQHqRGDcGFjjprUcALoeXDZbFSakF9v':
    PaymentTargetPreparationFailedSchema,
  '8FENBjBpzCnGMNiaQZxh3aENM4vxzEGGTJpJN4VzfuLD':
    PaymentTargetPreparationRequestedSchema,
  An8BLGrTQ2Erua3FXuhisvhQ9gpUBJFiKQATiEv5iTjQ: PaymentTargetPreparedSchema,
  AnSzziLDwXM8TmSbCu4Jg2yazY2yA1q9MUD8h3Jvd4qB: PrincipalActorSchema,
  '97cyP8PtDQZXZg5NWBJaLhR1o7tFomkSmzUKKR2uUSVQ':
    RemovingParticipantRequestedSchema,
  '9wYwaPe6i2hJfNBzQS4Dy3FcW2pnVmEPVjpxLDJ3JKqc':
    RemovingParticipantRespondedSchema,
  '5KdjguBmn7AwB9d8tjKxRh4xUHU9T8WDJ4dbaY6qgPvx': SearchContractSchema,
  '28cHdCnoq3A6AmnpNVVoz2pyGrKAbGus8kN7wzEAHHxb': SessionEpochAdvancedSchema,
  '5t6fnwt3wq9gj4XYsFJE3hRETvix1AsAdraUnSzLg742':
    SingleDocumentPermissionGrantRequestedSchema,
  GcvGRKaJkYDcDMdHoxp6euiq49Epn6wtN8eicnHBRJ1:
    SingleDocumentPermissionGrantRespondedSchema,
  EM4VfR7FUSNvF88tUyxQAFZRvjKe4DDJD6iFUTAF2cqo:
    SingleDocumentPermissionGrantToAccountSchema,
  '9z3E29ZbXPhmDWStUA5gAe4dmDqf8AifZF4Ys2tKR7Wb':
    SingleDocumentPermissionGrantToDocumentSchema,
  '7k8EJnJNz7tn5fJiPJuetpAATzkmJn3v6tD1q8exJSeT':
    SingleDocumentPermissionGrantedSchema,
  '7vhrQLWtgSgvD8kahdHybaMApbBYHnJePN1gewm5Zw7Q':
    SingleDocumentPermissionGrantingInProgressSchema,
  HTd3TkLwKaALYryVRrwnTTnF3rUzF5yrqzKg2ChrcaE9:
    SingleDocumentPermissionInvalidSchema,
  '4FrkCKWwTBuELbzmVkmuHSHLN36RQuPDb6cL9mUDmai5':
    SingleDocumentPermissionRejectedSchema,
  '2nRHhR7JeMKzs5wPKV6GMwbxbyvts5Boynzv6yNJxnQz':
    SingleDocumentPermissionRevokeRequestedSchema,
  A2SRNzwupD26E2KPh5f8WnX2zEvXBmoDtSp4TpFdMfVh:
    SingleDocumentPermissionRevokedSchema,
  FKDVQ5Upo52ZZCHPyoKXtW4UuyLxySGVEXY2e75SX5FH:
    SingleDocumentPermissionRevokingInProgressSchema,
  '5cZ3J1QiMJEJV4FV5kfSkeG2oJmweWCyJo3v2TSc3Xuw':
    SingleDocumentPermissionSetSchema,
  '6EYcrXJUBiocfFddndoEx1RdAnXuGr3XTxwGoBDdv5x6':
    SingleDocumentPermissionValidatedSchema,
  '6nwPz9C6i8oLW6bUGPYKkeCbQgGnvwPJv8rRy1EUuhZw':
    StartWorkerSessionRequestedSchema,
  D9dbLWSyjKQgYcWwqNgMnKRf8Uq1vQC8q3eiKxtcoDdQ:
    SubscribeToSessionRequestedSchema,
  '7azQr55sCEj68gqTVfZhU8szN17BwemJjTAHkZuT4zDM':
    SubscriptionToSessionFailedSchema,
  '4VAYpB5qevBKek6FbR4w5JeGdpAFZQryHmUmiVFV7kXv':
    SubscriptionToSessionInitiatedSchema,
  '8y4x3y9wBygncmdQRriTXLH4R318HEZraEFy9zxH3QVg':
    SubscriptionToSessionRevokedSchema,
  '2y9zDSA5aiX6iXTeBMr4PvHyAv1yNCdPmwEwVyyTRZrb': SubscriptionUpdateSchema,
  FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p:
    TargetDocumentSessionStartedSchema,
  EKPgicPVdFxx8X4ZBsnx7mT387M3VXDeMjSBnmAreUsS: WorkerAgencyPermissionSchema,
  '2Kn9s7EnZoimgkcVuX3gQYbND7iiYo9mHLB14tAfQrTm':
    WorkerAgencyPermissionGrantSchema,
  FA9mnT3XtiU1F9CcgDqUSg3ZTgrnGdrZ5piiNWbFeWgQ:
    WorkerAgencyPermissionGrantRequestedSchema,
  '5HUF8RkgVh3A3tZpnRazuFFoDmZnqg6sVb118KAvmJNr':
    WorkerAgencyPermissionGrantedSchema,
  '2w2L26N5qwqDLZRyDMAR6hHsKwBgmLxZ5JCu8L3MX1ro':
    WorkerAgencyPermissionGrantingInProgressSchema,
  '5eDTUokCWbu8Sp1PRZewh7wkdwwdrvpQZcweiMjaHd6m':
    WorkerAgencyPermissionInvalidSchema,
  HayginbRMtjpaxXsW3a51xwpztb56bQW5wn8okyxeLnt:
    WorkerAgencyPermissionRejectedSchema,
  BwXQmude1f6U9P3BG1HbaxC7ekQxGSm6TKAosiZE2rdY:
    WorkerAgencyPermissionRevokeRequestedSchema,
  HTky4txBNGHYaPck4D2RxfZfFkMMzCgyiZchzhHpA4gu:
    WorkerAgencyPermissionRevokedSchema,
  '8tj1rxAjz8BHp2MeunLsZXSeqdurN4rwDj2vG89LfBym':
    WorkerAgencyPermissionRevokingInProgressSchema,
  '8EcfEBSmZUTp73AjLNaCQQRrdQzzdxebG1QUpGe95im2':
    WorkerAgencyPermissionValidatedSchema,
  mSkjHDPQ8cpb8JRXzonzCdG6bBzGfz1SadUhR9PiuMb: WorkerSessionStartingSchema,
};
