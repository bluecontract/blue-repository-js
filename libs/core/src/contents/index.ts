import { boolean } from './Boolean';
import { documentProcessingTerminated } from './DocumentProcessingTerminated';
import { processingTerminatedMarker } from './ProcessingTerminatedMarker';
import { integer } from './Integer';
import { list } from './List';
import { triggeredEventChannel } from './TriggeredEventChannel';
import { documentUpdate } from './DocumentUpdate';
import { double } from './Double';
import { marker } from './Marker';
import { handler } from './Handler';
import { contract } from './Contract';
import { channelEventCheckpoint } from './ChannelEventCheckpoint';
import { embeddedNodeChannel } from './EmbeddedNodeChannel';
import { documentProcessingInitiated } from './DocumentProcessingInitiated';
import { jsonPatchEntry } from './JsonPatchEntry';
import { text } from './Text';
import { channel } from './Channel';
import { lifecycleEventChannel } from './LifecycleEventChannel';
import { processingInitializedMarker } from './ProcessingInitializedMarker';
import { dictionary } from './Dictionary';
import { processEmbedded } from './ProcessEmbedded';
import { documentUpdateChannel } from './DocumentUpdateChannel';

export const contents = {
  '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u': boolean,
  '5AJiAUgiSDwfCzv9rCYKNaAJu1hm8BXFu7eLNAEHNACr': documentProcessingTerminated,
  '5NiEhupJ6uF54Q3vs4GwQX4UX4ExtwHpKRVvjKEHtvjR': processingTerminatedMarker,
  '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1': integer,
  '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY': list,
  '716Uk7KPeunnc9PK48hNBDfRb9qsKrFCAZEcU92R169m': triggeredEventChannel,
  '7htwgHAXA9FjUGRytXFfwYMUZz4R3BDMfmeHeGvpscLP': documentUpdate,
  '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y': double,
  '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6': marker,
  '9ZE5pGjtSGJgWJG7iAVz4iPEz5CatceX3yb3qp5MpAKJ': handler,
  AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx: contract,
  B7YQeYdQzUNuzaDQ4tNTd2iJqgd4YnVQkgz4QgymDWWU: channelEventCheckpoint,
  BnyRD7rxxRV3G4co3tVvXTpuXT383UMuRoDsLvZcPsjD: embeddedNodeChannel,
  BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2: documentProcessingInitiated,
  Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5: jsonPatchEntry,
  DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K: text,
  EF9xc9RMMXusRaumQebVUUhwtp1Do6QBYYo6URRhg2yv: channel,
  Er9zZ7Yoii7D5j8PdvMYouH2TTVnHmcukFWVqJTam3To: lifecycleEventChannel,
  EVguxFmq5iFtMZaBQgHfjWDojaoesQ1vEXCQFZ59yL28: processingInitializedMarker,
  G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj: dictionary,
  Hu4XkfvyXLSdfFNUwuXebEu3oJeWcMyhBTcRV9AQyKPC: processEmbedded,
  J5QdSiiU4zBjMeFYBn8EH4bsY4K5rrmiGfGswn9rwRz1: documentUpdateChannel,
} as const;
