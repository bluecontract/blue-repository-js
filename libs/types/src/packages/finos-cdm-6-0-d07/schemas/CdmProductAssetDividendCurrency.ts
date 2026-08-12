import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableCommonDeterminationMethodEnumSchema } from './CdmObservableCommonDeterminationMethodEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';
import { ComRosettaModelMetafieldsReferenceWithMetaStringSchema } from './ComRosettaModelMetafieldsReferenceWithMetaString';

const zod = z as any;

export const CdmProductAssetDividendCurrencySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendCurrency']
)(
  zod.object({
    currency: zod
      .lazy(() => ComRosettaModelFieldWithMetaStringSchema)
      .optional(),
    currencyReference: zod
      .lazy(() => ComRosettaModelMetafieldsReferenceWithMetaStringSchema)
      .optional(),
    description: zod.string().optional(),
    determinationMethod: zod
      .lazy(() => CdmObservableCommonDeterminationMethodEnumSchema)
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetDividendCurrency = z.infer<
  typeof CdmProductAssetDividendCurrencySchema
>;
