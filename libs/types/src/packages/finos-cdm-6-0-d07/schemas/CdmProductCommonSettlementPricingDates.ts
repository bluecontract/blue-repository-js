import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';

export const CdmProductCommonSettlementPricingDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/PricingDates']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      parametricDates: z
        .lazy(() => CdmProductCommonScheduleParametricDatesSchema)
        .optional(),
      specifiedDates: z
        .array(z.lazy(() => CdmBaseDatetimeAdjustableDatesSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCommonSettlementPricingDates = z.infer<
  typeof CdmProductCommonSettlementPricingDatesSchema
>;
