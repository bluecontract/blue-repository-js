import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodTimeEnumSchema } from './CdmBaseDatetimePeriodTimeEnum';

export const CdmEventWorkflowVelocitySchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/Velocity']
)(
  z.object({
    name: z.string().optional(),
    period: z.lazy(() => CdmBaseDatetimePeriodTimeEnumSchema).optional(),
    periodMultiplier: z.number().optional(),
  })
);

export type CdmEventWorkflowVelocity = z.infer<
  typeof CdmEventWorkflowVelocitySchema
>;
