import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathQuantityChangeDirectionEnumSchema } from './CdmBaseMathQuantityChangeDirectionEnum';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';

const zod = z as any;

export const CdmEventCommonQuantityChangeInstructionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/QuantityChangeInstruction']
  )(
    zod.object({
      change: zod
        .array(zod.lazy(() => CdmObservableAssetPriceQuantitySchema))
        .min(1)
        .optional(),
      description: zod.string().optional(),
      direction: zod.lazy(() => CdmBaseMathQuantityChangeDirectionEnumSchema),
      lotIdentifier: zod
        .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
        .min(0)
        .optional(),
      name: zod.string().optional(),
    })
  );

export type CdmEventCommonQuantityChangeInstruction = z.infer<
  typeof CdmEventCommonQuantityChangeInstructionSchema
>;
