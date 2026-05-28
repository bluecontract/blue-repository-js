import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetReturnTypeEnumSchema } from './CdmProductAssetReturnTypeEnum';

export const CdmProductAssetPriceReturnTermsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/PriceReturnTerms']
  )(
    z.object({
      conversionFactor: z.number().optional(),
      name: z.string().optional(),
      performance: z.string().optional(),
      returnType: z.lazy(() => CdmProductAssetReturnTypeEnumSchema),
    })
  );

export type CdmProductAssetPriceReturnTerms = z.infer<
  typeof CdmProductAssetPriceReturnTermsSchema
>;
