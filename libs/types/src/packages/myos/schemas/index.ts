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

export const schemas = {
  '98JmkF189jZpQRyzaiQxLbc2rRUqnRy2o6bH2qCRaBg3':
    AddingParticipantRequestedSchema,
  BQMtWzcdbYUdaJQADyy6bkscxQGfhQHT4BgFhXQAgKfz:
    AddingParticipantRespondedSchema,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': AgentSchema,
  '3SJK2XGFHJgqXyCK4sjZ6tmAk3VjyuX6imGBJmV2LgQZ': AgentActorSchema,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: AllParticipantsReadySchema,
  '8eyv5ogjHbTqUeaJKWHMenLs3MaCnpGSQkbPrCqvk2Ga':
    AnchorAutomationTemplateSchema,
  '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo': BootstrapFailedSchema,
  Dd53JjiBGUnASZXjhiHBqCSnruN2XmLtcW2vNQB7Sm34: CallOperationAcceptedSchema,
  BaNmvStTGdsBsSHiHbqdhrrC7vfwiQdDK6NYiyRbJowx: CallOperationFailedSchema,
  EVX6nBdHdVEBH9Gbthpd2eqpxaxS4bb9wM55QNdZmcBy: CallOperationRequestedSchema,
  '3P4vsTx8Ky2pucXxKgkn8MouveP2DBRjkwZckCG5b9Lb': CallOperationRespondedSchema,
  '3u1bvMQqqc9sj4zWmwwhQrbdfCn7xrGiN7KEczqq22XG': ChatGPTConnectorAgentSchema,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: DocumentAnchorSchema,
  '7Usvk6dZMVqas3yqs23ZEXn1zu1YDPjgYiZFNYaw3puH': DocumentAnchorsSchema,
  BFxgEnovNHQ693YR2YvALi4FP8vjcwSQiX63LiLwjUhk: DocumentLinkSchema,
  '4cmrbevB6K23ZenjqwmNxpnaw6RF4VB3wkP7XB59V7W5': DocumentLinksSchema,
  AhSRfEjNdQ8AvA3AFigjdyQzAtoc2J29jpacEcKBNa32: DocumentSessionBootstrapSchema,
  D9Ret9Hmz5TWxzuJEeauWEuZVPkPL7hcHYsSNY1cZ5zX: DocumentTypeLinkSchema,
  CrGV4ZYjvPvMqrgNQAfgZCUnFjFW6HDjYNdon2chLKU3:
    InformUserToInstallMyOSPackageSchema,
  D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD: LinkSchema,
  '6H5NxBuVypoTGEMKHScmszXmrz3nBVQy1FDHrxBRwMmh':
    LinkedDocumentsPermissionGrantRequestedSchema,
  FuQov123cM3ph1xcX5Cyx19D2w1vsitpAHfkdasZDE75:
    LinkedDocumentsPermissionGrantToAccountSchema,
  GSMPZr2s6Nb6SwHzx8XwLRwbJnUdboZDPckMQhwLgvJ7:
    LinkedDocumentsPermissionGrantToDocumentSchema,
  '74TyANquDt5wUqoUfqA6i2CT5rDnfbfCSti1mkxowHpu':
    LinkedDocumentsPermissionGrantedSchema,
  GuqbETNsYdtm6MdzKy2iqqaQZu617rnjZz3fQFJLjpQ8:
    LinkedDocumentsPermissionGrantingInProgressSchema,
  ENswN7PB5Ty8mfy1AdFsu2QR9jMjCsm5AGGJgkYSTrWU:
    LinkedDocumentsPermissionInvalidSchema,
  GFs1qrcTSzYq5tEN25GjGngu7fttnPgma6PU7TQ89Hjc:
    LinkedDocumentsPermissionRejectedSchema,
  '4XzYndDA5v9yL5LYBq1Jk7ibA5x2ebN8vbSbEAoRrjaG':
    LinkedDocumentsPermissionRevokeRequestedSchema,
  '3How2U6g2sZe3xDCnJGAN96bcbyTabrTio7jEShH6pTh':
    LinkedDocumentsPermissionRevokedSchema,
  '5EWk4G87GuSwimUr67WJ9KQKGeGhSvjx8qMLmrhxzDDD':
    LinkedDocumentsPermissionRevokingInProgressSchema,
  '75CyJPe82hSjV9T2tsir5R3343vhqvG41w2EzFhCp5Y9':
    LinkedDocumentsPermissionSetSchema,
  DFMcBSRfNqK6NqdNLCF8b88soezajjq4gyBS8QRzSBhe:
    LinkedDocumentsPermissionValidatedSchema,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgentSchema,
  '8qXt15h35iHYF2yBcPJ82HzizzZv7iuU2Lu3qorweJfB': MyOSAdminBaseSchema,
  '8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5': MyOSAgentSchema,
  ELnMo95Gduw4zFLakSGqg44AiaP27jEdeg1kMR14TFQN: MyOSAgentActorSchema,
  '4fYuD2ZdTQpm5T6Xtibge9SKkNA8RrvDVmKmArrToQQW': MyOSAgentChannelSchema,
  GiYocGMGQcneiMPm4NH9MxVj7Fr4jwg2BUAMzwZcWRNR: MyOSAgentEventSchema,
  '3WA2ppJtUKib2upsEARBgCNJuHXSqHJjm38uLtZf6dNb': MyOSBalanceAccountSchema,
  '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9':
    MyOSDocumentSessionReferenceSchema,
  '5cg55kgH8ckRVji4oWSBBxthJQFYmB5Lb1Pea7achyNr': MyOSPackageSchema,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU':
    MyOSParticipantsOrchestrationSchema,
  '8CHJQMaaPFCmvSrDfrNWitRCBcMMiUzJFaW42HtH1Thw': MyOSPrincipalActorSchema,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteractionSchema,
  d1vQ8ZTPcQc5KeuU6tzWaVukWRVtKjQL4hbvbpC22rB: MyOSSessionLinkSchema,
  '2gyToM86KgFJpB8inz8TBVEMZk8UVGYdRozF4mfvxtuk': MyOSTimelineSchema,
  HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs: MyOSTimelineChannelSchema,
  F3mQaGQ1B48yMedKZojFTxeKxtee4xU66QBbiyEMvGeZ: MyOSTimelineEntrySchema,
  '6VqxRuWBPVJ8qTBPWxYKaSi5UB3zb8Y9vadtxbsL4vzJ': MyOSUserSchema,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': MyOSWorkerAgencySchema,
  phD9k4YTUgGjWeLPKqXNNn6S1PmqSeBJfVscAnUwFhQ: ParticipantSchema,
  EQhLKv5EAcFriegGYEP7ykwbjeyzFoaTxeizzuTd8VDq: ParticipantActivatedSchema,
  CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB:
    ParticipantActivationStateSchema,
  EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz: ParticipantResolvedSchema,
  GiEwEdvT2jPoT4bK8hvmjTBJUVQqRtHoAejfdpM7HtuD: PaymentInitiationAcceptedSchema,
  EJkmgZa48d3knTpcqxWzu2zo34yWEbVKJVPcyLR7fgGU: PaymentInitiationRejectedSchema,
  '26eFVecG5eovbFVYf7YcdN2bFhuFiNhRFxrCZSBb1H3r':
    PaymentInitiationRequestedSchema,
  GSfJG3nahccpaqXHWBXes8RvNDENL17bz2yXdvn1suRY:
    PaymentTargetPreparationFailedSchema,
  EmMN2rpkHKmaw4Q1THLJAZBAiT7HyXex8RBu1yiapJP5:
    PaymentTargetPreparationRequestedSchema,
  N7tRCfv2oxjN8ncrkPQb8c16CjUdJbM7aWDUJDR1C5k: PaymentTargetPreparedSchema,
  '5GB8C22LsZGR3kkEmP5j5Zye7SR173ojzzUK99tUcoP': PrincipalActorSchema,
  '8PrHr6fcJ1xMyNFptEy2sksyYYuZ48Ypkcnjv4V2WcoD':
    RemovingParticipantRequestedSchema,
  '6efzqM67y1po3YWbsbYSkKW8L41Tx8THeMv1q1TksAmr':
    RemovingParticipantRespondedSchema,
  '5KdjguBmn7AwB9d8tjKxRh4xUHU9T8WDJ4dbaY6qgPvx': SearchContractSchema,
  '9CvxqAMJhqcFoLr5nXSEdWDZUMD383xhJtyFwXsCqD9E': SessionEpochAdvancedSchema,
  FAMQpJfZvF5gJphKzq96Bn2iLuJgMJwMek798cw8LR9D:
    SingleDocumentPermissionGrantRequestedSchema,
  aydjXRi7sz7352Pnbs25ko4cat9w4YnM6LzD5Dtj5T9:
    SingleDocumentPermissionGrantRespondedSchema,
  '9dmquqNvp5f47KPP3bno4t2DujWSjPtgJcEipMVPFNhN':
    SingleDocumentPermissionGrantToAccountSchema,
  BivicTTRkWMt2f9qMqSPgWPEAHyVpAUmBE6xGLt3oVu2:
    SingleDocumentPermissionGrantToDocumentSchema,
  BqWoMewDiK6GgMVDXeBuPwWL3ka9DadzKu59uU51ZjW3:
    SingleDocumentPermissionGrantedSchema,
  '4zC5mdSWymTamZVoQXDMCrFRTARef3RJM49gCSCuBv6F':
    SingleDocumentPermissionGrantingInProgressSchema,
  '567voUMtKJQoqru6ZVPYb4EGwdeV99rUSAqsnod7gqfd':
    SingleDocumentPermissionInvalidSchema,
  LaiT21WCsXzGorJ1dDsQ37dP2UtefPxNEwAA81W11WK:
    SingleDocumentPermissionRejectedSchema,
  '53Kbf5fymxzBCJgf5BdCYCjCb6o5nWS1KWCzL8GkBF42':
    SingleDocumentPermissionRevokeRequestedSchema,
  '29JSV8DwY6x3zfvAqiM7xNc96i46sKcunFYgfywBkF2f':
    SingleDocumentPermissionRevokedSchema,
  CrRfT3MFQneNo99nfdhfgnTKF4fmKtSQEUQN8wTTbnjF:
    SingleDocumentPermissionRevokingInProgressSchema,
  '5cZ3J1QiMJEJV4FV5kfSkeG2oJmweWCyJo3v2TSc3Xuw':
    SingleDocumentPermissionSetSchema,
  AG6fiGy88gX5eKoUcHS2BV17EfMssiYZj99kx9RcpKEX:
    SingleDocumentPermissionValidatedSchema,
  '3f9PA4RUDBxs6DsqGEYjna2RNf8XhCDHjQGDjLyNZyRh':
    StartWorkerSessionRequestedSchema,
  BnrAcFrEHzoARE2yqKmRv7jrPWCbJsVBqSoXwWCaTtrk:
    SubscribeToSessionRequestedSchema,
  S1gzGs6z9uy5inkcJu5wr6i5ESKDmZy9XhgLHMZKrdV:
    SubscriptionToSessionFailedSchema,
  '4sJYYU5tjqKy43Mbe1Mt5WKfaynHs9rTj3QGAvTAZkM6':
    SubscriptionToSessionInitiatedSchema,
  GcotFgiqo3GMHp4xKrArDJi7AqciJGgYKvHodoAJwcWp:
    SubscriptionToSessionRevokedSchema,
  '2gc8djtKGGRPjGfMQzvJZMviaXm4ytM1nA4DVbfyjkrW': SubscriptionUpdateSchema,
  FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p:
    TargetDocumentSessionStartedSchema,
  EKPgicPVdFxx8X4ZBsnx7mT387M3VXDeMjSBnmAreUsS: WorkerAgencyPermissionSchema,
  CoyRC9eUW32e9MdSPy1xdGd4XgRMqBmPSsRe8hwiCJbF:
    WorkerAgencyPermissionGrantSchema,
  '5S64KLDcXLiHWsYP6EGpfANZQsvTH3APsWqqy7D3qqJN':
    WorkerAgencyPermissionGrantRequestedSchema,
  BwYenFh5yEbjEW6FdBzYu2hCkUxGyBW6JJguusvtd5ut:
    WorkerAgencyPermissionGrantedSchema,
  H4Yn9qiBncFkvBArAjWfqPTSdbiijm4MU74inx1o5eDL:
    WorkerAgencyPermissionGrantingInProgressSchema,
  '29zvV2MA4XAwLoGoNLLhLMa61mEgGceFnDvMznfQauYY':
    WorkerAgencyPermissionInvalidSchema,
  HdRkyKgsk74k3QKBxnuy4iWn5u7Pf4wHY3nyJgGZd7jz:
    WorkerAgencyPermissionRejectedSchema,
  '5sLtygzt8kxjzDwJLjVcSZj5GCXFyUXKuXxF8UFjfmm7':
    WorkerAgencyPermissionRevokeRequestedSchema,
  AMNPp7uGYBgygbnmMS649m6Gf5bNULaEK8aSQ3b4xdrf:
    WorkerAgencyPermissionRevokedSchema,
  '2xkX43Z7tML7KXJgHp5C7W2W465aGckp3jBVW37GyZqz':
    WorkerAgencyPermissionRevokingInProgressSchema,
  GMDw72G9CRTJU12Rce9BDWGw8f715RJrWvPL78RYDWH4:
    WorkerAgencyPermissionValidatedSchema,
  '3B7ErHwZ9NHiW4e6msFDt57U8sTvFXZQBEwHzcdNCjmf': WorkerSessionStartingSchema,
} as const;
