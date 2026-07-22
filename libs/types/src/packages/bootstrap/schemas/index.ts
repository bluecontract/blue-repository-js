import type { ZodTypeAny } from 'zod';
import { DocumentBootstrapSchema } from './DocumentBootstrap';
import { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
import { DocumentBootstrapDeclinedSchema } from './DocumentBootstrapDeclined';
import { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
import { DocumentBootstrapInProgressSchema } from './DocumentBootstrapInProgress';
import { DocumentBootstrapRequestedSchema } from './DocumentBootstrapRequested';
import { ParticipantMappingSchema } from './ParticipantMapping';

export { DocumentBootstrapSchema } from './DocumentBootstrap';
export { DocumentBootstrapCompletedSchema } from './DocumentBootstrapCompleted';
export { DocumentBootstrapDeclinedSchema } from './DocumentBootstrapDeclined';
export { DocumentBootstrapFailedSchema } from './DocumentBootstrapFailed';
export { DocumentBootstrapInProgressSchema } from './DocumentBootstrapInProgress';
export { DocumentBootstrapRequestedSchema } from './DocumentBootstrapRequested';
export { ParticipantMappingSchema } from './ParticipantMapping';

export const schemas: Record<string, ZodTypeAny> = {
  DWzwDRu5bJn25PNwudPyXhvQzWgWZv1THiNUmPhxZsAe: DocumentBootstrapSchema,
  EogcjRxna7zSMip2wSg53fdRtQG8apJL6JqHeh1egh9f:
    DocumentBootstrapCompletedSchema,
  '4HrRcHN229bzcHXvGsEnbron77kYiFzTFEEHDWup1xRC':
    DocumentBootstrapDeclinedSchema,
  '9juepYbw4uwHiqDxcnjoJTn1Vv3TsDzPeSchpHUYRS3h': DocumentBootstrapFailedSchema,
  B6zgAWGB7543y6JcE2jjUKqLrVMEFWfu7NY7sLzfn8aR:
    DocumentBootstrapInProgressSchema,
  GtkzouXkHv2NByNsd8ciAGSpgaMcwr2LwL9Px7JLdrBJ:
    DocumentBootstrapRequestedSchema,
  HqeiZDQNRH4YUcB6ZLXUc4jdjEcVURhBAc3CsX5HGB7m: ParticipantMappingSchema,
};
