import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema } from './CdmBaseStaticdataAssetCommonProductIdTypeEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonProductIdentifierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/ProductIdentifier'
    ]
  )(
    z.object({
      description: z.string().optional(),
      identifier: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      name: z.string().optional(),
      source: z.lazy(() => CdmBaseStaticdataAssetCommonProductIdTypeEnumSchema),
    })
  );

export type CdmBaseStaticdataAssetCommonProductIdentifier = z.infer<
  typeof CdmBaseStaticdataAssetCommonProductIdentifierSchema
>;
