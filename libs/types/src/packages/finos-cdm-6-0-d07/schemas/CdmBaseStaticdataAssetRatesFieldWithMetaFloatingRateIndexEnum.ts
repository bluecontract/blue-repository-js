import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/rates/FieldWithMetaFloatingRateIndexEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum =
  z.infer<
    typeof CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
  >;
