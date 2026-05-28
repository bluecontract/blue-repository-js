import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleFxLinkedNotionalScheduleSchema } from './CdmProductCommonScheduleFxLinkedNotionalSchedule';

export const CdmProductCommonSettlementQuantityMultiplierSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/QuantityMultiplier'
    ]
  )(
    z.object({
      description: z.string().optional(),
      fxLinkedNotionalSchedule: z
        .lazy(() => CdmProductCommonScheduleFxLinkedNotionalScheduleSchema)
        .optional(),
      multiplierValue: z.number().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonSettlementQuantityMultiplier = z.infer<
  typeof CdmProductCommonSettlementQuantityMultiplierSchema
>;
