import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema } from './CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum';
import { CdmObservableAssetInterestRateCurveSchema } from './CdmObservableAssetInterestRateCurve';

const zod = z as any;

export const CdmObservableAssetCurveSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Curve']
)(
  zod.object({
    commodityCurve: zod
      .lazy(
        () => CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema
      )
      .optional(),
    interestRateCurve: zod
      .lazy(() => CdmObservableAssetInterestRateCurveSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmObservableAssetCurve = z.infer<
  typeof CdmObservableAssetCurveSchema
>;
