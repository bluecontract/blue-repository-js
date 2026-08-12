import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';

const zod = z as any;

export const CdmProductAssetPriceReturnTermsSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/PriceReturnTerms']
)(
  zod.object({
    conversionFactor: zod.number().optional(),
    name: zod.string().optional(),
    performance: zod.string().optional(),
    returnType: zod.lazy(() => CdmProductAssetReturnTypeEnumSchema),
  })
);

export type CdmProductAssetPriceReturnTerms = z.infer<
  typeof CdmProductAssetPriceReturnTermsSchema
>;
