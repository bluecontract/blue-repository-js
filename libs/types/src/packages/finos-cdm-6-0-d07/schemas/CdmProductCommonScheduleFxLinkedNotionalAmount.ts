import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleFxLinkedNotionalAmountSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/FxLinkedNotionalAmount'
    ]
  )(
    z.object({
      adjustedFxSpotFixingDate: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      notionalAmount: z.number().optional(),
      observedFxSpotRate: z.number().optional(),
      resetDate: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleFxLinkedNotionalAmount = z.infer<
  typeof CdmProductCommonScheduleFxLinkedNotionalAmountSchema
>;
