import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
import { CdmBaseMathDatedValueSchema } from './CdmBaseMathDatedValue';
import { CdmBaseMathUnitTypeSchema } from './CdmBaseMathUnitType';
import { CdmObservableAssetCashPriceSchema } from './CdmObservableAssetCashPrice';
import { CdmObservableAssetPriceCompositeSchema } from './CdmObservableAssetPriceComposite';
import { CdmObservableAssetPriceExpressionEnumSchema } from './CdmObservableAssetPriceExpressionEnum';
import { CdmObservableAssetPriceTypeEnumSchema } from './CdmObservableAssetPriceTypeEnum';

export const CdmObservableAssetPriceScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceSchedule']
  )(
    z.object({
      arithmeticOperator: z
        .lazy(() => CdmBaseMathArithmeticOperationEnumSchema)
        .optional(),
      cashPrice: z.lazy(() => CdmObservableAssetCashPriceSchema).optional(),
      composite: z
        .lazy(() => CdmObservableAssetPriceCompositeSchema)
        .optional(),
      datedValue: z
        .array(z.lazy(() => CdmBaseMathDatedValueSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      perUnitOf: z.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
      priceExpression: z
        .lazy(() => CdmObservableAssetPriceExpressionEnumSchema)
        .optional(),
      priceType: z.lazy(() => CdmObservableAssetPriceTypeEnumSchema),
      unit: z.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
      val: z.number().optional(),
    })
  );

export type CdmObservableAssetPriceSchedule = z.infer<
  typeof CdmObservableAssetPriceScheduleSchema
>;
