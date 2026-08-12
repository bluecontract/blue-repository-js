import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmObservableAssetInformationSourceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InformationSource']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    sourcePage: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    sourcePageHeading: zod.string().optional(),
    sourceProvider: zod.lazy(
      () => CdmObservableAssetFieldWithMetaInformationProviderEnumSchema
    ),
  })
);

export type CdmObservableAssetInformationSource = z.infer<
  typeof CdmObservableAssetInformationSourceSchema
>;
