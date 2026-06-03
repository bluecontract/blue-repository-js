import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodTimeEnumSchema } from './CdmBaseDatetimePeriodTimeEnum';

const zod = z as any;

export const CdmEventWorkflowVelocitySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/Velocity']
)(
  zod.object({
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodTimeEnumSchema).optional(),
    periodMultiplier: zod.number().optional(),
  })
);

export type CdmEventWorkflowVelocity = z.infer<
  typeof CdmEventWorkflowVelocitySchema
>;
