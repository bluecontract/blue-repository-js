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
  '1z2ACPaKnxqsMGMtYW54y17uSrutGg5Sbum9RcPtxrb': AcceptChangeOperationSchema,
  '9yxb9JxmGa7e9AswuZ6WJVFYYygxDY9u1cA8oMTF2BFJ': AcceptChangeWorkflowSchema,
  DL6JGSVSnCRpTnqyuontEw58KJFCZXQxFxn9jaQdP5FN: ChangeOperationSchema,
  '6DTYzUFXoVEV5WjVKmQveSztfXfVN5nr1bso3ygW9ocU': ChangeRequestSchema,
  GqKFq9apKg63tJmc6ThUdURwy8eqf8LGhphpkrBt71n6: ChangeWorkflowSchema,
  CECcZ2xesYWUD4qZNFzDWYjWoMU6W55jEEoJHK8MWZct: ContractsChangePolicySchema,
  A84YJAESBS9YNfAypruePcLGnuRRoN2G599PJYQyDEGv: CustomerConsentSchema,
  '6R6asWqr9V6DAow5X6EjRRaABhM7xeT13UzcTegmhcjy': DocumentSectionSchema,
  '6bFMVH9pmLi52ygzapdZLYKoEhdjHJDiXELeEnyBPEiX':
    DocumentSectionChangeEntrySchema,
  '8FdfJApa4H55iYGnn2BVZcAq7tKYB6GrtkcftMgo6fjc': DocumentSectionChangesSchema,
  Bfa8rBxGS5auYWAWQ5nGKftm1q3dGD2ge2jwmjP2Atx5: ProposeChangeOperationSchema,
  '3p9WMmXyfy3DJVctukesfdw6Gj4SK6QdsYebRSHJaH6c': ProposeChangeWorkflowSchema,
  '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y': ProposedChangeInvalidSchema,
  '4DhBZNTeYw3vym9Z2ArJPo8CTSvhQy3eMnjoauEFnYRt': RejectChangeOperationSchema,
  '33PFufGhLW51jVunAcpxYPj4tj4TwqXEinLnnqJNjTJm': RejectChangeWorkflowSchema,
};
