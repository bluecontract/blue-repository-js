import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { myOSAgent } from './MyOSAgent';
import { myOSTimeline } from './MyOSTimeline';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { myOSAgentChannel } from './MyOSAgentChannel';

export const contents = {
  '2on6fJFSQscUy1v3Dot1LyMiL2j1qbYQBxUhQaGmCXPS': myOSTimelineChannel,
  '9dvBsvQ5tGUZmR3bQkRy8nfwzAkSuM4NA8e4Fmy9eJtN': myOSAgent,
  CzXt6pmkmKUk1fNpMpNRGKdYc84K35K8iLvsKCCu6o9M: myOSTimeline,
  Es7jKGJovgLQdi5Ek35p13tks7Q9cvs52Xoo4zJu3i7k: myOSAgentEvent,
  GPYxqqaAArohSCJEeDVLbhtVdAYq2Cs61iH5Sawn4dYd: myOSTimelineEntry,
  GvLXrz3siPPmmSLz1gHrQ4PCpDvjESdEfWSWUNwKrhf1: myOSAgentChannel,
} as const;
