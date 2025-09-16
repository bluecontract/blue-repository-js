import { removingParticipantRequested } from './RemovingParticipantRequested';
import { myOSWorkerAgency } from './MyOSWorkerAgency';
import { myOSParticipantsOrchestration } from './MyOSParticipantsOrchestration';
import { participantActivated } from './ParticipantActivated';
import { participantActivationState } from './ParticipantActivationState';
import { myOSTimeline } from './MyOSTimeline';
import { bootstrapFailed } from './BootstrapFailed';
import { participantResolved } from './ParticipantResolved';
import { myOSAgent } from './MyOSAgent';
import { participant } from './Participant';
import { documentSessionBootstrap } from './DocumentSessionBootstrap';
import { removingParticipantResponded } from './RemovingParticipantResponded';
import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { myOSSessionInteraction } from './MyOSSessionInteraction';
import { targetDocumentSessionStarted } from './TargetDocumentSessionStarted';
import { allParticipantsReady } from './AllParticipantsReady';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { myOSAgentChannel } from './MyOSAgentChannel';
import { addingParticipantResponded } from './AddingParticipantResponded';
import { addingParticipantRequested } from './AddingParticipantRequested';

export const contents = {
  '2gnwi1cAknCcEdUoACnoSjfWD8oJRAhMyxmWnYD2595T': removingParticipantRequested,
  '4Lix4AKXvBDvrwxw2htSdYFKxL4wugEQzqoSEYet5Dh1': myOSWorkerAgency,
  '6tzp2YX1rei3aAXg22SqYbeiiteGthj1LesTNCWm7wbU': myOSParticipantsOrchestration,
  '6Zztm3YUuFwM5FoJ5Se9rsghP1BgQa3rLHoR8BhdNsTM': participantActivated,
  '77dKAvJLiqw5WXwyjHNRXfkh3ep8sHw7Q4gQyJEfoadJ': participantActivationState,
  '8cyT2HqPHGFBNjLnZzqsb4qN3CqZxMQEWo3h7KLVCfog': myOSTimeline,
  '8WpUtXczWTnk5cc38GNVH59ZBEwh5B9WEwjK9RGmSjqx': bootstrapFailed,
  '8wwU4rYswgfNnVYgEEBeLEdaPwXMzLzNs6do7bawa7xD': participantResolved,
  '9dvBsvQ5tGUZmR3bQkRy8nfwzAkSuM4NA8e4Fmy9eJtN': myOSAgent,
  B1W38RbaLYqkaPVP6upwrF6Z8G95LA7yPMPPXPvWvuRW: participant,
  BsbZvBQA4aLXJTFPRmP4S7Ud7b2MxU7rP95agd38xoTE: documentSessionBootstrap,
  BUufbPHWkFYjUUHXKaJVTErb4EVhCSfaubj5KECNhNXa: removingParticipantResponded,
  Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6: myOSTimelineChannel,
  C99Sgq7uyEjz4YH7L27Aj1aahV2tJMAoCVct3ZiZp8av: myOSAgentEvent,
  CeWyRmXAMZqvWBvby2KbRUZWcS7Pdxs42vnMXgn9gg6H: myOSSessionInteraction,
  EKDNdfFrKyQqa6ifz1oqPBZqhz3xvv7GB914CJPCumXF: targetDocumentSessionStarted,
  Ff61TKzxLStjvfMksRNUBif2PRJGJM6XvmTqSf3M76wC: allParticipantsReady,
  FW2R85SUhYpoCVrzyr3DYWXK9TJNAuw5HLAmzdUnW6M3: myOSTimelineEntry,
  GvLXrz3siPPmmSLz1gHrQ4PCpDvjESdEfWSWUNwKrhf1: myOSAgentChannel,
  H556UWC5XU8vj53PqHaXQQwXrGia9uHHkkdQpExJXJYT: addingParticipantResponded,
  HxcK5S9Lz2q5cqtER8kKgLQzDARZGiUAxWuhtBi2ev3a: addingParticipantRequested,
} as const;
