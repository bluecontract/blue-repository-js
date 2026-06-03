import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowEventTimestampQualificationEnumSchema } from './CdmEventWorkflowEventTimestampQualificationEnum';

const zod = z as any;

export const CdmEventWorkflowEventTimestampSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/EventTimestamp']
)(
  zod.object({
    dateTime: zod.string(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    qualification: zod.lazy(
      () => CdmEventWorkflowEventTimestampQualificationEnumSchema
    ),
  })
);

export type CdmEventWorkflowEventTimestamp = z.infer<
  typeof CdmEventWorkflowEventTimestampSchema
>;
