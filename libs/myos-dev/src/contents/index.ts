import { myOSTimeline } from './MyOSTimeline';
import { myOSAgent } from './MyOSAgent';
import { documentSessionBootstrap } from './DocumentSessionBootstrap';
import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { myOSAgentChannel } from './MyOSAgentChannel';

export const contents = {
  '8cyT2HqPHGFBNjLnZzqsb4qN3CqZxMQEWo3h7KLVCfog': myOSTimeline,
  '9dvBsvQ5tGUZmR3bQkRy8nfwzAkSuM4NA8e4Fmy9eJtN': myOSAgent,
  BsbZvBQA4aLXJTFPRmP4S7Ud7b2MxU7rP95agd38xoTE: documentSessionBootstrap,
  Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6: myOSTimelineChannel,
  C99Sgq7uyEjz4YH7L27Aj1aahV2tJMAoCVct3ZiZp8av: myOSAgentEvent,
  FW2R85SUhYpoCVrzyr3DYWXK9TJNAuw5HLAmzdUnW6M3: myOSTimelineEntry,
  GvLXrz3siPPmmSLz1gHrQ4PCpDvjESdEfWSWUNwKrhf1: myOSAgentChannel,
} as const;
