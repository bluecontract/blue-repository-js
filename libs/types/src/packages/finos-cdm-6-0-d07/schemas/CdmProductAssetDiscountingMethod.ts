import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
import { CdmProductAssetDiscountingTypeEnumSchema } from './CdmProductAssetDiscountingTypeEnum';

export const CdmProductAssetDiscountingMethodSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DiscountingMethod']
  )(
    z.object({
      description: z.string().optional(),
      discountingType: z.lazy(() => CdmProductAssetDiscountingTypeEnumSchema),
      discountRate: z.number().optional(),
      discountRateDayCountFraction: z
        .lazy(
          () => CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema
        )
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductAssetDiscountingMethod = z.infer<
  typeof CdmProductAssetDiscountingMethodSchema
>;
