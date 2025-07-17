import { contractUpdateEvent } from './ContractUpdateEvent';
import { expectEventStep } from './ExpectEventStep';
import { contractInitializationEvent } from './ContractInitializationEvent';
import { fatalErrorEvent } from './FatalErrorEvent';
import { performContractAction } from './PerformContractAction';
import { timelineEntry } from './TimelineEntry';
import { workflowFunction } from './WorkflowFunction';
import { agreedUponSimulatedEvent } from './AgreedUponSimulatedEvent';
import { contract } from './Contract';
import { triggerEventStep } from './TriggerEventStep';
import { initialTimelineMessage } from './InitialTimelineMessage';
import { assistantTask } from './AssistantTask';
import { contractUpdateAction } from './ContractUpdateAction';
import { genericContract } from './GenericContract';
import { externalContract } from './ExternalContract';
import { participant } from './Participant';
import { contractSubscription } from './ContractSubscription';
import { javaScriptCodeStep } from './JavaScriptCodeStep';
import { localContractSubscription } from './LocalContractSubscription';
import { assistantTaskReadyEvent } from './AssistantTaskReadyEvent';
import { localContract } from './LocalContract';
import { contractProcessingEvent } from './ContractProcessingEvent';
import { updateStep } from './UpdateStep';
import { initiateContractProcessingAction } from './InitiateContractProcessingAction';
import { initiateContractAction } from './InitiateContractAction';
import { jsonPatchEntry } from './JsonPatchEntry';
import { workflowFunctionStep } from './WorkflowFunctionStep';
import { initializeLocalContractStep } from './InitializeLocalContractStep';
import { workflow } from './Workflow';
import { workflowInstanceStartedEvent } from './WorkflowInstanceStartedEvent';
import { workflowStep } from './WorkflowStep';
import { workflowInstance } from './WorkflowInstance';
import { allEventsExternalContractSubscription } from './AllEventsExternalContractSubscription';
import { contractInstance } from './ContractInstance';

export const contents = {
  '2bsu7Nx1vCXquU24RUXcc5b8tHrNgve26MXia4vUBuvN': contractUpdateEvent,
  '3UXhfjDZ8EMopVJrDxS8Gf2USfLZvzFGpzyzconyzAkm': expectEventStep,
  '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC': contractInitializationEvent,
  '4cSr9TtEebEMxghBQD9ybAW6Tf6TUGGLG45fZxkxJQaP': fatalErrorEvent,
  '4H8MC7tvfQR5MnuRimNqScZ1RWjwDrZza7uuHWUmMVQj': performContractAction,
  '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos': timelineEntry,
  '66oteHvnKcpRvS1ty6qND1keob9PJVakKxjTQPQY8YFA': workflowFunction,
  '6AxdkLN2PgdzYJhojHRH6rt3oTAoifrJYikYvNHMbw2t': agreedUponSimulatedEvent,
  '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE': contract,
  '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU': triggerEventStep,
  '7rhXztX94ehngtETBBsq4pY3e1siDPjd7xrV1y6rrtye': initialTimelineMessage,
  '8ChHz6j1f3G1hnq11UPgM6Gm61viW2uJWkBPueWXP4dc': assistantTask,
  '94birjcTV223qXtC1aq4xZRWfvxrzh9a1dF99YV5wWwr': contractUpdateAction,
  '9Wpm7tPqAYoaS45ky18v61WBy6KdR78awSTv8wX8AprN': genericContract,
  A5wPMJi6naaUtbmo5iPqUVG5Q8Wg5r68WERCarJctSoK: externalContract,
  ATbZ8UAASUy2PaooqZx6CE9giEfKcvrs3nQPcK5jTmBJ: participant,
  BnzvPoTRbeT8JmH6rDn3Sh9f2gfCNBTm58WVxdUcorXr: contractSubscription,
  CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p: javaScriptCodeStep,
  CTeVLJrK2kNQ4WhC7nd7JrsDcQtyEU9oBHgE23sEmoTK: localContractSubscription,
  CUKPAHgXTYtEUwyT172ejy694PR41rsy5VG1n5Wfsu2p: assistantTaskReadyEvent,
  Cwqs1QterdmwBAARMViJsepJAdYLGdhLHHg1u7awytAN: localContract,
  CzZuis9rsRZdmS5nzdgp9RtTknQbs8Jxxp95djCmbAW1: contractProcessingEvent,
  DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB: updateStep,
  E64ZQaX4sFUD3CsVpb7bWZwBznbNDsJCJtRxux4FdWGm:
    initiateContractProcessingAction,
  EmyutwPX7UgfUayYoZqFAxjNY6DYoNoj67Hqg36GACym: initiateContractAction,
  EnUQeMiMa2wHFW3JbeSPvdgfpL6qZYCR29m3SfeHsKSY: jsonPatchEntry,
  EZjDfHEnvvwhP14FXdzLSBXBW9BcanYefW9mRfZNLh7D: workflowFunctionStep,
  FF88BRKtRXQ2cCCBR28cFUB5mHdPsWjj8gVBgz4VmQm7: initializeLocalContractStep,
  Fq9xM7HgfQRq2zZWc2mKMXBhbwADtBBtas7y9FTRuyvb: workflow,
  Gn7ajBNyZhKNohLbfZhnYPs5s7NmtZR3RxJv1rGGZjg8: workflowInstanceStartedEvent,
  H5YcJM1fBf57BjYjc7hXbotGh5RuD8bwXLTVY4PA353u: workflowStep,
  HX3J23DpxGanyzSHZtY1VGNno4qapcHUkGW2Ha2WYf92: workflowInstance,
  JCUV8S58BvgAr8LzsHxPRtm72PsxPvgzZGLiqgwRM6xS:
    allEventsExternalContractSubscription,
  WtsCXffC75An6E8EMfR4VMZvJ9bXzCPDAsD5hncpZ97: contractInstance,
} as const;
