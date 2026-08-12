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
  BLRL88h4zXdTMctheFyCQG4gk4qsDSp5EPgirRRkvdmc: DocumentBootstrapSchema,
  '7hkTA9xEpQixBzjN2M2Uei8K1h2MvmpVLqhau53Cksg5':
    DocumentBootstrapCompletedSchema,
  HAbdpL4jP3EqXPiHBXddTXcdjiMRnxbkE6YnWkvbCMRa: DocumentBootstrapDeclinedSchema,
  gACn7Kx4MP1u1hNiw5YuwHC6TEcCTLzyygc4YYN7Xmp: DocumentBootstrapFailedSchema,
  '3bhU39YjdqxCGhSW6LodoaP3nTfnYTAB8PY8NaHSLkbt':
    DocumentBootstrapInProgressSchema,
  GT7kXB7fBv9bKxn8ZM99E4XUaHecnGpMGZ5NMsB4ekDq:
    DocumentBootstrapRequestedSchema,
  '2bpoRUwLybnKnNhCfmE28HEfh4JMTPBdCRr93G31goFW': ParticipantMappingSchema,
};
