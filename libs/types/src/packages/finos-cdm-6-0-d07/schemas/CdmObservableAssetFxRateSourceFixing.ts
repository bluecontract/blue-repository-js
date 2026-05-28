import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmObservableAssetFxSettlementRateSourceSchema } from './CdmObservableAssetFxSettlementRateSource';

export const CdmObservableAssetFxRateSourceFixingSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxRateSourceFixing']
  )(
    z.object({
      description: z.string().optional(),
      fixingDate: z.lazy(() => CdmBaseDatetimeAdjustableDateSchema),
      name: z.string().optional(),
      settlementRateSource: z.lazy(
        () => CdmObservableAssetFxSettlementRateSourceSchema
      ),
    })
  );

export type CdmObservableAssetFxRateSourceFixing = z.infer<
  typeof CdmObservableAssetFxRateSourceFixingSchema
>;
