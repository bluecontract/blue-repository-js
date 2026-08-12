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

const zod = z as any;

export const CdmObservableAssetPriceSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/Price']
)(
  zod.object({
    arithmeticOperator: zod
      .lazy(() => CdmBaseMathArithmeticOperationEnumSchema)
      .optional(),
    cashPrice: zod.lazy(() => CdmObservableAssetCashPriceSchema).optional(),
    composite: zod
      .lazy(() => CdmObservableAssetPriceCompositeSchema)
      .optional(),
    datedValue: zod
      .array(zod.lazy(() => CdmBaseMathDatedValueSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    perUnitOf: zod.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    priceExpression: zod
      .lazy(() => CdmObservableAssetPriceExpressionEnumSchema)
      .optional(),
    priceType: zod.lazy(() => CdmObservableAssetPriceTypeEnumSchema).optional(),
    unit: zod.lazy(() => CdmBaseMathUnitTypeSchema).optional(),
    val: zod.number().optional(),
  })
);

export type CdmObservableAssetPrice = z.infer<
  typeof CdmObservableAssetPriceSchema
>;
