import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema } from './CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantitySchedule';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductAssetFutureValueAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FutureValueAmount']
  )(
    z.object({
      calculationPeriodNumberOfDays: z.number(),
      currency: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      description: z.string().optional(),
      name: z.string().optional(),
      quantity: z
        .lazy(
          () =>
            CdmBaseMathMetafieldsReferenceWithMetaNonNegativeQuantityScheduleSchema
        )
        .optional(),
      valueDate: z.string(),
    })
  );

export type CdmProductAssetFutureValueAmount = z.infer<
  typeof CdmProductAssetFutureValueAmountSchema
>;
