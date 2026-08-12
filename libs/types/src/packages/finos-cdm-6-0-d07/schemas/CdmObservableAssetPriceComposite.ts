import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
import { CdmObservableAssetPriceOperandEnumSchema } from './CdmObservableAssetPriceOperandEnum';

const zod = z as any;

export const CdmObservableAssetPriceCompositeSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceComposite']
)(
  zod.object({
    arithmeticOperator: zod.lazy(
      () => CdmBaseMathArithmeticOperationEnumSchema
    ),
    baseValue: zod.number(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    operand: zod.number(),
    operandType: zod
      .lazy(() => CdmObservableAssetPriceOperandEnumSchema)
      .optional(),
  })
);

export type CdmObservableAssetPriceComposite = z.infer<
  typeof CdmObservableAssetPriceCompositeSchema
>;
