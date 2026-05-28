import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventCommonTransferSchema } from './CdmEventCommonTransfer';
import { CdmObservableAssetPriceQuantitySchema } from './CdmObservableAssetPriceQuantity';

export const CdmEventCommonIndexTransitionInstructionSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/common/IndexTransitionInstruction']
  )(
    z.object({
      cashTransfer: z.lazy(() => CdmEventCommonTransferSchema).optional(),
      description: z.string().optional(),
      effectiveDate: z.string(),
      name: z.string().optional(),
      priceQuantity: z
        .array(z.lazy(() => CdmObservableAssetPriceQuantitySchema))
        .min(1)
        .optional(),
    })
  );

export type CdmEventCommonIndexTransitionInstruction = z.infer<
  typeof CdmEventCommonIndexTransitionInstructionSchema
>;
