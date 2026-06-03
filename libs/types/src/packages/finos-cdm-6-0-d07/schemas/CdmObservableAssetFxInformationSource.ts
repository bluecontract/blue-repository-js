import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessCenterTimeSchema } from './CdmBaseDatetimeBusinessCenterTime';
import { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetFxInformationSourceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/FxInformationSource']
)(
  zod.object({
    description: zod.string().optional(),
    fixingTime: zod
      .lazy(() => CdmBaseDatetimeBusinessCenterTimeSchema)
      .optional(),
    name: zod.string().optional(),
    sourcePage: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    sourcePageHeading: zod.string().optional(),
    sourceProvider: zod
      .lazy(() => CdmObservableAssetFieldWithMetaInformationProviderEnumSchema)
      .optional(),
  })
);

export type CdmObservableAssetFxInformationSource = z.infer<
  typeof CdmObservableAssetFxInformationSourceSchema
>;
