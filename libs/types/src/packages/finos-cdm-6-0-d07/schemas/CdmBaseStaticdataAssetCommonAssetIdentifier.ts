import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonAssetIdTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonAssetIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/AssetIdentifier'
    ]
  )(
    z.object({
      description: z.string().optional(),
      identifier: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      identifierType: z.lazy(
        () => CdmBaseStaticdataAssetCommonAssetIdTypeEnumSchema
      ),
      name: z.string().optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonAssetIdentifier = z.infer<
  typeof CdmBaseStaticdataAssetCommonAssetIdentifierSchema
>;
