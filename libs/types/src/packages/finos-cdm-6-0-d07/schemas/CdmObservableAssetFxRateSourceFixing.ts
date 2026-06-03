import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAdjustableDateSchema } from './CdmBaseDatetimeAdjustableDate';
import { CdmObservableAssetFxSettlementRateSourceSchema } from './CdmObservableAssetFxSettlementRateSource';

const zod = z as any;

export const CdmObservableAssetFxRateSourceFixingSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxRateSourceFixing']
)(
  zod.object({
    description: zod.string().optional(),
    fixingDate: zod.lazy(() => CdmBaseDatetimeAdjustableDateSchema),
    name: zod.string().optional(),
    settlementRateSource: zod.lazy(
      () => CdmObservableAssetFxSettlementRateSourceSchema
    ),
  })
);

export type CdmObservableAssetFxRateSourceFixing = z.infer<
  typeof CdmObservableAssetFxRateSourceFixingSchema
>;
