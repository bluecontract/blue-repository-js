import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/FieldWithMetaAssetClassEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmBaseStaticdataAssetCommonAssetClassEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema
>;
