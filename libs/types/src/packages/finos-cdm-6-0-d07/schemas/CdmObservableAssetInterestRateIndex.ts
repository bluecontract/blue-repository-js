import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFloatingRateIndexSchema } from './CdmObservableAssetFloatingRateIndex';
import { CdmObservableAssetInflationIndexSchema } from './CdmObservableAssetInflationIndex';

export const CdmObservableAssetInterestRateIndexSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InterestRateIndex']
  )(
    z.object({
      description: z.string().optional(),
      FloatingRateIndex: z
        .lazy(() => CdmObservableAssetFloatingRateIndexSchema)
        .optional(),
      InflationIndex: z
        .lazy(() => CdmObservableAssetInflationIndexSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmObservableAssetInterestRateIndex = z.infer<
  typeof CdmObservableAssetInterestRateIndexSchema
>;
