import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleFxLinkedNotionalAmountSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/FxLinkedNotionalAmount'
    ]
  )(
    zod.object({
      adjustedFxSpotFixingDate: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      notionalAmount: zod.number().optional(),
      observedFxSpotRate: zod.number().optional(),
      resetDate: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleFxLinkedNotionalAmount = z.infer<
  typeof CdmProductCommonScheduleFxLinkedNotionalAmountSchema
>;
