import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateEarlyTerminationEventSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/template/EarlyTerminationEvent']
  )(
    z.object({
      adjustedCashSettlementPaymentDate: z.string(),
      adjustedCashSettlementValuationDate: z.string(),
      adjustedEarlyTerminationDate: z.string(),
      adjustedExerciseDate: z.string(),
      adjustedExerciseFeePaymentDate: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateEarlyTerminationEvent = z.infer<
  typeof CdmProductTemplateEarlyTerminationEventSchema
>;
