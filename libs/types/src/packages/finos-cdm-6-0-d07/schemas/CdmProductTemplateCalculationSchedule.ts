import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateSchedulePeriodSchema } from './CdmProductTemplateSchedulePeriod';

const zod = z as any;

export const CdmProductTemplateCalculationScheduleSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CalculationSchedule']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    schedulePeriod: zod
      .array(zod.lazy(() => CdmProductTemplateSchedulePeriodSchema))
      .min(1)
      .optional(),
  })
);

export type CdmProductTemplateCalculationSchedule = z.infer<
  typeof CdmProductTemplateCalculationScheduleSchema
>;
