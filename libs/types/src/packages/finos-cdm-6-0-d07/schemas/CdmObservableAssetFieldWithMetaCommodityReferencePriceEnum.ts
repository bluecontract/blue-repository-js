import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCommodityReferencePriceEnumSchema } from './CdmObservableAssetCommodityReferencePriceEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/observable/asset/FieldWithMetaCommodityReferencePriceEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmObservableAssetCommodityReferencePriceEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetFieldWithMetaCommodityReferencePriceEnum =
  z.infer<
    typeof CdmObservableAssetFieldWithMetaCommodityReferencePriceEnumSchema
  >;
