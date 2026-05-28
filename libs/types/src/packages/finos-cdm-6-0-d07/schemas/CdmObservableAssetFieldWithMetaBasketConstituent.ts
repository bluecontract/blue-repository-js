import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetBasketConstituentSchema } from './CdmObservableAssetBasketConstituent';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaBasketConstituentSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaBasketConstituent'
    ]
  )(
    z.object({
      meta: z
        .lazy((): z.ZodTypeAny => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: z.string().optional(),
      val: z
        .lazy((): z.ZodTypeAny => CdmObservableAssetBasketConstituentSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaBasketConstituent = z.infer<
  typeof CdmObservableAssetFieldWithMetaBasketConstituentSchema
>;
