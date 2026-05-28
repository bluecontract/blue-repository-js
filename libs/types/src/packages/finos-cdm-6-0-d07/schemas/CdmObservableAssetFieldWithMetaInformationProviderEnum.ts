import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInformationProviderEnumSchema } from './CdmObservableAssetInformationProviderEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaInformationProviderEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaInformationProviderEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmObservableAssetInformationProviderEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaInformationProviderEnum = z.infer<
  typeof CdmObservableAssetFieldWithMetaInformationProviderEnumSchema
>;
