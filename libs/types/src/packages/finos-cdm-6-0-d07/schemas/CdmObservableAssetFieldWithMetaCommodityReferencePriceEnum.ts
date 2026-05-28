import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCommodityReferencePriceEnumSchema } from './CdmObservableAssetCommodityReferencePriceEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaCommodityReferencePriceEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmObservableAssetCommodityReferencePriceEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum =
  z.infer<
    typeof CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema
  >;
