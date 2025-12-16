import { AddingParticipantRequested } from './AddingParticipantRequested';
import { AddingParticipantResponded } from './AddingParticipantResponded';
import { Agent } from './Agent';
import { AgentActor } from './AgentActor';
import { AllParticipantsReady } from './AllParticipantsReady';
import { AnchorAutomationTemplate } from './AnchorAutomationTemplate';
import { BootstrapFailed } from './BootstrapFailed';
import { CallOperationAccepted } from './CallOperationAccepted';
import { CallOperationFailed } from './CallOperationFailed';
import { CallOperationRequested } from './CallOperationRequested';
import { CallOperationResponded } from './CallOperationResponded';
import { ChatGPTConnectorAgent } from './ChatGPTConnectorAgent';
import { DocumentAnchor } from './DocumentAnchor';
import { DocumentAnchors } from './DocumentAnchors';
import { DocumentLink } from './DocumentLink';
import { DocumentLinks } from './DocumentLinks';
import { DocumentSessionBootstrap } from './DocumentSessionBootstrap';
import { DocumentTypeLink } from './DocumentTypeLink';
import { InformUserToInstallMyOSPackage } from './InformUserToInstallMyOSPackage';
import { Link } from './Link';
import { MyOSAdminBase } from './MyOSAdminBase';
import { MyOSAgent } from './MyOSAgent';
import { MyOSAgentChannel } from './MyOSAgentChannel';
import { MyOSAgentEvent } from './MyOSAgentEvent';
import { MyOSDocumentSessionReference } from './MyOSDocumentSessionReference';
import { MyOSPackage } from './MyOSPackage';
import { MyOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
import { MyOSSessionInteraction } from './MyOSSessionInteraction';
import { MyOSSessionLink } from './MyOSSessionLink';
import { MyOSTimeline } from './MyOSTimeline';
import { MyOSTimelineChannel } from './MyOSTimelineChannel';
import { MyOSTimelineEntry } from './MyOSTimelineEntry';
import { MyOSWorkerAgency } from './MyOSWorkerAgency';
import { Participant } from './Participant';
import { ParticipantActivated } from './ParticipantActivated';
import { ParticipantActivationState } from './ParticipantActivationState';
import { ParticipantResolved } from './ParticipantResolved';
import { PrincipalActor } from './PrincipalActor';
import { RemovingParticipantRequested } from './RemovingParticipantRequested';
import { RemovingParticipantResponded } from './RemovingParticipantResponded';
import { SessionEpochAdvanced } from './SessionEpochAdvanced';
import { SingleDocumentPermissionGrantRequested } from './SingleDocumentPermissionGrantRequested';
import { SingleDocumentPermissionGrantResponded } from './SingleDocumentPermissionGrantResponded';
import { SingleDocumentPermissionGrantToAccount } from './SingleDocumentPermissionGrantToAccount';
import { SingleDocumentPermissionGrantToDocument } from './SingleDocumentPermissionGrantToDocument';
import { SingleDocumentPermissionGranted } from './SingleDocumentPermissionGranted';
import { SingleDocumentPermissionGrantingInProgress } from './SingleDocumentPermissionGrantingInProgress';
import { SingleDocumentPermissionInvalid } from './SingleDocumentPermissionInvalid';
import { SingleDocumentPermissionRejected } from './SingleDocumentPermissionRejected';
import { SingleDocumentPermissionRevokeRequested } from './SingleDocumentPermissionRevokeRequested';
import { SingleDocumentPermissionRevoked } from './SingleDocumentPermissionRevoked';
import { SingleDocumentPermissionRevokingInProgress } from './SingleDocumentPermissionRevokingInProgress';
import { SingleDocumentPermissionSet } from './SingleDocumentPermissionSet';
import { SingleDocumentPermissionValidated } from './SingleDocumentPermissionValidated';
import { StartWorkerSessionRequested } from './StartWorkerSessionRequested';
import { SubscribeToSessionRequested } from './SubscribeToSessionRequested';
import { SubscriptionToSessionFailed } from './SubscriptionToSessionFailed';
import { SubscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
import { SubscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
import { SubscriptionUpdate } from './SubscriptionUpdate';
import { TargetDocumentSessionStarted } from './TargetDocumentSessionStarted';
import { WorkerAgencyPermission } from './WorkerAgencyPermission';
import { WorkerAgencyPermissionGrant } from './WorkerAgencyPermissionGrant';
import { WorkerAgencyPermissionGrantRequested } from './WorkerAgencyPermissionGrantRequested';
import { WorkerAgencyPermissionGranted } from './WorkerAgencyPermissionGranted';
import { WorkerAgencyPermissionGrantingInProgress } from './WorkerAgencyPermissionGrantingInProgress';
import { WorkerAgencyPermissionInvalid } from './WorkerAgencyPermissionInvalid';
import { WorkerAgencyPermissionRejected } from './WorkerAgencyPermissionRejected';
import { WorkerAgencyPermissionRevokeRequested } from './WorkerAgencyPermissionRevokeRequested';
import { WorkerAgencyPermissionRevoked } from './WorkerAgencyPermissionRevoked';
import { WorkerAgencyPermissionRevokingInProgress } from './WorkerAgencyPermissionRevokingInProgress';
import { WorkerAgencyPermissionValidated } from './WorkerAgencyPermissionValidated';
import { WorkerSessionStarting } from './WorkerSessionStarting';

export { AddingParticipantRequested } from './AddingParticipantRequested';
export { AddingParticipantResponded } from './AddingParticipantResponded';
export { Agent } from './Agent';
export { AgentActor } from './AgentActor';
export { AllParticipantsReady } from './AllParticipantsReady';
export { AnchorAutomationTemplate } from './AnchorAutomationTemplate';
export { BootstrapFailed } from './BootstrapFailed';
export { CallOperationAccepted } from './CallOperationAccepted';
export { CallOperationFailed } from './CallOperationFailed';
export { CallOperationRequested } from './CallOperationRequested';
export { CallOperationResponded } from './CallOperationResponded';
export { ChatGPTConnectorAgent } from './ChatGPTConnectorAgent';
export { DocumentAnchor } from './DocumentAnchor';
export { DocumentAnchors } from './DocumentAnchors';
export { DocumentLink } from './DocumentLink';
export { DocumentLinks } from './DocumentLinks';
export { DocumentSessionBootstrap } from './DocumentSessionBootstrap';
export { DocumentTypeLink } from './DocumentTypeLink';
export { InformUserToInstallMyOSPackage } from './InformUserToInstallMyOSPackage';
export { Link } from './Link';
export { MyOSAdminBase } from './MyOSAdminBase';
export { MyOSAgent } from './MyOSAgent';
export { MyOSAgentChannel } from './MyOSAgentChannel';
export { MyOSAgentEvent } from './MyOSAgentEvent';
export { MyOSDocumentSessionReference } from './MyOSDocumentSessionReference';
export { MyOSPackage } from './MyOSPackage';
export { MyOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
export { MyOSSessionInteraction } from './MyOSSessionInteraction';
export { MyOSSessionLink } from './MyOSSessionLink';
export { MyOSTimeline } from './MyOSTimeline';
export { MyOSTimelineChannel } from './MyOSTimelineChannel';
export { MyOSTimelineEntry } from './MyOSTimelineEntry';
export { MyOSWorkerAgency } from './MyOSWorkerAgency';
export { Participant } from './Participant';
export { ParticipantActivated } from './ParticipantActivated';
export { ParticipantActivationState } from './ParticipantActivationState';
export { ParticipantResolved } from './ParticipantResolved';
export { PrincipalActor } from './PrincipalActor';
export { RemovingParticipantRequested } from './RemovingParticipantRequested';
export { RemovingParticipantResponded } from './RemovingParticipantResponded';
export { SessionEpochAdvanced } from './SessionEpochAdvanced';
export { SingleDocumentPermissionGrantRequested } from './SingleDocumentPermissionGrantRequested';
export { SingleDocumentPermissionGrantResponded } from './SingleDocumentPermissionGrantResponded';
export { SingleDocumentPermissionGrantToAccount } from './SingleDocumentPermissionGrantToAccount';
export { SingleDocumentPermissionGrantToDocument } from './SingleDocumentPermissionGrantToDocument';
export { SingleDocumentPermissionGranted } from './SingleDocumentPermissionGranted';
export { SingleDocumentPermissionGrantingInProgress } from './SingleDocumentPermissionGrantingInProgress';
export { SingleDocumentPermissionInvalid } from './SingleDocumentPermissionInvalid';
export { SingleDocumentPermissionRejected } from './SingleDocumentPermissionRejected';
export { SingleDocumentPermissionRevokeRequested } from './SingleDocumentPermissionRevokeRequested';
export { SingleDocumentPermissionRevoked } from './SingleDocumentPermissionRevoked';
export { SingleDocumentPermissionRevokingInProgress } from './SingleDocumentPermissionRevokingInProgress';
export { SingleDocumentPermissionSet } from './SingleDocumentPermissionSet';
export { SingleDocumentPermissionValidated } from './SingleDocumentPermissionValidated';
export { StartWorkerSessionRequested } from './StartWorkerSessionRequested';
export { SubscribeToSessionRequested } from './SubscribeToSessionRequested';
export { SubscriptionToSessionFailed } from './SubscriptionToSessionFailed';
export { SubscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
export { SubscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
export { SubscriptionUpdate } from './SubscriptionUpdate';
export { TargetDocumentSessionStarted } from './TargetDocumentSessionStarted';
export { WorkerAgencyPermission } from './WorkerAgencyPermission';
export { WorkerAgencyPermissionGrant } from './WorkerAgencyPermissionGrant';
export { WorkerAgencyPermissionGrantRequested } from './WorkerAgencyPermissionGrantRequested';
export { WorkerAgencyPermissionGranted } from './WorkerAgencyPermissionGranted';
export { WorkerAgencyPermissionGrantingInProgress } from './WorkerAgencyPermissionGrantingInProgress';
export { WorkerAgencyPermissionInvalid } from './WorkerAgencyPermissionInvalid';
export { WorkerAgencyPermissionRejected } from './WorkerAgencyPermissionRejected';
export { WorkerAgencyPermissionRevokeRequested } from './WorkerAgencyPermissionRevokeRequested';
export { WorkerAgencyPermissionRevoked } from './WorkerAgencyPermissionRevoked';
export { WorkerAgencyPermissionRevokingInProgress } from './WorkerAgencyPermissionRevokingInProgress';
export { WorkerAgencyPermissionValidated } from './WorkerAgencyPermissionValidated';
export { WorkerSessionStarting } from './WorkerSessionStarting';

export const contents = {
  'A3nxy96fKtp3bPnCYP14uhrnYCJoigDLJNvdbGnjdXg6': AddingParticipantRequested,
  'CbcVNTgCj7hnq4nKBDdgWAcymuRqTTmCzxY1LUuK3ze6': AddingParticipantResponded,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': Agent,
  '3SJK2XGFHJgqXyCK4sjZ6tmAk3VjyuX6imGBJmV2LgQZ': AgentActor,
  'Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC': AllParticipantsReady,
  '8JHhvprgxVUFZCQpyeEJfMFF8vuVEAnjqojftJ6B2E6S': AnchorAutomationTemplate,
  '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo': BootstrapFailed,
  'Dd53JjiBGUnASZXjhiHBqCSnruN2XmLtcW2vNQB7Sm34': CallOperationAccepted,
  'BaNmvStTGdsBsSHiHbqdhrrC7vfwiQdDK6NYiyRbJowx': CallOperationFailed,
  'EVX6nBdHdVEBH9Gbthpd2eqpxaxS4bb9wM55QNdZmcBy': CallOperationRequested,
  '3P4vsTx8Ky2pucXxKgkn8MouveP2DBRjkwZckCG5b9Lb': CallOperationResponded,
  '22eeH11CVeJAHBedzJ4mZQkRxBU54GNykgYbkdHXj2gS': ChatGPTConnectorAgent,
  'HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb': DocumentAnchor,
  '7Usvk6dZMVqas3yqs23ZEXn1zu1YDPjgYiZFNYaw3puH': DocumentAnchors,
  'BFxgEnovNHQ693YR2YvALi4FP8vjcwSQiX63LiLwjUhk': DocumentLink,
  '4cmrbevB6K23ZenjqwmNxpnaw6RF4VB3wkP7XB59V7W5': DocumentLinks,
  '2K3rW6d4KychEQDerQpigPzQp8wHTJzbmueJaDXfGZqg': DocumentSessionBootstrap,
  'D9Ret9Hmz5TWxzuJEeauWEuZVPkPL7hcHYsSNY1cZ5zX': DocumentTypeLink,
  'EZUH4HyJzMdH8oYRmTnQNZHEcgmR4AX51DSfp8diZNhQ': InformUserToInstallMyOSPackage,
  'D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD': Link,
  'FHzfgUb3eTqBkgDi1n5QNw5PC1QYGycEVs1c3YSrZ53o': MyOSAdminBase,
  '8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5': MyOSAgent,
  '4fYuD2ZdTQpm5T6Xtibge9SKkNA8RrvDVmKmArrToQQW': MyOSAgentChannel,
  'GiYocGMGQcneiMPm4NH9MxVj7Fr4jwg2BUAMzwZcWRNR': MyOSAgentEvent,
  '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9': MyOSDocumentSessionReference,
  '4kzDrFuoU4PmvVxh5JAcFpDWGHYw7r7EaQw6Nufp3wX4': MyOSPackage,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU': MyOSParticipantsOrchestration,
  'CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H': MyOSSessionInteraction,
  'd1vQ8ZTPcQc5KeuU6tzWaVukWRVtKjQL4hbvbpC22rB': MyOSSessionLink,
  '2gyToM86KgFJpB8inz8TBVEMZk8UVGYdRozF4mfvxtuk': MyOSTimeline,
  'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs': MyOSTimelineChannel,
  'Furgmg5xcJVMDmaQXZRfZ1XehSf7PWctrioo8etRYJHQ': MyOSTimelineEntry,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': MyOSWorkerAgency,
  'phD9k4YTUgGjWeLPKqXNNn6S1PmqSeBJfVscAnUwFhQ': Participant,
  'EQhLKv5EAcFriegGYEP7ykwbjeyzFoaTxeizzuTd8VDq': ParticipantActivated,
  'CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB': ParticipantActivationState,
  'EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz': ParticipantResolved,
  '5GB8C22LsZGR3kkEmP5j5Zye7SR173ojzzUK99tUcoP': PrincipalActor,
  'FsQKJihteQLatQio6mU8c15opBb9i2C2X882xGRKn46C': RemovingParticipantRequested,
  'Fu7pgwV2VKNs1KqGcpoVewhYNeL2TE7nhaxDwEAs2iZx': RemovingParticipantResponded,
  '9CvxqAMJhqcFoLr5nXSEdWDZUMD383xhJtyFwXsCqD9E': SessionEpochAdvanced,
  'HxMSh1JhD42UC2QGgoaCQozMTW3rsS8ENejasZtt7oXA': SingleDocumentPermissionGrantRequested,
  '3FS3vHTB9XMw2RbwatfUTCSgoh647XduUBjYcz6Bdkwh': SingleDocumentPermissionGrantResponded,
  'wbPRcT52TR5chSx4WjQ48BQsbma8uiPdbVrxKvPJUap': SingleDocumentPermissionGrantToAccount,
  'AgkFLMmzZKt9iExpz2UcVZubPZ7vsCJRXJfgLReMkjW9': SingleDocumentPermissionGrantToDocument,
  'EkZN2mSyrJpF4DQmBsdW5NYzw626N6jhSzYYsibpB1MW': SingleDocumentPermissionGranted,
  '9iu6bai3dWkJwdQtYRsUf85uqpRBRnC7SH8JFWgJBoWs': SingleDocumentPermissionGrantingInProgress,
  '567voUMtKJQoqru6ZVPYb4EGwdeV99rUSAqsnod7gqfd': SingleDocumentPermissionInvalid,
  '387NGsN9DZNttQbjZHZksVSyHjb5SSZdhxKtCmMu36yo': SingleDocumentPermissionRejected,
  'H1tETZ1YKndAuEBKu54ZDq3U1myncW3wj26QohP58y7X': SingleDocumentPermissionRevokeRequested,
  'BmmvGcvB1yAe1fb3bsxpajwo9WuCNVAYQN8CGuMivUkT': SingleDocumentPermissionRevoked,
  '6h9TRB22W218Bkjo11TD3zyCfuatFY8Ack4GBeW7vF69': SingleDocumentPermissionRevokingInProgress,
  'DRDQcve5AjwBK9z6Njfa4MNERko7Uf4ucvARFdC6sL54': SingleDocumentPermissionSet,
  '9T3AsCqKkpoxHs6K9dTeCHRCXYGHPMthjaNcZxLdckgi': SingleDocumentPermissionValidated,
  'C9Fyy28LCQACfDootHHWRB4eEm1xCiSnaH7FYTSdZmwQ': StartWorkerSessionRequested,
  'CohDM1yrnMV32VE73JiRbnmT3h8TgVqryd2Eb8K5Tmzc': SubscribeToSessionRequested,
  'vGfiWWkit85t2cg1YCn9MDGBp573F15YgGMkfx5D3Et': SubscriptionToSessionFailed,
  'EdrM9LnMKjfpYPpKNSm9hK61ywFCv8xwhd4nqUTv7Sy5': SubscriptionToSessionInitiated,
  'CF47wMy4XsVYMiFLmkvgYvXN8TBhfSTh1vnt8xvcFaE1': SubscriptionToSessionRevoked,
  '2gc8djtKGGRPjGfMQzvJZMviaXm4ytM1nA4DVbfyjkrW': SubscriptionUpdate,
  'FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p': TargetDocumentSessionStarted,
  '5J3RXNnALK1ZYAQBrjGwCQ4WpL3YUGHvz9WcGos6mMSp': WorkerAgencyPermission,
  '3Wb5cwcZ3P6bSjTJAVrXPBzaAvoccBauUNVud1pqpEM2': WorkerAgencyPermissionGrant,
  '2533GSBC4sXbbhDNdB6hKnRoySzQDziUb9u7bK3sa7tD': WorkerAgencyPermissionGrantRequested,
  'ESCifdJpDaKviHDVPzCAuaUeroYJTuQTNAUW6ikQHHWd': WorkerAgencyPermissionGranted,
  '9Q2Kdb1FzRVZrbQHv1JZ9Emo14NavVqD32jnF5u6FUmj': WorkerAgencyPermissionGrantingInProgress,
  '63kEoiNgJnYPGd2fnJw4Km2MD6zuCBBTn9v9qVPWx2Nz': WorkerAgencyPermissionInvalid,
  'CB4YQq9GGVb3i3enmWnxx1zbV2Ks7nNHYdBhcCuJ8iht': WorkerAgencyPermissionRejected,
  '4cPqgXEsF6NHdAGhhAaHBPGZ6RNi5Dnr7YWp2vQd8HYk': WorkerAgencyPermissionRevokeRequested,
  '6nYAWfizha9PvKi9scLLCReYimYaupRLoyZTCgB8zUpR': WorkerAgencyPermissionRevoked,
  '5sX6PjLHydkuj1BrvCM5QoUd4e3GCtCyc8KsNqpV2e9j': WorkerAgencyPermissionRevokingInProgress,
  'HUeeqt75YxUmP5mBdhchJEtXDXqhhT1EbwkrGSmbpNJf': WorkerAgencyPermissionValidated,
  'FYMd1LAezBcUXp9gh4bEjEwWKqZfgWStwHQ4Q7juTc8F': WorkerSessionStarting
} as const;
