import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDatesSchema } from './CdmBaseDatetimeAdjustableDates';
import { CdmBaseDatetimeRelativeDateOffsetSchema } from './CdmBaseDatetimeRelativeDateOffset';
import { CdmObservableAssetMultipleValuationDatesSchema } from './CdmObservableAssetMultipleValuationDates';
import { CdmObservableAssetSingleValuationDateSchema } from './CdmObservableAssetSingleValuationDate';
import { CdmProductCommonSettlementFxFixingDateSchema } from './CdmProductCommonSettlementFxFixingDate';

const zod = z as any;

export const CdmProductCommonSettlementValuationDateSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/settlement/ValuationDate']
  )(
    zod.object({
      description: zod.string().optional(),
      fxFixingDate: zod
        .lazy(() => CdmProductCommonSettlementFxFixingDateSchema)
        .optional(),
      fxFixingSchedule: zod
        .lazy(() => CdmBaseDatetimeAdjustableDatesSchema)
        .optional(),
      multipleValuationDates: zod
        .lazy(() => CdmObservableAssetMultipleValuationDatesSchema)
        .optional(),
      name: zod.string().optional(),
      singleValuationDate: zod
        .lazy(() => CdmObservableAssetSingleValuationDateSchema)
        .optional(),
      valuationDate: zod
        .lazy(() => CdmBaseDatetimeRelativeDateOffsetSchema)
        .optional(),
    })
  );

export type CdmProductCommonSettlementValuationDate = z.infer<
  typeof CdmProductCommonSettlementValuationDateSchema
>;
