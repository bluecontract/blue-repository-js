import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetIdTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonAssetIdentifierSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetIdentifier'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      identifier: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      identifierType: zod.lazy(
        () => CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema
      ),
      name: zod.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonAssetIdentifier = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetIdentifierSchema
>;
