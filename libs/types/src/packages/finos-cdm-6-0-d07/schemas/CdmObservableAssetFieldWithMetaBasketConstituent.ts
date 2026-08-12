import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetBasketConstituentSchema } from './CdmObservableAssetBasketConstituent';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaBasketConstituentSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaBasketConstituent'
    ]
  )(
    zod.object({
      meta: zod
        .lazy((): z.ZodTypeAny => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy((): z.ZodTypeAny => CdmObservableAssetBasketConstituentSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaBasketConstituent = z.infer<
  typeof CdmObservableAssetFieldWithMetaBasketConstituentSchema
>;
