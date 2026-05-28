import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
import { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export const CdmBaseDatetimeAdjustedRelativeDateOffsetSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/base/datetime/AdjustedRelativeDateOffset']
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
      relativeDateAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
    })
  );

export type CdmBaseDatetimeAdjustedRelativeDateOffset = z.infer<
  typeof CdmBaseDatetimeAdjustedRelativeDateOffsetSchema
>;
