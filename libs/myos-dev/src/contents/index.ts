import { documentLinks } from './DocumentLinks';
import { myOSAgentChannel } from './MyOSAgentChannel';
import { myOSPackage } from './MyOSPackage';
import { myOSWorkerAgency } from './MyOSWorkerAgency';
import { chatGPTConnectorAgent } from './ChatGPTConnectorAgent';
import { myOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
import { startWorkerSessionRequested } from './StartWorkerSessionRequested';
import { sessionEpochAdvanced } from './SessionEpochAdvanced';
import { subscribeToSessionRequested } from './SubscribeToSessionRequested';
import { callOperationAccepted } from './CallOperationAccepted';
import { documentAnchors } from './DocumentAnchors';
import { myOSAgent } from './MyOSAgent';
import { myOSDocumentSessionReference } from './MyOSDocumentSessionReference';
import { myOSTimeline } from './MyOSTimeline';
import { agentActor } from './AgentActor';
import { agent } from './Agent';
import { bootstrapFailed } from './BootstrapFailed';
import { addingParticipantRequested } from './AddingParticipantRequested';
import { informUserToInstallMyOSPackage } from './InformUserToInstallMyOSPackage';
import { documentLink } from './DocumentLink';
import { callOperationRequested } from './CallOperationRequested';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { addingParticipantResponded } from './AddingParticipantResponded';
import { myOSSessionInteraction } from './MyOSSessionInteraction';
import { documentSessionBootstrap } from './DocumentSessionBootstrap';
import { participantActivationState } from './ParticipantActivationState';
import { myOSAdminBase } from './MyOSAdminBase';
import { myOSSessionLink } from './MyOSSessionLink';
import { link } from './Link';
import { documentTypeLink } from './DocumentTypeLink';
import { callOperationFailed } from './CallOperationFailed';
import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { participantActivated } from './ParticipantActivated';
import { participantResolved } from './ParticipantResolved';
import { subscriptionToSessionInitiated } from './SubscriptionToSessionInitiated';
import { allParticipantsReady } from './AllParticipantsReady';
import { subscriptionToSessionFailed } from './SubscriptionToSessionFailed';
import { targetDocumentSessionStarted } from './TargetDocumentSessionStarted';
import { removingParticipantRequested } from './RemovingParticipantRequested';
import { removingParticipantResponded } from './RemovingParticipantResponded';
import { workerSessionStarting } from './WorkerSessionStarting';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { subscriptionToSessionRevoked } from './SubscriptionToSessionRevoked';
import { principalActor } from './PrincipalActor';
import { documentAnchor } from './DocumentAnchor';
import { participant } from './Participant';

export const contents = {
  '4cmrbevB6K23ZenjqwmNxpnaw6RF4VB3wkP7XB59V7W5': documentLinks,
  '4fYuD2ZdTQpm5T6Xtibge9SKkNA8RrvDVmKmArrToQQW': myOSAgentChannel,
  '4JZkLj81pErAeTvHxtp9oAYraKhisybdPuzbTv2mkd5v': myOSPackage,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': myOSWorkerAgency,
  '6bJuihDKoSGyuSgk7V9YHvxUUGptdjRptCjQ2CH9BvWa': chatGPTConnectorAgent,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU': myOSParticipantsOrchestration,
  '7cVNmxdkeEHkx9JdonT97gAMEUP9v8QFfUzaAwCh5Hqm': startWorkerSessionRequested,
  '7NoP59E1EbmygQXizFqDhRtaF85DBDfBtV6Ym3uvtT7s': sessionEpochAdvanced,
  '7tpQkVKJ4YNM9mz3kks9JDQ6QorCbqudNurPzrjwQxoy': subscribeToSessionRequested,
  '7ufHM37BmyqkkfReNuGyrCcs9SF1LTTUKWDD5WXUysUw': callOperationAccepted,
  '7Usvk6dZMVqas3yqs23ZEXn1zu1YDPjgYiZFNYaw3puH': documentAnchors,
  '8DQrCT6Mf9wHQyRc4NdYhjFW4FbKi83no2QPe54UhdQ5': myOSAgent,
  '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9': myOSDocumentSessionReference,
  '8jGY1N9oUvyitz3c5uhfsxz8kzQzimgEfWAA9RAci4MY': myOSTimeline,
  '8oDiwe4tAML37zuxu3Sc5LVegFxiPBRMPJydTauXZjHg': agentActor,
  '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc': agent,
  '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo': bootstrapFailed,
  A3nxy96fKtp3bPnCYP14uhrnYCJoigDLJNvdbGnjdXg6: addingParticipantRequested,
  ApcT6QWEHZEHu5chaRZk6VcQrXN5fmA2Lu4Em2t3zztr: informUserToInstallMyOSPackage,
  BFxgEnovNHQ693YR2YvALi4FP8vjcwSQiX63LiLwjUhk: documentLink,
  BrPtfdqM5eiy3gJCg1N8pQBLpstAYmUGA9hYn5VYCWFu: callOperationRequested,
  C9JEzzG54zyHpUGyUj1g5Hk4n7sKRd4gRRiHjyPtefPP: myOSTimelineEntry,
  CbcVNTgCj7hnq4nKBDdgWAcymuRqTTmCzxY1LUuK3ze6: addingParticipantResponded,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: myOSSessionInteraction,
  CezJjpsSGSBMDVsmdruVufFriUCcL2Z5by2RRatuRfPc: documentSessionBootstrap,
  CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB: participantActivationState,
  CUWkxDC7jdZZLtZBCbLg4coiVgvdFLTNoRN36C7kTiDY: myOSAdminBase,
  d1vQ8ZTPcQc5KeuU6tzWaVukWRVtKjQL4hbvbpC22rB: myOSSessionLink,
  D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD: link,
  D9Ret9Hmz5TWxzuJEeauWEuZVPkPL7hcHYsSNY1cZ5zX: documentTypeLink,
  DHjp99qDBqvNy6GiDUTXAJ59Kzk2sMJqdQEFn9jMFSeF: callOperationFailed,
  E3CgW5s3sUA1U4Y2Zy7MqYFRqTPmo4UDCKVKB1nTQbhz: myOSTimelineChannel,
  EQhLKv5EAcFriegGYEP7ykwbjeyzFoaTxeizzuTd8VDq: participantActivated,
  EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz: participantResolved,
  EWTcGiAWqFSMkJgdtqi1MKLjgaMJ5f8KHX3PQpntnzh1: subscriptionToSessionInitiated,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: allParticipantsReady,
  Fh7dNPhoXxeA6vVJ8YK7u13VbNuhTfMptTH1ecukkkkV: subscriptionToSessionFailed,
  FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p: targetDocumentSessionStarted,
  FsQKJihteQLatQio6mU8c15opBb9i2C2X882xGRKn46C: removingParticipantRequested,
  Fu7pgwV2VKNs1KqGcpoVewhYNeL2TE7nhaxDwEAs2iZx: removingParticipantResponded,
  FyEB5UGCKZUX3PGiC5ivUgCj1wksFnHJwcagpaGPiyan: workerSessionStarting,
  GiYocGMGQcneiMPm4NH9MxVj7Fr4jwg2BUAMzwZcWRNR: myOSAgentEvent,
  H6izGWryMRo3BKB7EGCN9C7xWhxfm615k6KdXnFQdADM: subscriptionToSessionRevoked,
  HQhkvaGUMTYA4ErvoPT5i3aL8SRxiimRLUpVnTc2F7aJ: principalActor,
  HS9yo34TGEAM2LGcNbLh7XPN4goPRhqdGZQkiyh473Wb: documentAnchor,
  phD9k4YTUgGjWeLPKqXNNn6S1PmqSeBJfVscAnUwFhQ: participant,
} as const;
