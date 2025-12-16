import { Channel } from './Channel';
import { ChannelEventCheckpoint } from './ChannelEventCheckpoint';
import { Contract } from './Contract';
import { DocumentProcessingInitiated } from './DocumentProcessingInitiated';
import { DocumentProcessingTerminated } from './DocumentProcessingTerminated';
import { DocumentUpdate } from './DocumentUpdate';
import { DocumentUpdateChannel } from './DocumentUpdateChannel';
import { EmbeddedNodeChannel } from './EmbeddedNodeChannel';
import { Handler } from './Handler';
import { JsonPatchEntry } from './JsonPatchEntry';
import { LifecycleEventChannel } from './LifecycleEventChannel';
import { Marker } from './Marker';
import { ProcessEmbedded } from './ProcessEmbedded';
import { ProcessingInitializedMarker } from './ProcessingInitializedMarker';
import { ProcessingTerminatedMarker } from './ProcessingTerminatedMarker';
import { TriggeredEventChannel } from './TriggeredEventChannel';

export { Channel } from './Channel';
export { ChannelEventCheckpoint } from './ChannelEventCheckpoint';
export { Contract } from './Contract';
export { DocumentProcessingInitiated } from './DocumentProcessingInitiated';
export { DocumentProcessingTerminated } from './DocumentProcessingTerminated';
export { DocumentUpdate } from './DocumentUpdate';
export { DocumentUpdateChannel } from './DocumentUpdateChannel';
export { EmbeddedNodeChannel } from './EmbeddedNodeChannel';
export { Handler } from './Handler';
export { JsonPatchEntry } from './JsonPatchEntry';
export { LifecycleEventChannel } from './LifecycleEventChannel';
export { Marker } from './Marker';
export { ProcessEmbedded } from './ProcessEmbedded';
export { ProcessingInitializedMarker } from './ProcessingInitializedMarker';
export { ProcessingTerminatedMarker } from './ProcessingTerminatedMarker';
export { TriggeredEventChannel } from './TriggeredEventChannel';

export const contents = {
  'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr': Channel,
  'B7YQeYdQzUNuzaDQ4tNTd2iJqgd4YnVQkgz4QgymDWWU': ChannelEventCheckpoint,
  'AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx': Contract,
  'BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2': DocumentProcessingInitiated,
  '5AJiAUgiSDwfCzv9rCYKNaAJu1hm8BXFu7eLNAEHNACr': DocumentProcessingTerminated,
  '7htwgHAXA9FjUGRytXFfwYMUZz4R3BDMfmeHeGvpscLP': DocumentUpdate,
  '6H1iGrDAcqtFE1qv3iyMTj79jCZsMUMxsNUzqYSJNbyR': DocumentUpdateChannel,
  'Fjbu3QpnUaTruDTcTidETCX2N5STyv7KYxT42PCzGHxm': EmbeddedNodeChannel,
  '9ZE5pGjtSGJgWJG7iAVz4iPEz5CatceX3yb3qp5MpAKJ': Handler,
  'Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5': JsonPatchEntry,
  'H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr': LifecycleEventChannel,
  '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6': Marker,
  'Hu4XkfvyXLSdfFNUwuXebEu3oJeWcMyhBTcRV9AQyKPC': ProcessEmbedded,
  'EVguxFmq5iFtMZaBQgHfjWDojaoesQ1vEXCQFZ59yL28': ProcessingInitializedMarker,
  '5NiEhupJ6uF54Q3vs4GwQX4UX4ExtwHpKRVvjKEHtvjR': ProcessingTerminatedMarker,
  'C77W4kVGcxL7Mkx9WL9QESPEFFL2GzWAe647s1Efprt': TriggeredEventChannel
} as const;
