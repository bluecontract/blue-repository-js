import { DocumentBootstrapRequested } from './DocumentBootstrapRequested';
import { DocumentBootstrapDeclined } from './DocumentBootstrapDeclined';
import { DocumentBootstrapFailed } from './DocumentBootstrapFailed';
import { DocumentBootstrapInProgress } from './DocumentBootstrapInProgress';
import { DocumentBootstrap } from './DocumentBootstrap';
import { DocumentBootstrapCompleted } from './DocumentBootstrapCompleted';
import { ParticipantMapping } from './ParticipantMapping';

export { DocumentBootstrapRequested } from './DocumentBootstrapRequested';
export { DocumentBootstrapDeclined } from './DocumentBootstrapDeclined';
export { DocumentBootstrapFailed } from './DocumentBootstrapFailed';
export { DocumentBootstrapInProgress } from './DocumentBootstrapInProgress';
export { DocumentBootstrap } from './DocumentBootstrap';
export { DocumentBootstrapCompleted } from './DocumentBootstrapCompleted';
export { ParticipantMapping } from './ParticipantMapping';

export const contents: Record<string, unknown> = {
  '2a67bWEnUUaHNFM8MDaAKRCLnKQZKMcuifjT4mxAEnGt': DocumentBootstrapRequested,
  '4HrRcHN229bzcHXvGsEnbron77kYiFzTFEEHDWup1xRC': DocumentBootstrapDeclined,
  '9juepYbw4uwHiqDxcnjoJTn1Vv3TsDzPeSchpHUYRS3h': DocumentBootstrapFailed,
  B6zgAWGB7543y6JcE2jjUKqLrVMEFWfu7NY7sLzfn8aR: DocumentBootstrapInProgress,
  DWzwDRu5bJn25PNwudPyXhvQzWgWZv1THiNUmPhxZsAe: DocumentBootstrap,
  EogcjRxna7zSMip2wSg53fdRtQG8apJL6JqHeh1egh9f: DocumentBootstrapCompleted,
  HqeiZDQNRH4YUcB6ZLXUc4jdjEcVURhBAc3CsX5HGB7m: ParticipantMapping,
};
