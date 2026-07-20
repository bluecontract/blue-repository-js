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
  AQiBjYvNGNupbn8GoAVjJD3GytsuktbfUJ8EXxm24uiX: AcceptChangeOperationSchema,
  '9Ke8Cm7sbxbdezqTBsHYAgKqsncGSsF1MQPhT8Lh7R4a': AcceptChangeWorkflowSchema,
  AKkQ1Sq3MRCEoDNv4FjEpx3Dn72DuM4DTVJNCJsSs1Ai: ChangeOperationSchema,
  '6DTYzUFXoVEV5WjVKmQveSztfXfVN5nr1bso3ygW9ocU': ChangeRequestSchema,
  J4N7XgGHAwMZJGJ4SkWuUHmTfKvsSHvSsbAduEsriARk: ChangeWorkflowSchema,
  CECcZ2xesYWUD4qZNFzDWYjWoMU6W55jEEoJHK8MWZct: ContractsChangePolicySchema,
  A3ARRUeBEDuZMTs7SN62agmNKd41i1ZZDRtsGWDhuSro: CustomerConsentSchema,
  '6R6asWqr9V6DAow5X6EjRRaABhM7xeT13UzcTegmhcjy': DocumentSectionSchema,
  '6bFMVH9pmLi52ygzapdZLYKoEhdjHJDiXELeEnyBPEiX':
    DocumentSectionChangeEntrySchema,
  '8FdfJApa4H55iYGnn2BVZcAq7tKYB6GrtkcftMgo6fjc': DocumentSectionChangesSchema,
  '6KfyYR3LoTKJLsgPkmYkXacY7JMPvTjJUeqtJXXfVHMr': ProposeChangeOperationSchema,
  '8vYuJh8cJGWzYHFG5z42LCpx219obwXWc2Z9D1CJ5bJa': ProposeChangeWorkflowSchema,
  '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y': ProposedChangeInvalidSchema,
  J3eHxcp4f3sKC2zohWMWLo5AvWAi2DJiNBPkExd1EhvU: RejectChangeOperationSchema,
  '9pyaCAF3GguLmRNGwhVLhXNqpvPsTtLpSdEuZCPpvRoT': RejectChangeWorkflowSchema,
};
