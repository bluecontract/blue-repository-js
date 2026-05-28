import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/template/MandatoryEarlyTerminationAdjustedDates'
    ]
  )(
    z.object({
      adjustedCashSettlementPaymentDate: z.string(),
      adjustedCashSettlementValuationDate: z.string(),
      adjustedEarlyTerminationDate: z.string(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductTemplateMandatoryEarlyTerminationAdjustedDates = z.infer<
  typeof CdmProductTemplateMandatoryEarlyTerminationAdjustedDatesSchema
>;
