import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowEventTimestampQualificationEnumSchema } from './CdmEventWorkflowEventTimestampQualificationEnum';

export const CdmEventWorkflowEventTimestampSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/EventTimestamp']
  )(
    z.object({
      dateTime: z.string(),
      description: z.string().optional(),
      name: z.string().optional(),
      qualification: z.lazy(
        () => CdmEventWorkflowEventTimestampQualificationEnumSchema
      ),
    })
  );

export type CdmEventWorkflowEventTimestamp = z.infer<
  typeof CdmEventWorkflowEventTimestampSchema
>;
