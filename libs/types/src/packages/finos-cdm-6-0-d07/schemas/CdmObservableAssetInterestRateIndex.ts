import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFloatingRateIndexSchema } from './CdmObservableAssetFloatingRateIndex';
import { CdmObservableAssetInflationIndexSchema } from './CdmObservableAssetInflationIndex';

const zod = z as any;

export const CdmObservableAssetInterestRateIndexSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InterestRateIndex']
)(
  zod.object({
    description: zod.string().optional(),
    FloatingRateIndex: zod
      .lazy(() => CdmObservableAssetFloatingRateIndexSchema)
      .optional(),
    InflationIndex: zod
      .lazy(() => CdmObservableAssetInflationIndexSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetInterestRateIndex = z.infer<
  typeof CdmObservableAssetInterestRateIndexSchema
>;
