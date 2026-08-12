import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventWorkflowWorkflowStatusEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowStatusEnum']
)(
  zod.enum([
    'Accepted',
    'Affirmed',
    'Alleged',
    'Amended',
    'Cancelled',
    'Certain',
    'Cleared',
    'Confirmed',
    'Pending',
    'Rejected',
    'Submitted',
    'Terminated',
    'Uncertain',
    'Unconfirmed',
  ] as [string, ...string[]]) as unknown as z.ZodObject<any>
);

export type CdmEventWorkflowWorkflowStatusEnum = z.infer<
  typeof CdmEventWorkflowWorkflowStatusEnumSchema
>;
