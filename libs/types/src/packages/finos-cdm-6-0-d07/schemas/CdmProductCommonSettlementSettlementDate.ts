import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema } from './CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDate';
import { CdmBaseDatetimeBusinessDateRangeSchema } from './CdmBaseDatetimeBusinessDateRange';

const zod = z as any;

export const CdmProductCommonSettlementSettlementDateSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/SettlementDate']
  )(
    zod.object({
      adjustableDates: zod
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      adjustableOrRelativeDate: zod
        .lazy(() => CdmBaseDatetimeAdjustableOrAdjustedOrRelativeDateSchema)
        .optional(),
      businessDateRange: zod
        .lazy(() => CdmBaseDatetimeBusinessDateRangeSchema)
        .optional(),
      cashSettlementBusinessDays: zod.number().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      paymentDelay: zod.boolean().optional(),
      valueDate: zod.string().optional(),
    })
  );

export type CdmProductCommonSettlementSettlementDate = z.infer<
  typeof CdmProductCommonSettlementSettlementDateSchema
>;
