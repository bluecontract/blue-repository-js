import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductTemplateSchedulePeriodSchema } from './CdmProductTemplateSchedulePeriod';

export const CdmProductTemplateCalculationScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/CalculationSchedule']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      schedulePeriod: z
        .array(z.lazy(() => CdmProductTemplateSchedulePeriodSchema))
        .min(1)
        .optional(),
    })
  );

export type CdmProductTemplateCalculationSchedule = z.infer<
  typeof CdmProductTemplateCalculationScheduleSchema
>;
