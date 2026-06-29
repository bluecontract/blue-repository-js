import type { ZodTypeAny } from 'zod';
import { ActorSchema } from './Actor';
import { ActorPolicySchema } from './ActorPolicy';
import { AgentActorSchema } from './AgentActor';
import { AllTimelinesChannelSchema } from './AllTimelinesChannel';
import { APICallSchema } from './APICall';
import { BrowserSessionSchema } from './BrowserSession';
import { ChatMessageSchema } from './ChatMessage';
import { ChatWorkflowOperationSchema } from './ChatWorkflowOperation';
import { CompositeTimelineChannelSchema } from './CompositeTimelineChannel';
import { ComputeSchema } from './Compute';
import { ComputeDefinitionSchema } from './ComputeDefinition';
import { CustomerActionRequestedSchema } from './CustomerActionRequested';
import { CustomerActionRespondedSchema } from './CustomerActionResponded';
import { CustomerConsentRevokedSchema } from './CustomerConsentRevoked';
import { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
import { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
import { DocumentBootstrapRequestedSchema } from './DocumentBootstrapRequested';
import { DocumentBootstrapRespondedSchema } from './DocumentBootstrapResponded';
import { DocumentRequestSchema } from './DocumentRequest';
import { DocumentStatusSchema } from './DocumentStatus';
import { EventSchema } from './Event';
import { InformUserAboutPendingActionSchema } from './InformUserAboutPendingAction';
import { LifecycleEventSchema } from './LifecycleEvent';
import { OperationSchema } from './Operation';
import { OperationRequestSchema } from './OperationRequest';
import { PrincipalActorSchema } from './PrincipalActor';
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

export { ActorSchema } from './Actor';
export { ActorPolicySchema } from './ActorPolicy';
export { AgentActorSchema } from './AgentActor';
export { AllTimelinesChannelSchema } from './AllTimelinesChannel';
export { APICallSchema } from './APICall';
export { BrowserSessionSchema } from './BrowserSession';
export { ChatMessageSchema } from './ChatMessage';
export { ChatWorkflowOperationSchema } from './ChatWorkflowOperation';
export { CompositeTimelineChannelSchema } from './CompositeTimelineChannel';
export { ComputeSchema } from './Compute';
export { ComputeDefinitionSchema } from './ComputeDefinition';
export { CustomerActionRequestedSchema } from './CustomerActionRequested';
export { CustomerActionRespondedSchema } from './CustomerActionResponded';
export { CustomerConsentRevokedSchema } from './CustomerConsentRevoked';
export { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
export { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
export { DocumentBootstrapRequestedSchema } from './DocumentBootstrapRequested';
export { DocumentBootstrapRespondedSchema } from './DocumentBootstrapResponded';
export { DocumentRequestSchema } from './DocumentRequest';
export { DocumentStatusSchema } from './DocumentStatus';
export { EventSchema } from './Event';
export { InformUserAboutPendingActionSchema } from './InformUserAboutPendingAction';
export { LifecycleEventSchema } from './LifecycleEvent';
export { OperationSchema } from './Operation';
export { OperationRequestSchema } from './OperationRequest';
export { PrincipalActorSchema } from './PrincipalActor';
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
  GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7: ActorSchema,
  JCidqCzkd1o5aWkkDTzj6niugkn7oWxFUnSHaya4GbEj: ActorPolicySchema,
  HooLPpmtC3Rf6jJ2eGGr4SyBbi2XYPzYBm4UpuzYke6D: AgentActorSchema,
  G8nAyzhkoFiXhXUV4Jv4hwsivv4x8ACpJX7JNbK9idgg: AllTimelinesChannelSchema,
  '5tLUE25DSPGgtQtYVTYYskg3Ppz1DQwLqXqyedHebWvT': APICallSchema,
  '3Po1wgu2yeXWQGMncYqhDFAd39MkqQR5JG8sJqntzmoX': BrowserSessionSchema,
  '3GFJTYsNFHWqoWaMoXbmuNkNFwso6R1aPhN8f98yYaGR': ChatMessageSchema,
  G889Jtx4DZPf5QkaEVNoQVUa4mA6EPzfbpT32ArvRhBv: ChatWorkflowOperationSchema,
  '4FE7wU8cnFsb7gEcgQk8vTGYZHLqvJH6Yjsv2TXovgr2':
    CompositeTimelineChannelSchema,
  '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ': ComputeSchema,
  HifMgFGBgsqstDFZ2kXeQ45LVKXQMP52fV8TqeN6Z1j3: ComputeDefinitionSchema,
  GiYeALCPtyczfXB2fmX4HRn1TmE9Mn44Y3dFBNeZNdAb: CustomerActionRequestedSchema,
  '3z3AhCpsFML9BhsStAPdJX1Da78fsB5ofRm9ooi1Co7X': CustomerActionRespondedSchema,
  BffmfCSM6r3GgrQU9XK3Qaj83gw4H8rfa1N7gXuab1ma: CustomerConsentRevokedSchema,
  CWnfwB18AdJ6iMbpNjKdfoeAUL17APxKUoMBQuisNLnB:
    DocumentBootstrapCompletedSchema,
  '56TiLrjbTYk4MTyAieZZd7cHdBahyWd3Xwgqet6scyA7': DocumentBootstrapFailedSchema,
  '3Uch8WXAZXUnHiWYF1Y2KaDBnfAFyUbZoDkeoPRYHZWC':
    DocumentBootstrapRequestedSchema,
  '8uKK7ZN1vXtEoAM6bUxm3oYNzFk6VZLX6mbeae2yVPnJ':
    DocumentBootstrapRespondedSchema,
  '8SXKDBF7Gmzcn9BwH3GxwUJMBCm8P7QJmXNyJpyreNUF': DocumentRequestSchema,
  '9rzc7B4yEw9gVuuaoFbRUpfajTPuxBLecVWkmHuBSg7z': DocumentStatusSchema,
  ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5: EventSchema,
  CVBPRqppe6uUhBQMcw8SVxqLwjBX7TwufMHwoCjnAqFv:
    InformUserAboutPendingActionSchema,
  '9hcgdYgUJCreSiiSnEMVAXsf7iWui13JW96gfwauA73J': LifecycleEventSchema,
  wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym: OperationSchema,
  '4KTmYtrEE7AALwixVdiXnMCq6No9h8cvHyD2a521jgAg': OperationRequestSchema,
  '23cWKG6LF47H1G3EfhV5dmEYtxkNaqLWgFDxEurdc6Ef': PrincipalActorSchema,
  '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw': RequestSchema,
  AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk: ResponseSchema,
  MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv: SequentialWorkflowSchema,
  CXotTNTYxqqSgDBzTGJjbLVvsjrxJMgmJZaC1rA826CF:
    SequentialWorkflowOperationSchema,
  '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev': SequentialWorkflowStepSchema,
  Qm35f9xFUH84i745uPMj5jjMX1oCCG79aeSfHViipxG: SourceSchema,
  '8crrz93vvovMkh91qyLj6ajwEDAZw1DdTZ3NBjK6jaqV': StatusChangeSchema,
  BEc6aieqN1iaXT2bNQVag1a1cGygZCLCjXf3mvupetNg: StatusCompletedSchema,
  '6tenJidVxJRDqxtYM4xGs6fxD2E7MVvGQwv5rF4HnGsh': StatusFailedSchema,
  '5BQB6Hsr3qxMsZikHdqd2LGeKdQafEQ4jo6TBqm9JZuB': StatusInProgressSchema,
  CE3FgdBrYRhs4Vvz93ArW8TvzWgQvouEyuJ72bGiidXS: StatusPendingSchema,
  '7wUHmjDmM9suCSX1HPL7NZncfwPmMmXq2vfSVBmRLgAu': TimelineSchema,
  AKRPLotcnGLq7gQRj3jHcfAkxkwaJpmxNXpC3G22GQQz: TimelineChannelSchema,
  HtPs8QJAUfc25fKanzLFjAqjbbhyFjDErYxjKdTCwARV: TimelineEntrySchema,
  Dg3nc6K9P7AWn4K1dpGCAKG3YXJjsUWRhG3YxfqyLTeK: TriggerEventSchema,
  '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U': UpdateDocumentSchema,
};
