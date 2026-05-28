import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema } from './CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum';
import { CdmObservableAssetInterestRateCurveSchema } from './CdmObservableAssetInterestRateCurve';

export const CdmObservableAssetCurveSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Curve']
)(
  z.object({
    commodityCurve: z
      .lazy(
        () => CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema
      )
      .optional(),
    interestRateCurve: z
      .lazy(() => CdmObservableAssetInterestRateCurveSchema)
      .optional(),
    name: z.string().optional(),
  })
);

export type CdmObservableAssetCurve = z.infer<
  typeof CdmObservableAssetCurveSchema
>;
