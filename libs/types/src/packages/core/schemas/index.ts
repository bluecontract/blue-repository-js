import { ChannelSchema } from './Channel';
import { ChannelEventCheckpointSchema } from './ChannelEventCheckpoint';
import { ContractSchema } from './Contract';
import { DocumentProcessingInitiatedSchema } from './DocumentProcessingInitiated';
import { DocumentProcessingTerminatedSchema } from './DocumentProcessingTerminated';
import { DocumentUpdateSchema } from './DocumentUpdate';
import { DocumentUpdateChannelSchema } from './DocumentUpdateChannel';
import { EmbeddedNodeChannelSchema } from './EmbeddedNodeChannel';
import { HandlerSchema } from './Handler';
import { JsonPatchEntrySchema } from './JsonPatchEntry';
import { LifecycleEventChannelSchema } from './LifecycleEventChannel';
import { MarkerSchema } from './Marker';
import { ProcessEmbeddedSchema } from './ProcessEmbedded';
import { ProcessingInitializedMarkerSchema } from './ProcessingInitializedMarker';
import { ProcessingTerminatedMarkerSchema } from './ProcessingTerminatedMarker';
import { TriggeredEventChannelSchema } from './TriggeredEventChannel';

export { ChannelSchema } from './Channel';
export { ChannelEventCheckpointSchema } from './ChannelEventCheckpoint';
export { ContractSchema } from './Contract';
export { DocumentProcessingInitiatedSchema } from './DocumentProcessingInitiated';
export { DocumentProcessingTerminatedSchema } from './DocumentProcessingTerminated';
export { DocumentUpdateSchema } from './DocumentUpdate';
export { DocumentUpdateChannelSchema } from './DocumentUpdateChannel';
export { EmbeddedNodeChannelSchema } from './EmbeddedNodeChannel';
export { HandlerSchema } from './Handler';
export { JsonPatchEntrySchema } from './JsonPatchEntry';
export { LifecycleEventChannelSchema } from './LifecycleEventChannel';
export { MarkerSchema } from './Marker';
export { ProcessEmbeddedSchema } from './ProcessEmbedded';
export { ProcessingInitializedMarkerSchema } from './ProcessingInitializedMarker';
export { ProcessingTerminatedMarkerSchema } from './ProcessingTerminatedMarker';
export { TriggeredEventChannelSchema } from './TriggeredEventChannel';

export const schemas = {
  DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr: ChannelSchema,
  B7YQeYdQzUNuzaDQ4tNTd2iJqgd4YnVQkgz4QgymDWWU: ChannelEventCheckpointSchema,
  AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx: ContractSchema,
  BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2:
    DocumentProcessingInitiatedSchema,
  '5AJiAUgiSDwfCzv9rCYKNaAJu1hm8BXFu7eLNAEHNACr':
    DocumentProcessingTerminatedSchema,
  '7htwgHAXA9FjUGRytXFfwYMUZz4R3BDMfmeHeGvpscLP': DocumentUpdateSchema,
  '6H1iGrDAcqtFE1qv3iyMTj79jCZsMUMxsNUzqYSJNbyR': DocumentUpdateChannelSchema,
  Fjbu3QpnUaTruDTcTidETCX2N5STyv7KYxT42PCzGHxm: EmbeddedNodeChannelSchema,
  '9ZE5pGjtSGJgWJG7iAVz4iPEz5CatceX3yb3qp5MpAKJ': HandlerSchema,
  Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5: JsonPatchEntrySchema,
  H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr: LifecycleEventChannelSchema,
  '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6': MarkerSchema,
  Hu4XkfvyXLSdfFNUwuXebEu3oJeWcMyhBTcRV9AQyKPC: ProcessEmbeddedSchema,
  EVguxFmq5iFtMZaBQgHfjWDojaoesQ1vEXCQFZ59yL28:
    ProcessingInitializedMarkerSchema,
  '5NiEhupJ6uF54Q3vs4GwQX4UX4ExtwHpKRVvjKEHtvjR':
    ProcessingTerminatedMarkerSchema,
  C77W4kVGcxL7Mkx9WL9QESPEFFL2GzWAe647s1Efprt: TriggeredEventChannelSchema,
} as const;
