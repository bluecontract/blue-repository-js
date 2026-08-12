import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInformationSourceSchema } from './CdmObservableAssetInformationSource';

const zod = z as any;

export const CdmObservableAssetFxSpotRateSourceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxSpotRateSource']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    primarySource: zod.lazy(() => CdmObservableAssetInformationSourceSchema),
    secondarySource: zod
      .lazy(() => CdmObservableAssetInformationSourceSchema)
      .optional(),
  })
);

export type CdmObservableAssetFxSpotRateSource = z.infer<
  typeof CdmObservableAssetFxSpotRateSourceSchema
>;
