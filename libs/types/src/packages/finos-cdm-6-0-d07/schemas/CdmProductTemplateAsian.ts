import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleAveragingPeriodSchema } from './CdmProductCommonScheduleAveragingPeriod';
import { CdmProductTemplateAveragingInOutEnumSchema } from './CdmProductTemplateAveragingInOutEnum';

export const CdmProductTemplateAsianSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Asian']
)(
  z.object({
    averagingInOut: z.lazy(() => CdmProductTemplateAveragingInOutEnumSchema),
    averagingPeriodIn: z
      .lazy(() => CdmProductCommonScheduleAveragingPeriodSchema)
      .optional(),
    averagingPeriodOut: z
      .lazy(() => CdmProductCommonScheduleAveragingPeriodSchema)
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    strikeFactor: z.number().optional(),
  })
);

export type CdmProductTemplateAsian = z.infer<
  typeof CdmProductTemplateAsianSchema
>;
