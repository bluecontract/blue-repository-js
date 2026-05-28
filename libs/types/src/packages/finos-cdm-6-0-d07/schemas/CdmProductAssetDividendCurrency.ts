import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';
import { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

export const CdmProductAssetDividendCurrencySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendCurrency']
  )(
    z.object({
      currency: z
        .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
        .optional(),
      currencyReference: z
        .lazy(() => ComRosettaModelMetafieldsReferenceWithMetaStringSchema)
        .optional(),
      description: z.string().optional(),
      determinationMethod: z
        .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductAssetDividendCurrency = z.infer<
  typeof CdmProductAssetDividendCurrencySchema
>;
