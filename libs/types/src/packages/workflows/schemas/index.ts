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
  F8yzCwY9qUvLmBtoJFshSpwepjNB9VZdbqdBmZ2USqN: AcceptChangeOperationSchema,
  Ax4Z2wn5NyUqNm8XVoPvc37iSiJg5fYHDAGgkGmdKNz1: AcceptChangeWorkflowSchema,
  '2GU1BcpX5YZRi9unTpM2ma9jq2gqmeAAN7sxL5N9zdYx': ChangeOperationSchema,
  '6DTYzUFXoVEV5WjVKmQveSztfXfVN5nr1bso3ygW9ocU': ChangeRequestSchema,
  '2rYpSjRi9FhYFkymGBM6GJbJ1aqxrUVfe6wJVLGXgyge': ChangeWorkflowSchema,
  CECcZ2xesYWUD4qZNFzDWYjWoMU6W55jEEoJHK8MWZct: ContractsChangePolicySchema,
  J5Y635XgMzHfDBE7zthvPE7bX7Zhb4Qux1d9vqTnHksQ: CustomerConsentSchema,
  '6R6asWqr9V6DAow5X6EjRRaABhM7xeT13UzcTegmhcjy': DocumentSectionSchema,
  '6bFMVH9pmLi52ygzapdZLYKoEhdjHJDiXELeEnyBPEiX':
    DocumentSectionChangeEntrySchema,
  '8FdfJApa4H55iYGnn2BVZcAq7tKYB6GrtkcftMgo6fjc': DocumentSectionChangesSchema,
  '8HQK7y79nm3M3cRCnM3gCWEbS6PqurBCqcYPoaWgKD84': ProposeChangeOperationSchema,
  D46msJi1VAwKc9ANScqNsoCFGuXkcodMaPGWKXg77uPj: ProposeChangeWorkflowSchema,
  '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y': ProposedChangeInvalidSchema,
  '2KuL6JGr5dMpdw1YgcoDkFNDW4h86LgBQBWCejqFeUvE': RejectChangeOperationSchema,
  '4GBqF7ko9oN34RAFL9uY5tx7R8FFP8idM1VaBKiXA1Tb': RejectChangeWorkflowSchema,
};
