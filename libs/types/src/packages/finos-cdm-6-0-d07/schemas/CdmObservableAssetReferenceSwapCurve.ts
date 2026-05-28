import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMakeWholeAmountSchema } from './CdmObservableAssetMakeWholeAmount';
import { CdmObservableAssetSwapCurveValuationSchema } from './CdmObservableAssetSwapCurveValuation';

export const CdmObservableAssetReferenceSwapCurveSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/ReferenceSwapCurve']
  )(
    z.object({
      description: z.string().optional(),
      makeWholeAmount: z
        .lazy(() => CdmObservableAssetMakeWholeAmountSchema)
        .optional(),
      name: z.string().optional(),
      swapUnwindValue: z.lazy(() => CdmObservableAssetSwapCurveValuationSchema),
    })
  );

export type CdmObservableAssetReferenceSwapCurve = z.infer<
  typeof CdmObservableAssetReferenceSwapCurveSchema
>;
