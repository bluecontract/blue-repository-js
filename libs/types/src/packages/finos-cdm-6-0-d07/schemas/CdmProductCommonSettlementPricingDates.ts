import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';

const zod = z as any;

export const CdmProductCommonSettlementPricingDatesSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PricingDates']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    parametricDates: zod
      .lazy(() => CdmProductCommonScheduleParametricDatesSchema)
      .optional(),
    specifiedDates: zod
      .array(zod.lazy(() => CdmBaseDatetimeAdjustableDatesSchema))
      .min(0)
      .optional(),
  })
);

export type CdmProductCommonSettlementPricingDates = z.infer<
  typeof CdmProductCommonSettlementPricingDatesSchema
>;
