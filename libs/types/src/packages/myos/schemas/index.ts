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
import { DocumentAnchorSchema } from './DocumentAnchor';
import { DocumentAnchorsSchema } from './DocumentAnchors';
import { DocumentInitialSnapshotRequestedSchema } from './DocumentInitialSnapshotRequested';
import { DocumentInitialSnapshotResolvedSchema } from './DocumentInitialSnapshotResolved';
import { DocumentInitialSnapshotUnresolvedSchema } from './DocumentInitialSnapshotUnresolved';
import { DocumentLinkSchema } from './DocumentLink';
import { DocumentLinksSchema } from './DocumentLinks';
import { DocumentSessionBootstrapSchema } from './DocumentSessionBootstrap';
import { DocumentTypeLinkSchema } from './DocumentTypeLink';
import { LinkSchema } from './Link';
import { LLMAgentSchema } from './LLMAgent';
import { MyOSAdminActorSchema } from './MyOSAdminActor';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { MyOSAgentSchema } from './MyOSAgent';
import { MyOSAgentActorSchema } from './MyOSAgentActor';
import { MyOSAgentChannelSchema } from './MyOSAgentChannel';
import { MyOSAgentEventSchema } from './MyOSAgentEvent';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
import { MyOSDocumentBootstrapMandateSchema } from './MyOSDocumentBootstrapMandate';
import { MyOSDocumentOperationMandateSchema } from './MyOSDocumentOperationMandate';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';
import { MyOSOperationCallRequestedSchema } from './MyOSOperationCallRequested';
import { MyOSParticipantsOrchestrationSchema } from './MyOSParticipantsOrchestration';
import { MyOSSessionInteractionSchema } from './MyOSSessionInteraction';
import { MyOSSessionLinkSchema } from './MyOSSessionLink';
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
export { DocumentAnchorSchema } from './DocumentAnchor';
export { DocumentAnchorsSchema } from './DocumentAnchors';
export { DocumentInitialSnapshotRequestedSchema } from './DocumentInitialSnapshotRequested';
export { DocumentInitialSnapshotResolvedSchema } from './DocumentInitialSnapshotResolved';
export { DocumentInitialSnapshotUnresolvedSchema } from './DocumentInitialSnapshotUnresolved';
export { DocumentLinkSchema } from './DocumentLink';
export { DocumentLinksSchema } from './DocumentLinks';
export { DocumentSessionBootstrapSchema } from './DocumentSessionBootstrap';
export { DocumentTypeLinkSchema } from './DocumentTypeLink';
export { LinkSchema } from './Link';
export { LLMAgentSchema } from './LLMAgent';
export { MyOSAdminActorSchema } from './MyOSAdminActor';
export { MyOSAdminBaseSchema } from './MyOSAdminBase';
export { MyOSAgentSchema } from './MyOSAgent';
export { MyOSAgentActorSchema } from './MyOSAgentActor';
export { MyOSAgentChannelSchema } from './MyOSAgentChannel';
export { MyOSAgentEventSchema } from './MyOSAgentEvent';
export { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
export { MyOSDocumentBootstrapMandateSchema } from './MyOSDocumentBootstrapMandate';
export { MyOSDocumentOperationMandateSchema } from './MyOSDocumentOperationMandate';
export { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';
export { MyOSOperationCallRequestedSchema } from './MyOSOperationCallRequested';
export { MyOSParticipantsOrchestrationSchema } from './MyOSParticipantsOrchestration';
export { MyOSSessionInteractionSchema } from './MyOSSessionInteraction';
export { MyOSSessionLinkSchema } from './MyOSSessionLink';
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
  FoJDXJsUjhiDU8pVxF7TzxE3qh1EvLKyoHQG41WaTTGB:
    AddingParticipantRespondedSchema,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': AgentSchema,
  BiV8zZSESjpgVqjsEXNYuzk54PUZYp69UtQhxrxK3vYC: AllParticipantsReadySchema,
  GiwuMm3gtbi79CVSUtHGZmpUnQma7EK6A17G9PRmh6jK: BootstrapFailedSchema,
  GacCAN4FEa7u3e7Qmm9997PYHwHmkGDCnSdYEfAVcZxh: CallOperationAcceptedSchema,
  FFXVAea2mRHoJq3PRdmz5cXG8eETqx4yr5KCbeTxhEqB: CallOperationFailedSchema,
  '5ch42xshMboo9SpPrrnAHgm7z9GogVwBDeZNQpiKiyBo': CallOperationRequestedSchema,
  AnkvQ2ms9RnPXMfQUP37VP8Gs8MZsSiM72yjWv2DU38c: CallOperationRespondedSchema,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: DocumentAnchorSchema,
  '6LzxLRpgV6a2HEZ98LXXF55BsfsTE8ChXghCZGBSJYSF': DocumentAnchorsSchema,
  '8mzqf9vHdE91umxWwnGEdrPwCQ7Swb1RW2M6Ja3AFJoi':
    DocumentInitialSnapshotRequestedSchema,
  '3bWvNkMNpan2ofiptgtBQidFtwhUAjdZUx9Eo1Hns3u2':
    DocumentInitialSnapshotResolvedSchema,
  '2oWDimMA574XdPA5QFDSPETcU8HzpycEKRseE6CUhred':
    DocumentInitialSnapshotUnresolvedSchema,
  CfdjCV1cjPJCd5sBHLMzNUx3EtkgrmBekLxB5c9Qw1Qh: DocumentLinkSchema,
  HrFwCVPZz2sNinVETY4mk2sLLziGQWejTU2eWjxcUuuX: DocumentLinksSchema,
  '5ZaWtZY29h6mm6KGKJsxcfDLF3TMS3XgFVJ7nxwZgDLB':
    DocumentSessionBootstrapSchema,
  '5z86Uk79T94VasXdy6RSWjZqVUmiEfwGVWrkGc9ZooLm': DocumentTypeLinkSchema,
  '6EvULvymCkDo8S9SjWgvzB24sbqZotJo5opNqH7dNThP': LinkSchema,
  DL73vQGQGdEFA53shnv58CkVJVVs5P5Hygc5qNghY5Zf: LLMAgentSchema,
  '4eDC5moi1FwZaHkkdXLF9he1SGz2gWWNJArNKGYreksm': MyOSAdminActorSchema,
  '8ggQTWRSXKFTH3H8iqp4ff7NTFvFJn5ZNDWCHcxaxpbq': MyOSAdminBaseSchema,
  '6Fxxx58U6WKzA4WQPCLPmMMCCEb9QLFYdb8yMLZDVdXL': MyOSAgentSchema,
  C2Fyt8obT6QR8WWFCPF5G36VXZLwzaM1SLtMKKAp4pwd: MyOSAgentActorSchema,
  '2YzZXsXxQSeCKZ4Qrptrdrf9gy4Hwrfdvh8gpakpnDBL': MyOSAgentChannelSchema,
  BsNKTXtCKag31WrdujJg7PSqD4rWg9b57DqHPq14Tpn7: MyOSAgentEventSchema,
  '9aVaJJvfRrGjLZ55HbKbrd4AUgA9RmjEUCxtfCtqodM9': MyOSBalanceAccountSchema,
  JA8Yi7KW2jjDqqExAbWbCCfZw2mu8Q7VXwEvMHVezusF:
    MyOSDocumentBootstrapMandateSchema,
  C7dtw8ZHpD93BBpL528WPq8W4xWvjnUisH9Ew8SQQ6fW:
    MyOSDocumentOperationMandateSchema,
  '3FcyLzeWjTqmYYg1Tmqu2en4SKfYbCFn8Shf3gDxo9xK':
    MyOSDocumentSessionReferenceSchema,
  '8fSvEL47NFBSYEFSRNfDpx6qWXHr1T6bNfimrcZ1JR9w':
    MyOSOperationCallRequestedSchema,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU':
    MyOSParticipantsOrchestrationSchema,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: MyOSSessionInteractionSchema,
  '8WDRmnnsa796qcz2VcYNiua5xdH8BFXbKq94NxUYviyE': MyOSSessionLinkSchema,
  V7YKW41NsJsw4oKxGvwzdkJXZg2wDjsKTFnF6L6GmEp:
    MyOSSessionSubscriptionEndedSchema,
  '6fj4VDzQZwkBBPsYP4DGeSPbnHCQmX11PG3Vtk9pLRMF':
    MyOSSessionSubscriptionFilterSchema,
  '4zjwHNN6UDSevHfuz264WsyWNSsRc2bC25KpXU4d988B':
    MyOSSessionSubscriptionMandateSchema,
  '1mEVkutZ851ZTcXPnhC44vg9cgzZj31NfU99KvbYq98':
    MyOSSessionSubscriptionRequestedSchema,
  BGhd3kZMEMd8Yv8nqnqfLngaUEAn5WkbPjPsS6o3U7mg:
    MyOSSessionSubscriptionStartedSchema,
  EkNokZ4svfJ4Xhza5qNxm285pcRHXhZvA97KZKYf8cyb:
    MyOSSessionSubscriptionUpdateSchema,
  '2kJTAf7L1FMGBqa7tez6qXw3kPfghbjwmiWzKWVCMYw3': MyOSTimelineSchema,
  FS7n5P3nfsuB2TiKFaYRHPukiHGw1vxTPRwMfPZoNgvH: MyOSTimelineChannelSchema,
  Cw952SXno2SWR9HL8EwUxWGeioRjxHjCd7G7uFAwC9kN: MyOSUserSchema,
  BDWxt7xTGsK2mZKinCxD4hENHUUfEtupZPtaYzwLmKJm: ParticipantSchema,
  AegvYi855FTYVE4WJ5pbUaF3LzNFsM71cpkwVbQ6yQYA: ParticipantActivatedSchema,
  ASa82RtPSXwdys7M5Xs5s3brTjYgJmQqJt2uyraQGrNA:
    ParticipantActivationStateSchema,
  '3cujh2pNfS1bvc1L5eWhLaaeBepXjByWZ75XF5erArKU': ParticipantResolvedSchema,
  '2B5GfyYAMpB2qa9AebDQCyorMi311v8bZLjXn6fsDPPw': PaymentInitiatedSchema,
  GLKfKi29WiEb2Hq87Zj6hfJXXV6TpDXtGprdpNbk2dxq: PaymentInitiationAcceptedSchema,
  FLozmcCXEUsKNT86fixLbrdy9Dy4yn7jn6eftQuHpK8B: PaymentInitiationRejectedSchema,
  GDdBCk7v1URZXU6fpno5UhKkLZQzniaQ3of83Wr5yQVM:
    PaymentInitiationRequestedSchema,
  HKvJdxfZDY7agMAH8Z5pjhd4iB8mrTNRRhG1QEnEFRgd:
    PaymentTargetPreparationFailedSchema,
  '2WpHsa3QF9eZttnm7jb3k7t3CEbz7iJKYjCMS7h4Ps7Z':
    PaymentTargetPreparationRequestedSchema,
  EZQPqDj5iDyHzM6DQE11Z2NwcPNSPx34v9SMyXsrwe6h: PaymentTargetPreparedSchema,
  BeUkW9h7yKH5DBgzTjF52u4PwYu9J9EmLZ5WaYZWnZuB: PrincipalActorSchema,
  BcSFAt3ZtG3CdpNzKUKBodvz9cux8kwtbNNNPrrhYSja:
    RemovingParticipantRequestedSchema,
  HV36fBXcdWce4WhfG6dxSZmtRMQoNaNLNpHgxc2PakuN:
    RemovingParticipantRespondedSchema,
  ACDXskXQ1cmM9uN8UCRKgH7fEHzqUW5XzyjKgsxgdujs: SearchContractSchema,
  '7WJnGdq3txEhXb6P2vXLAMUhPBCWQzHsz416cDfKGcUm': SessionEpochAdvancedSchema,
  GjCreNEXcoBSwyXnWtXbtDMJdtm9nKo8MJeVpn3633WC:
    SubscribeToSessionRequestedSchema,
  FqL1t69VjbKdAmffjxV5o1dAJooKyQ6vxdpsmbavFFia:
    SubscriptionToSessionFailedSchema,
  FdzN1H5Qe7CRbcXVeqD7PfJJ5TH6cxgHd3FRcNjvRJzk:
    SubscriptionToSessionInitiatedSchema,
  BzThvgTJD2zLX2wLFToLFRgs5KUvw7x3shCsmyxJ54pP:
    SubscriptionToSessionRevokedSchema,
  '8afv356wxUZxou95jDEYEgp5dL6VmnpFmYUjx3aDuFXi': SubscriptionUpdateSchema,
  J9a8qD8javfYK6nRDq9YZRA8LDuzZzq7QS7DB73Pm4Lv:
    TargetDocumentSessionStartedSchema,
};
