import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/rates/FieldWithMetaFloatingRateIndexEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnum =
  z.infer<
    typeof CdmBaseStaticdataAssetRatesFieldWithMetaFloatingRateIndexEnumSchema
  >;
