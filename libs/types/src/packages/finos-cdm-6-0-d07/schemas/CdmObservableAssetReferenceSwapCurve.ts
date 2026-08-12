import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMakeWholeAmountSchema } from './CdmObservableAssetMakeWholeAmount';
import { CdmObservableAssetSwapCurveValuationSchema } from './CdmObservableAssetSwapCurveValuation';

const zod = z as any;

export const CdmObservableAssetReferenceSwapCurveSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ReferenceSwapCurve']
)(
  zod.object({
    description: zod.string().optional(),
    makeWholeAmount: zod
      .lazy(() => CdmObservableAssetMakeWholeAmountSchema)
      .optional(),
    name: zod.string().optional(),
    swapUnwindValue: zod.lazy(() => CdmObservableAssetSwapCurveValuationSchema),
  })
);

export type CdmObservableAssetReferenceSwapCurve = z.infer<
  typeof CdmObservableAssetReferenceSwapCurveSchema
>;
