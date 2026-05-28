import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';

export const CdmObservableAssetFxSpotRateSourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxSpotRateSource']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      primarySource: z.lazy(() => CdmObservableAssetInformationSourceSchema),
      secondarySource: z
        .lazy(() => CdmObservableAssetInformationSourceSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFxSpotRateSource = z.infer<
  typeof CdmObservableAssetFxSpotRateSourceSchema
>;
