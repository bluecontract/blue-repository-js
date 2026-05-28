import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathArithmeticOperationEnumSchema } from './CdmBaseMathArithmeticOperationEnum';
import { CdmObservableAssetPriceOperandEnumSchema } from './CdmObservableAssetPriceOperandEnum';

export const CdmObservableAssetPriceCompositeSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/asset/PriceComposite']
  )(
    z.object({
      arithmeticOperator: z.lazy(
        () => CdmBaseMathArithmeticOperationEnumSchema
      ),
      baseValue: z.number(),
      description: z.string().optional(),
      name: z.string().optional(),
      operand: z.number(),
      operandType: z
        .lazy(() => CdmObservableAssetPriceOperandEnumSchema)
        .optional(),
    })
  );

export type CdmObservableAssetPriceComposite = z.infer<
  typeof CdmObservableAssetPriceCompositeSchema
>;
