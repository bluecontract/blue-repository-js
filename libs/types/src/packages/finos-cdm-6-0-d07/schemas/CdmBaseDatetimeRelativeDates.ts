import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeDateRangeSchema } from './CdmBaseDatetimeDateRange';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
import { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export const CdmBaseDatetimeRelativeDatesSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/RelativeDates']
)(
  z.object({
    adjustedDate: z.string().optional(),
    businessCenters: z
      .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
      .optional(),
    businessCentersReference: z
      .lazy(
        () => CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema
      )
      .optional(),
    businessDayConvention: z
      .lazy(() => CdmBaseDatetimeBusinessDayConventionEnumSchema)
      .optional(),
    dateRelativeTo: z
      .lazy(() => ComRosettaModelMetafieldsReferenceWithMetaStringSchema)
      .optional(),
    dayType: z.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    period: z.lazy(() => CdmBaseDatetimePeriodEnumSchema).optional(),
    periodMultiplier: z.number().optional(),
    periodSkip: z.number().optional(),
    scheduleBounds: z.lazy(() => CdmBaseDatetimeDateRangeSchema).optional(),
  })
);

export type CdmBaseDatetimeRelativeDates = z.infer<
  typeof CdmBaseDatetimeRelativeDatesSchema
>;
