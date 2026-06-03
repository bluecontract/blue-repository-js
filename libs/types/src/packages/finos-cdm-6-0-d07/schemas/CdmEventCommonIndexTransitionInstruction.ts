import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';

const zod = z as any;

export const CdmEventCommonIndexTransitionInstructionSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/IndexTransitionInstruction']
  )(
    zod.object({
      cashTransfer: zod.lazy(() => CdmEventCommonTransferSchema).optional(),
      description: zod.string().optional(),
      effectiveDate: zod.string(),
      name: zod.string().optional(),
      priceQuantity: zod
        .array(zod.lazy(() => CdmObservableAssetPriceQuantitySchema))
        .min(1)
        .optional(),
    })
  );

export type CdmEventCommonIndexTransitionInstruction = z.infer<
  typeof CdmEventCommonIndexTransitionInstructionSchema
>;
