import { workerAgencyPermissionGrantRequested } from './WorkerAgencyPermissionGrantRequested';
import { subscriptionUpdate } from './SubscriptionUpdate';
import { myOSTimeline } from './MyOSTimeline';
import { startWorkerSessionRequested } from './StartWorkerSessionRequested';
import { singleDocumentPermissionRejected } from './SingleDocumentPermissionRejected';
import { singleDocumentPermissionGrantResponded } from './SingleDocumentPermissionGrantResponded';
import { callOperationResponded } from './CallOperationResponded';
import { chatGPTConnectorAgent } from './ChatGPTConnectorAgent';
import { agentActor } from './AgentActor';
import { myOSAdminBase } from './MyOSAdminBase';
import { documentLinks } from './DocumentLinks';
import { workerAgencyPermissionRevokeRequested } from './WorkerAgencyPermissionRevokeRequested';
import { myOSAgentChannel } from './MyOSAgentChannel';
import { myOSWorkerAgency } from './MyOSWorkerAgency';
import { singleDocumentPermissionGrantToAccount } from './SingleDocumentPermissionGrantToAccount';
import { singleDocumentPermissionInvalid } from './SingleDocumentPermissionInvalid';
import { principalActor } from './PrincipalActor';
import { workerAgencyPermission } from './WorkerAgencyPermission';
import { workerAgencyPermissionRevokingInProgress } from './WorkerAgencyPermissionRevokingInProgress';
import { workerAgencyPermissionInvalid } from './WorkerAgencyPermissionInvalid';
import { singleDocumentPermissionRevokingInProgress } from './SingleDocumentPermissionRevokingInProgress';
import { workerAgencyPermissionRevoked } from './WorkerAgencyPermissionRevoked';
import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { singleDocumentPermissionGrantToDocument } from './SingleDocumentPermissionGrantToDocument';
import { myOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
import { documentAnchors } from './DocumentAnchors';
import { myOSAgent } from './MyOSAgent';
import { myOSDocumentSessionReference } from './MyOSDocumentSessionReference';
import { agent } from './Agent';
import { sessionEpochAdvanced } from './SessionEpochAdvanced';
import { bootstrapFailed } from './BootstrapFailed';
import { singleDocumentPermissionGrantingInProgress } from './SingleDocumentPermissionGrantingInProgress';
import { workerAgencyPermissionGrantingInProgress } from './WorkerAgencyPermissionGrantingInProgress';
import { singleDocumentPermissionValidated } from './SingleDocumentPermissionValidated';
import { addingParticipantRequested } from './AddingParticipantRequested';
import { documentSessionBootstrap } from './DocumentSessionBootstrap';
import { callOperationFailed } from './CallOperationFailed';
import { documentLink } from './DocumentLink';
import { singleDocumentPermissionRevoked } from './SingleDocumentPermissionRevoked';
import { workerAgencyPermissionRejected } from './WorkerAgencyPermissionRejected';
import { addingParticipantResponded } from './AddingParticipantResponded';
import { myOSSessionInteraction } from './MyOSSessionInteraction';
import { subscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
import { participantActivationState } from './ParticipantActivationState';
import { subscribeToSessionRequested } from './SubscribeToSessionRequested';
import { myOSSessionLink } from './MyOSSessionLink';
import { link } from './Link';
import { documentTypeLink } from './DocumentTypeLink';
import { callOperationAccepted } from './CallOperationAccepted';
import { singleDocumentPermissionSet } from './SingleDocumentPermissionSet';
import { subscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
import { workerAgencyPermissionGrant } from './WorkerAgencyPermissionGrant';
import { singleDocumentPermissionGranted } from './SingleDocumentPermissionGranted';
import { participantActivated } from './ParticipantActivated';
import { participantResolved } from './ParticipantResolved';
import { workerAgencyPermissionGranted } from './WorkerAgencyPermissionGranted';
import { callOperationRequested } from './CallOperationRequested';
import { allParticipantsReady } from './AllParticipantsReady';
import { targetDocumentSessionStarted } from './TargetDocumentSessionStarted';
import { removingParticipantRequested } from './RemovingParticipantRequested';
import { removingParticipantResponded } from './RemovingParticipantResponded';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { workerSessionStarting } from './WorkerSessionStarting';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { myOSPackage } from './MyOSPackage';
import { informUserToInstallMyOSPackage } from './InformUserToInstallMyOSPackage';
import { singleDocumentPermissionRevokeRequested } from './SingleDocumentPermissionRevokeRequested';
import { documentAnchor } from './DocumentAnchor';
import { workerAgencyPermissionValidated } from './WorkerAgencyPermissionValidated';
import { singleDocumentPermissionGrantRequested } from './SingleDocumentPermissionGrantRequested';
import { participant } from './Participant';
import { subscriptionToSessionFailed } from './SubscriptionToSessionFailed';

export const contents = {
  '2533GSBC4sXbbhDNdB6hKnRoySzQDziUb9u7bK3sa7tD':
    workerAgencyPermissionGrantRequested,
  '2gc8djtKGGRPjGfMQzvJZMviaXm4ytM1nA4DVbfyjkrW': subscriptionUpdate,
  '2gyToM86KgFJpB8inz8TBVEMZk8UVGYdRozF4mfvxtuk': myOSTimeline,
  '2HpXN4xt6hNmMYrAtC8nawU62nLnH1HutHFhWKaNZ2bR': startWorkerSessionRequested,
  '387NGsN9DZNttQbjZHZksVSyHjb5SSZdhxKtCmMu36yo':
    singleDocumentPermissionRejected,
  '3FS3vHTB9XMw2RbwatfUTCSgoh647XduUBjYcz6Bdkwh':
    singleDocumentPermissionGrantResponded,
  '3P4vsTx8Ky2pucXxKgkn8MouveP2DBRjkwZckCG5b9Lb': callOperationResponded,
  '3rcnPHdWfDobpcCj6NaL7vgR7DFezZBBYkbMh2Xg2HgN': chatGPTConnectorAgent,
  '3SJK2XGFHJgqXyCK4sjZ6tmAk3VjyuX6imGBJmV2LgQZ': agentActor,
  '3vUWpGHb6Yj2V5e7tdYyQcKjx9hZudLf1ahhxGMMrDYd': myOSAdminBase,
  '4cmrbevB6K23ZenjqwmNxpnaw6RF4VB3wkP7XB59V7W5': documentLinks,
  '4cPqgXEsF6NHdAGhhAaHBPGZ6RNi5Dnr7YWp2vQd8HYk':
    workerAgencyPermissionRevokeRequested,
  '4fYuD2ZdTQpm5T6Xtibge9SKkNA8RrvDVmKmArrToQQW': myOSAgentChannel,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': myOSWorkerAgency,
  '4oeEooxTvCZvwkT4vCSwVq4mwuYhtNBiRTLWVSVoQu3B':
    singleDocumentPermissionGrantToAccount,
  '567voUMtKJQoqru6ZVPYb4EGwdeV99rUSAqsnod7gqfd':
    singleDocumentPermissionInvalid,
  '5GB8C22LsZGR3kkEmP5j5Zye7SR173ojzzUK99tUcoP': principalActor,
  '5J3RXNnALK1ZYAQBrjGwCQ4WpL3YUGHvz9WcGos6mMSp': workerAgencyPermission,
  '5sX6PjLHydkuj1BrvCM5QoUd4e3GCtCyc8KsNqpV2e9j':
    workerAgencyPermissionRevokingInProgress,
  '63kEoiNgJnYPGd2fnJw4Km2MD6zuCBBTn9v9qVPWx2Nz': workerAgencyPermissionInvalid,
  '6h9TRB22W218Bkjo11TD3zyCfuatFY8Ack4GBeW7vF69':
    singleDocumentPermissionRevokingInProgress,
  '6nYAWfizha9PvKi9scLLCReYimYaupRLoyZTCgB8zUpR': workerAgencyPermissionRevoked,
  '6Q4xykCNJQkiuekMJojj2fxNgu2LwQdf5sAG4F3g49ou': myOSTimelineChannel,
  '6TEuQyJvyCLU5WvnKQ2TrWE147t15CKzDr9f3ywQg1QF':
    singleDocumentPermissionGrantToDocument,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU': myOSParticipantsOrchestration,
  '7Usvk6dZMVqas3yqs23ZEXn1zu1YDPjgYiZFNYaw3puH': documentAnchors,
  '8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5': myOSAgent,
  '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9': myOSDocumentSessionReference,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': agent,
  '9CvxqAMJhqcFoLr5nXSEdWDZUMD383xhJtyFwXsCqD9E': sessionEpochAdvanced,
  '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo': bootstrapFailed,
  '9iu6bai3dWkJwdQtYRsUf85uqpRBRnC7SH8JFWgJBoWs':
    singleDocumentPermissionGrantingInProgress,
  '9Q2Kdb1FzRVZrbQHv1JZ9Emo14NavVqD32jnF5u6FUmj':
    workerAgencyPermissionGrantingInProgress,
  '9T3AsCqKkpoxHs6K9dTeCHRCXYGHPMthjaNcZxLdckgi':
    singleDocumentPermissionValidated,
  A3nxy96fKtp3bPnCYP14uhrnYCJoigDLJNvdbGnjdXg6: addingParticipantRequested,
  AR3MXbFFDXoFT8Rqh1m47KkoX9sq41LWRKb77ZSRMc7i: documentSessionBootstrap,
  BaNmvStTGdsBsSHiHbqdhrrC7vfwiQdDK6NYiyRbJowx: callOperationFailed,
  BFxgEnovNHQ693YR2YvALi4FP8vjcwSQiX63LiLwjUhk: documentLink,
  BmmvGcvB1yAe1fb3bsxpajwo9WuCNVAYQN8CGuMivUkT: singleDocumentPermissionRevoked,
  CB4YQq9GGVb3i3enmWnxx1zbV2Ks7nNHYdBhcCuJ8iht: workerAgencyPermissionRejected,
  CbcVNTgCj7hnq4nKBDdgWAcymuRqTTmCzxY1LUuK3ze6: addingParticipantResponded,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: myOSSessionInteraction,
  CF47wMy4XsVYMiFLmkvgYvXN8TBhfSTh1vnt8xvcFaE1: subscriptionToSessionRevoked,
  CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB: participantActivationState,
  CohDM1yrnMV32VE73JiRbnmT3h8TgVqryd2Eb8K5Tmzc: subscribeToSessionRequested,
  d1vQ8ZTPcQc5KeuU6tzWaVukWRVtKjQL4hbvbpC22rB: myOSSessionLink,
  D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD: link,
  D9Ret9Hmz5TWxzuJEeauWEuZVPkPL7hcHYsSNY1cZ5zX: documentTypeLink,
  Dd53JjiBGUnASZXjhiHBqCSnruN2XmLtcW2vNQB7Sm34: callOperationAccepted,
  DRDQcve5AjwBK9z6Njfa4MNERko7Uf4ucvARFdC6sL54: singleDocumentPermissionSet,
  EdrM9LnMKjfpYPpKNSm9hK61ywFCv8xwhd4nqUTv7Sy5: subscriptionToSessionInitiated,
  EkePKCdkvxvDYvKCG3xGM4jf7yCvLeVGH3bTvJiTwbkN: workerAgencyPermissionGrant,
  EkZN2mSyrJpF4DQmBsdW5NYzw626N6jhSzYYsibpB1MW: singleDocumentPermissionGranted,
  EQhLKv5EAcFriegGYEP7ykwbjeyzFoaTxeizzuTd8VDq: participantActivated,
  EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz: participantResolved,
  ESCifdJpDaKviHDVPzCAuaUeroYJTuQTNAUW6ikQHHWd: workerAgencyPermissionGranted,
  EVX6nBdHdVEBH9Gbthpd2eqpxaxS4bb9wM55QNdZmcBy: callOperationRequested,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: allParticipantsReady,
  FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p: targetDocumentSessionStarted,
  FsQKJihteQLatQio6mU8c15opBb9i2C2X882xGRKn46C: removingParticipantRequested,
  Fu7pgwV2VKNs1KqGcpoVewhYNeL2TE7nhaxDwEAs2iZx: removingParticipantResponded,
  Furgmg5xcJVMDmaQXZRfZ1XehSf7PWctrioo8etRYJHQ: myOSTimelineEntry,
  FYMd1LAezBcUXp9gh4bEjEwWKqZfgWStwHQ4Q7juTc8F: workerSessionStarting,
  GiYocGMGQcneiMPm4NH9MxVj7Fr4jwg2BUAMzwZcWRNR: myOSAgentEvent,
  GS5aDM715CBXJv8tChoGYgiLWyEiyS4qRm6yBQPaLN32: myOSPackage,
  GxDVADfu61G5PnUDJNyjjyZKoXpvCojxpbKHvBUFDa9s: informUserToInstallMyOSPackage,
  H1tETZ1YKndAuEBKu54ZDq3U1myncW3wj26QohP58y7X:
    singleDocumentPermissionRevokeRequested,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: documentAnchor,
  HUeeqt75YxUmP5mBdhchJEtXDXqhhT1EbwkrGSmbpNJf: workerAgencyPermissionValidated,
  HxMSh1JhD42UC2QGgoaCQozMTW3rsS8ENejasZtt7oXA:
    singleDocumentPermissionGrantRequested,
  phD9k4YTUgGjWeLPKqXNNn6S1PmqSeBJfVscAnUwFhQ: participant,
  vGfiWWkit85t2cg1YCn9MDGBp573F15YgGMkfx5D3Et: subscriptionToSessionFailed,
} as const;
