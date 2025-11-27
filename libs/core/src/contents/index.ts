import { boolean } from './Boolean';
import { documentProcessingTerminated } from './DocumentProcessingTerminated';
import { processingTerminatedMarker } from './ProcessingTerminatedMarker';
import { integer } from './Integer';
import { list } from './List';
import { documentUpdateChannel } from './DocumentUpdateChannel';
import { documentUpdate } from './DocumentUpdate';
import { double } from './Double';
import { marker } from './Marker';
import { handler } from './Handler';
import { contract } from './Contract';
import { channelEventCheckpoint } from './ChannelEventCheckpoint';
import { documentProcessingInitiated } from './DocumentProcessingInitiated';
import { jsonPatchEntry } from './JsonPatchEntry';
import { triggeredEventChannel } from './TriggeredEventChannel';
import { channel } from './Channel';
import { text } from './Text';
import { processingInitializedMarker } from './ProcessingInitializedMarker';
import { embeddedNodeChannel } from './EmbeddedNodeChannel';
import { dictionary } from './Dictionary';
import { lifecycleEventChannel } from './LifecycleEventChannel';
import { processEmbedded } from './ProcessEmbedded';

export const contents = {
  '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u': boolean,
  '5AJiAUgiSDwfCzv9rCYKNaAJu1hm8BXFu7eLNAEHNACr': documentProcessingTerminated,
  '5NiEhupJ6uF54Q3vs4GwQX4UX4ExtwHpKRVvjKEHtvjR': processingTerminatedMarker,
  '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1': integer,
  '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY': list,
  '6H1iGrDAcqtFE1qv3iyMTj79jCZsMUMxsNUzqYSJNbyR': documentUpdateChannel,
  '7htwgHAXA9FjUGRytXFfwYMUZz4R3BDMfmeHeGvpscLP': documentUpdate,
  '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y': double,
  '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6': marker,
  '9ZE5pGjtSGJgWJG7iAVz4iPEz5CatceX3yb3qp5MpAKJ': handler,
  AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx: contract,
  B7YQeYdQzUNuzaDQ4tNTd2iJqgd4YnVQkgz4QgymDWWU: channelEventCheckpoint,
  BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2: documentProcessingInitiated,
  Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5: jsonPatchEntry,
  C77W4kVGcxL7Mkx9WL9QESPEFFL2GzWAe647s1Efprt: triggeredEventChannel,
  DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr: channel,
  DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K: text,
  EVguxFmq5iFtMZaBQgHfjWDojaoesQ1vEXCQFZ59yL28: processingInitializedMarker,
  Fjbu3QpnUaTruDTcTidETCX2N5STyv7KYxT42PCzGHxm: embeddedNodeChannel,
  G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj: dictionary,
  H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr: lifecycleEventChannel,
  Hu4XkfvyXLSdfFNUwuXebEu3oJeWcMyhBTcRV9AQyKPC: processEmbedded,
} as const;
