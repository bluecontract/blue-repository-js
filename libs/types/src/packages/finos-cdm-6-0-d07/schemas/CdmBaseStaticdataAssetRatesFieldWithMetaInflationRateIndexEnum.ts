import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesInflationRateIndexEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/rates/FieldWithMetaInflationRateIndexEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseStaticdataAssetRatesInflationRateIndexEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnum =
  z.infer<
    typeof CdmBaseStaticdataAssetRatesFieldWithMetaInflationRateIndexEnumSchema
  >;
