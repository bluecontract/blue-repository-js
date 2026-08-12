import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesInflationRateIndexEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/rates/FieldWithMetaInflationRateIndexEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum =
  z.infer<
    typeof CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema
  >;
