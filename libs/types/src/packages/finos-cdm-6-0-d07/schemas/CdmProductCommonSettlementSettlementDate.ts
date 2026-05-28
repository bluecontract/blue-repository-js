import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseDatetimeBusinessDateRangeSchema } from './CdmBaseDatetimeBusinessDateRange';

export const CdmProductCommonSettlementSettlementDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementDate']
  )(
    z.object({
      adjustableDates: z
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      adjustableOrRelativeDate: z
        .lazy(() => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema)
        .optional(),
      businessDateRange: z
        .lazy(() => CdmBaseDatetimeBusinessDateRangeSchema)
        .optional(),
      cashSettlementBusinessDays: z.number().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      paymentDelay: z.boolean().optional(),
      valueDate: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementSettlementDate = z.infer<
  typeof CdmProductCommonSettlementSettlementDateSchema
>;
