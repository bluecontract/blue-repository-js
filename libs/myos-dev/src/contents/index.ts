import { myOSAgent } from './MyOSAgent';
import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { myOSTimeline } from './MyOSTimeline';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { myOSAgentChannel } from './MyOSAgentChannel';
import { documentSessionBootstrap } from './DocumentSessionBootstrap';

export const contents = {
  '9dvBsvQ5tGUZmR3bQkRy8nfwzAkSuM4NA8e4Fmy9eJtN': myOSAgent,
  Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6: myOSTimelineChannel,
  CzXt6pmkmKUk1fNpMpNRGKdYc84K35K8iLvsKCCu6o9M: myOSTimeline,
  D5UptqkNyFqmnniLRFP5vNqeXhcECq8MHtyraUsSYMDx: myOSTimelineEntry,
  Es7jKGJovgLQdi5Ek35p13tks7Q9cvs52Xoo4zJu3i7k: myOSAgentEvent,
  GvLXrz3siPPmmSLz1gHrQ4PCpDvjESdEfWSWUNwKrhf1: myOSAgentChannel,
  ZnS9EPNSTkueh1A7aeyQ6j53jpaqRaYvq5AgMpX85NC: documentSessionBootstrap,
} as const;
