import type { ZodTypeAny } from 'zod';
import { AcceptChangeOperationSchema } from './AcceptChangeOperation';
import { AcceptChangeWorkflowSchema } from './AcceptChangeWorkflow';
import { ChangeOperationSchema } from './ChangeOperation';
import { ChangeRequestSchema } from './ChangeRequest';
import { ChangeWorkflowSchema } from './ChangeWorkflow';
import { ContractsChangePolicySchema } from './ContractsChangePolicy';
import { CustomerConsentSchema } from './CustomerConsent';
import { DocumentSectionSchema } from './DocumentSection';
import { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';
import { DocumentSectionChangesSchema } from './DocumentSectionChanges';
import { ProposeChangeOperationSchema } from './ProposeChangeOperation';
import { ProposeChangeWorkflowSchema } from './ProposeChangeWorkflow';
import { ProposedChangeInvalidSchema } from './ProposedChangeInvalid';
import { RejectChangeOperationSchema } from './RejectChangeOperation';
import { RejectChangeWorkflowSchema } from './RejectChangeWorkflow';

export { AcceptChangeOperationSchema } from './AcceptChangeOperation';
export { AcceptChangeWorkflowSchema } from './AcceptChangeWorkflow';
export { ChangeOperationSchema } from './ChangeOperation';
export { ChangeRequestSchema } from './ChangeRequest';
export { ChangeWorkflowSchema } from './ChangeWorkflow';
export { ContractsChangePolicySchema } from './ContractsChangePolicy';
export { CustomerConsentSchema } from './CustomerConsent';
export { DocumentSectionSchema } from './DocumentSection';
export { DocumentSectionChangeEntrySchema } from './DocumentSectionChangeEntry';
export { DocumentSectionChangesSchema } from './DocumentSectionChanges';
export { ProposeChangeOperationSchema } from './ProposeChangeOperation';
export { ProposeChangeWorkflowSchema } from './ProposeChangeWorkflow';
export { ProposedChangeInvalidSchema } from './ProposedChangeInvalid';
export { RejectChangeOperationSchema } from './RejectChangeOperation';
export { RejectChangeWorkflowSchema } from './RejectChangeWorkflow';

export const schemas: Record<string, ZodTypeAny> = {
  '7Dv66Ymipyi4znKm3ek5wc1xVA4Qy5agxb3LjbMxKv6p': AcceptChangeOperationSchema,
  FcqWLnwxGzMFR6vo3GnhEUmgbh9eGLTPGytYWmhdGrwT: AcceptChangeWorkflowSchema,
  CuFVdF9x8vra93EdgSK9pPq4iGsyc4LZWNDpxMjSXHnT: ChangeOperationSchema,
  AVuAYKsZEMLjY3XwmKMe1LPrVAEo6R6FepDjPqgndF7J: ChangeRequestSchema,
  BwQFZSEaqWCnoQcVBvho2A1ig9Dz7yAgZkN4zzizjL88: ChangeWorkflowSchema,
  F2z5kuhjRCwngkuZAxfWyYrZNMM9PeumHLmPqT222RKa: ContractsChangePolicySchema,
  ATWLhHxoNDLzACS5XaADJWW3iaMDj1pesogCsxdez55w: CustomerConsentSchema,
  CJwAFnduHpubiXYhhgnrS272rM8qELbcfutiaAAWmRsa: DocumentSectionSchema,
  DN9VhzcZvGNtMz2K3qVBQrVeYssBUqbewt2Cxi6CXS3R:
    DocumentSectionChangeEntrySchema,
  '9MfTNhMnFbd6VkhaLLLEyv1SxwBzj9iJjfUNQV2toU9S': DocumentSectionChangesSchema,
  '3xA8aEEJKHC8JwXgd4QuoUYm7H4vMpdRfgbpyvhJfctV': ProposeChangeOperationSchema,
  '7QnVMqUQguxM3MxNqRYX4sVX9DWJPY3TE1SEagW6z371': ProposeChangeWorkflowSchema,
  '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y': ProposedChangeInvalidSchema,
  '9dhHG1LpwkNSRrds8zMZquTEy4DV8UFkRVJRF5H15QYV': RejectChangeOperationSchema,
  CrDGdNaZbF1XLkM1XY88c5mcHgPENYKgRTFtav8rHRU5: RejectChangeWorkflowSchema,
};
