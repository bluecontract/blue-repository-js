import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetFieldWithMetaInformationProviderEnumSchema } from './CdmObservableAssetFieldWithMetaInformationProviderEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmObservableAssetInformationSourceSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/InformationSource']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      sourcePage: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      sourcePageHeading: z.string().optional(),
      sourceProvider: z.lazy(
        () => CdmObservableAssetFieldWithMetaInformationProviderEnumSchema
      ),
    })
  );

export type CdmObservableAssetInformationSource = z.infer<
  typeof CdmObservableAssetInformationSourceSchema
>;
