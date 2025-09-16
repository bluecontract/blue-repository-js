import { myOSTimeline } from './MyOSTimeline';
import { myOSAgent } from './MyOSAgent';
import { myOSTimelineChannel } from './MyOSTimelineChannel';
import { myOSAgentEvent } from './MyOSAgentEvent';
import { myOSAdminBase } from './MyOSAdminBase';
import { documentSessionBootstrap } from './DocumentSessionBootstrap';
import { myOSTimelineEntry } from './MyOSTimelineEntry';
import { myOSAgentChannel } from './MyOSAgentChannel';

export const contents = {
  '8cyT2HqPHGFBNjLnZzqsb4qN3CqZxMQEWo3h7KLVCfog': myOSTimeline,
  '9dvBsvQ5tGUZmR3bQkRy8nfwzAkSuM4NA8e4Fmy9eJtN': myOSAgent,
  Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6: myOSTimelineChannel,
  C99Sgq7uyEjz4YH7L27Aj1aahV2tJMAoCVct3ZiZp8av: myOSAgentEvent,
  DiKtcqbeAASVoY6CaLY7MJPiUEpcJ69TxK7SD6t1FJQJ: myOSAdminBase,
  FL7sEfmyY92R1e27x8Qu5znRpSMGfBJbZZKLxs3d2mQi: documentSessionBootstrap,
  FW2R85SUhYpoCVrzyr3DYWXK9TJNAuw5HLAmzdUnW6M3: myOSTimelineEntry,
  GvLXrz3siPPmmSLz1gHrQ4PCpDvjESdEfWSWUNwKrhf1: myOSAgentChannel,
} as const;
