import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantityChangeDirectionEnumSchema } from './CdmBaseMathQuantityChangeDirectionEnum';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';

export const CdmEventCommonQuantityChangeInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/QuantityChangeInstruction']
  )(
    z.object({
      change: z
        .array(z.lazy(() => CdmObservableAssetPriceQuantitySchema))
        .min(1)
        .optional(),
      description: z.string().optional(),
      direction: z.lazy(() => CdmBaseMathQuantityChangeDirectionEnumSchema),
      lotIdentifier: z
        .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
      name: z.string().optional(),
    })
  );

export type CdmEventCommonQuantityChangeInstruction = z.infer<
  typeof CdmEventCommonQuantityChangeInstructionSchema
>;
