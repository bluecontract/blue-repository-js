import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmObservableAssetMultipleValuationDatesSchema } from './CdmObservableAssetMultipleValuationDates';
import { CdmObservableAssetSingleValuationDateSchema } from './CdmObservableAssetSingleValuationDate';
import { CdmProductCommonSettlementFxFixingDateSchema } from './CdmProductCommonSettlementFxFixingDate';

export const CdmProductCommonSettlementValuationDateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/ValuationDate']
  )(
    z.object({
      description: z.string().optional(),
      fxFixingDate: z
        .lazy(() => CdmProductCommonSettlementFxFixingDateSchema)
        .optional(),
      fxFixingSchedule: z
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      multipleValuationDates: z
        .lazy(() => CdmObservableAssetMultipleValuationDatesSchema)
        .optional(),
      name: z.string().optional(),
      singleValuationDate: z
        .lazy(() => CdmObservableAssetSingleValuationDateSchema)
        .optional(),
      valuationDate: z
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementValuationDate = z.infer<
  typeof CdmProductCommonSettlementValuationDateSchema
>;
