import type { ZodTypeAny } from 'zod';
import { AcceptChangeOperationSchema } from './AcceptChangeOperation';
import { ActorSchema } from './Actor';
import { ActorPolicySchema } from './ActorPolicy';
import { AgentActorSchema } from './AgentActor';
import { APICallSchema } from './APICall';
import { BrowserSessionSchema } from './BrowserSession';
import { ChangeOperationSchema } from './ChangeOperation';
import { ChangeRequestSchema } from './ChangeRequest';
import { ChatMessageSchema } from './ChatMessage';
import { CompositeTimelineChannelSchema } from './CompositeTimelineChannel';
import { ComputeSchema } from './Compute';
import { ComputeDefinitionSchema } from './ComputeDefinition';
import { ContractsChangePolicySchema } from './ContractsChangePolicy';
import { CustomerActionRequestedSchema } from './CustomerActionRequested';
import { CustomerActionRespondedSchema } from './CustomerActionResponded';
import { CustomerConsentRevokedSchema } from './CustomerConsentRevoked';
import { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
import { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
import { DocumentBootstrapRequestedSchema } from './DocumentBootstrapRequested';
import { DocumentBootstrapRespondedSchema } from './DocumentBootstrapResponded';
import { DocumentRequestSchema } from './DocumentRequest';
import { DocumentSectionSchema } from './DocumentSection';
import { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';
import { DocumentSectionChangesSchema } from './DocumentSectionChanges';
import { DocumentStatusSchema } from './DocumentStatus';
import { EventSchema } from './Event';
import { InformUserAboutPendingActionSchema } from './InformUserAboutPendingAction';
import { LifecycleEventSchema } from './LifecycleEvent';
import { OperationSchema } from './Operation';
import { OperationRequestSchema } from './OperationRequest';
import { PrincipalActorSchema } from './PrincipalActor';
import { ProposeChangeOperationSchema } from './ProposeChangeOperation';
import { ProposedChangeInvalidSchema } from './ProposedChangeInvalid';
import { RejectChangeOperationSchema } from './RejectChangeOperation';
import { RequestSchema } from './Request';
import { ResponseSchema } from './Response';
import { SequentialWorkflowSchema } from './SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';
import { SourceSchema } from './Source';
import { StatusChangeSchema } from './StatusChange';
import { StatusCompletedSchema } from './StatusCompleted';
import { StatusFailedSchema } from './StatusFailed';
import { StatusInProgressSchema } from './StatusInProgress';
import { StatusPendingSchema } from './StatusPending';
import { TimelineSchema } from './Timeline';
import { TimelineChannelSchema } from './TimelineChannel';
import { TimelineEntrySchema } from './TimelineEntry';
import { TriggerEventSchema } from './TriggerEvent';
import { UpdateDocumentSchema } from './UpdateDocument';

export { AcceptChangeOperationSchema } from './AcceptChangeOperation';
export { ActorSchema } from './Actor';
export { ActorPolicySchema } from './ActorPolicy';
export { AgentActorSchema } from './AgentActor';
export { APICallSchema } from './APICall';
export { BrowserSessionSchema } from './BrowserSession';
export { ChangeOperationSchema } from './ChangeOperation';
export { ChangeRequestSchema } from './ChangeRequest';
export { ChatMessageSchema } from './ChatMessage';
export { CompositeTimelineChannelSchema } from './CompositeTimelineChannel';
export { ComputeSchema } from './Compute';
export { ComputeDefinitionSchema } from './ComputeDefinition';
export { ContractsChangePolicySchema } from './ContractsChangePolicy';
export { CustomerActionRequestedSchema } from './CustomerActionRequested';
export { CustomerActionRespondedSchema } from './CustomerActionResponded';
export { CustomerConsentRevokedSchema } from './CustomerConsentRevoked';
export { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
export { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
export { DocumentBootstrapRequestedSchema } from './DocumentBootstrapRequested';
export { DocumentBootstrapRespondedSchema } from './DocumentBootstrapResponded';
export { DocumentRequestSchema } from './DocumentRequest';
export { DocumentSectionSchema } from './DocumentSection';
export { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';
export { DocumentSectionChangesSchema } from './DocumentSectionChanges';
export { DocumentStatusSchema } from './DocumentStatus';
export { EventSchema } from './Event';
export { InformUserAboutPendingActionSchema } from './InformUserAboutPendingAction';
export { LifecycleEventSchema } from './LifecycleEvent';
export { OperationSchema } from './Operation';
export { OperationRequestSchema } from './OperationRequest';
export { PrincipalActorSchema } from './PrincipalActor';
export { ProposeChangeOperationSchema } from './ProposeChangeOperation';
export { ProposedChangeInvalidSchema } from './ProposedChangeInvalid';
export { RejectChangeOperationSchema } from './RejectChangeOperation';
export { RequestSchema } from './Request';
export { ResponseSchema } from './Response';
export { SequentialWorkflowSchema } from './SequentialWorkflow';
export { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';
export { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';
export { SourceSchema } from './Source';
export { StatusChangeSchema } from './StatusChange';
export { StatusCompletedSchema } from './StatusCompleted';
export { StatusFailedSchema } from './StatusFailed';
export { StatusInProgressSchema } from './StatusInProgress';
export { StatusPendingSchema } from './StatusPending';
export { TimelineSchema } from './Timeline';
export { TimelineChannelSchema } from './TimelineChannel';
export { TimelineEntrySchema } from './TimelineEntry';
export { TriggerEventSchema } from './TriggerEvent';
export { UpdateDocumentSchema } from './UpdateDocument';

export const schemas: Record<string, ZodTypeAny> = {
  GTLbwh5uUUHSoxVv6NcUneYmoryfPSBbcFejj9UX96Nt: AcceptChangeOperationSchema,
  CFPWz2TX7a1xq6xZYnx93Cu7MqEdMzumr3Zgnx6TrVtd: ActorSchema,
  '4cT4usY9ogaFS93DnWrM3uL4orD6VEtNaDVTmPwvSkYM': ActorPolicySchema,
  HokwnQS9btAnSkJ4CuTqydH98mtsYj1SnCGTrRQh47Rw: AgentActorSchema,
  '7Dt3HSHtcQGwkooCctWByNL1mgZnNfAnw2s8BHRx9vDK': APICallSchema,
  Xh1LE67PgvpB6S9cRoGLkCsYSc6c1uCxqmp5oMfDxXE: BrowserSessionSchema,
  HvZZ3XFVNQvq8ca5XLrMmkwHZrDUTz68dstkAQHU3Aj4: ChangeOperationSchema,
  Em6YA77iVnnRaScCrkZr9C9VkQF14i2pk5fA8KNiHS41: ChangeRequestSchema,
  '8ffEpcuZ7V1xnrxaW4PFTjBTfKKB6dxVF9HHoc5HqBM1': ChatMessageSchema,
  ByQY8CFbj5JVoSuoutRmG5wJWfvAidg7q83zsQ3GTgD4: CompositeTimelineChannelSchema,
  MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ: ComputeSchema,
  '7PXuvwLmdB8SaN8AYzL9rRE5cPsGJ7tbTn3iZxsisQnH': ComputeDefinitionSchema,
  '2NyPMQjBh9LPugCWq8bAyvsisd6WWhCBQBXyuJswjvPR': ContractsChangePolicySchema,
  '4GCPHTfduFn3xD6KZuRqS1qEG4mA6Ro3Eey3GKB1VCa3': CustomerActionRequestedSchema,
  DDMHvqmyKrM1PHesWV3rYU454viEkYpzNkywt3fobj9M: CustomerActionRespondedSchema,
  FGgYcn3phzJUoBfDJzV1QxeGKGbaH7zUEj1trRbBpmmJ: CustomerConsentRevokedSchema,
  G7uhpNRg1akaZN1TMYdxbrYsdk324G4KjLDvP671ULmK:
    DocumentBootstrapCompletedSchema,
  Abuh2wgFh9xPrSuSixT2K7upS9cQVp9YpveABuTKJgg4: DocumentBootstrapFailedSchema,
  DRKHv2QVLQneubWYELKCoHcfen76T7KxDk5pdCT9w8Bw:
    DocumentBootstrapRequestedSchema,
  '3LwvmEfS1ojewVrqihmAHYSduHmwQsSfeg8fQZnqM9wQ':
    DocumentBootstrapRespondedSchema,
  '77wa49Ro2LrktFQGrTGvJw1sRLV2wbrybikJHQA1QRuc': DocumentRequestSchema,
  EQipmtzeTjY7JhgBQWWAhsjBAXsTT2SDu2gv1rXeXSpb: DocumentSectionSchema,
  FZcw2teui9fx29nn8eSX9YiePZPxfWPJYCjnyVX1iWc1:
    DocumentSectionChangeEntrySchema,
  '3WUHev4EbhT1WUTikdZTPaXnapwvgmepVfV3KzYwJDzh': DocumentSectionChangesSchema,
  QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX: DocumentStatusSchema,
  '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z': EventSchema,
  '6NYHvtkmfNakoMEpb1ECFBiC2gmQqaD45DXfuTFEGC4Y':
    InformUserAboutPendingActionSchema,
  HjjcpRqJHBk3gjiyrNNmBPhcpXdnAzU7UfsG2CAR5yMZ: LifecycleEventSchema,
  '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr': OperationSchema,
  '6MWZuzuavJuh9FiPJBN7mgVmAVH8buKN2vRdmm5NjF4T': OperationRequestSchema,
  QpJs5D2xRNzmEqXvra312z1fXkyyJehdJUs4ZTwUnD3: PrincipalActorSchema,
  vWt8Hw4xjk6KuL6uz9726d9xazaKvYWAthdAyXH4by8: ProposeChangeOperationSchema,
  '8oEU9ysLsGJJeeCDsEgnHbyu8vuWTwogExHmNc7t512n': ProposedChangeInvalidSchema,
  '9EdyRb2ssCWhbc1uoNxpS1fygKwSz6392vd8tMhcGcEt': RejectChangeOperationSchema,
  '3PWiqPYvDfSrPGh1YnuRPGjaXL7YytfBcgfrn9WydqCg': RequestSchema,
  '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX': ResponseSchema,
  '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz': SequentialWorkflowSchema,
  B5mVH4caQv9Hmzeb5ZmCtzYomooFzTdoCQ4mZVwHY3MS:
    SequentialWorkflowOperationSchema,
  '99AomnUQTnL52YVYXwEbGNeKnV6u1cjm73xLFSAt7mwe': SequentialWorkflowStepSchema,
  '52ECLkcYGohcQEaora7hAbd5ve7Uz85DjE2nEARr55Lk': SourceSchema,
  GXbF9ycv87y69kutDUmACbmeme7dGBSPw47fMQefvDPx: StatusChangeSchema,
  Pzdwn6mQJT2qFDaF4V1dzpcyu4ejRqDv8neLPnbHRGi: StatusCompletedSchema,
  Fh7VjkS1XTg9BzQWBQrvD9ePLUEZVR86FAhVbttw1Wxs: StatusFailedSchema,
  E6jaeVfFuyjB4YEZyp7fvUt8AJ7BmKr8WAM9oGDmhMbM: StatusInProgressSchema,
  Gqcw51QJT9NStqo2ka3E76tQ8UZie33F4yqdjwskav79: StatusPendingSchema,
  DFycCEHaAuMXptCMxQ4N5M1UW2yyddgi5xa3TPWDTNAZ: TimelineSchema,
  Dt8xNecxDiSYZAcmpWjPJhFwWMZ2gwgdLKK5wVE8566n: TimelineChannelSchema,
  '6ckC9avECT39tVTZ3iiKC1wRPAmxiS92bZuji4pANZCw': TimelineEntrySchema,
  '3Rgcf7G716Y9JhCov4m72m53tqpv3yDpzcBwGrxUaQSJ': TriggerEventSchema,
  FuD8hYGXvwBJGBzXhFB6DVtWHawt8hbpM6yT94H4p7cZ: UpdateDocumentSchema,
};
