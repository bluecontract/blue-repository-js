import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmProductAssetFutureValueAmountSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FutureValueAmount']
)(
  zod.object({
    calculationPeriodNumberOfDays: zod.number(),
    currency: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
    description: zod.string().optional(),
    name: zod.string().optional(),
    quantity: zod
      .lazy(
        () =>
          CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
      )
      .optional(),
    valueDate: zod.string(),
  })
);

export type CdmProductAssetFutureValueAmount = z.infer<
  typeof CdmProductAssetFutureValueAmountSchema
>;
