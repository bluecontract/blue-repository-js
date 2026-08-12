import type { ZodTypeAny } from 'zod';
import { ActorSchema } from './Actor';
import { ActorPolicySchema } from './ActorPolicy';
import { AgentActorSchema } from './AgentActor';
import { AllTimelinesChannelSchema } from './AllTimelinesChannel';
import { APICallSchema } from './APICall';
import { AuthoritySchema } from './Authority';
import { BrowserSessionSchema } from './BrowserSession';
import { ChatMessageSchema } from './ChatMessage';
import { ChatWorkflowOperationSchema } from './ChatWorkflowOperation';
import { CompositeTimelineChannelSchema } from './CompositeTimelineChannel';
import { ComputeSchema } from './Compute';
import { ComputeDefinitionSchema } from './ComputeDefinition';
import { CustomerActionRequestedSchema } from './CustomerActionRequested';
import { CustomerActionRespondedSchema } from './CustomerActionResponded';
import { CustomerConsentRevokedSchema } from './CustomerConsentRevoked';
import { DocumentAnchorSchema } from './DocumentAnchor';
import { DocumentAnchorsSchema } from './DocumentAnchors';
import { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
import { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
import { DocumentBootstrapRespondedSchema } from './DocumentBootstrapResponded';
import { DocumentLinkSchema } from './DocumentLink';
import { DocumentLinksSchema } from './DocumentLinks';
import { DocumentRequestSchema } from './DocumentRequest';
import { DocumentStatusSchema } from './DocumentStatus';
import { EventSchema } from './Event';
import { InformUserAboutPendingActionSchema } from './InformUserAboutPendingAction';
import { LifecycleEventSchema } from './LifecycleEvent';
import { MessageSchema } from './Message';
import { OperationSchema } from './Operation';
import { OperationRequestSchema } from './OperationRequest';
import { ParticipantPurposeSchema } from './ParticipantPurpose';
import { PrincipalActorSchema } from './PrincipalActor';
import { PurposeStatementSchema } from './PurposeStatement';
import { RequestSchema } from './Request';
import { ResponseSchema } from './Response';
import { SequentialWorkflowSchema } from './SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';
import { SourceSchema } from './Source';
import { StatusSchema } from './Status';
import { StatusChangeSchema } from './StatusChange';
import { StatusCompletedSchema } from './StatusCompleted';
import { StatusDeclinedSchema } from './StatusDeclined';
import { StatusFailedSchema } from './StatusFailed';
import { StatusInProgressSchema } from './StatusInProgress';
import { StatusPendingSchema } from './StatusPending';
import { TerminateProcessingSchema } from './TerminateProcessing';
import { TimelineSchema } from './Timeline';
import { TimelineChannelSchema } from './TimelineChannel';
import { TimelineEntrySchema } from './TimelineEntry';
import { TriggerEventSchema } from './TriggerEvent';
import { UpdateDocumentSchema } from './UpdateDocument';

export { ActorSchema } from './Actor';
export { ActorPolicySchema } from './ActorPolicy';
export { AgentActorSchema } from './AgentActor';
export { AllTimelinesChannelSchema } from './AllTimelinesChannel';
export { APICallSchema } from './APICall';
export { AuthoritySchema } from './Authority';
export { BrowserSessionSchema } from './BrowserSession';
export { ChatMessageSchema } from './ChatMessage';
export { ChatWorkflowOperationSchema } from './ChatWorkflowOperation';
export { CompositeTimelineChannelSchema } from './CompositeTimelineChannel';
export { ComputeSchema } from './Compute';
export { ComputeDefinitionSchema } from './ComputeDefinition';
export { CustomerActionRequestedSchema } from './CustomerActionRequested';
export { CustomerActionRespondedSchema } from './CustomerActionResponded';
export { CustomerConsentRevokedSchema } from './CustomerConsentRevoked';
export { DocumentAnchorSchema } from './DocumentAnchor';
export { DocumentAnchorsSchema } from './DocumentAnchors';
export { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
export { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
export { DocumentBootstrapRespondedSchema } from './DocumentBootstrapResponded';
export { DocumentLinkSchema } from './DocumentLink';
export { DocumentLinksSchema } from './DocumentLinks';
export { DocumentRequestSchema } from './DocumentRequest';
export { DocumentStatusSchema } from './DocumentStatus';
export { EventSchema } from './Event';
export { InformUserAboutPendingActionSchema } from './InformUserAboutPendingAction';
export { LifecycleEventSchema } from './LifecycleEvent';
export { MessageSchema } from './Message';
export { OperationSchema } from './Operation';
export { OperationRequestSchema } from './OperationRequest';
export { ParticipantPurposeSchema } from './ParticipantPurpose';
export { PrincipalActorSchema } from './PrincipalActor';
export { PurposeStatementSchema } from './PurposeStatement';
export { RequestSchema } from './Request';
export { ResponseSchema } from './Response';
export { SequentialWorkflowSchema } from './SequentialWorkflow';
export { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';
export { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';
export { SourceSchema } from './Source';
export { StatusSchema } from './Status';
export { StatusChangeSchema } from './StatusChange';
export { StatusCompletedSchema } from './StatusCompleted';
export { StatusDeclinedSchema } from './StatusDeclined';
export { StatusFailedSchema } from './StatusFailed';
export { StatusInProgressSchema } from './StatusInProgress';
export { StatusPendingSchema } from './StatusPending';
export { TerminateProcessingSchema } from './TerminateProcessing';
export { TimelineSchema } from './Timeline';
export { TimelineChannelSchema } from './TimelineChannel';
export { TimelineEntrySchema } from './TimelineEntry';
export { TriggerEventSchema } from './TriggerEvent';
export { UpdateDocumentSchema } from './UpdateDocument';

export const schemas: Record<string, ZodTypeAny> = {
  GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7: ActorSchema,
  '2Lv5hXwg5kuiz6553v6x54RZ13CmnU2ameN4Dv5P87Df': ActorPolicySchema,
  HooLPpmtC3Rf6jJ2eGGr4SyBbi2XYPzYBm4UpuzYke6D: AgentActorSchema,
  BXrf1Yd17giWBF41wZBqkZDczMMwqb64r9dBArweYuxT: AllTimelinesChannelSchema,
  '5tLUE25DSPGgtQtYVTYYskg3Ppz1DQwLqXqyedHebWvT': APICallSchema,
  '5BrNKcZDq6q4UY1jQpjyeFjbTV6rxVKM9qNL5xzGMZRW': AuthoritySchema,
  '3Po1wgu2yeXWQGMncYqhDFAd39MkqQR5JG8sJqntzmoX': BrowserSessionSchema,
  '2n7NRp1ia8woKAsWbyB6dBjnfEXmtTd7C5VQVmYcGe4i': ChatMessageSchema,
  HEsvBsA9jjaozbhgbqiG8mgGvn9NPrat2q2fe1Lmd3fe: ChatWorkflowOperationSchema,
  '3Q53ttkVniDP3jYGstwhmX7Yu12qMqNaG1bfCYzcmg2Q':
    CompositeTimelineChannelSchema,
  '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ': ComputeSchema,
  H4tutBkZAgxJsEDyjDohkZk7dcGxXQqwHMEzVkyh3U9n: ComputeDefinitionSchema,
  FuGWQ4hVCRPRxhZopsnBN78Q1DhRTsjjvn4HPvunf4vz: CustomerActionRequestedSchema,
  '5A3hFd3Nn6Ybw8Y2tbptSTJmzefxqn6KjddPpz7gaFHP': CustomerActionRespondedSchema,
  BffmfCSM6r3GgrQU9XK3Qaj83gw4H8rfa1N7gXuab1ma: CustomerConsentRevokedSchema,
  '7PxEJAVDRqGFU2t6TFeqimEKfddFVGN1mAWTAsWmXix': DocumentAnchorSchema,
  HhGmdUeYu4H3B4pfgTNkwweuUqQ1bJ4YPNdcjC42K6bw: DocumentAnchorsSchema,
  '7bnJ5SN41w57FyfH7nWDgUHGvHSVwD3yvG9daxKG2qLM':
    DocumentBootstrapCompletedSchema,
  APkiWwEmTVzMywigk6za5j7Pzqhm8xKKwdvhjeVL8r6C: DocumentBootstrapFailedSchema,
  CVhognoRjhyTbQRLwqFshRWisS8bkHwwRu225Ub38qF2:
    DocumentBootstrapRespondedSchema,
  GiN4bMpY9GSFE75wq7GJ74UHKzNQNG1efjG4cEYgqDAc: DocumentLinkSchema,
  '6gDWgnpAB3fokav3yEu1SSYzWGi22sCWsfdyT6oK75rw': DocumentLinksSchema,
  '8SXKDBF7Gmzcn9BwH3GxwUJMBCm8P7QJmXNyJpyreNUF': DocumentRequestSchema,
  '9Q7nZyiFKJyzxH6c6EWHsHsqQ8arUYtyrAUgwv9paoxe': DocumentStatusSchema,
  ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5: EventSchema,
  CVBPRqppe6uUhBQMcw8SVxqLwjBX7TwufMHwoCjnAqFv:
    InformUserAboutPendingActionSchema,
  '9hcgdYgUJCreSiiSnEMVAXsf7iWui13JW96gfwauA73J': LifecycleEventSchema,
  '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3': MessageSchema,
  '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv': OperationSchema,
  '93PyhYJyekVeSvQcFi5u8moU5fbfKcbD68BCRtzE8ZLz': OperationRequestSchema,
  G7vGqUk9UjRUaRCj3zi3X5k1Z5EJ2N7bV3jaSoMaSPG3: ParticipantPurposeSchema,
  '23cWKG6LF47H1G3EfhV5dmEYtxkNaqLWgFDxEurdc6Ef': PrincipalActorSchema,
  AXWMYkUJbn6Xay3iGrikuCSYyPoB7PBCZjFGtzotz4Xf: PurposeStatementSchema,
  '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU': RequestSchema,
  '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr': ResponseSchema,
  HGVWruAeRNXH8kjHbo7cW24PeJuD8hNZa8ZZBDqdVYaX: SequentialWorkflowSchema,
  '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V':
    SequentialWorkflowOperationSchema,
  '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev': SequentialWorkflowStepSchema,
  Qm35f9xFUH84i745uPMj5jjMX1oCCG79aeSfHViipxG: SourceSchema,
  '6aAJEFVdFAgLVre8azY4YZQnNiv2FkXJpdpGAYSHiNrY': StatusSchema,
  '3wCtHNjVZc4JKbbbvfctdMYLB5VjMNEePgWLMLSdFbdv': StatusChangeSchema,
  '8LNqtg237MFe1zKdG3eWftMXtFTgVtyvrxgZkHcXYkC1': StatusCompletedSchema,
  '623skurB6ZSt3jpkdNpuu6fwRG3VdrVgj2FKxfrNnBbH': StatusDeclinedSchema,
  '3kguQFJvHMnCfrg4Bmqt81EZg6qeht8Cs6tEjNDxTkyB': StatusFailedSchema,
  G5KJnJLaUCSvz4BaZAMNJAgxtfxssb64oWWJXsDW3Uoy: StatusInProgressSchema,
  DUU68ikPqLZ9NwsUGzkCZ92abAUz51ihcZBTJQEty6E1: StatusPendingSchema,
  DacNQ6C6PgsEiE4QfUHmaWBztpEvo2YyXxUcP86ze77w: TerminateProcessingSchema,
  BnChAigtmYAEzedCRsLwgtdwthJMiPQsQBpUXdtiRxe: TimelineSchema,
  '8aohWT7jcoaC1j2siQzBxoKM8HhQ4HF13BkZDNnq5UHf': TimelineChannelSchema,
  '7L685pBvjNNrBPq6tNv53kfPEBMDkoRu7MdVMTqdcyR2': TimelineEntrySchema,
  Dg3nc6K9P7AWn4K1dpGCAKG3YXJjsUWRhG3YxfqyLTeK: TriggerEventSchema,
  '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp': UpdateDocumentSchema,
};
