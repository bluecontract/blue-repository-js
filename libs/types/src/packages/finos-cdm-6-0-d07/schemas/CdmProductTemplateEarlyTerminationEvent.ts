import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductTemplateEarlyTerminationEventSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EarlyTerminationEvent']
  )(
    zod.object({
      adjustedCashSettlementPaymentDate: zod.string(),
      adjustedCashSettlementValuationDate: zod.string(),
      adjustedEarlyTerminationDate: zod.string(),
      adjustedExerciseDate: zod.string(),
      adjustedExerciseFeePaymentDate: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductTemplateEarlyTerminationEvent = z.infer<
  typeof CdmProductTemplateEarlyTerminationEventSchema
>;
