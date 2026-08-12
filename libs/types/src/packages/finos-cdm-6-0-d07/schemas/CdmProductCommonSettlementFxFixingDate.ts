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

const zod = z as any;

export const CdmProductCommonSettlementFxFixingDateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/FxFixingDate']
)(
  zod.object({
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
    dateRelativeToCalculationPeriodDates: zod
      .lazy(
        () => CdmProductCommonScheduleDateRelativeToCalculationPeriodDatesSchema
      )
      .optional(),
    dateRelativeToPaymentDates: zod
      .lazy(() => CdmProductCommonScheduleDateRelativeToPaymentDatesSchema)
      .optional(),
    dateRelativeToValuationDates: zod
      .lazy(() => CdmProductCommonScheduleDateRelativeToValuationDatesSchema)
      .optional(),
    dayType: zod.lazy(() => CdmBaseDatetimeDayTypeEnumSchema).optional(),
    description: zod.string().optional(),
    fxFixingDate: zod
      .lazy(() => CdmBaseDatetimeAdjustableOrRelativeDateSchema)
      .optional(),
    name: zod.string().optional(),
    period: zod.lazy(() => CdmBaseDatetimePeriodEnumSchema).optional(),
    periodMultiplier: zod.number().optional(),
  })
);

export type CdmProductCommonSettlementFxFixingDate = z.infer<
  typeof CdmProductCommonSettlementFxFixingDateSchema
>;
