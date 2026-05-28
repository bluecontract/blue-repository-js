import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrRelativeDate';
import { CdmBaseDatetimeBusinessCentersSchema } from './CdmBaseDatetimeBusinessCenters';
import { CdmBaseDatetimeBusinessDayConventionEnumSchema } from './CdmBaseDatetimeBusinessDayConventionEnum';
import { CdmBaseDatetimeDayTypeEnumSchema } from './CdmBaseDatetimeDayTypeEnum';
import { CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCentersSchema } from './CdmBaseDatetimeMetafieldsReferenceWithMetaBusinessCenters';
import { CdmBaseDatetimePeriodEnumSchema } from './CdmBaseDatetimePeriodEnum';
import { CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema } from './CdmProductCommonScheduleDateRelativeToCalculationPeriodDates';
import { CdmProductCommonScheduleDateRelativeToPaymentDatesSchema } from './CdmProductCommonScheduleDateRelativeToPaymentDates';
import { CdmProductCommonScheduleDateRelativeToValuationDatesSchema } from './CdmProductCommonScheduleDateRelativeToValuationDates';

export const CdmProductCommonSettlementFxFixingDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/FxFixingDate']
  )(
    z.object({
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
      dateRelativeToCalculationPeriodDates: z
        .lazy(
          () =>
            CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema
        )
        .optional(),
      dateRelativeToPaymentDates: z
        .lazy(() => CdmProductCommonScheduleDateRelativeToPaymentDatesSchema)
        .optional(),
      dateRelativeToValuationDates: z
        .lazy(() => CdmProductCommonScheduleDateRelativeToValuationDatesSchema)
        .optional(),
      dayType: z.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
      description: z.string().optional(),
      fxFixingDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
        .optional(),
      name: z.string().optional(),
      period: z.lazy(() => CdmBaseDatetimePeriodEnumSchema).optional(),
      periodMultiplier: z.number().optional(),
    })
  );

export type CdmProductCommonSettlementFxFixingDate = z.infer<
  typeof CdmProductCommonSettlementFxFixingDateSchema
>;
