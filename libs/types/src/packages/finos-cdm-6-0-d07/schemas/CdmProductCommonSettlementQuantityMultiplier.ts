import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleFxLinkedNotionalScheduleSchema } from './CdmProductCommonScheduleFxLinkedNotionalSchedule';

const zod = z as any;

export const CdmProductCommonSettlementQuantityMultiplierSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/settlement/QuantityMultiplier'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      fxLinkedNotionalSchedule: zod
        .lazy(() => CdmProductCommonScheduleFxLinkedNotionalScheduleSchema)
        .optional(),
      multiplierValue: zod.number().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonSettlementQuantityMultiplier = z.infer<
  typeof CdmProductCommonSettlementQuantityMultiplierSchema
>;
