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
  JCidqCzkd1o5aWkkDTzj6niugkn7oWxFUnSHaya4GbEj: ActorPolicySchema,
  HooLPpmtC3Rf6jJ2eGGr4SyBbi2XYPzYBm4UpuzYke6D: AgentActorSchema,
  '61Hu6aLPnN7bAbiMTUxzP9rXEt8JW7XrkqyrEwDWWnJS': AllTimelinesChannelSchema,
  '5tLUE25DSPGgtQtYVTYYskg3Ppz1DQwLqXqyedHebWvT': APICallSchema,
  '5BrNKcZDq6q4UY1jQpjyeFjbTV6rxVKM9qNL5xzGMZRW': AuthoritySchema,
  '3Po1wgu2yeXWQGMncYqhDFAd39MkqQR5JG8sJqntzmoX': BrowserSessionSchema,
  FJt9ktsssczQeT3sRjMM83zbxy9jd9ZdS8ogKS8MTqvf: ChatMessageSchema,
  '9wmjLC4c99GBCDDSiMU8veHosQfxZJW94AKTatiXxV3p': ChatWorkflowOperationSchema,
  BTGajXc8tHeprxrQXRBDfkZxA5tmxo9BEkFoDGXds6yp: CompositeTimelineChannelSchema,
  '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ': ComputeSchema,
  HifMgFGBgsqstDFZ2kXeQ45LVKXQMP52fV8TqeN6Z1j3: ComputeDefinitionSchema,
  FuGWQ4hVCRPRxhZopsnBN78Q1DhRTsjjvn4HPvunf4vz: CustomerActionRequestedSchema,
  '6C9hES9r92QmbLEgtk4yrgz54abzs7B8jqEaMgSVJv7m': CustomerActionRespondedSchema,
  BffmfCSM6r3GgrQU9XK3Qaj83gw4H8rfa1N7gXuab1ma: CustomerConsentRevokedSchema,
  '7PxEJAVDRqGFU2t6TFeqimEKfddFVGN1mAWTAsWmXix': DocumentAnchorSchema,
  HhGmdUeYu4H3B4pfgTNkwweuUqQ1bJ4YPNdcjC42K6bw: DocumentAnchorsSchema,
  '7caaA9fZUxooF7LW4drW97DuoJpu5fyEZKyrQttLaBmQ':
    DocumentBootstrapCompletedSchema,
  '2D7DDoEJge1j3G4oXGhGzTQ9CxePKxxxTYhdtee5r7SV': DocumentBootstrapFailedSchema,
  '8HdfdnkeL2v31q56qsN6bAwUHtBYK5VseaMQ3owdWtuF':
    DocumentBootstrapRespondedSchema,
  '4QgVHSQv1pyJAmEQBpuXFSVN7qdavdMDmdZXpkboNsc5': DocumentLinkSchema,
  '8cREvDqGAGADf9NkWvwhENWnTf5qRAGasS5ihktdXiNX': DocumentLinksSchema,
  '8SXKDBF7Gmzcn9BwH3GxwUJMBCm8P7QJmXNyJpyreNUF': DocumentRequestSchema,
  '9Q7nZyiFKJyzxH6c6EWHsHsqQ8arUYtyrAUgwv9paoxe': DocumentStatusSchema,
  ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5: EventSchema,
  CVBPRqppe6uUhBQMcw8SVxqLwjBX7TwufMHwoCjnAqFv:
    InformUserAboutPendingActionSchema,
  '9hcgdYgUJCreSiiSnEMVAXsf7iWui13JW96gfwauA73J': LifecycleEventSchema,
  '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3': MessageSchema,
  Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G: OperationSchema,
  B1nYScibpo65XNv1Sy13UoEr6NHodMmdcMLwQmup8iKv: OperationRequestSchema,
  '9ZR7JFpcb5Eq2PHG5yK9XY3VTbygfaCoCQL4CnTFTpqE': ParticipantPurposeSchema,
  '23cWKG6LF47H1G3EfhV5dmEYtxkNaqLWgFDxEurdc6Ef': PrincipalActorSchema,
  FvGHnQXb72zffTbufdY8DSK1DWqtTGavSfHDcoeCLB7Y: PurposeStatementSchema,
  '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU': RequestSchema,
  '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH': ResponseSchema,
  MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv: SequentialWorkflowSchema,
  B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy:
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
  HAMjp2wA76Jhz8EGBDbfo9cqVyAq3vwVN4baKJBpj8KF: TimelineSchema,
  BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq: TimelineChannelSchema,
  DNLLsGGrhPaJWHUepnChX5WA68DKzRvQdL1a7RbmLrhS: TimelineEntrySchema,
  Dg3nc6K9P7AWn4K1dpGCAKG3YXJjsUWRhG3YxfqyLTeK: TriggerEventSchema,
  '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U': UpdateDocumentSchema,
};
