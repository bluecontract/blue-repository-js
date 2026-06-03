import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetInformationProviderEnumSchema } from './CdmObservableAssetInformationProviderEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaInformationProviderEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaInformationProviderEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmObservableAssetInformationProviderEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaInformationProviderEnum = z.infer<
  typeof CdmObservableAssetFieldWithMetaInformationProviderEnumSchema
>;
