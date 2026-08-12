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

const zod = z as any;

export const CdmBaseDatetimeRelativeDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/RelativeDates']
)(
  zod.object({
    adjustedDate: zod.string().optional(),
    businessCenters: zod
      .lazy(() => CdmBaseDatetimeBusinessCentersSchema)
      .optional(),
    businessCentersReference: zod
      .lazy(
        () => CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema
      )
      .optional(),
    businessDayConvention: zod
      .lazy(() => CdmBaseDatetimeBusinessDayConventionEnumSchema)
      .optional(),
    dateRelativeTo: zod
      .lazy(() => ComRosettaModelMetafieldsReferenceWithMetaStringSchema)
      .optional(),
    dayType: zod.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodEnumSchema).optional(),
    periodMultiplier: zod.number().optional(),
    periodSkip: zod.number().optional(),
    scheduleBounds: zod.lazy(() => CdmBaseDatetimeDateRangeSchema).optional(),
  })
);

export type CdmBaseDatetimeRelativeDates = z.infer<
  typeof CdmBaseDatetimeRelativeDatesSchema
>;
