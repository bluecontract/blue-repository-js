import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema } from './CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnum';
import { CdmProductAssetDiscountingTypeEnumSchema } from './CdmProductAssetDiscountingTypeEnum';

const zod = z as any;

export const CdmProductAssetDiscountingMethodSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DiscountingMethod']
)(
  zod.object({
    description: zod.string().optional(),
    discountingType: zod.lazy(() => CdmProductAssetDiscountingTypeEnumSchema),
    discountRate: zod.number().optional(),
    discountRateDayCountFraction: zod
      .lazy(
        () => CdmBaseDatetimeDaycountFieldWithMetaDayCountFractionEnumSchema
      )
      .optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductAssetDiscountingMethod = z.infer<
  typeof CdmProductAssetDiscountingMethodSchema
>;
