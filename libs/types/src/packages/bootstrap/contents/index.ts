import { ParticipantMapping } from './ParticipantMapping';
import { DocumentBootstrapInProgress } from './DocumentBootstrapInProgress';
import { DocumentBootstrapCompleted } from './DocumentBootstrapCompleted';
import { DocumentBootstrap } from './DocumentBootstrap';
import { DocumentBootstrapFailed } from './DocumentBootstrapFailed';
import { DocumentBootstrapRequested } from './DocumentBootstrapRequested';
import { DocumentBootstrapDeclined } from './DocumentBootstrapDeclined';

export { ParticipantMapping } from './ParticipantMapping';
export { DocumentBootstrapInProgress } from './DocumentBootstrapInProgress';
export { DocumentBootstrapCompleted } from './DocumentBootstrapCompleted';
export { DocumentBootstrap } from './DocumentBootstrap';
export { DocumentBootstrapFailed } from './DocumentBootstrapFailed';
export { DocumentBootstrapRequested } from './DocumentBootstrapRequested';
export { DocumentBootstrapDeclined } from './DocumentBootstrapDeclined';

export const contents: Record<string, unknown> = {
  '2bpoRUwLybnKnNhCfmE28HEfh4JMTPBdCRr93G31goFW': ParticipantMapping,
  '3bhU39YjdqxCGhSW6LodoaP3nTfnYTAB8PY8NaHSLkbt': DocumentBootstrapInProgress,
  '7hkTA9xEpQixBzjN2M2Uei8K1h2MvmpVLqhau53Cksg5': DocumentBootstrapCompleted,
  BLRL88h4zXdTMctheFyCQG4gk4qsDSp5EPgirRRkvdmc: DocumentBootstrap,
  gACn7Kx4MP1u1hNiw5YuwHC6TEcCTLzyygc4YYN7Xmp: DocumentBootstrapFailed,
  GT7kXB7fBv9bKxn8ZM99E4XUaHecnGpMGZ5NMsB4ekDq: DocumentBootstrapRequested,
  HAbdpL4jP3EqXPiHBXddTXcdjiMRnxbkE6YnWkvbCMRa: DocumentBootstrapDeclined,
};
