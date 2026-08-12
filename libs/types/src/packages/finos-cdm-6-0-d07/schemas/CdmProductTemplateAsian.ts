import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleAveragingPeriodSchema } from './CdmProductCommonScheduleAveragingPeriod';
import { CdmProductTemplateAveragingInOutEnumSchema } from './CdmProductTemplateAveragingInOutEnum';

const zod = z as any;

export const CdmProductTemplateAsianSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Asian']
)(
  zod.object({
    averagingInOut: zod.lazy(() => CdmProductTemplateAveragingInOutEnumSchema),
    averagingPeriodIn: zod
      .lazy(() => CdmProductCommonScheduleAveragingPeriodSchema)
      .optional(),
    averagingPeriodOut: zod
      .lazy(() => CdmProductCommonScheduleAveragingPeriodSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    strikeFactor: zod.number().optional(),
  })
);

export type CdmProductTemplateAsian = z.infer<
  typeof CdmProductTemplateAsianSchema
>;
