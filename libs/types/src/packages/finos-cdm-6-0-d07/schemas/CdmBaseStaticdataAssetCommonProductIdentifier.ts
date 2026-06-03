import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonProductIdTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonProductIdentifierSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ProductIdentifier'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      identifier: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: zod.string().optional(),
      source: zod.lazy(
        () => CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema
      ),
    })
  );

export type CdmBaseStaticdataAssetCommonProductIdentifier = z.infer<
  typeof CdmBaseStaticdataAssetCommonProductIdentifierSchema
>;
