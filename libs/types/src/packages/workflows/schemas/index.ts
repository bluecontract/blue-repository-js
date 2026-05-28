import type { ZodTypeAny } from 'zod';
import { AcceptChangeWorkflowSchema } from './AcceptChangeWorkflow';
import { ChangeWorkflowSchema } from './ChangeWorkflow';
import { CustomerConsentSchema } from './CustomerConsent';
import { ProposeChangeWorkflowSchema } from './ProposeChangeWorkflow';
import { RejectChangeWorkflowSchema } from './RejectChangeWorkflow';

export { AcceptChangeWorkflowSchema } from './AcceptChangeWorkflow';
export { ChangeWorkflowSchema } from './ChangeWorkflow';
export { CustomerConsentSchema } from './CustomerConsent';
export { ProposeChangeWorkflowSchema } from './ProposeChangeWorkflow';
export { RejectChangeWorkflowSchema } from './RejectChangeWorkflow';

export const schemas: Record<string, ZodTypeAny> = {
  AL4KTudz2vtLJTJFQNsJ8EFr6gbQX8L4oj3Xsdqux2Gu: AcceptChangeWorkflowSchema,
  G8XeRTB165ZP3y5gRhKRPMEKUC5GMDv18psv6Kdk7bXk: ChangeWorkflowSchema,
  BYB6Hfd7EpiSW2GEr5WK14cZQViyBNYgSzqNBsHEnNJd: CustomerConsentSchema,
  '74cg8eETguV2aULXjMwze43z5UnBg4Ukx3ocC41jXYug': ProposeChangeWorkflowSchema,
  BgC81yzSepmNNqkeZ1yNCMNe6yBDQQDoDXMLBAMyAVXM: RejectChangeWorkflowSchema,
};
